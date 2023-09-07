import "./App.css";
// Components
import Header from "./components/Header";
// import Profiles from "./components/Profiles";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
// Context
// import Ctx from "./context/Ctx";
import { useState } from "react";
import SideScroll from "./components/SideScroll";

const DEMO_DATA = {
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
  ],
  "TV Series": [
    {
      name: "The Witcher",
      imgUrl:
        "https://www.themoviedb.org/t/p/original/foGkPxpw9h8zln81j63mix5B7m8.jpg",
      genres: ["Drama", "Fantasy", "Thriller"],
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
  ]
};

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
        <div className="w-full h-24 bg-gradient-to-b from-transparent to-zinc-900 -mt-24"></div>
        {/* <Header /> */}
        <div className="relative -top-32 px-12">
          {Object.entries(DEMO_DATA).map(([k, v]) => (
            <SideScroll key={k} label={k} titles={v} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
