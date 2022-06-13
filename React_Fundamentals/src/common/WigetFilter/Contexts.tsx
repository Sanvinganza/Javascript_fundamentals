import { Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Multiselect } from 'react-widgets/cjs';
import { Dismensions } from './Dimensions';
import { selectContext } from './redux/actions';
import { getCompletedContextsSelector } from './selectors/Contexts/getCompletedContextsSelector';
import { getContextsSelector } from './selectors/Contexts/getContextsSelector';
import { getValueContextSelector } from './selectors/Contexts/getValueContextSelector';

export interface IItem {
  item: string
}

const CheckboxContext = ({item}: IItem) => {
  const checked = useSelector(getValueContextSelector(item));

  return <Checkbox checked={checked}>{item}</Checkbox>;
};

const arrayCompletedContexts: Array<string> = [];

export function Contexts () {
  const dispatch = useDispatch();

  const contexts = useSelector(getContextsSelector());

  const completedContexts = useSelector(getCompletedContextsSelector());
  
  return (
    <>
      <h2>CONTEXTS</h2> 
      <Multiselect
        onSelect={(item: string) => {
          if(arrayCompletedContexts.includes(item)) {
            dispatch(selectContext(item, false));
            arrayCompletedContexts.splice(arrayCompletedContexts.indexOf(item), 1);
          } else {
            dispatch(selectContext(item, true));
            arrayCompletedContexts.push(item);
          }
        }}
        showSelectedItemsInList={true}
        data={contexts.map(item => item.category)}
        renderListItem={ 
          ({item}: IItem) => <CheckboxContext item={item} />}
      />
      {completedContexts.length !== 0?
        <Dismensions />
        :
        null
      }
    </>
  );
}
