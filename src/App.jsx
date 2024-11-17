import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Decor from "./pages/Decor";
import Cart from "./pages/cart"
import Kitchen from "./pages/kitchen";
import Bath from "./pages/bath";
import Gift from "./pages/gift";

const App=()=>{
  return(
    <>
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Layout/>}>
              <Route index element={<Decor/>}/>
              <Route path="decor" element={<Decor/>}/>
              <Route path="cart" element={<Cart/>}/> 
              <Route path="kitchen" element={<Kitchen/>}/>
              <Route path="bath" element={<Bath/>}/>
              <Route path="gift" element={<Gift/>}/>
             
             </Route>
           </Routes>
         </BrowserRouter>
        
    </>
  )
}

export default App;
