import { Icon } from "@iconify/react";
import Logo from "../assets/logo.svg";
import Ctx from "../context/Ctx";
import { useContext } from "react";

function Bullet() {
  return <span className="text-zinc-500 mx-1 last:hidden">&bull;</span>;
}

export default function TitleExpanded() {
  const { currentTitleToggle, setCurrentTitleToggle, currentTitle } =
    useContext(Ctx);

  const onClickOutside = (e) => {
    if (e.target.id.localeCompare("expand-overlay") === 0) {
      setCurrentTitleToggle(false);
    }
  };

  return (
    currentTitle && (
      <div
        id="expand-overlay"
        className={`fixed inset-0 bg-zinc-950/75 z-50 transition-all duration-500 ${
          !currentTitleToggle ? "invisible opacity-0" : "visible opacity-100"
        }`}
        onClick={onClickOutside}
      >
        <div
          className={`w-10/12 md:w-8/12 lg:w-3/5 h-auto relative top-1/2 left-1/2 -translate-x-1/2 rounded-lg origin-center overflow-visible hover:shadow-lg shadow-black border-[.5px] border-zinc-700 transition-all duration-500 delay-100 ${
            !currentTitleToggle
              ? "-translate-y-[45%] invisible opacity-0"
              : "-translate-y-[50%] visible opacity-100"
          }`}
        >
          <div className="relative h-auto rounded-t-lg overflow-hidden bg-zinc-900">
            {/* Title poster */}
            <div>
              <span className="inline-block absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></span>
              <img
                className="max-w-full object-cover bg-no-repeat"
                src={currentTitle.imgUrl}
                alt="Title Poster Image"
              />
            </div>
            {/* Netflix logo */}
            <img
              className="w-8 absolute top-2 left-2"
              src={Logo}
              alt="Netflix Logo"
            />
            {/* Close button */}
            <button
              className="absolute top-2 right-2"
              onClick={() => setCurrentTitleToggle(false)}
            >
              <Icon
                icon="heroicons:x-mark-20-solid"
                className="text-zinc-200 text-3xl"
              />
            </button>
          </div>
          <div className="p-2 space-y-2 bg-zinc-900 rounded-b-lg">
            {/* Icon row */}
            <div className="flex items-center text-zinc-200 [&>button>*]:border-[1.5px] [&>button>*]:rounded-full [&>button>*]:text-3xl [&>button>*]:p-1 [&>button>*]:mr-1">
              <button>
                <Icon
                  icon="heroicons:play-20-solid"
                  className="bg-zinc-50 text-zinc-900 border-zinc-50"
                />
              </button>
              <button>
                <Icon
                  icon="heroicons:hand-thumb-up-20-solid"
                  className="border-zinc-500"
                />
              </button>
              <button>
                <Icon
                  icon="heroicons:check-20-solid"
                  className="border-zinc-500"
                />
              </button>
            </div>
            {/* Information row */}
            <div className="text-xs [&>*]:mr-1 [&>*]:text-zinc-500 [&>*]:py-[.125rem] [&>*]:px-1">
              <span className="border-[.5px] border-zinc-500 rounded">
                {currentTitle.maturityRating}
              </span>
              <span className="">8 Episodes</span>
              <span className="border-[.5px] border-zinc-500 rounded">HD</span>
            </div>
            {/* Genres row */}
            <div className="text-xs">
              {currentTitle.genres.map((genre) => (
                <>
                  <span key={genre}>{genre}</span>
                  <Bullet key={`genre-${Math.random()}`} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
