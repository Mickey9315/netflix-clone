// import { Icon } from "@iconify/react";
import primaryProfile from "../assets/profile-primary.png";
import secondaryProfile from "../assets/profile-secondary.png";
import kidsProfile from "../assets/profile-kids.png";
import { Icon } from "@iconify/react";
import Ctx from "../context/Ctx";
import { useContext } from "react";

export default function Profiles({ onChooseProfile }) {
  const profileChosen = useContext(Ctx);

  return (
    !profileChosen && (
      <section className="absolute transition-all duration-150 delay-75 w-full h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-400 z-20 [&>*]:mb-10">
        <h1 className="text-4xl font-semibold text-gray-100">
          Who&apos;s Watching?
        </h1>
        {/* Profiles List */}
        <div>
          {[
            {
              id: "card-holder",
              name: "Card Holder",
              locked: true,
              picture: primaryProfile
            },
            {
              id: "free-loader",
              name: "Free Loader",
              locked: true,
              picture: secondaryProfile
            },
            { id: "kids", name: "Kids", locked: true, picture: kidsProfile }
          ].map((profile) => (
            <button
              key={profile.id}
              className="mr-8 [&>*]:mb-4 last:[&>*]:mb-0"
              onClick={onChooseProfile}
            >
              <img
                className="w-32 rounded-md"
                src={profile.picture}
                alt={`Profile Picture for ${profile.name}`}
              />
              <span className="inline-block text-lg">{profile.name}</span>
              {profile.locked && (
                <Icon
                  icon="heroicons:lock-closed"
                  className="mx-auto text-lg"
                />
              )}
            </button>
          ))}
          <button className="mr-0">
            <div className="w-32 h-32 flex items-center justify-center mb-4 ">
              <Icon
                icon="heroicons:plus-circle-solid"
                className="text-gray-400 text-8xl"
              />
            </div>
            <span className="text-lg">Add Profile</span>
          </button>
        </div>
        <button className="border border-gray-400 px-6 py-3 rounded">
          Manage Profiles
        </button>
      </section>
    )
  );
}
