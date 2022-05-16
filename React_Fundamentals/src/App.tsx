// import { ProgressBarForm } from './common/ProgressBar/ProgressBarForm';
// import { SearchInputForm } from './common/SearchInput/SearchInputForm';
import { NavigationMenu } from './common/NavigationMenu';
// import ToDoList from './common/ToDoList';

export default function App() {
  // const array = ['word', 'noun', 'hello', 'world'];
  const menuItems: any = [
    {
      name: "Home",
      path: "home",
      items: []
    },
    {
      name: "News",
      path: "news",
      items: [
        {
          name: "first news",
          id: 1
        },
        {
          name: "second news",
          id: 2
        },
        {
          name: "third news",
          id: 3
        }
      ]
    },
    {
      name: "About",
      path: "about",
      items: []
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