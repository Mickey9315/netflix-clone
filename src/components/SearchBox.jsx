import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

export default function SearchBox() {
  const [inputToggle, setInputToggle] = useState(false);
  const inputRef = useRef(null);

  // Toggle input functionality
  const handleInputToggle = () => {
    setInputToggle((currToggle) => !currToggle);
  };

  // On expanded input, toggle focus on the input
  useEffect(() => {
    if (inputToggle) inputRef.current.focus();
  }, [inputToggle]);

  return (
    <div
      className={`flex items-center h-8 rounded-sm [&>*]:bg-transparent 
            ${
              inputToggle
                ? "[&>input]:max-w-[18rem] border border-zinc-300 bg-black"
                : "[&>input]:max-w-0"
            }
          `}
    >
      <button
        onClick={handleInputToggle}
        className="w-8 h-8 p-2 flex items-center justify-center"
      >
        <Icon icon="heroicons:magnifying-glass" className="text-xl shrink-0" />
      </button>
      <input
        type="text"
        ref={inputRef}
        onBlur={handleInputToggle}
        className="h-full focus:outline-none text-sm"
        placeholder="Title, People, Genres..."
      />
    </div>
  );
}
