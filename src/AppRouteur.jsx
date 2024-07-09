import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home.jsx'
import Fiche_Logement from "./Fiche_Logement.jsx";
import A_Propos from "./A_Propos.jsx";
import NotFoundPage from "./NotFoundPage";


function AppRouteur() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/logement" element={<Fiche_Logement/>}/>
                <Route path="/a-propos" element={<A_Propos/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouteur;
