
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home.js';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Inventory from './Pages/Inventory/Inventory';
import OrderReview from './Pages/OrderReview/OrderReview';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/home" element={<Home></Home>}> </Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/orderreview" element={<OrderReview></OrderReview>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>


    </div>
  );
}

export default App;
