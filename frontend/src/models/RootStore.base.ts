/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { LoginResponseModel, LoginResponseModelType } from "./LoginResponseModel"
import { loginResponseModelPrimitives, LoginResponseModelSelector } from "./LoginResponseModel.base"


export type LoginInput = {
  email: string
  password: string
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  users: ObservableMap<string, UserModelType>
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['User', () => UserModel], ['LoginResponse', () => LoginResponseModel]], ['User'], "js"))
  .props({
    users: types.optional(types.map(types.late((): any => UserModel)), {})
  })
  .actions(self => ({
    queryUsers(variables?: {  }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ users: UserModelType[]}>(`query users { users {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryWhoAmI(variables?: {  }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ whoAmI: UserModelType}>(`query whoAmI { whoAmI {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateLogin(variables: { loginInput: LoginInput }, resultSelector: string | ((qb: LoginResponseModelSelector) => LoginResponseModelSelector) = loginResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ login: LoginResponseModelType}>(`mutation login($loginInput: LoginInput!) { login(loginInput: $loginInput) {
        ${typeof resultSelector === "function" ? resultSelector(new LoginResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
