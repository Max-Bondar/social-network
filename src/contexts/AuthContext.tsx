import React, { useState, useEffect } from 'react';
import { useApi } from 'hooks/useApi';
import { useDataFetch } from 'hooks/useDataFetch';
import { UserI } from 'libs/declarations-ts';

type AuthPropsT = {
  children: React.ReactNode;
};

type AuthStateT = {
  isLoggedIn: boolean;
  accessToken: string | null;
  user: UserI;
};

type AuthContextT = AuthStateT & {
  setLoginCtx: (accessToken: string) => void;
  setLogoutCtx: () => void;
};

const defaultUser = {
  bio: '',
  createdAt: '',
  email: '',
  id: 0,
  image: '',
  token: '',
  updatedAt: '',
  username: '',
};

const loggedOutCtx = {
  isLoggedIn: false,
  accessToken: null,
  user: defaultUser,
};

let initialCtx: AuthStateT = loggedOutCtx;
const TOKEN = 'token';

try {
  const accessToken = localStorage.getItem(TOKEN);

  initialCtx = { ...loggedOutCtx, accessToken, isLoggedIn: false };
} catch (e) {
  initialCtx = loggedOutCtx;
}

export const AuthContext = React.createContext<AuthContextT>({
  ...initialCtx,
  setLoginCtx(_: string) {},
  setLogoutCtx() {},
});

const AuthProvider: React.FC<AuthPropsT> = ({ children }) => {
  const { getUserApi } = useApi();
  const [authContext, setAuthData] = useState(initialCtx);

  const setLoginCtx = (accessToken: string) => {
    localStorage.setItem(TOKEN, accessToken);

    const authData = {
      ...authContext,
      accessToken,
      isLoggedIn: true,
    };

    setAuthData(authData);
  };

  const setLogoutCtx = () => {
    localStorage.removeItem(TOKEN);

    const authData = {
      ...authContext,
      user: defaultUser,
      accessToken: null,
      isLoggedIn: false,
    };

    setAuthData(authData);
  };

  const [, fetchUser] = useDataFetch({
    fetchHandler: async () => {
      try {
        const res = await getUserApi();

        setAuthData({
          user: res.data.user,
          accessToken: res.data.user.token,
          isLoggedIn: true,
        });

        return res;
      } catch (err) {
        setLogoutCtx();

        return { data: {} };
      }
    },
    isLazy: true,
  });

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ ...authContext, setLoginCtx, setLogoutCtx }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
