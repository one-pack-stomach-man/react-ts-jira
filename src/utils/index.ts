import { useEffect, useState } from "react";

const isNotEmp = (val: any) => {
    return val !== '' && val !== undefined;
}

export const clearnObj = (objs: object) => {
    let res = {};
    Object.keys(objs).forEach(key => {
        // @ts-ignore
        if (isNotEmp(objs[key])) {
            // @ts-ignore
            res[key] = objs[key]
        }
    })
    return res;
}

export const useMount = (cb: () => void) => {
    useEffect(() => {
        cb()
    }, []);
}

// export const debounce = (cb, timeout = 500) => {
//     let timer = null;

//     if (timer) {
//         clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//         clearTimeout(timer);
//         cb();
//     }, timeout)
// }

export const useDebounce = (value: any, timeout?:number) => {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        let timer = setTimeout(() => {
            setDebouncedValue(value);
        }, timeout);

        return () => {
            clearTimeout(timer);
        }

    }, [value, timeout])


    return debouncedValue;
}