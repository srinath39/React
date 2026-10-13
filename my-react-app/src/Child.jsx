import {memo, useState } from "react"
import useCustomHook from './countCustomHook'

const Child=function Child(){
    const [count,setCount]=useCustomHook()
    return (
        <>
            <button onClick={()=>setCount(count+1)}>count : {count}</button>
        </>
    )
}
export default Child