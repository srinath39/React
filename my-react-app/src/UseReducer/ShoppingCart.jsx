import { useReducer,useState } from "react";
import {cItems} from './CartItems'

function reducer(items,action){
    switch(action.type){
        case "add":
            return [...items,action.item]
        case "remove":
            return items.filter(it=>it!=items[0])
        case "clear":
            return []
        default:
            return items
    }
}

function ShoppingCart(){

    const [items,dispatch]=useReducer(reducer,[])

    return (<>
        <ul>
            {items.map(item=>{
                return <li key={item.id}>{item.name}</li>
            })}
        </ul>
        <button onClick={()=>dispatch({type:"add",item:cItems[0]})}> Add Items</button>
        <button onClick={()=>dispatch({type:"remove",item:null})}>Remove first Item</button>
        <button onClick={()=>dispatch({type:"clear",item:null})}>Clear the items</button>
    </>)
}

export default ShoppingCart;