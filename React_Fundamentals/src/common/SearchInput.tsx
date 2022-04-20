import { ChangeEvent, FC } from "react";

type IOnSearch = (e?: { target: HTMLInputElement }) => void;

export enum ESearchIputModes {
    Immediate = "Immediate",
    onPress = "onPress",
    withDelay = "withDelay"
}

export interface ISearchInput {
    placeholder: string,
    mode: ESearchIputModes,
    onSearch: IOnSearch
}

export const SearchInput: FC<ISearchInput> = ({ placeholder, mode, onSearch }: ISearchInput) => {
  const onChange =
        mode === "Immediate" ? (e: { target: HTMLInputElement }) => onSearch(e) :
          mode === "withDelay" ? ((e: ChangeEvent) => setTimeout(onSearch(e), 1000)) :
            undefined;

  const onClick = mode === "onPress" ? (e: { target: HTMLInputElement }) => onSearch(e) : undefined;

  return (
    <form>
      <fieldset>
        <legend>Search Input</legend>
        <label htmlFor="search-input">search-input</label>
        <input
          id="search-input"
          placeholder={placeholder}
          onChange={onChange}
          onClick={onClick}
        />
      </fieldset>
    </form>
  );
};