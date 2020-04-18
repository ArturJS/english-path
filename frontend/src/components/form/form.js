import React from "react";
import { useForm, FormContext } from "react-hook-form";
import * as yup from "yup";

export function Form({ validation, onSubmit, className, children }) {
  const formMethods = useForm({
    validationSchema: validation(yup),
  });
  const submitHandler = (data, e) => {
    e.preventDefault();
    e.stopPropagation();

    onSubmit(data);
  };

  return (
    <FormContext {...formMethods}>
      <form
        className={className}
        onSubmit={formMethods.handleSubmit(submitHandler)}
        noValidate>
        {children}
      </form>
    </FormContext>
  );
}
