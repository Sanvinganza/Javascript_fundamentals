import { Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DropdownList, Multiselect } from 'react-widgets/cjs';
import { Dismensions } from './Dimensions';
import { selectContext } from './redux/actions';
import { getCompletedContextsSelector } from './selectors/getCompletedContextsSelector';
import { getContextsSelector } from './selectors/getContextsSelector';
import { getDismensionsSelector } from './selectors/getDimenisonsSelector';

export interface IItem {
  item: string
}

const CheckboxItem = ({item}: IItem) => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox 
      checked={checked}
      onClick={() => setChecked(!checked)}
    >{item}</Checkbox>
  );
};
const arrayCompletedContexts: Array<string> = [];

export function Contexts () {
  const dispatch = useDispatch();

  const contexts = getContextsSelector(); 
  const dismensions = getDismensionsSelector();
  const completedContexts = getCompletedContextsSelector();
  
  return (
    <>
      <h2>CONTEXTS</h2> 
      <DropdownList
        onSelect={(item: string) => {
          if(arrayCompletedContexts.includes(item)) {
            dispatch(selectContext(item, false));
            arrayCompletedContexts.splice(arrayCompletedContexts.indexOf(item), 1);
            console.log('if CONTEXT', arrayCompletedContexts);
          } else {
            dispatch(selectContext(item, true));
            arrayCompletedContexts.push(item);
            console.log('else CONTEXT', arrayCompletedContexts);
          }
        }}
        showSelectedItemsInList={true}
        data={contexts.map( item => item.category )}
        renderListItem={ 
          ({item}: IItem) => <CheckboxItem item={item} />}
      />
      {completedContexts.length !== 0?
        <Dismensions dismensions={dismensions}/>
        :
        null
      }
    </>
  );
}
