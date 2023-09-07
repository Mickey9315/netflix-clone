import { Icon } from "@iconify/react";
import Logo from "../assets/logo.svg";

function Bullet() {
  return <span className="text-zinc-500">&bull;</span>;
}

export default function Title() {
  return (
    <div className="w-64 h-36 rounded-lg hover:rounded-b-none hover:scale-125 hover:-translate-y-8 origin-center first:origin-left last:origin-right transition-all duration-200 overflow-hidden hover:overflow-visible hover:shadow-lg hover:shadow-black mr-2 z-30 hover:z-40 [&>*]:border-[.5px] [&>*]:border-zinc-800 group">
      <div className="relative rounded-t-lg group-hover:border-b-0 overflow-hidden ">
        {/* Netflix logo */}
        <img
          className="w-4 absolute top-2 left-2"
          src={Logo}
          alt="Netflix Logo"
        />
        <img
          className="w-full object-cover"
          src="https://www.themoviedb.org/t/p/original/e7VzDMrYKXVrVon04Uqsrcgnf1k.jpg"
          alt="Title Cover Image"
        />
      </div>
      <div className="p-2 space-y-2 bg-zinc-950 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:border-t-0">
        {/* Icon row */}
        <div className="flex items-center text-zinc-200 [&>button>*]:border-[1.5px] [&>button>*]:rounded-full [&>button>*]:text-3xl [&>button>*]:p-1 [&>button>*]:mr-1">
          <button>
            <Icon
              icon="heroicons:play-20-solid"
              className="bg-zinc-50 text-zinc-950 border-zinc-50"
            />
          </button>
          <button>
            <Icon
              icon="heroicons:hand-thumb-up-20-solid"
              className="border-zinc-500"
            />
          </button>
          <button>
            <Icon icon="heroicons:check-20-solid" className="border-zinc-500" />
          </button>
          <button className="ml-auto mr-0">
            <Icon
              icon="heroicons:chevron-down-20-solid"
              className="border-zinc-500"
            />
          </button>
        </div>
        {/* Information row */}
        <div className="text-xs [&>*]:mr-1 [&>*]:text-zinc-500 [&>*]:py-[.125rem] [&>*]:px-1">
          <span className="border-[.5px] border-zinc-500 rounded">TV-14</span>
          <span className="">8 Episodes</span>
          <span className="border-[.5px] border-zinc-500 rounded">HD</span>
        </div>
        {/* Genres row */}
        <div className="text-xs">
          Mindbending <Bullet /> Thriller
        </div>
      </div>
    </div>
  );
}
