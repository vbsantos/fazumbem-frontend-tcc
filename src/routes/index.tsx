import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useAuthState } from "../context";
import Campaigns from "../views/Private/Campaigns";
import NewCampaign from "../views/Private/NewCampaign";
import Institutions from "../views/Private/Institutions";
import NewInstitution from "../views/Private/NewInstitution";
import UserProfile from "../views/Private/UserProfile";
import About from "../views/Public/About";
import PublicCampaigns from "../views/Public/Campaigns";
import CampaignDetails from "../views/Public/CampaignDetails";
import Contacts from "../views/Public/Contacts";
import Home from "../views/Public/Home";
import Institutes from "../views/Public/Institutes";
import InstituteDetails from "../views/Public/InstituteDetails";
import Login from "../views/Public/Login";
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
    // {
    //   path: "/register",
    //   component: Register,
    //   isPrivate: false,
    // },
    {
      path: "/campaigns",
      component: PublicCampaigns,
      isPrivate: false,
    },
    {
      path: "/campaign/:id",
      component: CampaignDetails,
      isPrivate: false,
    },
    {
      path: "/institutes",
      component: Institutes,
      isPrivate: false,
    },
    {
      path: "/institute/:id",
      component: InstituteDetails,
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
    },
  ];

  const privateRoutes = [
    {
      path: "/perfil",
      component: UserProfile,
    },
    {
      path: "/campanhas",
      component: Campaigns,
    },
    {
      path: "/nova-campanha",
      component: NewCampaign,
    },
    {
      path: "/campanha/:id",
      component: NewCampaign,
    },
    {
      path: "/instituições",
      component: Institutions,
    },
    {
      path: "/nova-instituição",
      component: NewInstitution,
    },
    {
      path: "/instituição/:id",
      component: NewInstitution,
    },
  ];

  const userDetails = useAuthState();
  const isAuth = Boolean(userDetails.token);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const isSuperUser = userDetails?.user?.group === "Curator";

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
            <Route
              component={() => (
                <Redirect to={isSuperUser ? "/instituições" : "/perfil"} />
              )}
            />
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
