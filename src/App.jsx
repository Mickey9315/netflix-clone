import "./App.css";
// Components
import Header from "./components/Header";
import Profiles from "./components/Profiles";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
// Context
import Ctx from "./context/Ctx";
import { useState } from "react";
import SideScroll from "./components/SideScroll";

function App() {
  const [profileChosen, setProfileChosen] = useState(false);

  const handleChooseProfile = () => setProfileChosen(() => true);

  return (
    <>
      {/* Banner */}
      <Banner />
      {/* Profiles */}
      {/* <Ctx.Provider value={profileChosen}>
        <Profiles onChooseProfile={handleChooseProfile} />
      </Ctx.Provider> */}
      <Header />
      <main className="-my-14">
        <Featured />
        {/* Gradient Transition */}
        <div className="w-full h-24 bg-gradient-to-b from-transparent to-black -mt-24"></div>
        {/* <Header /> */}
        <div className="relative -top-32 px-12">
          <SideScroll label="TV Comedies" />
          <SideScroll label="Documentaries" />
          <SideScroll label="Action & Adventure Movies" />
        </div>
      </main>
    </>
  );
}

export default App;
