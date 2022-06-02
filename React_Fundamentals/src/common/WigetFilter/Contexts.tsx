import { Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Multiselect } from 'react-widgets/cjs';
import { selectContext } from './redux/actions';
import { IState } from './redux/reducer';

interface IItem {
  item: string
}

export function Contexts () {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const contexts = useSelector((state: IState) => state.contexts);

  return (
    <>
      <h2>CONTEXTS</h2> 
      <Multiselect
        onSelect={(item: string) => {
          dispatch(selectContext(item, checked));
        }}
        showSelectedItemsInList={true}
        data={contexts.map( item => item.category )}
        renderListItem={ 
          ({item}: IItem) => <Checkbox 
            checked={checked}
            onClick={() => {
              setChecked(!checked);
            }
            }>{item}</Checkbox> }
      />
    </>
  );
}
