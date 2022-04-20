import { ProgressBarForm } from './common/ProgressBarForm';
import { SearchInput } from './common/SearchInput';
import { ESearchIputModes as SearchIputModes } from './common/SearchInput';

export default function App() {

  return (
    <>
      <ProgressBarForm />
      <SearchInput
        placeholder="Search"
        mode={SearchIputModes.Immediate}
        onSearch={((e) => console.log(e?.target.value))} 
      />
    </>
  );
}