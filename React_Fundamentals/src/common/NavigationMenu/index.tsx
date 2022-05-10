import { Link } from "react-router-dom";

type IMenuProps = MenuItem[];

type MenuItem = {
    name: string,
    link?: string,
    items?: IMenuProps[]
}

const Items = ({items}: any) => {
  console.log('ITEMS=',items);
  return (
    <>
      {items?items.map( (item: MenuItem) => 
        <Item 
          key={item.name} 
          name={item.name} 
          link={item.link}
          items={item.items} 
        />)
        :
        null
      }
    </>
  );
};

const Item = ({link, name, items}: MenuItem) => <>
  {link?
    <>
      <Link to={link}>{name}</Link>
      {console.log('ITEM FIRST= ',items)}
      <Items props={items}/>
    </> 
    : 
    <>
      <h1>{name}</h1>
      {console.log('ITEM SECOND= ',items)}
      <Items props={items}/>
    </>
  }
</>;

export function NavigationMenu ({items}: any) {
  console.log('MENU=',items);
  return (
    <>
      <h2>NavigationMenu</h2>
      <Items items={items}/>
    </>
  );
}
