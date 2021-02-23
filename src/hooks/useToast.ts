import { useToasts, Options } from 'react-toast-notifications';

type ShowToastT = (
  content: React.ReactNode | string[],
  options?: Partial<Options>,
  cb?: (id: string) => void
) => void;

export const useToast = () => {
  const { addToast } = useToasts();

  const successToast: ShowToastT = (content, options = {}, cb) => {
    addToast(
      content,
      {
        appearance: 'success',
        autoDismiss: true,
        ...options,
      },
      cb
    );
  };

  const errorToast: ShowToastT = (content, options = {}, cb) => {
    addToast(
      content,
      {
        appearance: 'error',
        ...options,
      },
      cb
    );
  };

  return { successToast, errorToast };
};
