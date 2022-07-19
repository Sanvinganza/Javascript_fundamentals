import { screen, render, waitFor } from "@testing-library/react"
import { SearchInputForm } from "./SearchInputForm";
import userEvent from "@testing-library/user-event";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { fireEvent } from "@testing-library/react";

describe('SearchInputForm component', () => {
  const array = ['word', 'noun', 'hello', 'world'];

  const setup = () => {
    const utils = render(<SearchInputForm array={array}/>);
    const input = utils.getByPlaceholderText('Search');

    return {
      input,
      ...utils
    }
  }

  test('renders corrently', () => {
    expect(render(<SearchInputForm array={array} />));
  })
  test('input should be work with Immediate options currently', () => {
    const { input, asFragment, getByDisplayValue } = setup();

    expect(input).toBeInTheDocument();

    const inputImmediate = screen.getByTestId ('immediate');
    expect(inputImmediate).toBeInTheDocument();

    userEvent.click(inputImmediate);
    expect(inputImmediate).toBeChecked();

    userEvent.click(input);
    keyboard('w');
    expect(getByDisplayValue('w')).toEqual(input);
    
    expect(screen.getAllByRole('listitem').length).toEqual(2);
    expect(asFragment()).toMatchSnapshot();
  })
  test('input should be work with withDelay', async () => {
    const { input, asFragment, getByDisplayValue } = setup();

    expect(input).toBeInTheDocument();

    const inputWithDelay = screen.getByTestId ('withDelay');
    expect(inputWithDelay).toBeInTheDocument();

    userEvent.click(inputWithDelay);
    expect(inputWithDelay).toBeChecked();

    userEvent.click(input);
    keyboard('or');
    await waitFor(() => expect(getByDisplayValue('or')).toEqual(input));
    
    await waitFor(() => expect(screen.getAllByRole('listitem').length).toEqual(2));
    expect(asFragment()).toMatchSnapshot();
  })
  test('input should be work with onPress', () => {
    const { input, asFragment } = setup();

    expect(input).toBeInTheDocument();

    const inputOnPress = screen.getByTestId ('onPress');
    expect(inputOnPress).toBeInTheDocument();

    userEvent.click(inputOnPress);
    expect(inputOnPress).toBeChecked();

    userEvent.click(input);
    userEvent.type(input, 'w');
    fireEvent.keyDown(input, {key: 'Enter', code: 'Enter', charCode: 13})
    
    expect(screen.getAllByRole('listitem').length).toEqual(2);
    expect(asFragment()).toMatchSnapshot();
  })
})