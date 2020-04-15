import { Instance } from "mobx-state-tree"
import { LoginResponseModelBase } from "./LoginResponseModel.base"

/* The TypeScript type of an instance of LoginResponseModel */
export interface LoginResponseModelType extends Instance<typeof LoginResponseModel.Type> {}

/* A graphql query fragment builders for LoginResponseModel */
export { selectFromLoginResponse, loginResponseModelPrimitives, LoginResponseModelSelector } from "./LoginResponseModel.base"

/**
 * LoginResponseModel
 */
export const LoginResponseModel = LoginResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
