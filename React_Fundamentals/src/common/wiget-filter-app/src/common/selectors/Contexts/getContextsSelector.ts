import { IState } from "../../redux/reducer";

export const getContextsSelector = () => {
  return (state: IState) => state.contexts;
};