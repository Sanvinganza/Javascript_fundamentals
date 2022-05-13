// import { ProgressBarForm } from './common/ProgressBar/ProgressBarForm';
// import { SearchInputForm } from './common/SearchInput/SearchInputForm';
import { NavigationMenu } from './common/NavigationMenu';
// import ToDoList from './common/ToDoList';

export default function App() {
  // const array = ['word', 'noun', 'hello', 'world'];
  const menuItems = [
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
          name: "Brealing news",
          path: "breaking",
          items: [
            {
              name: "first news",
            },
            {
              name: "second news",
            },
            {
              name: "third news",
            }
          ]
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