import { useState } from "react";
import { store } from "../Redux/store";
import {handleAddAction,handleReduceAction} from "../Redux/action"
function Button(){
    const {dispatch}=store;
    
  return(
    <div>
        <button onClick={()=>dispatch(handleAddAction(1))}>ADD</button>
        <button onClick={()=>dispatch(handleReduceAction(1))}>REDUCE</button>
    </div>
  )
}
export default Button;