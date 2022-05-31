// import { ProgressBarForm } from './common/ProgressBar/ProgressBarForm';
// import { SearchInputForm } from './common/SearchInput/SearchInputForm';
import { DraggableModalProvider } from 'ant-design-draggable-modal';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
// import { useParams } from 'react-router';
// import { NavigationMenu } from './common/NavigationMenu';
// import { About, AboutDiscription, Home, HomeDiscription, News } from './common/NavigationMenu/components';
// import ToDoList from './common/ToDoList';
import "react-widgets/scss/styles.scss";
import { dataToState, IWigetFilterProps, WigetFilter } from './common/WigetFilter';
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
  // contexts = Object.entries(filterData).map( ([context]) => context)
  // dismensions = 
  const filterData: IData  = {
    action: {
      tv: ['item1', 'item2', 'item3'],
      novel: ['item1', 'item2', 'item3'],
      superhero: ['item1', 'item2', 'item3']
    },
    comedy: {
      animation: ['item4', 'item5', 'item6'],
      comics: ['item4', 'item5', 'item6'],
      crime: ['item4', 'item5', 'item6']
    },
    drama: {
      satire: ['item7', 'item8', 'item9'],
      sitcoms: ['item7', 'item8', 'item9'],
      parodies: ['item7', 'item8', 'item9']
    },
    fantasy: {
      romantic: ['item10', 'item11', 'item12'],
      dark: ['item10', 'item11', 'item12'],
      fairytail: ['item10', 'item11', 'item12']
    },
    horror: {
      monster: ['item13', 'item14', 'item15'],
      paranormal: ['item13', 'item14', 'item15'],
      psyhological: ['item13', 'item14', 'item15']
    },
  };

  return (
    
    <div className="app">
      {/* <ProgressBarForm /> */}
      {/* <SearchInputForm array={array} /> */}
      {/* <ToDoList /> */}
      {/* <NavigationMenu items={menuitems}/> */}
      <Provider store={store}>
        <DraggableModalProvider >    
          <WigetFilter data={filterData} />
        </DraggableModalProvider>
      </Provider>
    </div>
    
  );
}