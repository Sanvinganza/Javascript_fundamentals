import { Checkbox } from 'antd';
import { useSelector } from 'react-redux';
import { IItem } from './Contexts';
import { Items } from './Items';
import { getDimensionsSelector } from './selectors/Dimensions/getDimensionsSelector';
import { getIsDimensionSelectedSelector } from './selectors/Dimensions/getIsDimensionSelectedSelector';
import { useMemo } from 'react';
import { selectDimension } from './redux/actions';
import { IDimension } from './redux/reducer';
import { FilterMultiselect } from './FilterMultiselect';

const CheckboxDimension = ({item}: IItem) => {
  const checked = useSelector(getIsDimensionSelectedSelector(item));
  return <Checkbox checked={checked}>{item}</Checkbox>;
};

export function Dismensions () {
  const dimensions = getDimensionsSelector();
  const selectedDimensions = dimensions.filter(dimension => dimension.checked);
  const memoDimensions = useMemo(() => dimensions.map((dimension: IDimension) => dimension.subcategory), [dimensions]);

  return (
    <>
      <h2>DISMENSIONS</h2> 
      <FilterMultiselect
        value={selectedDimensions.map((selectedDimension: IDimension) => selectedDimension.subcategory)}
        showSelectedItemsInList={true}
        data={memoDimensions}
        Item={CheckboxDimension}
        showPlaceholderWithValues={true}
        selectAction={selectDimension}
        selectedItems={selectedDimensions.map((selectedDimension: IDimension) => selectedDimension.subcategory)}
      />
      {!!selectedDimensions.length && <Items />}
    </>
  );
}
