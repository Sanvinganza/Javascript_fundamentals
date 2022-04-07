import { useState } from "react"
import ProgressBar from "./ProgressBar"

export const ProgressBarForm = () => {
    const [value, setValue] = useState(0);

    return <form>
        <fieldset>
            <legend>Progress bar</legend>
            <input 
                type="number"
                pattern="\d+"
                min={0}
                max={100}
                step={1}
                onChange={(e) => {
                setValue(+e.target.value)
            }}/>
            <ProgressBar value={value}/>
        </fieldset>
    </form>
}