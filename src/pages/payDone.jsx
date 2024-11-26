import LoaderComp from "./Loader";
import { useState } from "react"


const PaymentDone=()=>{
    const [isLoader, setIsLoader]=useState(true);


    setTimeout(()=>{
        setIsLoader(false);
    }, 3000);

    return(
        <>


        {isLoader?(
             <div style={{width:"100px", margin:"auto", paddingTop:"30px", marginTop:"100px"}}>
             <LoaderComp/>
             </div>
        ):(
            <h6 align="center" style={{color:"green", marginTop:"150px"}}> Your Order Succesfully Placed <br/>
           We will send your products within 6 to 7 working days</h6>
        )}
         </>
    )
}

export default PaymentDone;