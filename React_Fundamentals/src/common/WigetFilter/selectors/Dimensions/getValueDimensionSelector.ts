import { IState } from "../../redux/reducer";

export const getValueDimensionSelector = (subcategory: string) => {
  return (state: IState) => state.contexts
    .map(context => context.dimensions )
    .flat(2)
    .filter(dismension => dismension.subcategory === subcategory )[0]
    .checked;
};
 