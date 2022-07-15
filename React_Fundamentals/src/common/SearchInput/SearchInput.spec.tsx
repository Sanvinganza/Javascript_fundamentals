import { render, fireEvent, screen } from "@testing-library/react"
import { ESearchInputModes, SearchInput } from "./SearchInput";

describe('SearchInput component', () => {
  it('is renderer', () => {
    expect(render(
    <SearchInput 
      placeholder='Search' 
      mode={ESearchInputModes.immediate}
      onSearch={jest.fn()}
      />
      )).toMatchSnapshot();
  })
})