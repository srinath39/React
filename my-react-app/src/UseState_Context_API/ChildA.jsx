import { useContext,useState } from "react";
import {SampleContext} from './SampleContext';

function ChildA(){
    const {count}=useContext(SampleContext);
    return (<>
        <p>count : {count}</p>
    </>)
}

export default ChildA;