import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../cartSlice';

const Search = () => {
  const { id } = useParams(); // URL parameter
  const [query, setQuery] = useState(""); // Search query
  const [products, setProducts] = useState([]); // Products list
  const [loading, setLoading] = useState(false); // Loading state

  //addto cart ke liye
  const dispatch= useDispatch();
  const navigate=useNavigate()

  // Fetch products from all APIs
  const fetchProducts = async () => {
    try {
      setLoading(true);

      // API calls for different categories
      const category1 = await axios.get(`http://localhost:3000/cords`);
      const category2 = await axios.get(`http://localhost:3000/kitchen`);
      const category3 = await axios.get(`http://localhost:3000/light`);

      // Combine all products
      const allProducts = [...category1.data, ...category2.data, ...category3.data];
      setProducts(allProducts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch all products on component mount
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) => {
    const productDescription = product.description || ""; // Default empty string
    return productDescription.toLowerCase().includes(query.toLowerCase());
  });

  //addto cart ke liye
  const cartDataAdd=(id, price, desc, myimg)=>{
    dispatch(addToCart({id:id, price:price, description:desc, image:myimg, qnty:1}))
   }
  
   const Pro_Detail=(id)=>{
  navigate(`/prodect/${id}`)
   }

  return (
    <>
  <div style={{ textAlign: "center", marginTop: "30px" }}>
    <h1 style={{ color: "gray" }}>Search For Item's!</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Search for Item's..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query
        style={{ padding: "10px", width: "300px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "20px" }} 
/>

      {loading ? (<p>Loading...</p> ) : (
  
       <div id="cardData">
          {filteredProducts.map((key) => (
         <div key={key.id} >
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
       
          ))}
        </div>
     
      )}
    </div>
   
    </>
  );
};

export default Search;