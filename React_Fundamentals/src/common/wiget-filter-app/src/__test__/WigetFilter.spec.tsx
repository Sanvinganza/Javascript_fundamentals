import { render } from "@testing-library/react";
import { DraggableModalProvider } from "ant-design-draggable-modal";

describe('WigetFilter component', () => {
  it('modal show a WigetFilter and a close button', () => {
    const handleOpen = jest.fn();
    const handleClose = jest.fn();

    const modal = render(
      <DraggableModalProvider>
        
      </DraggableModalProvider>
    )
  })
})