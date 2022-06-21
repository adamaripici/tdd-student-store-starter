import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import { BrowserRouter, Routes, Route, Link, useParams  } from "react-router-dom";
import "./App.css"
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import axios from 'axios';

export default function App() {
  // products
  const [products, setProducts] = React.useState([]); //array of product objects
  const [isFetching, setFetching] = React.useState(false); //app is fetching products from api
  const [error, setError] = React.useState(0); //something wrong with the api requests
  const [isOpen, setOpen] = React.useState(false); //whether sidebar.jsx is in the open or closed state
  const [shoppingCart, setShoppingCart] = React.useState([]); //
  const [searchInput, setSearchInput] = React.useState("");
  const { productId } = useParams();

  const handleSubmit = (event) => {
    setSearchInput(event.target.value);
    console.log(8,event.target.value);
  }

  // function productPage() {
  //   // Get the userId param from the URL.
  //   let { productId } = useParams();
  //   // ...
    
  // }
  React.useEffect(() => {
    const loadProducts = async () => {
      setFetching(true)
      try {
        const response = await axios.get('https://codepath-store-api.herokuapp.com/store');
        if (response.data.products) {
          setProducts(response.data.products);
        } else {
          setError("error")
        }   
      } catch (error) {
        console.error(error);
        setError(error)
      }
      setFetching(false);
    }
    loadProducts();
  }, []);


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar products={products}/>
          <Sidebar />
          <Routes>
            <Route path ="/" element={
              <Home 
                products={products}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setProducts={setProducts}
                handleSubmit={handleSubmit}
                />
            }/>
            <Route path ='/products/:productId' element={
              <ProductDetail/>
            }>
            </Route>
            <Route path ="*" element={
              <NotFound/>
            }/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
