import React from "react";
import { useLocation, redirectTo } from "@reach/router";
import { observer } from "mobx-react-lite";
import { useStore } from "~/features/store";

export function withAuth(WrappedComponent) {
  return observer(function AuthRoute(props) {
    const { pathname } = useLocation();
    const store = useStore();
    const { isInitialized, isLoggedIn } = store.auth;

    if (!isInitialized) {
      return <div>Loading...</div>;
    }

    if (!isLoggedIn && pathname !== `/sign-in`) {
      redirectTo("/sign-in");

      return null;
    }

    return <WrappedComponent {...props} />;
  });
}
