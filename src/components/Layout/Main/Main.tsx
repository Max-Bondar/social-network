import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../../router';
import { MainStyled } from './Main.styled';

const Main: React.FC = () => {
  return (
    <MainStyled>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.isExact}
            component={route.component}
          />
        ))}
      </Switch>
    </MainStyled>
  );
};

export default Main;
