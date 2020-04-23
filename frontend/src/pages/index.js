import React from "react";
import { Router, useLocation, navigate } from "@reach/router";
import Welcome from "./welcome";
import SignIn from "./sign-in";
import Profile from "./profile";
import NotFound from "./404";

export default function WelcomePage() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    navigate("/welcome");
  }

  return (
    <Router>
      <Welcome path="/welcome" />
      <SignIn path="/sign-in" />
      <Profile path="/profile" />
      <NotFound path="*" />
    </Router>
  );
}
