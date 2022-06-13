import { IState } from "../../redux/reducer";

export const getCompletedContextsSelector = () => {
  return (state: IState) => state.contexts
    .filter(context => context.checked);
};