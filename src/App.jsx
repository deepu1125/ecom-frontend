import React from "react";
import Products from "./components/Products";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import "./App.css";
import LoginPage from './components/LoginPage.jsx'


const App = () => {
  return (
   <ThemeProvider>
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Products />} />
           <Route path="/product/:id" element={<ProductDetailsPage />} />
           <Route path="/login" element={<LoginPage />} />

         </Routes>
        </BrowserRouter>
    </ThemeProvider>
    
 );
};

export default App;