import { useContext, useState } from "react";
import {SampleContext} from './SampleContext';

function ChildB(){
    const {count,setCount}=useContext(SampleContext)
    return (<>
        <button onClick={()=>setCount(count=>count+1)}>Increase Count by One : current Count is :{count}</button>
    </>)
}

export default ChildB;