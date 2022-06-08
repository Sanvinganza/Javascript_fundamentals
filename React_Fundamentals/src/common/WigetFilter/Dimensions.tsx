import { Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Multiselect } from 'react-widgets/cjs';
import { IItem } from './Contexts';
import { Items } from './Items';
import { selectDismension } from './redux/actions';
import { IDismension, IState } from './redux/reducer';

interface IDismensions {
  dismensions: IDismension[]
}

export function Dismensions ({dismensions}: IDismensions) {
  // console.log('Dismensions = ', dismensions);
  const contexts = useSelector((state: IState) => state.contexts);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const dismensionsArray = useSelector((state: IState) => state.contexts
    .filter( context => context.checked === true)
    .map( context => context.dismensions)
    .flat(2)
  );
  
  // console.log('ITEMS = ',dismensionsArray
  // .filter( dismension => dismension.checked === true)
  // .map( dismesion => {
  //   return dismesion.items.map( item => {
  //     return item.name;
  //   });
  // }).flat(2)
  // );
  
  return (
    <>
      <h2>DISMENSIONS</h2> 
      <Multiselect
        onSelect={(item: string) => {
          dispatch(selectDismension(item, !checked));
        }}
        busy={false}
        showSelectedItemsInList={true}
        data={dismensionsArray.map( dismension => dismension.subcategory)}
        renderListItem={ ({item}: IItem) => <Checkbox>{item}</Checkbox> }
      />
      {/* {dismensions.filter( dismension => {
        return dismension.checked !== true;
      }).length !== 0?
        <Items items={items} />
        :
        null
      } */}
    </>
  );
}
