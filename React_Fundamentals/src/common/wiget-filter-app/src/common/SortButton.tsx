import { Button } from "antd";
import { Dispatch, SetStateAction } from "react";

interface ISortButtonProps {
  mode: string,
  setMode: Dispatch<SetStateAction<SortingMode>>;
}

export enum SortingMode { 
  reverseSorted = 'reverseSorted',
  sorted = 'sorted',
  unsorted = 'unsorted'
}

export function SortButton ({mode, setMode}: ISortButtonProps) {

  return (
    <Button
      onClick={() => {
        switch(mode){
        case SortingMode.unsorted: setMode(SortingMode.sorted); break;
        case SortingMode.sorted: setMode(SortingMode.reverseSorted); break;
        case SortingMode.reverseSorted: setMode(SortingMode.unsorted); break; 
        }
      }}
    >
      {mode === SortingMode.sorted? 
        '[A-Z]' : mode === SortingMode.reverseSorted? 
          '[Z-A]' : <span style={{color: '#999999'}}>[A-Z]</span>}
    </Button>
  );
}
