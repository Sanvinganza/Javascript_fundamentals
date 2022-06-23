import { Checkbox } from 'antd';
import { useSelector } from 'react-redux';
import { Dismensions } from './Dimensions';
import { getSelectedContextsSelector } from './selectors/Contexts/getSelectedContextsSelector';
import { getContextsSelector } from './selectors/Contexts/getContextsSelector';
import { getIsContextSelectedSelector } from './selectors/Contexts/getIsContextSelectedSelector';
import { useMemo } from 'react';
import { selectContext } from './redux/actions';
import { IContexts } from './redux/reducer';
import { FilterMultiselect } from './FilterMultiselect';

export interface IItem {
  item: string
}

const CheckboxContext = ({item}: IItem) => {
  const checked = useSelector(getIsContextSelectedSelector(item));

  return <Checkbox checked={checked}>{item}</Checkbox>;
};

export function Contexts () {

  const contexts = useSelector(getContextsSelector());
  const memoContexts = useMemo(() => contexts.map((item: IContexts) => item.category), contexts);
  
  const selectedContexts = useSelector(getSelectedContextsSelector());

  return (
    <>
      <h2>CONTEXTS</h2> 
      <FilterMultiselect 
        showPlaceholderWithValues={true}
        showSelectedItemsInList={true}
        data={memoContexts}
        Item={CheckboxContext}
        selectAction={selectContext}
      />
      {!!selectedContexts.length && <Dismensions />}
    </>
  );
}
