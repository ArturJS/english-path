import React from "react";
import cx from "classnames";

export function createBtn({ defaultClassName }) {
  return function BtnBase({ children, className, ...restProps }) {
    return (
      <button className={cx(defaultClassName, className)} {...restProps}>
        {children}
      </button>
    );
  };
}
