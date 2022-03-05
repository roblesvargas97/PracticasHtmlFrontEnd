import React from "react"
import { Route , Routes , HashRouter } from "react-router-dom"
import Header from '../Components/Header/Header';
import Client from "../pages/Client/Client";
import Home from '../pages/Home/Home';
import BuildPizza from '../pages/BuildPizza/BuildPizza';
import OrderForm from "../pages/OrderForm/OrderForm";
import Administrator from "../pages/Administrator/Administrator";
import Footer from "../Components/Footer/Footer";

function App() {
    return (
    <HashRouter>
       <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/client" element={<Client/>} />
            <Route path="/client/build-pizza" element={<BuildPizza/>} />
            <Route path="/client/build-pizza/order" element={<BuildPizza/>} />
            <Route path="/client/build-pizza/order/form-client" element={<OrderForm/>} />
            <Route path="/administrator" element={<Administrator/>}/>
        </Routes>
        <Footer/>
    </HashRouter>
    )
}

export default App