import { useContext } from 'react';
import { useApi, useNotifDataFetch, useToast } from 'hooks';
import { SignupUserDTO } from 'api/auth/auth.d';
import { useGoToRoute } from 'hooks/useGoToRoute';
import { AuthContext } from 'contexts/AuthContext';

type useRegistrationFormT = {
  createUser: (user: SignupUserDTO) => void;
  isLoading: boolean;
};

const useRegistrationForm = (): useRegistrationFormT => {
  const { createUserApi } = useApi();
  const { errorToast } = useToast();
  const { goToHomePage } = useGoToRoute();
  const { setLoginCtx } = useContext(AuthContext);

  const [userRes, createUser] = useNotifDataFetch({
    fetchHandler: async (user: SignupUserDTO) => {
      try {
        const res = await createUserApi(user);

        setLoginCtx(res.data.user.token);
        goToHomePage();
        return res;
      } catch (err) {
        // TODO pass array for showing all error messages
        errorToast(err.message);
        return err.response;
      }
    },
    isLazy: true,
    isErrorToastDisabled: true,
  });

  return {
    createUser,
    isLoading: userRes.isLoading,
  };
};

export default useRegistrationForm;
