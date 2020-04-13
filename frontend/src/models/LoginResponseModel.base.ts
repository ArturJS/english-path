/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  user: UserModelType;
}

/**
 * LoginResponseBase
 * auto generated base class for the model LoginResponseModel.
 */
export const LoginResponseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('LoginResponse')
  .props({
    __typename: types.optional(types.literal("LoginResponse"), "LoginResponse"),
    message: types.union(types.undefined, types.null, types.string),
    user: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LoginResponseModelSelector extends QueryBuilder {
  get message() { return this.__attr(`message`) }
  user(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`user`, UserModelSelector, builder) }
}
export function selectFromLoginResponse() {
  return new LoginResponseModelSelector()
}

export const loginResponseModelPrimitives = selectFromLoginResponse().message
