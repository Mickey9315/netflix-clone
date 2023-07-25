import SearchBox from "./SearchBox";
import { Icon } from "@iconify-icon/react";

export default function Header() {
  return (
    <header className="relative w-full flex items-center justify-between py-2 px-12 h-14 text-gray-50 bg-gradient-to-b from-gray-950 to-transparent z-10">
      <div className="flex items-center [&>*]:mr-4 [&>img]:mr-6">
        <img className="w-8" src="/logo.svg" alt="Netflix Logo" />
        <button>Home</button>
        <button>TV Series</button>
        <button>Movies</button>
        <button>My List</button>
      </div>
      <div className="flex items-center [&>*]:mr-3">
        <SearchBox />
        <button>Kids</button>
        <button>
          <Icon name="heroicons:bell" />
        </button>
        {/* Image Dropdown */}
      </div>
    </header>
  );
}
