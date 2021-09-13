import {useState} from 'react';

function useToggleState(initialValue=false){
    const [show, setShow] = useState(initialValue);
     const toggleHover =() => setShow(!show);   
    return [show, toggleHover];
}
export default useToggleState;