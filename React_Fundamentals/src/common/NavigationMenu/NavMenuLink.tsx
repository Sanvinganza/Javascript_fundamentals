import { useMatch } from "react-router";
import { Link } from "react-router-dom";

interface INavMenuLink {
    children?: any,
    to: string,
    props?: any
}

export const NavMenuLink = ({children, to, ...props}: INavMenuLink) => {
  const match = useMatch(to);

  return (
    <Link 
      to={to}
      style={{
        color: match? '$orange-color': 'white',
      }}
      {...props}
    >
      {children}
    </Link>
  );
};