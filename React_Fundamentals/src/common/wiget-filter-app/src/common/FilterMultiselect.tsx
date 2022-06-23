import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Multiselect } from "react-widgets/cjs";
import { IItem } from "./Contexts";
import { IState } from "./redux/reducer";

interface IFilterMultiselectProps {
  data?: string[],
  value?: string[],
  showPlaceholderWithValues?: boolean,
  showSelectedItemsInList?: boolean,
  filter?: string,
  open?: boolean,
  Item: ({item}: IItem) => JSX.Element,
  selectedItems?: string[],
  selectAction: (subcategory: string, value: boolean) =>  {
    type: string,
    payload: {
        state?: IState,
        category?: string,
        subcategory?: string,
        value?: boolean,
        name?: string
    }
  }
}

const arraySelectedItems: Array<string> = [];

export const FilterMultiselect = (
  {data, value, showPlaceholderWithValues, filter, 
    showSelectedItemsInList, open, Item, selectAction}: IFilterMultiselectProps
) => {
  const dispatch = useDispatch();

  return <Multiselect
    onSelect={useCallback((item: string) => {
      if(arraySelectedItems.includes(item)) {
        dispatch(selectAction(item, false));
        arraySelectedItems.splice(arraySelectedItems.indexOf(item), 1);
      } else {
        dispatch(selectAction(item, true));
        arraySelectedItems.push(item);
      }
    }, [data])}
    value={value}
    filter={filter}
    showPlaceholderWithValues={showPlaceholderWithValues}
    showSelectedItemsInList={showSelectedItemsInList}
    data={data}
    renderListItem={({item}: IItem) => <Item item={item}/>}
    open={open}
  />;
};