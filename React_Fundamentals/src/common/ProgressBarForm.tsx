import { useState } from "react"
import ProgressBar from "./ProgressBar"

export const ProgressBarForm = () => {
    const [value, setValue] = useState(0);

    return <form>
        <fieldset>
            <legend>Progress bar</legend>
            <input 
                className="input-progress_bar"
                type="number"
                pattern="\d+"
                min={0}
                max={100}
                step={1}
                onChange={(e) => {
                    if(+e.target.value < 101 && +e.target.value >= 0)
                        setValue(+e.target.value);
                }
            }/>
            <ProgressBar value={value}/>
        </fieldset>
    </form>
}