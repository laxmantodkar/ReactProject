import React, { useEffect }  from "react";
import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';

const Toast=()=>{ 
 function Hello()
 {
    return (
        toast("OK",{
            position:"top-center"
        })
    )
 }
    

    return(
        <div>
             <Button onClick={Hello}>Button</Button>
            <ToastContainer />
        </div>
       
     
    )
}
export default Toast;