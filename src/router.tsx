import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  Login,
  Registration,
  Home,
  NotFound,
  ServerError,
  Article,
  Profile,
} from 'pages';

type RoutesT = {
  path: string;
  isExact?: boolean;
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
};

const routes: RoutesT[] = [
  {
    isExact: true,
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Registration,
  },
  {
    path: '/articles/:slug',
    component: Article,
  },
  {
    path: '/profiles/:username',
    component: Profile,
  },
  {
    path: '/not-found',
    component: NotFound,
  },
  {
    path: '/server-error',
    component: ServerError,
  },
];

export default routes;
