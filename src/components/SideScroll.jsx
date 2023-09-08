import { Icon } from "@iconify/react";
import Title from "./Title";

export default function SideScroll({ label, titles }) {
  return (
    <section className="my-5 w-full mx-auto group/sidescroll">
      <h3 className="font-medium text-lg text-zinc-200 flex items-center mb-2">
        {label}
        <Icon
          icon="heroicons:chevron-right-20-solid"
          className="ml-2 text-red-500 invisible group-hover/sidescroll:visible"
        />
      </h3>
      <div className="flex items-start space-x-4 [&>*]:shrink-0">
        {titles.map((title, index) => (
          <Title key={index} title={title} />
        ))}
      </div>
    </section>
  );
}
