import { render, fireEvent, screen } from "@testing-library/react"
import ProgressBar from "./ProgressBar";

describe('ProgressBar component', () => {
  it('is renderer with value 0', () => {
    expect(render(<ProgressBar value={0} />));
  })
  //maybe useless test
  it('width value should be less then 100', () => {
    render(<ProgressBar value={100} />)
    const input = screen.getByTestId('progress_bar');
    
    expect(+input.style.width.slice(0, -1)).toBeLessThanOrEqual(100);
  })
})