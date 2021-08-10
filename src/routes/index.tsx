import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "../components/Header";
import Institutions from "../views/Private/Institutions";
import Sidebar from "../components/Sidebar";
import UserProfile from "../views/Private/UserProfile";
import { useAuthState } from "../context";
import Dashboard from "../views/Private/Dashboard";
import Campaigns from "../views/Private/Campaigns";
import Home from "../views/Public/Home";
import Login from "../views/Public/Login";
import Register from "../views/Public/Register";
import PublicCampaigns from "../views/Public/Campaigns";
import Institutes from "../views/Public/Institutes";
import About from "../views/Public/About";
import Contacts from "../views/Public/Contacts";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

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
      component: PublicCampaigns,
      isPrivate: false,
    },
    {
      path: "/institutes",
      component: Institutes,
      isPrivate: false,
    },
    {
      path: "/about",
      component: About,
      isPrivate: false,
    },
    {
      path: "/contact",
      component: Contacts,
      isPrivate: false,
    }
  ];

  const privateRoutes = [
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/perfil",
      component: UserProfile,
    },
    {
      path: "/campanhas",
      component: Campaigns,
    },
    {
      path: "/instituições",
      component: Institutions,
    },
  ];

  const userDetails = useAuthState();
  const isAuth = Boolean(userDetails.token);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  if (isAuth) {
    return (
      <Router>
        <Sidebar
          variant={variants?.navigation as "drawer" | "sidebar"}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Box ml={!variants?.navigationButton ? 200 : undefined}>
          <Header
            showSidebarButton={variants?.navigationButton}
            onShowSidebar={toggleSidebar}
          />

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
        </Box>
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
