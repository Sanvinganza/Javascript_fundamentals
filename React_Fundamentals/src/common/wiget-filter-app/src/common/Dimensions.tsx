import { Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Multiselect } from 'react-widgets/cjs';
import { IItem } from './Contexts';
import { Items } from './Items';
import { getSelectedDimensionsSelector } from './selectors/Dimensions/getSelectedDimensionsSelector';
import { getDimensionsSelector } from './selectors/Dimensions/getDimensionsSelector';
import { getIsDimensionSelectedSelector } from './selectors/Dimensions/getIsDimensionSelectedSelector';
import { useCallback, useMemo } from 'react';
import { selectDimension } from './redux/actions';
import { IDimension } from './redux/reducer';

const arraySelectedDimensions: Array<string> = [];

const CheckboxDimension = ({item}: IItem) => {
  const checked = useSelector(getIsDimensionSelectedSelector(item));

  return <Checkbox checked={checked}>{item}</Checkbox>;
};

export function Dismensions () {
  const dispatch = useDispatch();

  const dimensions = getDimensionsSelector();
  const selectedDimensions = getSelectedDimensionsSelector();
  const memoDimensions = useMemo(() => dimensions.map((dimension: IDimension) => dimension.subcategory), [dimensions]);
  return (
    <>
      <h2>DISMENSIONS</h2> 
      <Multiselect
        onSelect={useCallback((item: string) => {
          if(arraySelectedDimensions.includes(item)) {
            dispatch(selectDimension(item, false));
            arraySelectedDimensions.splice(arraySelectedDimensions.indexOf(item), 1);
          } else {
            dispatch(selectDimension(item, true));
            arraySelectedDimensions.push(item);
          }
        }, [memoDimensions])}
        value={selectedDimensions.map((selectedDimension: IDimension) => selectedDimension.subcategory)}
        showSelectedItemsInList={true}
        data={memoDimensions}
        renderListItem={({item}: IItem) => <CheckboxDimension item={item}/>}
      />
      {!!selectedDimensions.length && <Items />}
    </>
  );
}
