import { Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Combobox, Multiselect } from "react-widgets/cjs";
import { IItem } from "./Contexts";
import { selectItem } from "./redux/actions";
import { getItemsSelector } from "./selectors/Items/getItemsSelector";
import { getValueItemSelector } from "./selectors/Items/getValueItemSelector";
import { SearchOutlined } from '@ant-design/icons';
import { getCompletedItemsSelector } from "./selectors/Items/getCompletedItemsSelector";
import { useEffect, useMemo, useState } from "react";

const arrayCompletedItems: Array<string> = [];

const Item = ({item}: IItem) => {
  const checked = useSelector(getValueItemSelector(item));
  return <Checkbox checked={checked}>{item}</Checkbox>;
};

export function Items () {
  const dispatch = useDispatch();

  const completedItems = useSelector(getCompletedItemsSelector()).map(completedItem => completedItem.name);
  const data = useSelector(getItemsSelector());

  const [selectFilter, setSelectFilter] = useState('');
  
  // const data = useMemo(() => items.slice().sort(), [items]);

  return (
    <>
      <div className="optionsItems">
        <Button onClick={() => {
          console.log(data);

        }}>[A-Z]</Button>
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
          value={completedItems}
          filter={selectFilter}
          showPlaceholderWithValues={true}
          showSelectedItemsInList={true}
          data={data}
          renderListItem={({item}: IItem) => <Item item={item}/>}
          open
        />
      </div>
    </>
  );
}