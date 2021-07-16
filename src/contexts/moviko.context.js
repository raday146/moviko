import React, {createContext,memo, useState,useReducer} from "react";
import {withRouter} from 'react-router-dom';
import reducer from "../reducers/moviko.reducer";
import {useLocalStorageReducer} from '../reducers/useLocalStorage';
import useReasultState from "../hooks/useReasultState";
import pullReasult from '../reducers/searchReducer';
export const MovikoContext = createContext();
export const DispatchContext = createContext();
export const searchReasultContext = createContext();

function MovikoProvider(props){       
   // const list = JSON.parse(localStorage.getItem('movies'));
    const [cinema, dispatch] = useLocalStorageReducer("cinema","", reducer); 
    ///const [reasult, handleSearchResult] = useReasultState();
    const [data, dis] = useReducer(pullReasult,"");
  
    const goTo=(dest)=>{
     props.history.push(dest);
     //console.log(props);
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
export default withRouter(memo(MovikoProvider));