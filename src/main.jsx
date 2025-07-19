import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import IPOList from "./Pages/IPO/IPOList";
import Home from "./Pages/Home/Home";
import IPODetail from "./Pages/IPO/IPODetail";
import IPO from "./Pages/IPO/IPO";
import "./index.css"
import ScrollToTop from "./components/ScrollToTop";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      
      <Route path="/" element={<Home/>}/>

      <Route path="/ipo" element = {<IPO/>}>
        <Route index element={<IPOList/>}/>
        <Route path=":companyID" element={<IPODetail/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
