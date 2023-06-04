import { useEffect, useReducer } from 'react';
import './App.css';
import axios from 'axios';
import { cartReducer } from './reducers/cardReducer';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {

  const [state, dispatch] = useReducer(cartReducer,{
    products:[],
    cart: []
  });

  console.log(state);
  const fetchProduct = async () => {
    const data = await axios.get('https://dummyjson.com/products');
    console.log("data -->",data.data.products);
    dispatch({
      type: "ADD_PRODUCT",
      payload: data.data.products
    });
  }

  useEffect(() =>{
    fetchProduct();
  },[]);

  return (
    <div style={{display: 'flex'}}>
      <Products state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
