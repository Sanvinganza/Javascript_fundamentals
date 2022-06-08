import { useSelector } from "react-redux";
import { IState } from "../../redux/reducer";

export const getItemsSelector = () => {
  return useSelector((state: IState) => state.contexts
    .filter( context => context.checked)
    .map( context => context.dimensions)
    .flat(2)
    .filter( dimension => dimension.checked)
    .map( dimension => dimension.items)
    .flat(2)
  );
};