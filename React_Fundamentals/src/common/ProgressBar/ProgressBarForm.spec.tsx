import { render, fireEvent, screen } from "@testing-library/react"
import { ProgressBarForm } from "./ProgressBarForm";

describe('ProgressBar component', () => {
  it('is renderer with value 0', () => {
    expect(render(<ProgressBarForm />)).toMatchSnapshot();
  })
  it('input width value should be equal progressBar value', () => {
    render(<ProgressBarForm />);
    
    const input = screen.getByTestId('input_progress_bar');
    const progressBar = screen.getByTestId('progress_bar');

    fireEvent.change(input, {target: {value: '100'}});
    expect(input.getAttribute('value')+'%').toEqual(progressBar.style.width);
  })
})