import { Routes, BrowserRouter as Router, Route, Link, Outlet } from "react-router-dom";
import { NavMenuLink } from "./NavMenuLink";

type IMenuProps = {
    items: MenuItem[];
};

type MenuItem = {
    name: string,
    path: string,
    items: IMenuProps[]
}

const Page = ({item}: any) => {
  console.log(item);

  return(
    <>
      <NavMenuLink to={item.path}>
        Path : {item.name}
      </NavMenuLink>
    </>
  );
};

const Layout = ({items}: IMenuProps) => {
  const List = items.map((item, index) => {
    return <>

      <Page item={item} />
    </>;
  });
  
  return (
    <>
      <h1>Navigation Menu</h1>
      <nav>
        {List}
      </nav>
  
      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </>
  );
};

export function NavigationMenu ({items}: IMenuProps) {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout items={items} />}>
            {/* About Home News */}
            {items.map( (route: any)  => {
              if(route.items.length !== 0 && route.items) {

                // {Breaking news}
                items.map( (route: any)  => {
                  if(route.items.length !== 0 && route.items) {

                    //first post second post
                    return items.map( (route: any)  => 
                      <Route key={route.path} element={<Page item={route} />}/>);
                  }

                  return <Route key={route.path} element={<Page item={route} />}/>;
                });

              }

              return <Route key={route.path} element={<Page item={route} />}/>;
            })
            }
          </Route>
        </Routes>
      </Router>
    </>
  );
}