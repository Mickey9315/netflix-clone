import { Icon } from "@iconify/react";
import Title from "./Title";

export default function SideScroll({ label }) {
  return (
    <section className="my-5 w-full mx-auto group">
      <h3 className="font-medium text-lg text-zinc-200 flex items-center mb-2">
        {label}
        <Icon
          icon="heroicons:chevron-right-20-solid"
          className="ml-2 text-red-500 invisible group-hover:visible"
        />
      </h3>
      <div className="flex items-start space-x-4">
        <Title />
        <Title />
        <Title />
        <Title />
      </div>
    </section>
  );
}
