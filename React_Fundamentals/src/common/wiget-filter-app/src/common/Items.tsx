import { useSelector } from "react-redux";
import { Combobox } from "react-widgets/cjs";
import { getItemsSelector } from "./selectors/Items/getItemsSelector";
import { getSelectedItemsSelector } from "./selectors/Items/getSelectedItemsSelector";
import { useState } from "react";
import { getReverseSortedDataSelector } from "./selectors/Items/getReverseSortedDataSelector";
import { getSortedDataSelector } from "./selectors/Items/getSortedDataSelector";
import { SortButton, SortingMode } from "./SortButton";
import { IItems } from "./redux/reducer";
import { FilterMultiselect } from "./FilterMultiselect";
import { IItem } from "./Contexts";
import { Checkbox } from "antd";
import { getIsItemSelectedSelector } from "./selectors/Items/getIsItemSelectedSelector";
import { selectItem } from "./redux/actions";

export function Items () {
  const selectedItems = useSelector(getSelectedItemsSelector()).map((selectedItem: IItems) => selectedItem.name);
  
  const data = useSelector(getItemsSelector());
  const reverseSortedData = useSelector(getReverseSortedDataSelector());
  const sortedData = useSelector(getSortedDataSelector());
  
  const [selectFilter, setSelectFilter] = useState('startsWith');
  const [mode, setMode] = useState(SortingMode.unsorted);

  const Item = ({item}: IItem) => {
    const checked = useSelector(getIsItemSelectedSelector(item));
    return <Checkbox checked={checked}>{item}</Checkbox>;
  };
  
  return (
    <>
      <div className="optionsItems">
        <SortButton mode={mode} setMode={setMode}/>
        <Combobox
          data={['**', '*_*_', '*_']}
          defaultValue={'*_'}
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
        <FilterMultiselect 
          showPlaceholderWithValues={true}
          showSelectedItemsInList={true}
          data={mode === 'reverseSorted'?
            reverseSortedData: mode === 'sorted'?
              sortedData: data}
          open={true}
          filter={selectFilter}
          value={selectedItems}
          Item={Item}
          selectAction={selectItem}
        />
      </div>
    </>
  );
}