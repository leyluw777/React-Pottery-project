import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import DeliveryPage from "./components/DeliveryPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import ShopPage from "./components/ShopPage";
import Cart from "./components/Cart";
import CardPage from "./components/CardPage";
import {CartProvider} from 'react-use-cart'
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";



function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
     
        <Switch location={location} key={location.key}>
          
         
          
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/delivery" component={DeliveryPage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <Route path="/blog" component={BlogPage}></Route>
 <CartProvider>
 {/* <AnimatePresence> */}
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/cards" component={Cart}></Route>
          <Route path="/card" component={CardPage}></Route>
          {/* </AnimatePresence> */}
          
          </CartProvider>
          {/* <Route path="/blog" component={Blog}></Route>
          <Route path="/contact" component={Contact}></Route> */}
        </Switch>
        
      </AnimatePresence>
    </div>
  );
}

export default App;
