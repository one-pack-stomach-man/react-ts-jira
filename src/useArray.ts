import { useState } from "react";

export const useArray = <T>(arr: T[]) => {
    const [value, setValue] = useState(arr);
    let clear = () => {
        setValue([])
    }
    const add = (person: T) => { 
        setValue([person, ...value])
    }

    const removeIndex0 = () => {
        setValue([...value.slice(1)])
    }

    return { value, clear, add, removeIndex0}
};