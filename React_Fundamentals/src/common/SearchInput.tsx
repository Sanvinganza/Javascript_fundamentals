import { FC, useCallback, useState } from "react";

export enum ESearchIputModes {
  immediate = "immediate",
  onPress = "onPress",
  withDelay = "withDelay"
}

export interface ISearchInput {
  placeholder: string,
  mode: ESearchIputModes,
  onSearch: (value: string) => void
}

export const SearchInput: FC<ISearchInput> = ({ placeholder, mode, onSearch }: ISearchInput) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleKeyDown = useCallback((e) => {
    if(e.key.toString() === 'Enter' && ESearchIputModes.onPress === mode) {
      onSearch(searchValue);
    }
    
  },[searchValue]);

  const onChange = useCallback((e) => {
    e.preventDefault();
    switch (mode) {
    case ESearchIputModes.immediate:
      onSearch(e.target.value);
      break;
    case ESearchIputModes.withDelay:
      setTimeout(() => onSearch(e.target.value), 1000);
      break;
    case ESearchIputModes.onPress:
      setSearchValue(e.target.value);
      break;
    }
  }, [searchValue, mode]);

  return (
    <form>
      <fieldset>
        <legend>Search Input</legend>
        <input
          id="search-input"
          placeholder={placeholder}
          onChange={onChange}
          type="search"
          onKeyDown={handleKeyDown}
        />
      </fieldset>
    </form>
  );
};