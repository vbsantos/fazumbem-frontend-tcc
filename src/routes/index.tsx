import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useAuthState } from "../context";
import Campaigns from "../views/Private/Campaigns";
import NewCampaign from "../views/Private/NewCampaign";
import Institutions from "../views/Private/Institutions";
import NewInstitution from "../views/Private/NewInstitution";
import About from "../views/Public/About";
import PublicCampaigns from "../views/Public/Campaigns";
import CampaignDetails from "../views/Public/CampaignDetails";
import Contacts from "../views/Public/Contacts";
import Home from "../views/Public/Home";
import Institutes from "../views/Public/Institutes";
import InstituteDetails from "../views/Public/InstituteDetails";
import Login from "../views/Public/Login";
import TermsOfUse from "../components/TermsOfUse";
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
      path: "/campanhas",
      component: Campaigns,
      superUser: true,
      user: true,
    },
    {
      path: "/nova-campanha",
      component: NewCampaign,
      user: true,
    },
    {
      path: "/campanha/:id",
      component: NewCampaign,
      superUser: true,
      user: true,
    },
    {
      path: "/instituições",
      component: Institutions,
      superUser: true,
    },
    {
      path: "/nova-instituição",
      component: NewInstitution,
      superUser: true,
    },
    {
      path: "/instituição/:id",
      component: NewInstitution,
      superUser: true,
      user: true,
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
          <Switch>
            {privateRoutes
              .filter((route) =>
                isSuperUser
                  ? route.superUser === isSuperUser
                  : route.user === true
              )
              .map((route) => (
                <Route
                  key={route.path}
                  exact
                  path={route.path}
                  component={route.component}
                />
              ))}

            <Route
              component={() => (
                <Redirect
                  to={
                    isSuperUser
                      ? "/instituições"
                      : "/instituição/" + userDetails?.user?.idUser
                  }
                />
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
        <Route exact path="/termos" component={TermsOfUse} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}
