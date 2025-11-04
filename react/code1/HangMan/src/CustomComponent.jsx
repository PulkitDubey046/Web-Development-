import { useState } from "react";
function CustomComponent(){
    const  [x, setX] = useState(10);

    return(
        <>
        <button onClick={()=>{
            setX(x+1);
            console.log(x);
        }}>Click Me!</button>

        {x}
        </>
    )
};

export default CustomComponent;