import { useSelector } from "react-redux";
import { IState } from "../redux/reducer";

export const getCompletedContextsSelector = () => {
  console.log('getCompletedContextsSelector');
  return useSelector((state: IState) => state.contexts
    .filter( (context) => context.checked === true));
};