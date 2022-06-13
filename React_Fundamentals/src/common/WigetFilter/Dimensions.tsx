import { Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Multiselect } from 'react-widgets/cjs';
import { IItem } from './Contexts';
import { Items } from './Items';
import { selectDimension } from './redux/actions';
import { getCompletedDimensionsSelector } from './selectors/Dimensions/getCompletedDimensionsSelector';
import { getDimensionsSelector } from './selectors/Dimensions/getDimensionsSelector';
import { getValueDimensionSelector } from './selectors/Dimensions/getValueDimensionSelector';

const arrayCompletedDimensions: Array<string> = [];

const CheckboxDimension = ({item}: IItem) => {
  const checked = useSelector(getValueDimensionSelector(item));

  return <Checkbox checked={checked}>{item}</Checkbox>;
};

export function Dismensions () {
  const dispatch = useDispatch();

  const dimensions = getDimensionsSelector();
  const completedDimensions = getCompletedDimensionsSelector();
  
  return (
    <>
      <h2>DISMENSIONS</h2> 
      <Multiselect
        onSelect={(item: string) => {
          if(arrayCompletedDimensions.includes(item)) {
            dispatch(selectDimension(item, false));
            arrayCompletedDimensions.splice(arrayCompletedDimensions.indexOf(item), 1);
          } else {
            dispatch(selectDimension(item, true));
            arrayCompletedDimensions.push(item);
          }
        }}
        value={completedDimensions.map( completedDimension => completedDimension.subcategory)}
        showSelectedItemsInList={true}
        data={dimensions.map(dimension => dimension.subcategory)}
        renderListItem={({item}: IItem) => <CheckboxDimension item={item}/>}
      />
      {completedDimensions.length !== 0?
        <Items />
        :
        null
      }
    </>
  );
}
