import * as React from "react";
import { useMatch } from "react-router";
import { Link, LinkProps } from "react-router-dom";

type INavMenuLink = {
    children?: React.ReactNode,
    to: string,
    props?: LinkProps
}

export const NavMenuLink = ({children, to, ...props}: INavMenuLink) => {
  const match = useMatch(to);

  return (
    <Link 
      to={to}
      style={{
        color: match? '$orange-color': 'blue',
        textShadow: "10px 5px 5px grey",
      }}
      {...props}
    >
      {children}
    </Link>
  );
};