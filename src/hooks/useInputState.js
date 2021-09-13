import { useState } from "react";

export default initlalValue => {
    const [value, setValue] = useState(initlalValue);
    const handleChange = e => {
        setValue(e.target.value);
                console.log(value);

   };
   const reset = () =>{
       setValue("");
   };
   return [value, handleChange, reset];
};