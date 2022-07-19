import { IState } from "../../redux/reducer";

export const getSelectedContextsSelector = () => {
  return (state: IState) => state.contexts
    .filter(context => context.checked);
};