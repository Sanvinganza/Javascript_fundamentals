// import { ProgressBarForm } from './common/ProgressBar/ProgressBarForm';
// import { SearchInputForm } from './common/SearchInput/SearchInputForm';
import { ReactNode } from 'react';
import { NavigationMenu } from './common/NavigationMenu';
import { About, AboutDiscription, Home, HomeDiscription, News } from './common/NavigationMenu/components';
// import ToDoList from './common/ToDoList';

export interface IMenuItem {
  element: ReactNode,
  path: string,
  items?: IMenuItem[]
}

export default function App() {
  // const array = ['word', 'noun', 'hello', 'world'];
  interface INewsItem {
    text: string
  }
  const NewsItem = ({text}: INewsItem) => <p>{text}</p>;
  const menuItems: IMenuItem[] = [
    {
      element: <Home />,
      path: "home",
      items: [
        {
          element: <HomeDiscription />,
          path: "discription"
        }
      ]
    },
    {
      element: <News />,
      path: "news",
      items: [
        {
          element: <NewsItem text="first news" />, 
          path: ":1"
        },
        {
          element: <NewsItem text="second news" /> ,
          path: ":2"
        },
        {
          element: <NewsItem text="third news" />, 
          path: ":3"
        }
      ]
    },
    {
      element: <About />,
      path: "about",
      items: [
        {
          element: <AboutDiscription />,
          path: "discription",
          items: [
            {
              element:  <NewsItem text="About news" />,
              path: "one"
            }
          ]
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