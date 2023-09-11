import { Icon } from "@iconify/react";
import Logo from "../assets/logo.svg";
import Ctx from "../context/Ctx";
import { useContext } from "react";

function Bullet() {
  return <span className="text-zinc-500 mx-1 last:hidden">&bull;</span>;
}

export default function Title({ title }) {
  const { currentTitleToggle, setCurrentTitleToggle, setCurrentTitle } =
    useContext(Ctx);

  return (
    <div className="w-64 h-36 rounded hover:rounded-b-none hover:scale-125 hover:-translate-y-8 origin-center first:origin-left last:origin-right transition-all duration-200 overflow-hidden hover:overflow-visible hover:shadow-lg hover:shadow-black mr-2 z-30 hover:z-40 [&>*]:border-[.5px] [&>*]:border-zinc-700 group/title">
      {/* Title Poster */}
      <div
        className="relative h-full rounded group-hover/title:rounded-b-none group-hover/title:border-b-0 overflow-hidden bg-zinc-900"
        onClick={() => {
          setCurrentTitle(title);
          setCurrentTitleToggle(true);
        }}
      >
        {/* Title poster */}
        <div>
          <span className="inline-block absolute inset-0 bg-black/25"></span>
          <img
            className="max-w-full object-cover bg-no-repeat"
            src={title.imgUrl}
            alt="Title Poster Image"
          />
        </div>
        {/* Netflix logo */}
        <img
          className="w-4 absolute top-2 left-2"
          src={Logo}
          alt="Netflix Logo"
        />
      </div>
      {/* Title Information */}
      <div className="p-2 space-y-4 bg-zinc-900 rounded-b opacity-0 invisible group-hover/title:opacity-100 group-hover/title:visible group-hover/title:border-t-0">
        {/* Icon row */}
        <div className="flex items-center text-zinc-200 [&>button]:rounded-full text-lg [&>button]:p-1 [&>button]:mr-1 [&>button]:border">
          <button className="bg-zinc-50 text-zinc-900 border-zinc-50">
            <Icon icon="heroicons:play-20-solid" />
          </button>
          <button className="border-zinc-400">
            <Icon icon="heroicons:check-20-solid" />
          </button>
          <button className="border-zinc-400">
            <Icon icon="heroicons:hand-thumb-up-20-solid" />
          </button>
          <button
            className="ml-auto mr-0 border-zinc-400"
            onClick={() => {
              setCurrentTitle(title);
              setCurrentTitleToggle(true);
            }}
          >
            <Icon icon="heroicons:chevron-down-20-solid" />
          </button>
        </div>
        {/* Information row */}
        <div className="text-xs [&>*]:mr-1 text-zinc-500">
          <span className="text-green-500">95% Match</span>
          <span className="border-[.5px] border-zinc-500 rounded py-[.125rem] px-1">
            {title.maturityRating}
          </span>
          <span className="">8 Episodes</span>
          <span className="border-[.5px] border-zinc-500 rounded py-[.125rem] px-1">
            HD
          </span>
        </div>
        {/* Genres row */}
        <div className="text-xs">
          {title.genres.map((genre) => (
            <>
              <span key={genre}>{genre}</span>
              <Bullet key={`genre-${Math.random()}`} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
