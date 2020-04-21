import React from "react";
import { BtnPrimary, BtnLink } from "~/components/btn";
import { Form, Field, ErrorSummary } from "~/components/form";

export default function SignInFormBase({ onSubmit, error }) {
  return (
    <Form
      onSubmit={onSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      validation={t =>
        t.object().shape({
          email: t
            .string()
            .email()
            .required(),
          password: t
            .string()
            .min(3)
            .required(),
        })
      }>
      <Field name="email" type="text" placeholder="your@email.com" />
      <Field name="password" type="password" placeholder="******************" />
      <ErrorSummary error={error} />
      <div className="flex items-center justify-between">
        <BtnPrimary type="submit">Sign In</BtnPrimary>
        <BtnLink>Forgot Password?</BtnLink>
      </div>
    </Form>
  );
}
