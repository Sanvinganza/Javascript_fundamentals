import { IState } from "../../redux/reducer";

export const getValueContextSelector = (category: string) => {
  
  return (state: IState) => state.contexts
    .filter( context => context.category === category)[0]
    .checked;
};
