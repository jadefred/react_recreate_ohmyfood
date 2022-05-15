//to build router
import React from "react";

//components
import Home from "./pages/Home";

//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
