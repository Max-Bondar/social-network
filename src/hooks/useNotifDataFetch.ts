import React from 'react';
import { HttpStatusE } from 'libs/declarations-ts';
import { useDataFetch, useToast, useGoToRoute } from 'hooks';

type NotifDataFetchT = {
  fetchHandler: (arg?: any) => Promise<any>;
  initialData?: object;
  isLazy?: boolean;
  isFullError?: boolean;
  isLoadingInitial?: boolean;
  notifSuccessMessage?: string | React.ReactNode;
  notifErrorMessage?: string | React.ReactNode;
  isErrorToastDisabled?: boolean;
  checkUnauthorized?: boolean;
};

export const useNotifDataFetch = ({
  fetchHandler,
  initialData = {},
  isLazy = false,
  isFullError = false,
  isLoadingInitial = false,
  notifSuccessMessage,
  notifErrorMessage,
  isErrorToastDisabled,
  checkUnauthorized = false,
}: NotifDataFetchT) => {
  const { successToast, errorToast } = useToast();
  const { goToNotFound, goToServerError, goToLogin } = useGoToRoute();

  const fetchHandlerWithErrors = async (opts: any) => {
    try {
      const result = await fetchHandler(opts);

      if (
        notifSuccessMessage &&
        (result.status >= HttpStatusE.OK ||
          result.status < HttpStatusE.AMBIGUOUS)
      ) {
        successToast(notifSuccessMessage);
      }

      return result;
    } catch (error) {
      const { status: statusCode } = error.response
        ? error.response
        : { status: null };

      if (
        statusCode !== HttpStatusE.UNAUTHORIZED &&
        statusCode !== HttpStatusE.NOT_FOUND &&
        !isErrorToastDisabled
      ) {
        errorToast(notifErrorMessage || error.message);
      }

      if (statusCode === HttpStatusE.UNAUTHORIZED && !isErrorToastDisabled) {
        errorToast(notifErrorMessage || error.message, { autoDismiss: true });
      }

      if (statusCode === HttpStatusE.NOT_FOUND) {
        goToNotFound();
      }

      if (statusCode >= HttpStatusE.INTERNAL_SERVER_ERROR) {
        goToServerError();
      }

      if (checkUnauthorized && statusCode === HttpStatusE.UNAUTHORIZED) {
        goToLogin();
      }

      throw isFullError ? error : error.response.data;
    }
  };

  return useDataFetch({
    initialData,
    isLazy,
    isLoadingInitial,
    fetchHandler: fetchHandlerWithErrors,
  });
};
