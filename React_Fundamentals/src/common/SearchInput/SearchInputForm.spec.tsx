import { render, screen, waitFor } from "@testing-library/react"
import { SearchInputForm } from "./SearchInputForm";
import userEvent from "@testing-library/user-event";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

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
    const { input, asFragment, getByDisplayValue, queryAllByRole } = setup();

    expect(input).toBeInTheDocument();

    const inputImmediate = screen.getByTestId('immediate');
    expect(inputImmediate).toBeInTheDocument();

    userEvent.click(inputImmediate);
    expect(inputImmediate).toBeChecked();

    userEvent.click(input);
    keyboard('w');
    expect(getByDisplayValue('w')).toEqual(input);
    
    //don`t work cause query return 0
    screen.debug()
    expect(queryAllByRole('paragraph').length).toEqual(2);

    expect(asFragment()).toMatchSnapshot();
  })
})