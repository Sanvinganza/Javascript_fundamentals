import { useSelector } from "react-redux";
import { IState } from "../../redux/reducer";

export const getValueDimensionSelector = (subcategory: string) => {
  return useSelector((state: IState) => state.contexts
    .filter(context => context.checked)
    .map(context => context.dimensions )
    .flat(2)
    .filter(dismension => dismension.subcategory === subcategory )[0]
    .checked
  );
};
