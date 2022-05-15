import React from "react";

//component
import Pageloader from "../components/Pageloader";
import HomeHeader from "../components/HomeHeader";
import Restaurant from "../components/Restaurant";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Pageloader />
      <HomeHeader />
      <Restaurant />
      <Footer />
    </>
  );
}

export default Home;
