import { useState, useCallback, useMemo } from 'react';
import { SearchInput } from './SearchInput';
import { ESearchIputModes as SearchIputModes} from './SearchInput';

export interface SearchInputFormProps {
    array: Array<string>
}

export function SearchInputForm(props: SearchInputFormProps) {
  const array: Array<string> = props.array;
  const [searchResult, setSearchResult] = useState(array);
  const [mode, setMode] = useState(SearchIputModes.withDelay);

  const onSearchHandler = useCallback((value) => {
    setSearchResult(() => array.filter(el => el.includes(value)));
  }, [array]);

  const memoArrayResult = useMemo(() => searchResult.map(result => {
    return (<p key={result}>{result}</p>);
  }), [searchResult]);

  return (
    <>
      <SearchInput
        placeholder="Search"
        mode={mode}
        onSearch={onSearchHandler}
      />
      <form>
        <label htmlFor="immediate">immediate</label>
        <input id="immediate" type='radio' name="mode" onClick={() =>
          setMode(SearchIputModes.immediate)
        } />

        <label htmlFor="withDelay">withDelay</label>
        <input id="withDelay" type='radio' name="mode" onClick={() =>
          setMode(SearchIputModes.withDelay)
        } />

        <label htmlFor="onPress">onPress</label>
        <input id="onPress" type='radio' name="mode" onClick={() =>
          setMode(SearchIputModes.onPress)
        } />
      </form>
      {memoArrayResult}
    </>
  );
}
