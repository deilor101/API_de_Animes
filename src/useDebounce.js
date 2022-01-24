import { useRef } from "react"

export default function useDebounce(fn, delay) {
    const timeoutRef = useRef
    function debouncedFn(...params){
        window.clearTimeout(timeoutRef.current)
        timeoutRef.current = window.setTimeout(()=>{

        }, delay)    
        fn(...params)
    }

    return debouncedFn
}