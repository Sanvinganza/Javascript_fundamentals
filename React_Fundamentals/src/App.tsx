// import { ProgressBarForm } from './common/ProgressBar/ProgressBarForm';
// import { SearchInputForm } from './common/SearchInput/SearchInputForm';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
// import { useParams } from 'react-router';
// import { NavigationMenu } from './common/NavigationMenu';
// import { About, AboutDiscription, Home, HomeDiscription, News } from './common/NavigationMenu/components';
// import ToDoList from './common/ToDoList';
import "react-widgets/scss/styles.scss";
import { WigetFilter } from './common/WigetFilter';
import { store } from './common/WigetFilter/redux/store';

export interface IMenuItem {
  element: ReactNode,
  path: string,
  items?: IMenuItem[]
}
export interface IData {
  [key: string]: {
    [key: string]: Array<string>
  }
}
export default function App() {
  // const array = ['word', 'noun', 'hello', 'world'];
  // interface INewsitem {
  //   text: string
  // }
  // const Newsitem = ({text}: INewsitem) => {
  //   const param = useParams();
  //   return <h3>{text}{param.id}</h3>;
  // };
  
  // const menuitems: IMenuitem[] = [
  //   {
  //     element: <Home />,
  //     path: "home",
  //     items: [
  //       {
  //         element: <HomeDiscription />,
  //         path: "discription"
  //       }
  //     ]
  //   },
  //   {
  //     element: <News />,
  //     path: "news",
  //     items: [
  //       {
  //         element: <Newsitem text="first news" />, 
  //         path: ":id"
  //       }
  //     ]
  //   },
  //   {
  //     element: <About />,
  //     path: "about",
  //     items: [
  //       {
  //         element: <AboutDiscription />,
  //         path: "discription"
  //       }
  //     ]
  //   }
  // ];
  const filterData: IData  = {
    action: {
      action_section_1: ['action_section_1_Item_3', 'action_section_1_Item_2', 'action_section_1_Item_1'],
      action_section_2: ['action_section_2_Item_1', 'action_section_2_Item_2', 'action_section_2_Item_3'],
      action_section_3: ['action_section_3_Item_1', 'action_section_3_Item_2', 'action_section_3_Item_3']
    },
    comedy: {
      comedy_section_1: ['comedy_section_1_Item_1', 'comedy_section_1_Item_2', 'comedy_section_1_Item_3'],
      comedy_section_2: ['comedy_section_2_Item_1', 'comedy_section_2_Item_2', 'comedy_section_2_Item_3'],
      comedy_section_3: ['comedy_section_3_Item_1', 'comedy_section_3_Item_2', 'comedy_section_3_Item_3']
    },
    drama: {
      drama_section_1: ['drama_section_1_Item_1', 'drama_section_1_Item_2', 'drama_section_1_Item_3'],
      drama_section_2: ['drama_section_2_Item_1', 'drama_section_2_Item_2', 'drama_section_2_Item_3'],
      drama_section_3: ['drama_section_3_Item_1', 'drama_section_3_Item_2', 'drama_section_3_Item_3']
    },
    fantasy: {
      fantasy_section_1: ['fantasy_section_1_Item_1', 'fantasy_section_1_Item_2', 'fantasy_section_1_Item_3'],
      fantasy_section_2: ['fantasy_section_2_Item_1', 'fantasy_section_2_Item_2', 'fantasy_section_2_Item_3'],
      fantasy_section_3: ['fantasy_section_3_Item_1', 'fantasy_section_3_Item_2', 'fantasy_section_3_Item_3']
    },
    horror: {
      horror_section_1: ['horror_section_1_Item_1', 'horror_section_1_Item_2', 'horror_section_1_Item_3'],
      horror_section_2: ['horror_section_2_Item_1', 'horror_section_2_Item_2', 'horror_section_2_Item_3'],
      horror_section_3: ['horror_section_3_Item_1', 'horror_section_3_Item_2', 'horror_section_3_Item_3']
    },
  };

  return (
    
    <div className="app">
      {/* <ProgressBarForm /> */}
      {/* <SearchInputForm array={array} /> */}
      {/* <ToDoList /> */}
      {/* <NavigationMenu items={menuitems}/> */}
      <Provider store={store}>
        <WigetFilter data={filterData} />
      </Provider>
    </div>
    
  );
}