import { useState, useEffect } from 'react';
export default function useDebounce(initialValue, wait = 500) {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
        const timer = setTimeout(() => setValue(initialValue), wait);
        return () => clearTimeout(timer);
    }, [initialValue, wait]);
    return value;
}
