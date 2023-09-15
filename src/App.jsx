import "./App.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
// Components
import Header from "./components/Header";
// import Profiles from "./components/Profiles";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import SideScroll from "./components/SideScroll";
import TitleExpanded from "./components/TitleExpanded";
// Context
import Ctx from "./context/Ctx";

const DEMO_DATA = {
  "TV Series": [
    {
      name: "The Witcher",
      imgUrl:
        "https://www.themoviedb.org/t/p/original/foGkPxpw9h8zln81j63mix5B7m8.jpg",
      genres: ["Drama", "Fantasy", "Thriller"],
      maturityRating: "TV-MA"
    },
    {
      name: "Love, Death & Robots",
      imgUrl:
        "https://www.themoviedb.org/t/p/original/6EQrEFSIpcEwPlaiSBhzstgmT2G.jpg",
      genres: ["Comedy", "Sci-Fi"],
      maturityRating: "TV-MA"
    },
    {
      name: "Stranger Things",
      imgUrl:
        "https://www.themoviedb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      genres: ["Drama", "Sci-Fi", "Thriller"],
      maturityRating: "TV-14"
    },
    {
      name: "From Scratch",
      imgUrl:
        "https://www.themoviedb.org/t/p/original/mNXnh4Ua8wMvSlAiXXzX7G3Ko5p.jpg",
      genres: ["Drama"],
      maturityRating: "TV"
    }
  ],
  Comedies: [
    {
      name: "My Next Guest Needs No Introduction With David Letterman",
      imgUrl:
        "https://www.themoviedb.org/t/p/original/b2V8GZEBoiiaaRdzpJAdizTmWCD.jpg",
      genres: ["Funny", "Interview", "Talk Show"],
      maturityRating: "TV-MA"
    },
    {
      name: "Disenchantment",
      imgUrl:
        "https://www.themoviedb.org/t/p/original/vz4NbG9QYymFq4sKCoPbOmKuRIA.jpg",
      genres: ["Adult Animation", "Funny"],
      maturityRating: "TV-14"
    }
  ],
  Documentaries: [
    {
      name: "Explained",
      imgUrl:
        "https://www.themoviedb.org/t/p/original/34AqE2yqpYWideVa2uq56GlLN6F.jpg",
      genres: ["Documentary", "Informative"],
      maturityRating: "TV-MA"
    },
    {
      name: "History 101",
      imgUrl:
        "https://www.themoviedb.org/t/p/original/26n5jkv3FGfAjgzFp82GdL4LSEF.jpg",
      genres: ["Documentary", "Informative"],
      maturityRating: "16+"
    }
  ]
};

function App() {
  // const [profileChosen, setProfileChosen] = useState(false);
  const [currentTitleToggle, setCurrentTitleToggle] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(DEMO_DATA["TV Series"][0]);

  const allSeries = Object.values(DEMO_DATA).reduce((acc, item) =>
    acc.concat(item)
  );
  console.log(allSeries);
  // const handleChooseProfile = () => setProfileChosen(() => true);

  useEffect(() => {
    if (currentTitleToggle) {
      document.body.classList.add("overflow-y-hidden");
      document.body.classList.remove("overflow-y-visible");
    } else {
      document.body.classList.add("overflow-y-visible");
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [currentTitleToggle]);

  return (
    <>
      {/* Banner */}
      <Banner />
      {/* Profiles */}
      {/* <Ctx.Provider value={profileChosen}>
        <Profiles onChooseProfile={handleChooseProfile} />
      </Ctx.Provider> */}
      <Header />
      <main className="-my-14 overflow-x-hidden">
        <Ctx.Provider
          value={{
            currentTitleToggle,
            setCurrentTitleToggle,
            currentTitle,
            setCurrentTitle
          }}
        >
          {/* Featured Title */}
          <Featured title={DEMO_DATA["TV Series"][1]} />
          {/* Gradient Transition */}
          <div className="w-full h-28 bg-gradient-to-b from-transparent via-zinc-900/75 to-zinc-900 -mt-28"></div>
          {/* Expanded Title Modal */}
          {createPortal(
            <TitleExpanded
              title={currentTitle}
              onCollapseTitle={() => setCurrentTitleToggle(false)}
            />,
            document.body
          )}
          {/* Side Scroll for Titles */}
          <div className="relative -top-32 pl-12">
            <SideScroll
              label={"Primary"}
              titles={allSeries}
              onCurrentTitleToggle={() => setCurrentTitleToggle(true)}
            />
            {Object.entries(DEMO_DATA).map(([k, v]) => (
              <SideScroll
                key={k}
                label={k}
                titles={v}
                onCurrentTitleToggle={() => setCurrentTitleToggle(true)}
              />
            ))}
          </div>
        </Ctx.Provider>
      </main>
    </>
  );
}

export default App;
