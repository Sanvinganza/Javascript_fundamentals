// import { ProgressBarForm } from './common/ProgressBar/ProgressBarForm';
// import { SearchInputForm } from './common/SearchInput/SearchInputForm';
import { NavigationMenu } from './common/NavigationMenu';
// import ToDoList from './common/ToDoList';

export default function App() {
  // const array = ['word', 'noun', 'hello', 'world'];
  const menuItems = [
    {
      name: "Home",
      link: "/home",
      items: []
    },
    {
      name: "News",
      items: [
        {
          name: "Brealing news",
          link: "/news/breaking",
          items: []
        }
      ]
    }
  ];
  return (
    <div className="app">
      {/* <ProgressBarForm /> */}
      {/* <SearchInputForm array={array} /> */}
      {/* <ToDoList /> */}
      <NavigationMenu items={menuItems}/>
    </div>
  );
}