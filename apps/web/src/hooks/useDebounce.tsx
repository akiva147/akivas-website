import { useCallback, useRef } from "react";

/**
 * Returns a memoized function that will only call the passed function when it hasn't been called for the wait period
 * @param func The function to be called
 * @param wait Wait period after function hasn't been called for
 * @returns A memoized function that is debounced
 */
const useDebouncedCallback = (func: (...args: any[]) => void, wait: number) => {
    // Use a ref to store the timeout between renders
    // and prevent changes to it from causing re-renders
    const timeout = useRef<NodeJS.Timeout | undefined>();

    return useCallback(
        (...args: any[]) => {
            const later = () => {
                if (timeout.current) {
                    clearTimeout(timeout.current);
                }
                func(...args);
            };

            if (timeout.current) {
                clearTimeout(timeout.current);
            }
            timeout.current = setTimeout(later, wait);
        },
        [func, wait]
    );
};

export default useDebouncedCallback;
