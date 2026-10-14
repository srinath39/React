import { useState } from "react";
import {cItems} from './CartItems'

function ShoppingCart(){
    const [items,setItems]=useState([])

    function addItems(newItems){
        setItems(existingItems=>[...existingItems,...newItems])
    }

    function removeItem(item){
        setItems(existingItems=>existingItems.filter(it=>it!=item))
    }

    function clearItems(){
        setItems([])
    }

    return (<>
        <ul>
            {items.map(item=>{
                return <li key={item.id}>{item.name}</li>
            })}
        </ul>
        <button onClick={()=>addItems(cItems)}> Add Items</button>
        <button onClick={()=>removeItem(cItems[0])}>Remove first Item</button>
        <button onClick={()=>clearItems()}>Clear the items</button>
    </>)
}

export default ShoppingCart;