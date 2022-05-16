import { Routes, BrowserRouter as Router, Route, Outlet } from "react-router-dom";
import { NavMenuLink } from "./NavMenuLink";

export type NavigationMenuProps = {
    items: MenuItem[]
};

type LayoutProps = MenuItem[];

export type MenuItem = {
    name: string,
    path: string,
    items: LayoutProps[]
}

const Layout = (items: NavigationMenuProps) => {
  const linkList = items.items;

  const List = linkList.map((item, index) => 
    item.path?
      <NavMenuLink to={item.path} key={index}>
        {item.name}
      </NavMenuLink>
      :
      null
  );
  
  return (
    <>
      <h1>Navigation Menu</h1>
      <nav>
        {List}
      </nav>
    </>
  );
};

const Page = (item: any) => {
  const page = item.items;
  console.log(page);
  return(
    <>
      <NavMenuLink to={page.path}>
        {page.name}
      </NavMenuLink>
      {/* {item.items !== undefined && item.items.lenght !== 0?
        page.items.map( (item: any) => Page(item.items))
        :
        null} */}
      {page.items.map( item => <h4 key={item.id}>{item.name}</h4>)}
      <NavMenuLink to='/'>
        BACK
      </NavMenuLink>
    </>
  );
};

const generateRoute = (items: any) => {
  console.log(items);
  return items.map( (route: MenuItem) => {
    if(route.items !== undefined && route.items.length !== 0) {
      return generateRoute(route.items);
    }

    return items.map( (route: MenuItem) => 
      <Route 
        path={route.path} 
        key={route.path} 
        element={<Page items={route} />}
      />
    );
  });
};

const NoMatch = () => <h3>No Match (((<NavMenuLink to="/">BACK</NavMenuLink></h3>;

export function NavigationMenu (props: NavigationMenuProps) {
  const routesList = generateRoute(props.items);
  console.log();
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout items={props.items} />} />
          <Route path="*" element={<NoMatch />} />
          {routesList}
        </Routes>
      </Router>
    </>
  );
}