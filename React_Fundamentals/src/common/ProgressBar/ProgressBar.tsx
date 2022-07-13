import { FC } from "react";

interface IProgressBar {
    value: number;
}

const ProgressBar: FC<IProgressBar> = ({ value = 0 }: IProgressBar) => {
  return (
    <div className="progress_bar">
      <div
        data-testid="progress_bar"
        className="progress_bar-inner"
        style={{ width: `${value}%` }}>
      </div>
    </div>
  );
};

export default ProgressBar;