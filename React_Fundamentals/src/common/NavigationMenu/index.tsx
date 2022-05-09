import * as React from 'react';


type item = {
    name: string,
    link?: string,
    items?: IMenuProps[]
}

export interface IMenuProps {
    items: item[]
}
export function NavigationMenu (items:IMenuProps) {
  console.log(items);
  return (
    <div>
      
    </div>
  );
}
