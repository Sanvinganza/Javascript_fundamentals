import { useSelector } from "react-redux";
import { IState } from "../../redux/reducer";

export const getValueItemSelector = (name: string) => {
  return useSelector((state: IState) => state.contexts
    .filter(context => context.checked)
    .map(context => context.dimensions )
    .flat(2)
    .filter(dismension => dismension.checked)
    .map(dimension => dimension.items)
    .flat(2)
    .filter(item => item.name === name)[0]
    .checked
  );
};
