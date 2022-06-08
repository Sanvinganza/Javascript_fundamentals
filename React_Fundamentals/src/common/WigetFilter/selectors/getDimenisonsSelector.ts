import { useSelector } from "react-redux";
import { IState } from "../redux/reducer";

export const getDismensionsSelector = () => {
  return useSelector((state: IState) => state.contexts
    .filter( context => context.checked === true)
    .map( context => context.dismensions)
    .flat(2));
};