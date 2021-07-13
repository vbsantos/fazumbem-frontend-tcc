import React from "react";
import Home from "../views/Public/Home";
import Login from "../views/Public/Login";
import Register from "../views/Public/Register";
import Campaigns from "../views/Public/Campaigns";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { logout, useAuthDispatch, useAuthState } from "../context";
import { Button } from "@chakra-ui/react";

function Dashboard() {
  const dispatch = useAuthDispatch();

  return (
    <>
      <h2>Home</h2>
      <Button mt={5} colorScheme="brand" onClick={() => logout(dispatch)}>
        Sair
      </Button>
    </>
  );
}

export default function AppRouter() {
  const publicRoutes = [
    {
      path: "/login",
      component: Login,
      isPrivate: false,
    },
    {
      path: "/",
      component: Home,
      isPrivate: false,
    },
    {
      path: "/register",
      component: Register,
      isPrivate: false,
    },
    {
      path: "/campaigns",
      component: Campaigns,
      isPrivate: false,
    },
  ];

  const privateRoutes = [
    {
      path: "/dashboard",
      component: Dashboard,
      isPrivate: true,
    },
  ];

  const userDetails = useAuthState();
  const isAuth = Boolean(userDetails.token);

  if (isAuth) {
    return (
      <Router>
        <Switch>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
          <Route component={() => <Redirect to="/dashboard" />} />
        </Switch>
      </Router>
    );
  }

  return (
    <Router>
      <Switch>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}
