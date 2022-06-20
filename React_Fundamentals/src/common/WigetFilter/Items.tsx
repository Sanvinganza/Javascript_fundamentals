import { Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Combobox, Multiselect } from "react-widgets/cjs";
import { IItem } from "./Contexts";
import { selectItem } from "./redux/actions";
import { getItemsSelector } from "./selectors/Items/getItemsSelector";
import { getIsItemSelectedSelector } from "./selectors/Items/getIsItemSelectedSelector";
import { SearchOutlined } from '@ant-design/icons';
import { getSelectedItemsSelector } from "./selectors/Items/getSelectedItemsSelector";
import { useCallback, useState } from "react";
import { getReverseSortedDataSelector } from "./selectors/Items/getReverseSortedDataSelector";
import { getSortedDataSelector } from "./selectors/Items/getSortedDataSelector";
import { SortButton, SortingMode } from "./SortButton";

const arraySelectedItems: Array<string> = [];

const Item = ({item}: IItem) => {
  const checked = useSelector(getIsItemSelectedSelector(item));
  return <Checkbox checked={checked}>{item}</Checkbox>;
};

export function Items () {
  const dispatch = useDispatch();

  const selectedItems = useSelector(getSelectedItemsSelector()).map(selectedItem => selectedItem.name);
  
  const data = useSelector(getItemsSelector());
  const reverseSortedData = useSelector(getReverseSortedDataSelector());
  const sortedData = useSelector(getSortedDataSelector());
  
  const [selectFilter, setSelectFilter] = useState('');
  const [mode, setMode] = useState(SortingMode.unsorted);

  return (
    <>
      <div className="optionsItems">
        <SortButton mode={mode} setMode={setMode}/>
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
          onSelect={useCallback((item: string) => {
            if(arraySelectedItems.includes(item)) {
              dispatch(selectItem(item, false));
              arraySelectedItems.splice(arraySelectedItems.indexOf(item), 1);
            } else {
              dispatch(selectItem(item, true));
              arraySelectedItems.push(item);
            }
          }, [data, reverseSortedData, sortedData])}
          value={selectedItems}
          filter={selectFilter}
          showPlaceholderWithValues={true}
          showSelectedItemsInList={true}
          data={mode === 'reverseSorted'?
            reverseSortedData: mode === 'sorted'?
              sortedData: data}
          renderListItem={({item}: IItem) => <Item item={item}/>}
          open
        />
      </div>
    </>
  );
}