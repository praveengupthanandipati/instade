import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./includes/Header";
import Home from "./pages/Home";
import Bgremoval from "./pages/Bgremoval";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/Bgremoval" Component={Bgremoval} />
          <Route path="/Login" Component={Login} />
          <Route path="/Signup" Component={Signup} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
