import React from "react";
import { useFormContext } from "react-hook-form";
import cx from "classnames";

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export function Field({
  name,
  type,
  placeholder,
  id = name,
  label = capitalize(name),
}) {
  const { register, errors } = useFormContext();

  return (
    <fieldset className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        ref={register}
      />
      <p
        className={cx(
          { "opacity-0": !errors[name] },
          "text-red-500 text-xs italic mt-1 mb-0",
        )}>
        {errors[name]?.message}&nbsp;
      </p>
    </fieldset>
  );
}
