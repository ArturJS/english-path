import React, { useContext, useState } from "react";
import { StoreContext } from "~/models/reactUtils";
import SignInFormBase from "./sign-in-form-base";

export default function SignInForm() {
  const store = useContext(StoreContext);
  const [error, setError] = useState(null);
  const onSubmit = data => {
    store
      .mutateLogin({
        loginInput: {
          email: data.email,
          password: data.password,
        },
      })
      .then(
        data => {
          console.log(data);
          // todo perform login and redirect
        },
        error => {
          const errorMessage = error.response.errors[0].message.message;
          setError(errorMessage);
        },
      );
  };

  return <SignInFormBase onSubmit={onSubmit} error={error} />;
}
