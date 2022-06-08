import { useSelector } from "react-redux";
import { IState } from "../../redux/reducer";

export const getCompletedContextsSelector = () => {
  return useSelector((state: IState) => state.contexts
    .filter(context => context.checked));
};