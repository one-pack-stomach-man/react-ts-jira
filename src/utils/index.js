import { useEffect, useState } from "react";

const isNotEmp = (val) => {
    return val !== '' && val !== undefined;
}

export const clearnObj = (objs) => {
    let res = {};
    Object.keys(objs).forEach(key => {
        if (isNotEmp(objs[key])) {
            res[key] = objs[key]
        }
    })
    return res;
}

export const useMount = (cb) => {
    useEffect(() => {
        cb()
    }, [cb]);
}

export const debounce = (cb, timeout = 500) => {
    let timer = null;

    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        clearTimeout(timer);
        cb();
    }, timeout)
}

export const useDebounce = (value, timeout = 500) => {

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