//to build router
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

function App() {
  return (
    <Router basename="/react_recreate_ohmyfood">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:name" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
