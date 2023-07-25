import { Icon } from "@iconify-icon/react";

export default function SearchBox() {
  return (
    <section className="flex items-center justify-center">
      <Icon icon="heroicons:magnifying-glass" className="p-1" />
      <input type="text" id="search" placeholder="Titles, People, Genres" />
      <button type="submit">{/* Close Icon */}</button>
    </section>
  );
}
