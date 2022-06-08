import { Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { Multiselect } from "react-widgets/cjs";
import { IItem } from "./Contexts";
import { selectItem } from "./redux/actions";
import { getItemsSelector } from "./selectors/Items/getItemsSelector";
import { getValueItemSelector } from "./selectors/Items/getValueItemSelector";
import { SearchOutlined } from '@ant-design/icons';

const arrayCompletedItems: Array<string> = [];

const CheckboxItem = ({item}: IItem) => {
  const checked = getValueItemSelector(item);

  return <Checkbox checked={checked}>{item}</Checkbox>;
};

export function Items () {
  const items = getItemsSelector();
  const dispatch = useDispatch();

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
        showSelectedItemsInList={true}
        data={items.map(item => item.name)}
        renderListItem={({item}: IItem) => <CheckboxItem item={item}/>}
      />
    </div>
  );
}