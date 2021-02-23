import { useContext } from 'react';
import { useApi, useNotifDataFetch, useToast } from 'hooks';
import { LoginUserDTO } from 'api/auth/auth.d';
import { useGoToRoute } from 'hooks/useGoToRoute';
import { AuthContext } from 'contexts/AuthContext';

type useLoginFormT = {
  loginUser: (user: LoginUserDTO) => void;
  isLoading: boolean;
};

const useLoginForm = (): useLoginFormT => {
  const { loginUserApi } = useApi();
  const { errorToast } = useToast();
  const { goToHomePage } = useGoToRoute();
  const { setLoginCtx } = useContext(AuthContext);

  const [loginRes, loginUser] = useNotifDataFetch({
    fetchHandler: async (user: LoginUserDTO) => {
      try {
        const res = await loginUserApi(user);

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
    loginUser,
    isLoading: loginRes.isLoading,
  };
};

export default useLoginForm;
