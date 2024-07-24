import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from './pages/Home.jsx';
import Logement from "./pages/Logement.jsx";
import A_Propos from "./pages/A_Propos.jsx";
import NotFoundPage from "./pages/NotFoundPage";


function AppRouteur() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Logement/:id" element={<Logement/>}/>
                <Route path="/a_propos" element={<A_Propos/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default AppRouteur;
