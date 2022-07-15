import { useState, useCallback, useMemo } from 'react';
import { SearchInput } from './SearchInput';
import { ESearchInputModes as SearchInputModes} from './SearchInput';

export interface SearchInputFormProps {
  array: Array<string>
}

export function SearchInputForm({array}:SearchInputFormProps) {
  const [searchResult, setSearchResult] = useState(array);
  const [mode, setMode] = useState(SearchInputModes.withDelay);

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
        <input data-testid="immediate" id="immediate" type='radio' name="mode" onClick={() =>
          setMode(SearchInputModes.immediate)
        } />

        <label htmlFor="withDelay">withDelay</label>
        <input data-testid="withDelay" id="withDelay" type='radio' name="mode" onClick={() =>
          setMode(SearchInputModes.withDelay)
        } />

        <label htmlFor="onPress">onPress</label>
        <input data-testid="onPress" id="onPress" type='radio' name="mode" onClick={() =>
          setMode(SearchInputModes.onPress)
        } />
      </form>
      {memoArrayResult}
    </>
  );
}
