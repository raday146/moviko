import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer){
       
    const [cinema, dispatch] = useReducer(reducer, defaultVal, ()=>{
             let value =0;
             try{
                 value=JSON.parse(window.localStorage.getItem(key) || String(defaultVal)
                 );
                }catch(e){
                          value = defaultVal;  
                         // console.log("useLocalStorageReducer - error "); 
                }    
       return value;
       
    });
          //console.log('before useEffect', cinema);

    useEffect(()=>{
          
          if(window.localStorage.length === 0){
                window.localStorage.setItem(key, JSON.stringify(cinema));
                //console.log("useEffect in if");
          }
                       
    }, []);
    return [cinema, dispatch];

}
export {useLocalStorageReducer};