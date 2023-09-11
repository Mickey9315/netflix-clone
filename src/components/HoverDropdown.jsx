/* eslint-disable react/prop-types */
export default function HoverDropdown({ children, classes }) {
  return (
    <div
      className={
        "flex flex-col absolute top-full right-0 w-56 group-hover:translate-y-1 group-hover:visible group-hover:opacity-100 opacity-0 invisible translate-y-2 rounded border border-zinc-600 bg-black/50 backdrop-blur-xl" +
        " " +
        classes
      }
    >
      <span
        className={`inline-block absolute -top-4 border-8 border-transparent border-b-zinc-600`}
      ></span>
      {children}
    </div>
  );
}
