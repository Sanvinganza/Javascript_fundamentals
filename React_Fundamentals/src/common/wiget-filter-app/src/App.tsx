import { Provider } from 'react-redux';
import { WigetFilter } from './common/index';
import { store } from './common/redux/store';
import "react-widgets/scss/styles.scss";

export interface IData {
  [key: string]: {
    [key: string]: Array<string>
  }
}

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

export default function App() {
  return (
    <Provider store={store}>
      <WigetFilter data={filterData} />
    </Provider>
  );
}