import { types as t, getParent, hasParent } from "mobx-state-tree";

async function queryWhoAmI(self) {
  return new Promise(resolve => {
    if (!hasParent(self)) {
      resolve();
      return;
    }

    getParent(self)
      .base.queryWhoAmI()
      .then(
        data => {
          console.log(`whoAmI data: ${JSON.stringify(data, 0, 2)}`);
          self.setUser({
            email: data.email || data.whoAmI.email, // todo fix
          });
          resolve();
        },
        error => {
          console.error(`whoAmI error: ${error}`);
          self.setUser({
            email: null,
          });
          resolve();
        },
      );
  });
}

export const AuthStore = t
  .model({
    email: t.maybeNull(t.string),
    isInitialized: t.boolean,
  })
  .actions(self => ({
    init() {
      return {
        result: queryWhoAmI(self),
      };
    },

    setUser({ email }) {
      self.email = email;
      self.isInitialized = true;
    },
  }))
  .views(self => ({
    get isLoggedIn() {
      return !!self.email;
    },

    get user() {
      return {
        email: self.email,
      };
    },
  }));
