import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import { useNavigate } from "react-router-dom";

const Shop=()=>{
    const [lowPrice, setLowPrice]=useState("");
    const [heighPrice, setHeighPrice]=useState("");
    const [showFilter, setShowFilter]=useState(true);
    const [mydata, setMydata]= useState([]);
    const dispatch= useDispatch();

    const[bgclr , setBgclr]=useState("white")
    const[clr ,setClr]=useState("GrayText")
    const navigate=useNavigate();
  
    const MouseEnter=()=>{
      setBgclr(" rgb(185, 148, 148)")
      setClr("white")
    }
  
    const mouseLeave=()=>{
      setBgclr("white")
      setClr("GrayText")
    }
  
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5, // 5 images will be shown at a time
          slidesToScroll: 1, // 1 image will move at a time
          autoplay: true, // Auto slide
          autoplaySpeed: 2000, // Time between each slide
        };
  
        const shop=()=>{
          navigate("/shopNow")
        }


    const loadData=()=>{
        let api="http://localhost:3000/cords";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
     }

     const showData=()=>{
        let api="http://localhost:3000/cords";
        axios.get(api).then((res)=>{
            setShowFilter(false);
            setMydata(res.data);
        })
     }
    
     useEffect(()=>{
        loadData();
     }, []);
    
     useEffect(()=>{
        if (lowPrice=="" && heighPrice=="")
        {
            setShowFilter(true);
        }
     })

     const cartDataAdd=(id,  price,  desc, myimg)=>{
      dispatch(addToCart({id:id,  price:price,  description:desc, image:myimg, qnty:1}))
     }
    
    
    
     const ans=mydata.map((key)=>{
      
       
       return(
        <>
       
  <div>
   <Card style={{width:"230px", marginTop:"20px"}}>
      {/* Image Section with Overlay */}
          <div className="card">
            <a href='#' onClick={()=>{Pro_Detail(key.id)}}>
            <img src={key.image} style={{ height: "240px", width: "100%"  }} alt={key.description} /></a>
            <div className="overlay"  onClick={()=>{cartDataAdd(key.id, key.price, key.description, key.image)}}>+Add to Cart</div>
          </div>
 <Card.Body>
       <Card.Text style={{fontFamily:"Times New Roman', Times, serif", fontSize:"12px"}}>
           {key.description} 
           <br/>
           <span > ₹ {key.price}/-</span>  
       </Card.Text>
       {/* <Button variant="primary" 
         onClick={()=>{cartDataAdd(key.id, key.price, key.description, key.image)}} >add to cart</Button> */}
     </Card.Body>
   </Card>
   </div>
     </>
       )
      
     })


     const ans1=mydata.map((key)=>{
      
        if (key.price>=lowPrice && key.price<=heighPrice)
        {
       return(
        <>
       
  <div>
   <Card style={{width:"230px", marginTop:"20px"}}>
      {/* Image Section with Overlay */}
          <div className="card">
            <a href='#' onClick={()=>{Pro_Detail(key.id)}}>
            <img src={key.image} style={{ height: "240px", width: "100%"  }} alt={key.description} /></a>
            <div className="overlay"  onClick={()=>{cartDataAdd(key.id, key.price, key.description, key.image)}}>+Add to Cart</div>
          </div>
 <Card.Body>
       <Card.Text style={{fontFamily:"Times New Roman', Times, serif", fontSize:"12px"}}>
           {key.description} 
           <br/>
           <span > ₹ {key.price}/-</span>  
       </Card.Text>
       {/* <Button variant="primary" 
         onClick={()=>{cartDataAdd(key.id, key.price, key.description, key.image)}} >add to cart</Button> */}
     </Card.Body>
   </Card>
   </div>
        
        </>
       )
        }
     })


    return(
        <>
       
<center>
          <div id="shoppage">
            <div id="shopmenu">
          
            <h4> Filter data by Price</h4>
           
           Enter Low Price <input type="text" value={lowPrice}
           onChange={(e)=>{setLowPrice(e.target.value)}} />
           <br/><br/>
            To 
            <br/><br/>
          Enter High Price  <input type="text" value={heighPrice}
          onChange={(e)=>{setHeighPrice(e.target.value)}} />
            <br/><br/><br/>
            <a href="#" onClick={shop()} > <button style={{width:"130px", height:"30px", backgroundColor:bgclr ,color:clr}} 
                        onMouseEnter={MouseEnter} onMouseLeave={mouseLeave}
                   >
                    SHOP NOW</button></a> 


            </div>
             <div id="shopdata">
                  
             <div id="cardData">
                {showFilter?ans:ans1}      
            </div>

             </div>

          </div>
          </center>
        </>
    )
}

export default Shop;