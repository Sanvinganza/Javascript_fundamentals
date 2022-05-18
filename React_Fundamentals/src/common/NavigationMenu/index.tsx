import * as React from "react";
import { Routes, BrowserRouter as Router, Route, Outlet } from "react-router-dom";
import { IMenuItem } from "../../App";
import { NavMenuLink } from "./NavMenuLink";

const Layout: React.FC<IProps> = ({items}) => {
  const List = items.map((item, index) => 
    item.path?
      <NavMenuLink to={item.path} key={index}>
        {item.element}
      </NavMenuLink>
      :
      null
  );
  
  return (
    <>
      <h1>Navigation Menu</h1>
      <nav className="navigation-menu">
        {List}
      </nav>
      < Outlet />
    </>
  );
};
const Back = () => <NavMenuLink to="/">Back</NavMenuLink>;

interface IPage {
  route: IMenuItem
}

const Page = ({route}: IPage) => {
  console.log(route.path);
  return <>
    <NavMenuLink to={route.path}>Link</NavMenuLink>
    <Outlet />
    <Back />
  </>;
};

const generateRoute = (items: IMenuItem[]) => {
  return items.map( (route: IMenuItem) => {
    console.log(route.path);
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
      element={route.element}
    />;
  });
};

const NoMatch = () => <h3>No Match<NavMenuLink to="/">Back</NavMenuLink></h3>;

interface IProps {
  items: IMenuItem[]
}

export const NavigationMenu: React.FC<IProps> = ({items}) => {
  const routeList = generateRoute(items);
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout items={items} />} />
          <Route path="*" element={<NoMatch />} />
          {routeList}
        </Routes>
      </Router>
    </>
  );
};