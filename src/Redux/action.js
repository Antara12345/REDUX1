import { ADD,REDUCE } from "./actionType"
const handleAddAction=(payload)=>{
    return{
     type:ADD,
     payload,
    };
};

const handleReduceAction=(payload)=>{
    return{
        type:REDUCE,
        payload,
    };
};
export {handleAddAction,handleReduceAction}