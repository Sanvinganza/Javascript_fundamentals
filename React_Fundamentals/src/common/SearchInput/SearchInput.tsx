import { FC, useCallback, useState } from "react";

export enum ESearchInputModes {
  immediate = "immediate",
  onPress = "onPress",
  withDelay = "withDelay"
}

interface ISearchInput {
  placeholder: string,
  mode: ESearchInputModes,
  onSearch: (value: string) => void
}

export const SearchInput: FC<ISearchInput> = ({ placeholder, mode, onSearch }: ISearchInput) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleKeyDown = useCallback((e) => {
    if(e.key.toString() === 'Enter' && ESearchInputModes.onPress === mode) {
      onSearch(searchValue);
    }

  },[searchValue, mode]);

  const onChange = useCallback((e) => {
    switch (mode) {
    case ESearchInputModes.immediate:
      onSearch(e.target.value);
      break;
    case ESearchInputModes.withDelay:
      setTimeout(() => onSearch(e.target.value), 1000);
      break;
    case ESearchInputModes.onPress:
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