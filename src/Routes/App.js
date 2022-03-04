import React from "react"
import { Route , Routes , HashRouter } from "react-router-dom"
import Header from '../Components/Header/Header';
import Client from "../pages/Client/Client";
import Home from '../pages/Home/Home';




function App() {
    return (
    <HashRouter>
       <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/client" element={<Client/>} />
        </Routes>

    </HashRouter>
    )
}

export default App