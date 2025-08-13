import React from "react";

export const smoothScrolling = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();

  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  document
    .querySelector<HTMLElement>(href)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};
