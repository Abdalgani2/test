import React, { useContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./components/auth/signUp/index";
import Header from "./components/header/index";
import Main from "./components/main/index";
import Login from "./components/auth/login/index";
import ProductDetails from "./components/productDetails";
import SearchProduct from "./components/searchProduct";
import Cart from "./components/cart/cart";
import { ItemCardContext } from "./../src/contexts/main";
import { HeaderContext } from "./contexts/header";
import { LoginContext } from "./contexts/login";
import CreateProduct from "./components/createProduct/index";
import History from "./components/history/index";




const App = () => {
  const itemCardContext = useContext(ItemCardContext);
  const headerContext = useContext(HeaderContext);
  const [cartData, setCartData] = useState([]);

  return (
    <div className="App">
      <Header />
      <Route path="/register" component={Register} />
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/show/cart" render={() => <Cart item={itemCardContext.found} />}  />
      <Route
        path="/product/details"
        render={() => <ProductDetails item={itemCardContext.found} />}
      />
      <Route
        path="/search/product"
        render={() => <SearchProduct item={headerContext.found} />}
      />
      <Route
        path="/create/product"
        render={() => <CreateProduct item={LoginContext.found} />}
      />
      

    </div>
  );
};

export default App;
