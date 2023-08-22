/* eslint-disable react/prop-types */
export default function HoverDropdown({
  children,
  indicatorPostition,
  classes
}) {
  return (
    <div
      className={
        "flex flex-col absolute top-full right-0 w-56 group-hover:translate-y-1 group-hover:visible group-hover:opacity-100 opacity-0 invisible translate-y-2 rounded-sm border border-gray-500 bg-black/25 backdrop-blur-xl" +
        " " +
        classes
      }
    >
      <span
        className={`inline-block absolute -top-4 right-${indicatorPostition} border-8 border-transparent border-b-gray-500`}
      ></span>
      {children}
    </div>
  );
}
