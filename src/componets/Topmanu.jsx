import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaShoppingCart } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Topmanu=()=>{
  const mycart= useSelector(state=>state.mycart.cart);
   //console.log(mycart);
  const navigate= useNavigate();


   const cartPage=()=>{
    navigate("/cart");
   }

  const cartLen= mycart.length;
    return(
        <>
        <div id="nav">
        <marquee style={{behavior:"scroll"}} >
        <p>Extra 5% Off + Free Shipping on Prepaid Orders Shop All || 
              Check our new app for a seamless experience Download
            || Unveil Elegance: Discover our all new collections Shop All</p>
        </marquee>
    </div>
    <div id="navbar">
    <Navbar  data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{alignItems:"center", marginBottom:"30px", fontSize:"25px",}}>THE DECOR KART</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="gift"> Gift Atelier </Nav.Link>
          <Nav.Link as={Link} to="Decor">Decor </Nav.Link>
            <Nav.Link as={Link} to="kitchen"> Kitchen & Dining</Nav.Link>
            <Nav.Link as={Link} to="lighting"> Lighting </Nav.Link>
            <Nav.Link as={Link} to="walldecor"> Wall Decor</Nav.Link>
            <Nav.Link as= {Link} to="bath"> Bath Decor </Nav.Link>
            <Nav.Link as={Link} to="furniture"> Furniture </Nav.Link>
            
            <button>Get App</button>

           <div id='icons'>
            <div><IoIosEye /><p style={{fontSize:"10px"}}>Viewed</p></div>

            <div>
    {cartLen > 0 && ( <span style={{ fontSize: "14px" }}>{cartLen}</span> )}
    <a href="#" onClick={cartPage}>
        <FaShoppingCart style={{ color: "white" }} /> </a>
    <p style={{ fontSize: "10px", marginLeft: "5px" }}>cart</p>
            </div>

            <div> <GrUserAdmin  />
            <p style={{fontSize:"10px"}}>Account</p></div>

            <div> <FaSearch />
            <p style={{fontSize:"10px"}}>Search</p></div>
         </div>
          </Nav>
        </Container>
      </Navbar>

</div>
     
        </>
    )
}
export default Topmanu;