import { createBtn } from "./create-btn";

export const BtnPrimary = createBtn({
  defaultClassName: [
    "transition-colors",
    "duration-300",
    "ease-in-out",
    "bg-blue-500",
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
    "focus:outline-none",
    "focus:shadow-outline",
  ].join(" "),
});
