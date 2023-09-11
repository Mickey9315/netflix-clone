import { Icon } from "@iconify/react";
import Logo from "../assets/logo.svg";
import Ctx from "../context/Ctx";
import { useContext } from "react";

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
        className={`fixed inset-0 py-10 bg-zinc-950/75 z-50 transition-all duration-500 overflow-y-scroll ${
          !currentTitleToggle ? "invisible opacity-0" : "visible opacity-100"
        }`}
        onClick={onClickOutside}
      >
        <div
          className={`w-10/12 md:w-8/12 lg:w-3/5 h-auto relative top-[7.5%] left-1/2 -translate-x-1/2 rounded-lg origin-center overflow-visible hover:shadow-lg shadow-black border-[.5px] border-zinc-700 transition-all duration-500 delay-100 ${
            !currentTitleToggle
              ? "-translate-y-[0%] invisible opacity-0"
              : "-translate-y-[5%] visible opacity-100"
          }`}
        >
          <div className="relative h-auto rounded-t-lg overflow-hidden bg-zinc-900">
            {/* Title poster */}
            <div>
              <span className="inline-block absolute inset-0 bg-black/30"></span>
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
              className="absolute top-2 right-2 p-[.125rem] rounded-full bg-black/30"
              onClick={() => setCurrentTitleToggle(false)}
            >
              <Icon
                icon="heroicons:x-mark-20-solid"
                className="text-zinc-300 text-3xl"
              />
            </button>
            {/* Action row */}
            <div className="w-full px-6 py-3 flex items-end text-zinc-200 [&>button]:border text-base [&>button]:mr-2 absolute bottom-0 bg-gradient-to-b from-transparent to-zinc-900">
              <button className="rounded bg-zinc-50 px-3 py-1 flex items-center text-zinc-900 border-zinc-50">
                <Icon icon="heroicons:play-20-solid" className="mr-2" />
                Play
              </button>
              <button className="bg-black/10 border-zinc-300 rounded-full p-2">
                <Icon icon="heroicons:hand-thumb-up-20-solid" />
              </button>
              <button className="bg-black/10 border-zinc-300 rounded-full p-2">
                <Icon icon="heroicons:check-20-solid" />
              </button>
              <button className="bg-black/10 border-zinc-300 rounded-full p-2 ml-auto">
                <Icon icon="heroicons:speaker-wave" />
              </button>
            </div>
          </div>
          <div className="px-6 pt-6 pb-8 bg-zinc-900 rounded-b-lg grid grid-cols-2 gap-x-8 gap-y-4 text-sm text-zinc-500">
            {/* [&>*]:outline [&>*]:outline-red-500 */}
            {/* Information row */}
            <div className="[&>div>*]:mr-1 [&>div>*]:py-[.125rem] [&>div>*]:px-1 space-y-2">
              <div>
                <span className="text-green-500">95% Match</span>
                <span>2023</span>
                <span>1h 56m</span>
                {/* <span>8 Episodes</span> */}
              </div>
              <div>
                <span className="border-[.5px] border-zinc-500 rounded">
                  HD
                </span>
                <span className="border-[.5px] border-zinc-500 rounded">
                  {currentTitle.maturityRating}
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet elit. Veniam, unde enim explicabo
                quae repellat eius dolore reiciendis culpa neque.
              </p>
            </div>
            {/* Genres row */}
            <div className="space-y-3">
              <p>
                <strong>Genres</strong>:
                <span className="text-zinc-200">{` ${currentTitle.genres.join(
                  ", "
                )}`}</span>
              </p>
              <p>
                <strong>This MOVIE/SERIES is</strong>:
                <span className="text-zinc-200">{` ${currentTitle.genres.join(
                  ", "
                )}`}</span>
              </p>
            </div>
            {/* More Info */}
            <hr className="col-span-full my-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent h-[.075rem] border-none" />
            <div className="col-span-full space-y-1 [&_span]:text-zinc-300">
              <h3 className="mb-2 text-base font-bold text-zinc-300">
                About {currentTitle.name}
              </h3>
              <p>
                <strong>Director</strong>:
                <span className="ml-2">Mr. Director</span>
              </p>
              <p>
                <strong>Writer</strong>:<span className="ml-2">Mr. Writer</span>
              </p>
              <p>
                <strong>Genres</strong>:
                <span className="ml-2">{`${currentTitle.genres.join(
                  ", "
                )}`}</span>
              </p>
              <p>
                <strong>This MOVIE/SERIES is</strong>:
                <span className="ml-2">{`${currentTitle.genres.join(
                  ", "
                )}`}</span>
              </p>
              <p>
                <strong>Maturity Rating</strong>:
                <span className="ml-2 border-[.5px] border-zinc-500 rounded py-[.125rem] px-1">
                  {currentTitle.maturityRating}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
