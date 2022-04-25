import { useCallback, useState } from 'react';
import { ProgressBarForm } from './common/ProgressBarForm';
import { SearchInput } from './common/SearchInput';
import { ESearchIputModes as SearchIputModes } from './common/SearchInput';
import "./styles.scss";

export default function App() {
  const array = ['word', 'noun', 'hello', 'world'];
  const [searchResult, setSearchResult] = useState(array);
  const [mode, setMode] = useState(SearchIputModes.withDelay);

  const onSearchHandler = useCallback((value) => {
    setSearchResult(() => array.filter(el => el.includes(value)));
  }, [searchResult, array]);
  
  return (
    <>
      <ProgressBarForm />
      <SearchInput
        placeholder="Search"
        mode={mode}
        onSearch={onSearchHandler}
      />
      <form className="search-input_form">
        <label htmlFor="immediate">immediate</label>
        <input id="immediate" type='checkbox' onClick={() =>
          setMode(SearchIputModes.immediate)
        } />

        <label htmlFor="withDelay">withDelay</label>
        <input id="withDelay" type='checkbox' onClick={() =>
          setMode(SearchIputModes.withDelay)
        } />

        <label htmlFor="onPress">onPress</label>
        <input id="onPress" type='checkbox' onClick={() =>
          setMode(SearchIputModes.onPress)
        } />
      </form>
      {
        searchResult.map(result => {
          return <p key={result}>{result}</p>;
        })
      }
    </>
  );
}