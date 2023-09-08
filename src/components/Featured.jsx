import { Icon } from "@iconify/react";
import Ctx from "../context/Ctx";
import { useContext } from "react";

export default function Featured({ title }) {
  const { setCurrentTitleToggle, setCurrentTitle } = useContext(Ctx);
  return (
    <section className="relative h-screen overflow-hidden w-full flex flex-col justify-center text-zinc-50 px-12 [&>*]:mb-5 bg-gradient-to-r from-zinc-900/50 to-transparent">
      {/* Title Backdrop Image */}
      <img
        src={title.imgUrl}
        alt="Feature Title Backdrop Image"
        className="w-full absolute inset-0 -z-10 object-cover"
      />
      {/* Title Information */}
      <div className="[&>*]:mb-5">
        <img
          src="https://www.themoviedb.org/t/p/original/r5k465OnkuvXThhsH3UiomBp2gk.png"
          alt="Title Image"
          className="w-1/4 drop-shadow-lg"
        />
        {/* Popularity Status */}
        <h3 className="text-xl font-bold drop-shadow-lg text-zinc-200">
          {/* Badge: TOP 10 */} #1 in Series Today
        </h3>
        {/* Description */}
        <p className="w-2/5 drop-shadow-lg text-zinc-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugit
          saepe est recusandae exercitationem! Facere dolorum dicta, minima
          natus ea, saepe aliquam quaerat expedita praesentium soluta cumque
          iure totam magnam.
        </p>
        <div className="[&>*]:mr-4">
          {/* Play Button */}
          <button className="inline-flex items-center justify-center w-32 h-10 bg-zinc-50 rounded-md text-zinc-900">
            <Icon icon="heroicons:play-20-solid" className="mr-1" />
            Play
          </button>
          {/* More Info Button */}
          <button
            className="inline-flex items-center justify-center w-32 h-10 bg-zinc-500/80 rounded-md text-zinc-50"
            onClick={() => {
              setCurrentTitle(title);
              setCurrentTitleToggle(true);
            }}
          >
            <Icon icon="heroicons:information-circle" className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}
