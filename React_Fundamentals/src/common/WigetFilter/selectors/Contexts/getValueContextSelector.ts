import { useSelector } from "react-redux";
import { IState } from "../../redux/reducer";

export const getValueContextSelector = (category: string) => {
  return useSelector((state: IState) => state.contexts
    .filter( context => context.category === category)[0]
    .checked);
};
