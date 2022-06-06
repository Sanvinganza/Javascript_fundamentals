import { Checkbox } from 'antd';
import { Multiselect } from 'react-widgets/cjs';
import { IItem } from './Contexts';
import { IDismension } from './redux/reducer';

interface IDismensions {
  dismensions: IDismension[]
}

export function Dismensions ({dismensions}: IDismensions) {
  console.log(dismensions);
    
  return (
    <>
      <h2>DISMENSIONS</h2> 
      <Multiselect
        busy={false}
        showSelectedItemsInList={true}
        data={dismensions.map( dismension => dismension.subcategory)}
        renderListItem={ ({item}: IItem) => <Checkbox>{item}</Checkbox> }
      />
    </>
  );
}
