import PublicLayout from '../containers/layouts/Public';
import PrivateLayout from '../containers/layouts/Private';
import routes from './routes';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React from 'react';

function Routes() {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component, type, to }, i) => (
          <Route
            key={i}
            path={path}
            exact
            render={() => {
              if (type === "private") {
                return (
                  <PrivateLayout component={component} />
                );
              } else if (type === "public") {
                return (
                  <PublicLayout component={component} />
                );
              } else {
                return (
                  <Redirect
                    to={{
                      pathname: to
                    }}
                  />
                )
              }
            }}
          />
        ))}
      </Switch>
    </Router>
  )

}

export default Routes;