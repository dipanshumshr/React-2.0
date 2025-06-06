import { useEffect , useRef } from "react";

export function usePrevious(prev)
{
    const prevCount = useRef()

    useEffect(()=>{
        prevCount.current = prev
    },[prev])

    return prevCount.current;

}