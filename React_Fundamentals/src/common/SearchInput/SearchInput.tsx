import { FC, useCallback, useState } from "react";

export enum ESearchIputModes {
  immediate = "immediate",
  onPress = "onPress",
  withDelay = "withDelay"
}

interface ISearchInput {
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

  },[searchValue, mode]);

  const onChange = useCallback((e) => {
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
  }, [mode]);

  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <fieldset>
        <legend>Search Input</legend>
        <input
          aria-label="search-input"
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