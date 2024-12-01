import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
//   import { useNavigate } from "react-router-dom";
    
 const UpdataItem=()=>{   
    const[mydata, setmydata]=useState({});

    const loaddata=()=>{
        let api="http://localhost:3000/light";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setmydata(res.data);
        })
     
    }
    
    useEffect(()=>{
        loaddata();
    },[])

       
 //.................delet recode................
const myRecDel=(id)=>{
let api=`http://localhost:3000/light/${id}`;
axios.delete(api).then((res)=>{
    alert(" Data Delete Successfully!!")
loaddata();
})
}

// //.............edit data.........................
// const myEdit=(id)=>{
//     navigate(`/editrec/${id}`)
// } 

const ans= mydata.map((key)=>{
    return(
        <>
          <tr  width="1050px"  fontWidth="2px" bgcolor="orangered" style={{color:"white", fontSize:"14px", border:"1px solid black "}} >
          <td>{key.image}</td>
      <td>{key.description}</td>
      <td>{key.price}</td>
      <td>{key.material}</td>
      < td>{key.pack}</td>
      <td>{key.dimansion}</td>
    <td>
                    <a href="#" onClick={()=>{myEdit(key.id)}}>
                       <img src={edimg} width="30" height="30" /> 
                     </a>
                     
                     <a  href="#" onClick={()=>{myRecDel(key.id)}}>
                     <img src={delimg} width="30" height="30" /> 
                     </a>
      </td>
    </tr>
    
    
    
        </>
    )
    })

    return(
        <>
          <div align="center" style={{marginTop:"20px",marginLeft:"270px", fontSize:"14px"}}>
      <table  border="2px solid red" width="1050px"  >
       <tr border="2px solid black" width="1050px"   bgcolor="lightblue" >
           <th>#</th>
        <th>Description</th>
          <th> Price</th>
            <th>Material</th>
            <th>Pack</th>
            <th>Dimansion</th>
            <th>Action</th>
           
            
        </tr>
        {ans}
       </table>
       </div>
        < ToastContainer/>
        </>
    )
}
export default UpdataItem;