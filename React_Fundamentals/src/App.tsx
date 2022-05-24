// import { ProgressBarForm } from './common/ProgressBar/ProgressBarForm';
// import { SearchInputForm } from './common/SearchInput/SearchInputForm';
import { ReactNode } from 'react';
import { useParams } from 'react-router';
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
  const NewsItem = ({text}: INewsItem) => {
    const param = useParams();
    return <h3>{text}{param.id}</h3>;
  };
  
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
          path: ":id"
        }
      ]
    },
    {
      element: <About />,
      path: "about",
      items: [
        {
          element: <AboutDiscription />,
          path: "discription"
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