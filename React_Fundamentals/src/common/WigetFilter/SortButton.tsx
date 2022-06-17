import { Button } from "antd";
import { Dispatch, SetStateAction } from "react";
import { sortingMode } from "./Items";

interface ISortButtonProps {
  mode: string,
  setMode: Dispatch<SetStateAction<sortingMode>>;
}

export function SortButton ({mode, setMode}: ISortButtonProps) {

  return (
    <Button
      onClick={() => {
        switch(mode){
        case sortingMode.unsorted: setMode(sortingMode.sorted); break;
        case sortingMode.sorted: setMode(sortingMode.reverseSorted); break;
        case sortingMode.reverseSorted: setMode(sortingMode.unsorted); break; 
        }
      }}
    >
      [A-Z]
    </Button>
  );
}
