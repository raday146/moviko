import React, {createContext,memo,useReducer} from "react";
import {useHistory} from 'react-router-dom';
import reducer from "../reducers/moviko.reducer";
import {useLocalStorageReducer} from '../reducers/useLocalStorage';
import pullReasult from '../reducers/searchReducer';
export const MovikoContext = createContext();
export const DispatchContext = createContext();
export const searchReasultContext = createContext();

function MovikoProvider(props){       
    const [cinema, dispatch] = useLocalStorageReducer("cinema","", reducer); 
    const [data, dis] = useReducer(pullReasult,"");
    const history = useHistory(props);
    
    const goTo=(dest)=>{
     //props.history.push(dest);
     history.push(dest);
     console.log(props.location);
   }

    return(
        <searchReasultContext.Provider value={{data, dis, goTo}}>
        <MovikoContext.Provider value={cinema}>
        <DispatchContext.Provider value={dispatch}>
            {props.children}
        </DispatchContext.Provider>
        </MovikoContext.Provider>
        </searchReasultContext.Provider>

    );

}
export default memo(MovikoProvider);