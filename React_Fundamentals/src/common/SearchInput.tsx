import { ChangeEvent, FC } from "react";

type IOnSearch = (e?: { target: HTMLInputElement }) => void | TimerHandler;

export enum ESearchIputModes {
    Immediate = "Immediate",
    onPress = "onPress",
    withDelay = "withDelay"
};

export interface ISearchInput {
    placeholder: string,
    mode: ESearchIputModes,
    onSearch: IOnSearch
}

export const SearchInput: FC<ISearchInput> = ({ placeholder, mode, onSearch }: any) => {
    const onChange =
        mode === "Immediate" ? (e: { target: HTMLInputElement }) => onSearch(e) :
            mode === "withDelay" ? ((e: ChangeEvent) => setTimeout(onSearch(e) as TimerHandler, 1000)) :
                undefined;

    const onClick = mode === "onPress" ? (e: any) => onSearch(e) : undefined

    return (
        <form>
            <fieldset>
                <legend>Search Input</legend>
                <label htmlFor="search-input">`search-input`</label>
                <input
                    id="search-input"
                    placeholder={placeholder}
                    onChange={onChange}
                    onClick={onClick}
                />
            </fieldset>
        </form>
    );
}