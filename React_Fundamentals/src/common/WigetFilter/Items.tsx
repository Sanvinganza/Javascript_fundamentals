import { Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Combobox, Listbox } from "react-widgets/cjs";
import { IItem } from "./Contexts";
import { selectItem } from "./redux/actions";
import { getItemsSelector } from "./selectors/Items/getItemsSelector";
import { getValueItemSelector } from "./selectors/Items/getValueItemSelector";
import { SearchOutlined } from '@ant-design/icons';
// import { getCompletedItemsSelector } from "./selectors/Items/getCompletedItemsSelector";
import { useState } from "react";

const arrayCompletedItems: Array<string> = [];

const Item = ({item}: IItem) => {
  const checked = useSelector(getValueItemSelector(item));
  console.log(checked);
  return <Checkbox checked={checked}>{item}</Checkbox>;
};

export function Items () {
  const dispatch = useDispatch();
  // const completedItems = useSelector(getCompletedItemsSelector());
  const items = useSelector(getItemsSelector()).map(item => item.name);

  const [selectFilter, setSelectFilter] = useState('');
  
  return (
    <>
      <div className="optionsItems">
        <SearchOutlined />
        <Button onClick={() => {console.log();}}>[A-Z]</Button>
        <Combobox
          data={['**', '*_*_', '*_']}
          defaultValue={'**'}
          onSelect={(item: string) => {
            switch(item) {
            case '*_': setSelectFilter('startsWith'); break;
            case '**': setSelectFilter('eq'); break;
            case '*_*_': setSelectFilter('contains'); break;
            }
          }}
        />
      </div>
      
      <Listbox
        onSelect={(item: string) => {
          if(arrayCompletedItems.includes(item)) {
            dispatch(selectItem(item, false));
            arrayCompletedItems.splice(arrayCompletedItems.indexOf(item), 1);
          } else {
            dispatch(selectItem(item, true));
            arrayCompletedItems.push(item);
          }
        }}
        multiple
        // filter={selectFilter}
        data={items}
        renderItem={({item}: IItem) => <Item item={item}/>}
      />
    </>
  );
}