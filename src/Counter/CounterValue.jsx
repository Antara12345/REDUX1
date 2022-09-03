import { useState } from "react";
import { store } from "../Redux/store"

function Value(){
    const {count}=store.getState();
    const {subscribe}=store;
    const [force,forceUpdate]=useState(0);
    subscribe(()=>{
        forceUpdate((prev)=>prev+1);
    });
   return(
    <div>
        <h1>Counter:{count}</h1>
    </div>
   
   )
}
export default Value