import { Checkbox } from "antd";
import { Multiselect } from "react-widgets/cjs";
import { IItem } from "./Contexts";
import { IItems } from "./redux/reducer";

interface IItemsProps {
  items: IItems[]
}

export function Items ({items}: IItemsProps) {

  return (
    <>
      <Multiselect
        busy={false}
        showSelectedItemsInList={true}
        data={items.map( item => item.name)}
        renderListItem={ ({item}: IItem) => <Checkbox>{item}</Checkbox> }
      />
    </>
  );
}