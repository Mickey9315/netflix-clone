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
    <div className="w-[45%] h-36 sm:w-[30%] sm:h-32 min-[840px]:w-[23%] md:h-32 lg:w-[23%] lg:h-[9.5rem] xl:w-[18.75%] xl:h-40 2xl:h-44 origin-center first:origin-left sm:[&:nth-child(3)]:origin-right min-[840px]:[&:nth-child(3)]:origin-center min-[840px]:[&:nth-child(4)]:origin-right xl:[&:nth-child(4)]:origin-center xl:[&:nth-child(5)]:origin-right rounded-md hover:rounded-b-none hover:scale-[115%] hover:-translate-y-8 transition-all duration-200 overflow-hidden hover:overflow-visible hover:shadow-lg hover:shadow-black z-30 hover:z-40 [&>*]:border-[.5px] [&>*]:border-zinc-700 group/title">
      {/* Title Poster */}
      <div
        className="relative h-full rounded-md group-hover/title:rounded-b-none group-hover/title:border-b-0 overflow-hidden bg-zinc-900"
        onClick={() => {
          setCurrentTitle(title);
          setCurrentTitleToggle(true);
        }}
      >
        {/* Title poster */}
        <div className="h-full">
          <span className="inline-block absolute inset-0 bg-black/25"></span>
          <img
            className="w-full h-full object-cover bg-no-repeat"
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
      <div className="p-2 space-y-4 bg-zinc-900 rounded-b-md opacity-0 invisible group-hover/title:opacity-100 group-hover/title:visible group-hover/title:border-t-0">
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
          <span className="border-[.5px] border-zinc-500 rounded-md py-[.125rem] px-1">
            {title.maturityRating}
          </span>
          <span className="">8 Episodes</span>
          <span className="border-[.5px] border-zinc-500 rounded-md py-[.125rem] px-1">
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
