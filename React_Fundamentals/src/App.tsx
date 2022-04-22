import { useCallback, useState } from 'react';
import { ProgressBarForm } from './common/ProgressBarForm';
import { SearchInput } from './common/SearchInput';
import { ESearchIputModes as SearchIputModes } from './common/SearchInput';

export default function App() {
  const array = ['word', 'noun'];
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
      
      <input id="immediate" type='checkbox' onClick={() =>
        setMode(SearchIputModes.immediate)
      }/>

      <input id="withDelay" type='checkbox' onClick={() =>
        setMode(SearchIputModes.withDelay)
      }/>
      <input id="onPress" type='checkbox' onClick={() =>
        setMode(SearchIputModes.onPress)
      }/>
      {
        searchResult.map( result => {
          return <p key={result}>{result}</p>;
        } )
      }
    </>
  );
}