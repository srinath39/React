import {memo, useState } from "react"

const Child=function Child({totalCount}){

    return totalCount>0 && (<>
        <p>
            hmm, i am not included
        </p>
    </>);
}
export default Child