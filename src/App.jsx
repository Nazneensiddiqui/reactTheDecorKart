import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Decor from "./pages/Decor";
import Cart from "./pages/cart"
import Kitchen from "./pages/kitchen";
import Bath from "./pages/bath";
import Gift from "./pages/gift";
import ProdectDetail from "./pages/prodectDetail";
import Shop from  "./pages/shopNow"
import Contact from "./pages/Contact"
import PaymentDone from "./pages/payDone";

const App=()=>{
  return(
    <>
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Layout/>}>
              <Route index element={<Gift/>}/>
              <Route path="gift" element={<Gift/>}/>
              <Route path="decor" element={<Decor/>}/>
              <Route path="cart" element={<Cart/>}/> 
              <Route path="kitchen" element={<Kitchen/>}/>
              <Route path="bath" element={<Bath/>}/>
             <Route path="prodect/:id" element={<ProdectDetail/>}/>
              <Route path="shopNow" element={<Shop/>}/>
             <Route path="contact" element={<Contact/>}/>
             <Route path="paydone" element={<PaymentDone/>}/>
             </Route>
           </Routes>
         </BrowserRouter>
        
    </>
  )
}

export default App;
