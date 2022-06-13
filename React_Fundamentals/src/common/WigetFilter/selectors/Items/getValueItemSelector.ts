import { IState } from "../../redux/reducer";

export const getValueItemSelector = (name: string) => {
  return (state: IState) => state.contexts
    .map(context => context.dimensions )
    .flat(2)
    .map(dimension => dimension.items)
    .flat(2)
    .filter(item => item.name === name)[0]
    .checked;
};
