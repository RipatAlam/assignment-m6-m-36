
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import PremiumDigitalTools from "./Components/PremiumDigitalTools/PremiumDigitalTools";
import RatingNumber from "./Components/RatingNumber/RatingNumber";
import DigitalTools from ".././public/DigitalTools.json";
import { Suspense } from "react";
import Account from "./Components/Account/Account";

const toolsPromise = fetch("DigitalTools.json")
  .then(res => res.json());

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RatingNumber></RatingNumber>

      <Suspense fallback={<span className="loading loading-spinner loading-xl justify-center align-center"></span>}>
        <PremiumDigitalTools toolsPromise={toolsPromise}></PremiumDigitalTools>
      </Suspense>

      <Account></Account>
    </>
  );
}

export default App;
