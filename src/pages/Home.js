import React from "react";

//component
import Pageloader from "../components/Pageloader";
import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Pageloader />
      <HomeHeader />
      <Footer />
    </>
  );
}

export default Home;
