import React from "react";
import Verify from "./Auth/Verify";
import MyCart from "./Components/MyCart";

// Main restaurant pages
import CitySubs from "./Restaurants/CitySubs";
import Lbc from "./Restaurants/Lbc";
import SoFresh from "./Restaurants/SoFresh";
import Nuli from "./Restaurants/Nuli";
import Akara from "./Restaurants/Akara";
import MrEats from "./Restaurants/MrEats";

// CitySubs subpages
import CitySubs_All from "./Restaurants/CitySubs_folder/CitySubs_All";
import CitySubs_breakfast from "./Restaurants/CitySubs_folder/CitySubs_breakfast";
import CitySubs_Pastries from "./Restaurants/CitySubs_folder/CitySubs_Pastries";
import CitySubs_smoothies from "./Restaurants/CitySubs_folder/CitySubs_smoothies";
import CitySubs_Softdrinks from "./Restaurants/CitySubs_folder/CitySubs_Softdrinks";

// Lbc subpages
import Lbc_All from "./Restaurants/Lbc_folder/Lbc_All";
import Lbc_Breakfast from "./Restaurants/Lbc_folder/Lbc_Breakfast";
import Lbc_drinks from "./Restaurants/Lbc_folder/Lbc_drinks";

// SoFresh subpages
import SoFresh_All from "./Restaurants/SoFresh_folder/SoFresh_All";
import Drinks from "./Restaurants/SoFresh_folder/Drinks";
import Milkshakes from "./Restaurants/SoFresh_folder/Milkshakes";
import Sandwich from "./Restaurants/SoFresh_folder/Sandwich";
import Smoothies from "./Restaurants/SoFresh_folder/Smoothies";

// Akara subpages
import Akara_All from "./Restaurants/Akara_folder/Akara_All";
import Akara_Drinks from "./Restaurants/Akara_folder/Akara_Drinks";
import Classic from "./Restaurants/Akara_folder/Classic";
import Others from "./Restaurants/Akara_folder/Others";

// Nuli subpages
import Nuli_All from "./Restaurants/Nuli_folder/Nuli_All";
import Breakfast from "./Restaurants/Nuli_folder/Breakfast";
import NuliDrinks from "./Restaurants/Nuli_folder/NuliDrinks";
import Pastries from "./Restaurants/Nuli_folder/Pastries";

// MrEats subpages
import MrEats_All from "./Restaurants/MrEats_folder/MrEats_All";
import M_Breakfast from "./Restaurants/MrEats_folder/M_Breakfast";
import M_Drinks from "./Restaurants/MrEats_folder/M_Drinks";
import M_Extra from "./Restaurants/MrEats_folder/M_Extra";

import { HashRouter, Routes, Route } from "react-router-dom";
import RouterError from "./Components/RouterError";
import LandingPage from "./Page/LandingPage";
import WebApp from "./Page/WebApp";
import ProfilePage from "./Page/ProfilePage";
import Partner from "./Page/Partner/Partner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutPage from "./Page/AboutPage";
import HowItWorks from "./Page/HowItWorks";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<RouterError />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/webapp" element={<WebApp />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/citysubs" element={<CitySubs />}>
          <Route path="" element={<CitySubs_All />} />
          <Route path="citysubs_breakfast" element={<CitySubs_breakfast />} />
          <Route path="citysubs_pastries" element={<CitySubs_Pastries />} />
          <Route path="citysubs_smoothies" element={<CitySubs_smoothies />} />
          <Route path="citysubs_softdrinks" element={<CitySubs_Softdrinks />} />
        </Route>
        <Route path="/lbc" element={<Lbc />}>
          <Route path="" element={<Lbc_All />} />
          <Route path="lbc_breakfast" element={<Lbc_Breakfast />} />
          <Route path="lbc_drinks" element={<Lbc_drinks />} />
        </Route>
        <Route path="/sofresh" element={<SoFresh />}>
          <Route path="" element={<SoFresh_All />} />
          <Route path="drinks" element={<Drinks />} />
          <Route path="milkshakes" element={<Milkshakes />} />
          <Route path="sandwich" element={<Sandwich />} />
          <Route path="smoothies" element={<Smoothies />} />
        </Route>
        <Route path="/nuli" element={<Nuli />}>
          <Route path="" element={<Nuli_All />} />
          <Route path="/nuli_drinks" element={<NuliDrinks />} />
          <Route path="breakfast" element={<Breakfast />} />
          <Route path="pastries" element={<Pastries />} />
        </Route>
        <Route path="/akara" element={<Akara />}>
          <Route path="" element={<Akara_All />} />
          <Route path="akara_drinks" element={<Akara_Drinks />} />
          <Route path="classic" element={<Classic />} />
          <Route path="others" element={<Others />} />
        </Route>
        <Route path="/mreats" element={<MrEats />}>
          <Route path="" element={<MrEats_All />} />
          <Route path="m_breakfast" element={<M_Breakfast />} />
          <Route path="m_drinks" element={<M_Drinks />} />
          <Route path="m_extra" element={<M_Extra />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />

    
    </HashRouter>
  );
};

export default App;
