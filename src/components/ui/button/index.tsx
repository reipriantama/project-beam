const Button = (props: any) => {
  const baseClassname = `relative flex cursor-pointer items-center gap-4 rounded-[76px] px-6 py-5`;
  const primaryClass =
    "bg-orange max-w-[333px] transition duration-500 hover:bg-blue";
  const secondaryClass =
    "bg-blue max-w-[301px] transition duration-500 hover:bg-orange";
  const appliedClass = props.primary
    ? primaryClass
    : props.secondary
      ? secondaryClass
      : "";

  const buttonClassname = `${baseClassname} ${appliedClass} ${props.className || ""}`;

  return (
    <div className={`group ${buttonClassname}`}>
      <button
        className="font-medium text-white uppercase tracking-20p font-hankenGrotesk"
        onClick={props.onClick}
      >
        {props.buttonText}
      </button>
      <div className="absolute p-2 bg-white rounded-full right-3">
        <img
          className="transition duration-500 size-4 group-hover:-rotate-12 group-hover:scale-150"
          src="/assets/ui/button/arrowRight.svg"
          alt="Arrow Right"
        />
      </div>
    </div>
  );
};

export default Button;
