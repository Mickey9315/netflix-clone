import { Icon } from "@iconify/react";

export default function Featured() {
  return (
    <section className="relative h-screen overflow-hidden w-full flex flex-col justify-center text-gray-50 px-12 [&>*]:mb-5 bg-gradient-to-r from-gray-900/50 to-transparent">
      {/* Title Backdrop Image */}
      <img
        src="https://www.themoviedb.org/t/p/original/e7VzDMrYKXVrVon04Uqsrcgnf1k.jpg"
        alt="Feature Title Backdrop Image"
        className="w-full absolute inset-0 -z-10 object-cover"
      />
      {/* Title Logo / Image */}
      <img
        src="https://www.themoviedb.org/t/p/original/r5k465OnkuvXThhsH3UiomBp2gk.png"
        alt="Title Image"
        className="w-1/4 drop-shadow-lg"
      />
      {/* Popularity Status */}
      <h3 className="text-xl font-bold drop-shadow-lg">
        {/* Badge: TOP 10 */} #1 in Series Today
      </h3>
      {/* Description */}
      <p className="w-2/5 drop-shadow-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugit saepe
        est recusandae exercitationem! Facere dolorum dicta, minima natus ea,
        saepe aliquam quaerat expedita praesentium soluta cumque iure totam
        magnam.
      </p>
      <div className="[&>*]:mr-4">
        {/* Play Button */}
        <button className="inline-flex items-center justify-center w-32 h-10 bg-gray-50 rounded-md text-gray-900">
          <Icon icon="heroicons:play-20-solid" className="mr-1" />
          Play
        </button>
        {/* More Info Button */}
        <button className="inline-flex items-center justify-center w-32 h-10 bg-gray-500/80 rounded-md text-gray-50">
          <Icon icon="heroicons:information-circle" className="mr-1" />
          More Info
        </button>
      </div>
    </section>
  );
}
