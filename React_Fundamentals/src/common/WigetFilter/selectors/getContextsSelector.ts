import { useSelector } from "react-redux";
import { IState } from "../redux/reducer";

export const getContextsSelector = () => {
  return useSelector((state: IState) => state.contexts);
};