import { useState } from "react";

function useCustomHook(){
    const [count,setCount]=useState(0)
    return [count,setCount];
}

export default useCustomHook;