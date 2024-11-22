import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { qntyInc, qntyDec,itemRemove } from "../cartSlice";
import rem from "../image/rem.png";
import { useNavigate } from "react-router-dom"
import { useState } from "react";

import pay from "../image/pay.webp"
import pay1 from "../image/pay1.png"
import ru from "../image/ru.png"
import visa from "../image/VISA.png"

const Contact=()=>{
  const [openDiv, setOpenDiv] = useState(false);

    const MyCart= useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch();
 const navigate=useNavigate()
 
    
    const qtyIncrement=(id)=>{
          dispatch(qntyInc({id:id}));
     }
 
     const qtyDecrement=(id)=>{
       dispatch(qntyDec({id:id}))
  }
 
  const removeItem=(id)=>{
   dispatch(itemRemove({id:id}))
 }
 
 
     let totalAmount=0;
     const Data=MyCart.map((key)=>{
       totalAmount+=key.price*key.qnty;
         return(
             <>
                <tr>
                 <td> <img src={key.image} width="100" height="100" /> </td>
                <td> {key.description} </td>
                 <td> {key.price}</td>
                 <td>
                     
                 <a href="#" onClick={()=>{qtyDecrement(key.id)}}>
                 <FaCircleMinus />
                 </a>
             
 
                 <span style={{marginLeft:'10px', marginRight:'10px', fontWeight:'bold'}}>
                 {key.qnty}
                 </span>
                     
                     
                     <a href="#" onClick={()=>{qtyIncrement(key.id)}}>
                     <FaPlusCircle />
                     </a>
                      
 
 
                 </td>
              <td> {key.qnty * key.price} </td>
 
                 <td>
                 <button onClick={()=>{removeItem(key.id)}}> <img src={rem} width={25} height={25}/>
                    </button>
 
                 </td>
                </tr>
             
             </>
         )
     })

     const handleRadioClick = () => {
      alert("working");
      setOpenDiv(openDiv);
    }

    const paydone=()=>{
      navigate("/paydone")
    }

    return(
        <>
        <center>
             
                <h1 style={{marginTop:"50px",fontFamily:'Times New Roman, Times, serif'}}>THE DECOR KART</h1>
               <div id="contact">   
                <div id="fome">
                    <div style={{display:"flex", justifyContent:"space-between",marginTop:"20px",marginLeft:"60px",marginRight:"60px"}}> 
                         <h5>Contact</h5>
                    <a href="#" style={{color:"black"}}>log in</a></div>
                   
                    <input type="text" placeholder="Email or Mobile phone number"
                style={{width:"600px", height:"50px",borderRadius:"5px",border: "1px solid rgb(199, 206, 214)",marginTop:"5px"}}/>
                
                <div style={{display:"flex", fontSize:"14px",marginLeft:"38px", marginTop:"8px"}}>
                <input type="checkbox" style={{width:"15px",height:"15px", marginTop:"4px", border: "1px solid rgb(199, 206, 214)"}}/> 
                Email me with news and offers</div>

                <div style={{display:"flex", justifyContent:"space-between",marginTop:"20px",marginLeft:"50px",marginRight:"55px"}}> 
                         <h5>Delivery</h5>
                    </div>
                   
                    <input type="text" placeholder="Country/Region"
                style={{width:"600px", height:"50px",borderRadius:"5px",border: "1px solid rgb(199, 206, 214)",marginTop:"10px"}}/>
             
                <div style={{display:"flex",marginLeft:"35px", gap:"20px"}}>     
                <input type="text" placeholder="First Name"
                style={{width:"290px", height:"50px",borderRadius:"5px",border: "1px solid rgb(199, 206, 214)",marginTop:"10px"}}/> 
                     
                     <input type="text" placeholder="Last Name"
                style={{width:"290px", height:"50px",borderRadius:"5px",border: "1px solid rgb(199, 206, 214)",marginTop:"10px"}}/>   
                </div>

                <input type="text" placeholder="Address"
                style={{width:"600px", height:"50px",borderRadius:"5px",border: "1px solid rgb(199, 206, 214)",marginTop:"10px"}}/>
              
              <input type="text" placeholder="Apartment, Suite, etc (Optional)"
                style={{width:"600px", height:"50px",borderRadius:"5px",border: "1px solid rgb(199, 206, 214)",marginTop:"10px"}}/>
               

                <div style={{display:"flex",marginLeft:"35px", gap:"20px"}}>     
                <input type="text" placeholder="City"
                style={{width:"188px", height:"50px",borderRadius:"5px",border: "1px solid rgb(199, 206, 214)",marginTop:"10px"}}/> 
                     
                     <input type="text" placeholder="State"
                style={{width:"188px", height:"50px",borderRadius:"5px",border: "1px solid rgb(199, 206, 214)",marginTop:"10px"}}/> 

                  <input type="text" placeholder="PIN Code"
                style={{width:"188px", height:"50px",borderRadius:"5px",border: "1px solid rgb(199, 206, 214)",marginTop:"10px"}}/>   
                </div>
                <input type="text" placeholder="Phone"
                style={{width:"600px", height:"50px",borderRadius:"5px",border: "1px solid rgb(199, 206, 214)",marginTop:"10px"}}/>

<div style={{display:"flex", fontSize:"14px",marginLeft:"38px", marginTop:"8px"}}>
                <input type="checkbox" style={{width:"15px",height:"15px", marginTop:"4px", border: "1px solid rgb(199, 206, 214)"}}/> 
                Save this information for next time</div>

                <div style={{display:"flex", justifyContent:"space-between",marginTop:"20px",marginLeft:"50px",marginRight:"55px"}}> 
                         <h5>Shipping method</h5>
                         </div> 
                         <div style={{width:"600px", height:"50px",backgroundColor: "rgb(216, 218, 221)",fontSize:"15px", paddingTop:"15px",paddingRight:"160px"}}>
                         Enter your shipping address to view available shipping methods.
                         </div>

                         <div style={{display:"flex", justifyContent:"space-between",marginTop:"20px",marginLeft:"50px",marginRight:"55px"}}> 
                           <h5>Payment</h5></div> 

                           <div style={{display:"flex", justifyContent:"space-between",marginTop:"px",marginLeft:"50px",marginRight:"55px",fontSize:"16px"}}> 
                             All transactions are secure and encrypted. </div>
                             
        <div style={{ margin: "20px" }}>
      {/* Radio input with heading */}
      <div style={{width:"600px", height:"50px",borderRadius:"5px",border: "1px solid rgb(199, 206, 214)",marginTop:"10px", display: "flex", alignItems: "center", cursor: "pointer" }}>
        <input type="radio" id="toggleDiv" name="toggle" onClick={handleRadioClick} style={{ marginRight: "10px" }}/>
        <label htmlFor="toggleDiv" style={{ fontSize: "16px" }}>  Cards, UPI, NB, Wallets, BNPL by PayU India 
          <img src={pay} style={{width:"50px", height:"30px", marginLeft:"50px",border:"1px solid rgb(216, 218, 221)"}}/>
          <img src={pay1} style={{width:"50px", height:"30px",border:"1px solid rgb(216, 218, 221)"}}/>
          <img src={ru} style={{width:"50px", height:"30px",border:"1px solid rgb(216, 218, 221)"}}/>
          <img src={visa} style={{width:"50px", height:"30px",border:"1px solid rgb(216, 218, 221)"}}/>
        </label>
      </div>
      {/* Conditionally rendered div */}
      {openDiv && (
        <div style={{ width:"600px", height:"100px", padding: "10px", border: "1px solid #ccc",borderRadius: "4px", backgroundColor: "#f9f9f9", fontSize:"12px"
          }} >
          <p aling="center">After clicking “Pay now”, you will be redirected to Cards,<br/>
           UPI, NB, Wallets, BNPL by PayU India to complete your<br/> purchase securely.</p>
        </div>
      )}
      </div>

      <div>
      {/* Radio input with heading */}
      <div style={{width:"600px", height:"50px",borderRadius:"5px",border: "1px solid rgb(199, 206, 214)",marginTop:"10px", display: "flex", alignItems: "center", cursor: "pointer" }}>
        <input type="radio" id="toggleDiv" name="toggle" onClick={handleRadioClick} style={{ marginRight: "10px" }}/>
        <label htmlFor="toggleDiv" style={{ fontSize: "16px" }}> Cash on Delivery (COD)
        </label>
      </div>
      {/* Conditionally rendered div */}
      {openDiv && (
        <div style={{ width:"600px", height:"50px", padding: "10px", border: "1px solid #ccc",borderRadius: "4px", backgroundColor: "#f9f9f9",fontSize:"12px"
          }} >
          <p>Get Free Shipping by switching to Prepaid Payments - UPI, Cards, Wallets, Net Banking</p>
        </div>
      )}
      </div>
      <button onClick={paydone}>Complete Order</button>

                  
             </div>
 
            
    
           <div >
          
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
        <th>Description</th>
          <th> Price</th>
          <th> Quantity</th>
          <th> Total</th>
          <th>  </th>
        </tr>
      </thead>
      <tbody>
         {Data}
         <tr>
          <th>#</th>
          <th> </th>
          <th> </th>
          <th> Total Amount: </th>
          <th> {totalAmount}  </th>
          <th> </th>
        </tr>
        </tbody>
        </Table>
        </div>
       

    </div>            
          

             </center>
    
        </>
    )
}
export default Contact;