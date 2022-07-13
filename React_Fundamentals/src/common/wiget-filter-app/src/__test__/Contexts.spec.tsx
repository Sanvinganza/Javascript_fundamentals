import { render, screen } from "@testing-library/react"
import { Contexts } from "../common/Contexts"

describe('Contexts component', () => {
  it('is renderer', () => {
    expect(render(<Contexts />)).toMatchSnapshot();
  })
})