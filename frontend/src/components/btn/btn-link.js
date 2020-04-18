import { createBtn } from "./create-btn";

export const BtnLink = createBtn({
  defaultClassName: [
    "transition-colors",
    "duration-300",
    "ease-in-out",
    "inline-block",
    "align-baseline",
    "font-bold",
    "text-sm",
    "text-blue-500",
    "hover:text-blue-800",
    "cursor-pointer",
  ].join(" "),
});
