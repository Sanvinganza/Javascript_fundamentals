import { Button } from 'antd';
import * as React from 'react';
import 'antd/dist/antd.css';
import { DraggableModal } from 'ant-design-draggable-modal';
import { useDispatch } from 'react-redux';
import { setState } from './redux/actions';
import { IData } from '../../App';
import { Contexts } from './Contexts';

export interface IWigetFilterProps  {
    data: IData
}

export const dataToState = (data: IData) => {
  return {
    contexts: Object.entries(data).map( context => {
      return {
        category: context[0],
        checked: false,
        dimensions: Object.entries(context[1]).map( dimensions => {
          return {
            subcategory: dimensions[0],
            checked: false,
            items: dimensions[1].map( item => {
              return {
                checked: false,
                name: item
              };
            })};
        })};
    })
  };
};

export function WigetFilter ({data}: IWigetFilterProps) {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const dispatch = useDispatch();
  const state = dataToState(data);

  const showModal = () => {
    dispatch(setState(state));
    setIsModalVisible(true);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
          Open Filter
      </Button>
      <DraggableModal 
        footer={false} 
        title="FILTERS" 
        visible={isModalVisible} 
        onCancel={handleCancel}
      >
        <Contexts />
      </DraggableModal>
    </>
  );
}