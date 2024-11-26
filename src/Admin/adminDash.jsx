import { Link , Outlet } from "react-router-dom";

import { FiAlignJustify } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaIdCard } from "react-icons/fa";
import { GrCreditCard } from "react-icons/gr";
import { FaRegFaceGrinHearts } from "react-icons/fa6";



const AdminDash=()=>{

 return(
        <>
<div className="navb">
    <div className="bar"><FiAlignJustify /></div>
     <div className="bell"><FiBell /></div>
    <div className="question"><FaRegQuestionCircle /></div>
   <div className="envelope"><MdOutlineEmail /></div>
    </div>

    <div className="mained" type="none" >
        <div className="item1">
            <center><h1 style={{color:"orangered"}}>Admin</h1></center>
            <ul type="none">        
<li><Link to="deshBoard" style={{color:"orangered", textDecoration:"none"}}><FiBell />  Dashboard</Link></li>
<li><Link to="insertproduct" style={{color:"orangered", textDecoration:"none"}}><FaIdCard />  Add Item</Link></li>
<li><Link to="" style={{color:"orangered", textDecoration:"none"}}><GrCreditCard />  Display Item</Link></li>
<li><Link to="" style={{color:"orangered", textDecoration:"none"}}> <FaRegFaceGrinHearts /> Update Item</Link></li>
<li><button>Sign in</button></li>
<li><button>Log in</button></li>
</ul>
</div>
    <div className="item2">
    <h1>Dashboard</h1>
     </div>
     
   <Outlet/>
       </div>
    




    </>

      
        
       
    )
}
export default AdminDash;