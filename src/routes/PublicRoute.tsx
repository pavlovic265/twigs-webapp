import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

import storage from "utils/storage";
import { goToDashboard } from "utils/routes";

interface PublicRouteProps extends RouteProps {
  children: React.ReactNode;
}

export function PublicRoute({ children, ...props }: PublicRouteProps) {
  const code = storage.getItem("code");

  if (code) {
    return <Redirect to={goToDashboard()} />;
  }

  return <Route {...props}>{children}</Route>;
}
