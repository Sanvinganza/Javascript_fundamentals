import { configureStore } from "@reduxjs/toolkit";
import { render, fireEvent, RenderOptions } from "@testing-library/react"
import { Provider } from "react-redux";
import App from "../App"
import { Contexts } from "../common/Contexts";
import { store } from "../common/redux/store";
import { PreloadedState } from 'redux';
import { initialState, IState, rootReducer } from "../common/redux/reducer";
import { PropsWithChildren } from "react";

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: typeof store
}

function renderWithProviders(
  ui: React.ReactElement,
  {
    store =  configureStore({reducer: rootReducer})
  }: ExtendedRenderOptions = {}
) {

  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  
  return { store, ...render(ui, { wrapper: Wrapper }) }
}

describe('App component', () => {
  it('is renderer', () => {
    expect(renderWithProviders(<App />)).toMatchSnapshot();
  })
  it('should be show WigetFilter after pressed button', async () => {
    const app = render(<App />);

    const button = app.getByRole('button');
    
    await fireEvent.click(button);

    await expect(render(
        <Contexts />
    )).toMatchSnapshot();
  })
})