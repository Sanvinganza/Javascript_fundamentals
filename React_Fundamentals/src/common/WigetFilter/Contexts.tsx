import { Checkbox } from 'antd';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Multiselect } from 'react-widgets/cjs';
import { Dismensions } from './Dimensions';
import { selectContext } from './redux/actions';
import { IState } from './redux/reducer';

export interface IItem {
  item: string
}

const CheckboxItem = ({item}: IItem) => {
  const [checked, setChecked] = useState(useSelector((state: IState) => state.contexts.filter( context => {
    return context.category === item;
  })[0].checked));

  const dispatch = useDispatch();

  return (
    <Checkbox 
      checked={checked}
      onClick={() => {
        dispatch(selectContext(item, !checked));
        setChecked(!checked);
        setTimeout(() => {
          console.log('ON CHECKED = ',item, checked);
        }, 100);       
      }
      }>{item}</Checkbox>
  );
};

export function Contexts () {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const contexts = useSelector((state: IState) => state.contexts);

  const dismensions = contexts
    .filter( context => context.checked === true)
    .map( context => context.dismensions)
    .flat(2);

  return (
    <>
      <h2>CONTEXTS</h2> 
      <Multiselect
        onSelect={(item: string) => {
          dispatch(selectContext(item, !checked));
          setChecked(!checked);
          setTimeout(() => {
            console.log('ON SELECTE = ',item, checked);
          }, 100);
        }}
        showSelectedItemsInList={true}
        data={contexts.map( item => item.category )}
        renderListItem={ 
          ({item}: IItem) => <CheckboxItem item={item} />}
      />
      {
        contexts.filter( context => {
          return context.checked === true;
        }).length !== 0? 
        
          <Dismensions dismensions={dismensions}/>
          :
          null
      }
    </>
  );
}
