import {useState} from 'react';

function useReasultState(){
    const [reasult, setReasult] = useState();
    
    const handleSearchResult=(data)=>{
        setReasult(data);
    }
    return [reasult, handleSearchResult];
}
export default useReasultState;