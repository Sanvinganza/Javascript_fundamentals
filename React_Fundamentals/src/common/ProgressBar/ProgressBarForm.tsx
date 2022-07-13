import { useCallback, useState } from "react";
import ProgressBar from "./ProgressBar";

export const ProgressBarForm = () => {
  const [value, setValue] = useState(0);
  const onInputChange = useCallback((e) => {
    if (e.target.value <= 100 && e.target.value >= 0) {
      setValue(e.target.value);
    }
  }, []);
  return <form>
    <fieldset>
      <legend>Progress bar</legend>
      <input
        className="input_progress_bar"
        data-testid="input_progress_bar"
        type="number"
        pattern="\d+"
        min={0}
        max={100}
        step={1}
        onChange={onInputChange}
        value={value}
      />
      <ProgressBar value={value} />
    </fieldset>
  </form>;
};