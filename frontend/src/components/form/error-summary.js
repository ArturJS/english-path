import React from "react";
import cx from "classnames";

export function ErrorSummary({ error }) {
  return (
    <p
      className={cx(
        {
          "opacity-0": !error,
        },
        "text-red-500 text-sm italic mt-1 mb-2",
      )}>
      {error}&nbsp;
    </p>
  );
}
