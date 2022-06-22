import { Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Multiselect } from 'react-widgets/cjs';
import { Dismensions } from './Dimensions';
import { getSelectedContextsSelector } from './selectors/Contexts/getSelectedContextsSelector';
import { getContextsSelector } from './selectors/Contexts/getContextsSelector';
import { getIsContextSelectedSelector } from './selectors/Contexts/getIsContextSelectedSelector';
import { useCallback, useMemo } from 'react';
import { selectContext } from './redux/actions';
import { IContexts } from './redux/reducer';

export interface IItem {
  item: string
}

const CheckboxContext = ({item}: IItem) => {
  const checked = useSelector(getIsContextSelectedSelector(item));

  return <Checkbox checked={checked}>{item}</Checkbox>;
};

const arraySelectedContexts: Array<string> = [];

export function Contexts () {
  const dispatch = useDispatch();

  const contexts = useSelector(getContextsSelector());
  const memoContexts = useMemo(() => contexts.map((item: IContexts) => item.category), contexts);
  
  const selectedContexts = useSelector(getSelectedContextsSelector());

  return (
    <>
      <h2>CONTEXTS</h2> 
      <Multiselect
        onSelect={useCallback((item: string) => {
          if(arraySelectedContexts.includes(item)) {
            dispatch(selectContext(item, false));
            arraySelectedContexts.splice(arraySelectedContexts.indexOf(item), 1);
          } else {
            dispatch(selectContext(item, true));
            arraySelectedContexts.push(item);
          }
        },[contexts])}
        showSelectedItemsInList={true}
        data={memoContexts}
        renderListItem={ 
          ({item}: IItem) => <CheckboxContext item={item} />}
      />
      {!!selectedContexts.length && <Dismensions />}
    </>
  );
}
