import { createContext, useContext } from "react";
import { types as t } from "mobx-state-tree";
import { createHttpClient } from "mst-gql";
import { RootStore as BaseRootStore } from "~/models/RootStore";
import { AuthStore } from "~/features/auth";

const env = {
  gqlHttpClient: createHttpClient("http://localhost:3000/graphql", {
    credentials: "include",
    mode: "cors",
  }),
};

const RootStore = t
  .model({
    base: BaseRootStore,
    auth: AuthStore,
  })
  .actions(self => ({
    init() {
      self.createBaseStore();
      self.createAuthStore();
      return {
        result: Promise.all([self.auth.init().result]),
      };
    },
    createBaseStore() {
      self.base = BaseRootStore.create({}, env);
    },
    createAuthStore() {
      // self.auth = AuthStore.create(
      //   {
      //     email: null,
      //     isInitialized: false,
      //   },
      //   env,
      // );
    },
  }));

export const rootStore = RootStore.create(
  {
    base: {},
    auth: {
      email: null,
      isInitialized: false,
    },
  },
  env,
);

export const RootStoreContext = createContext({});

export const useStore = selector => {
  const rootStore = useContext(RootStoreContext);

  if (!selector) {
    return rootStore;
  }

  return selector(rootStore);
};
