import "./App.css";
// Components
import Header from "./components/Header";
import Profiles from "./components/Profiles";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
// Context
import Ctx from "./context/Ctx";
import { useState } from "react";

function App() {
  const [profileChosen, setProfileChosen] = useState(false);

  const handleChooseProfile = () => setProfileChosen(() => true);

  return (
    <>
      {/* Banner */}
      <Banner />
      {/* Profiles */}
      <Ctx.Provider value={profileChosen}>
        <Profiles onChooseProfile={handleChooseProfile} />
      </Ctx.Provider>
      <Header />
      <main className="-my-14">
        <Featured />
        {/* <Header /> */}
      </main>
    </>
  );
}

export default App;
