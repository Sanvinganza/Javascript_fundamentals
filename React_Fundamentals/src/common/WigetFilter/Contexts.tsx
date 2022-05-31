import { Checkbox } from 'antd';
import { useState } from 'react';
import { Multiselect } from 'react-widgets/cjs';
import { IState } from './redux/reducer';

interface IItem {
  item: string
  ,
}

export function Contexts ({contexts}: IState) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <h2>CONTEXTS</h2> 
      <Multiselect
        onSelect={() => setChecked(!checked)}
        showSelectedItemsInList={true}
        data={contexts.map((item) => item.category)}
        renderListItem={ ({item}: IItem) => <Checkbox checked={checked}>{item}</Checkbox> }
      />
    </>
  );
}
