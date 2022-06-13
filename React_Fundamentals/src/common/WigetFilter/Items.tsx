import { Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Multiselect } from "react-widgets/cjs";
import { IItem } from "./Contexts";
import { selectItem } from "./redux/actions";
import { getItemsSelector } from "./selectors/Items/getItemsSelector";
import { getValueItemSelector } from "./selectors/Items/getValueItemSelector";
import { SearchOutlined } from '@ant-design/icons';
import { getCompletedItemsSelector } from "./selectors/Items/getCompletedItemsSelector";

const arrayCompletedItems: Array<string> = [];

const CheckboxItem = ({item}: IItem) => {
  const checked = useSelector(getValueItemSelector(item));


  return <Checkbox checked={checked}>{item}</Checkbox>;
};

export function Items () {
  const items = useSelector(getItemsSelector());
  const dispatch = useDispatch();
  const completedItems = useSelector(getCompletedItemsSelector());

  return (
    <div className="items-container">
      <SearchOutlined />
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
        value={completedItems.map(item => item.name)}
        showSelectedItemsInList={true}
        data={items.map(item => item.name)}
        renderListItem={({item}: IItem) => <CheckboxItem item={item}/>}
      />
    </div>
  );
}