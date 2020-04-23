import React, { useState } from "react";
import { useStore } from "~/features/store";
import SignInFormBase from "./sign-in-form-base";

export default function SignInForm() {
  const store = useStore();
  const [error, setError] = useState(null);
  const onSubmit = data => {
    store.base
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
