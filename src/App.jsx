import "./App.css";
import Header from "./components/Header";
// import Profiles from "./components/Profiles";
import Featured from "./components/Featured";

function App() {
  return (
    <>
      {/* <Profiles /> */}
      <Header />
      <main className="-my-14">
        <Featured />
        {/* <Header /> */}
      </main>
    </>
  );
}

export default App;
