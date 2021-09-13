import {useState} from 'react';

function useSpinnerState(initialValue=false){
    const [loading, setLoading] = useState(initialValue);

    const spinner = () =>{
        setLoading(!loading);
    }
    return [loading, spinner];
}
export default useSpinnerState;