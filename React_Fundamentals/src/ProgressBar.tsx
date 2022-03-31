import { FC } from "react";

interface IProgressBar {
    value?: number;
}

const ProgressBar: FC<IProgressBar> = ({value}: IProgressBar) => {
    return (
        <>
            <div className="container">
                <div 
                    className="container-inner"
                    style={{width: `${value}%`}}>
                </div>
            </div>
        </>
    )
}

ProgressBar.defaultProps = {
    value: 0
}

export default ProgressBar;