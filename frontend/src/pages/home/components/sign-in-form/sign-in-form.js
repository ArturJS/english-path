import React, { forwardRef, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { StoreContext } from "~/models/reactUtils";

const Field = forwardRef(({
  name,
  type,
  label,
  placeholder,
  errors
}, ref) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs italic mt-1">
          {errors[name].message}
        </p>
      )}
    </div>
  );
});

const SignInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(3).required(),
});

export default function SignInForm() {
  const store = useContext(StoreContext);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignInSchema
  });
  const [response, setResponse] = useState({});
  const onSubmit = async (data, e) => {
    e.preventDefault();
    e.stopPropagation();

    store.mutateLogin({
      loginInput: {
        email: data.email,
        password: data.password
      }
    }).then(
      (data) => {
        console.log(data)
        // todo perform login and redirect
      },
      (error) => {
        setResponse({
          error: error.response.errors[0].message.message
        })
      }
    );
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(onSubmit)}
      noValidate>
      <Field
        name="email"
        label="Email"
        type="text"
        placeholder="your@email.com"
        ref={register}
        errors={errors}
      />
      <Field
        name="password"
        label="Password"
        type="password"
        placeholder="******************"
        ref={register}
        errors={errors}
      />
      {response.error && (
        <p className="text-red-500 text-sm italic mt-1">
          {response.error}
        </p>
      )}
      <div className="flex items-center justify-between">
        <button
          className="transition-colors duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Sign In
        </button>
        <a
          className="transition-colors duration-300 ease-in-out inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  );
}
