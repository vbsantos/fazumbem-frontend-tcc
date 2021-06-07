import React from "react";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export default function Router() {
  const isAuthenticated = false;

  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
}
