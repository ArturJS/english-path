import { useState } from "react";
import useMedia from "use-media";

const isSSR = typeof window === "undefined";

export function useCollapsibleNav({ selector }) {
  const [isCollapsed, setCollapsed] = useState(true);
  const isTabletOrMobile = useMedia({ maxWidth: 768 });

  const styleCollapsed = {
    height: "4em",
  };

  function getBaseStyle(isTabletOrMobile) {
    const height = isSSR
      ? styleCollapsed.height
      : document.querySelector(selector)?.scrollHeight || styleCollapsed.height;

    return {
      overflow: "hidden",
      transition: "height ease-in-out 0.25s",
      height: isTabletOrMobile ? `${height}px` : "auto",
    };
  }

  const navCollapsibleStyle =
    isTabletOrMobile && isCollapsed
      ? { ...getBaseStyle(), ...styleCollapsed }
      : getBaseStyle(isTabletOrMobile);

  function toggleCollapsed() {
    setCollapsed(!isCollapsed);
  }

  return [navCollapsibleStyle, toggleCollapsed];
}
