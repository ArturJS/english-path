import React from "react";
import { useLocation, redirectTo } from "@reach/router";
import { useObserver } from "mobx-react-lite";
import { useStore } from "~/features/store";

export function withAuth(WrappedComponent) {
  return function AuthRoute(props) {
    return useObserver(() => {
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
  };
}
