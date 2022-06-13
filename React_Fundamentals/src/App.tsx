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
  // contexts = Object.entries(filterData).map( ([context]) => context)
  // dismensions = 
  const filterData: IData  = {
    action: {
      tv: ['item191', 'item21', 'item31'],
      novel: ['item192', 'item22', 'item32'],
      superhero: ['item193', 'item23', 'item33']
    },
    comedy: {
      animation: ['item48', 'item58', 'item686'],
      comics: ['item412', 'item51', 'item68'],
      crime: ['item432', 'item544', 'item65']
    },
    drama: {
      satire: ['item7123', 'item844', 'item923'],
      sitcoms: ['item714', 'item85', 'item596'],
      parodies: ['item733', 'item8564', 'item6966']
    },
    fantasy: {
      romantic: ['item110', 'item111', 'item112'],
      dark: ['item120', 'item131', 'item124'],
      fairytail: ['item105', 'item116', 'item176']
    },
    horror: {
      monster: ['item1533', 'item123', 'item1235'],
      paranormal: ['item1353', 'item142', 'item135'],
      psyhological: ['item133', 'item156', 'item1235']
    },
  };

  return (
    
    <div className="app">
      {/* <ProgressBarForm /> */}
      {/* <SearchInputForm array={array} /> */}
      {/* <ToDoList /> */}
      {/* <NavigationMenu items={menuitems}/> */}
      <Provider store={store}>
        <DraggableModalProvider>    
          <WigetFilter data={filterData} />
        </DraggableModalProvider>
      </Provider>
    </div>
    
  );
}