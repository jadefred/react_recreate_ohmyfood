import React from "react";

//component
import Pageloader from "../components/Pageloader";
import HomeHeader from "../components/HomeHeader";
import Restaurant from "../components/Restaurant";

function Home() {
  return (
    <>
      <Pageloader />
      <HomeHeader />
      <Restaurant />
    </>
  );
}

export default Home;
