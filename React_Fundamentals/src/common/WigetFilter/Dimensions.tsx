import { Checkbox } from 'antd';
import { Multiselect } from 'react-widgets/cjs';

export function Dismensions () {
    
  return (
    <>
      <h2>DISMENSIONS</h2> 
      <Multiselect
        busy={false}
        containerClassName="dismensions"
        data={['orange', 'purple', 'red', 'blue1', 'purple1', 'red1', 'blue2', 'purple3', 'red4', 'blue5']}
        renderListItem={ ({item}: any) => <Checkbox>{item}</Checkbox> }
      />
    </>
  );
}
