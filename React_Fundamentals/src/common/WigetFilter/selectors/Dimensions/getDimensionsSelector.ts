import { useSelector } from "react-redux";
import { IState } from "../../redux/reducer";

export const getDimensionsSelector = () => {
  return useSelector((state: IState) => state.contexts
    .filter( context => context.checked)
    .map( context => context.dimensions)
    .flat(2));
};