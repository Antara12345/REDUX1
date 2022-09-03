import { reducer } from "./reducer";
import {legacy_createStore} from "redux";
const store=legacy_createStore(reducer,{count:0});

export{store}