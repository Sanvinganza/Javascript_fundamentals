import * as React from "react";
import { Routes, BrowserRouter as Router, Route, Outlet } from "react-router-dom";
import { IMenuItem } from "../../App";
import { NavMenuLink } from "./NavMenuLink";

interface IProps {
  items: IMenuItem[]
}

interface IPage {
  route: IMenuItem
}

const NoMatch = () => <h3>No Match<Back /></h3>;
export const Back = () => <NavMenuLink to="/">Back</NavMenuLink>;

const Layout: React.FC<IProps> = ({items}) => {
  const List = items.map((item, index) => 
    item.path?
      <NavMenuLink to={item.path} key={index}>
        {item.path}
      </NavMenuLink>
      :
      null
  );
  
  return (
    <>
      <nav className="navigation-menu">
        {List}
      </nav>
      < Outlet />
    </>
  );
};

const Page = ({route}: IPage) => {
  return <>
    {route.element}
    <Outlet />
  </>;
};

const generateRoute = (items: IMenuItem[]) => {
  return items.map( (route: IMenuItem) => {
    if(route.items !== undefined && route.items.length !== 0) {
      return <Route 
        path={route.path}
        key={route.path}
        element={<Page route={route} />}
      >
        {generateRoute(route.items)}
      </Route>;
    }

    return <Route 
      path={route.path} 
      key={route.path} 
      element={<Page route={route} />}
    />;
  });
};

export const NavigationMenu: React.FC<IProps> = ({items}) => {
  const routeList = generateRoute(items);
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout items={items} />} />
          {routeList}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
};