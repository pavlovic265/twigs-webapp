import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

import storage from "utils/storage";
import { goToLogin } from "utils/routes";

interface PrivateRouteProps extends RouteProps {
  children: React.ReactNode;
}

export function PrivateRoute({ children, ...props }: PrivateRouteProps) {
  const code = storage.getItem("code");

  if (!code) {
    return <Redirect to={goToLogin()} />;
  }

  return <Route {...props}>{children}</Route>;
}
