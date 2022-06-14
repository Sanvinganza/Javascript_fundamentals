import { Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Multiselect } from "react-widgets/cjs";
import { IItem } from "./Contexts";
import { selectItem } from "./redux/actions";
import { getItemsSelector } from "./selectors/Items/getItemsSelector";
import { getValueItemSelector } from "./selectors/Items/getValueItemSelector";
import { SearchOutlined } from '@ant-design/icons';
import { getCompletedItemsSelector } from "./selectors/Items/getCompletedItemsSelector";
import { useState } from "react";

const arrayCompletedItems: Array<string> = [];

const CheckboxItem = ({item}: IItem) => {
  const checked = useSelector(getValueItemSelector(item));


  return <Checkbox checked={checked}>{item}</Checkbox>;
};
export function Items () {
  const dispatch = useDispatch();
  const items = useSelector(getItemsSelector());
  const completedItems = useSelector(getCompletedItemsSelector());
  const myFilter1 = () => (item: string) => {console.log(item); return item;};
  const myFilter2 = () => (item: string) => {console.log(item); return item;};

  const [filter, setFilter] = useState(myFilter1);

  return (
    <>
      <SearchOutlined />
      <Button onClick={() => setFilter(myFilter2)}>[A-Z]</Button>
      <Multiselect
        onSelect={(item: string) => {
          if(arrayCompletedItems.includes(item)) {
            dispatch(selectItem(item, false));
            arrayCompletedItems.splice(arrayCompletedItems.indexOf(item), 1);
          } else {
            dispatch(selectItem(item, true));
            arrayCompletedItems.push(item);
          }
        }}
        filter={filter}
        value={completedItems.map(item => item.name)}
        showSelectedItemsInList={true}
        data={items.map(item => item.name)}
        renderListItem={({item}: IItem) => <CheckboxItem item={item}/>}
      />
    </>
  );
}