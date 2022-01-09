import React from "react";
import { NavLink as ReactRouterNavLink, NavLinkProps } from "react-router-dom";
import cn from "classnames";
import styles from "./NavLink.css";

export const NavLink: React.FC<NavLinkProps> = ({ className, ...props }) => {
  const navLinkClassName: NavLinkProps["className"] = (qwe) =>
    cn(className, styles.link, qwe.isActive && styles.active);

  return (
    <ReactRouterNavLink className={navLinkClassName} {...props}>
      {props.children}
    </ReactRouterNavLink>
  );
};
