const Button = (props: any) => {
  const baseClassname = `relative flex cursor-pointer items-center gap-4 rounded-[76px] p-4 lg:px-6 lg:py-5`;
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
    <div onClick={props.onClick} className={`group ${buttonClassname}`}>
      <button
        className="flex items-center text-xs font-medium text-white uppercase font-hankenGrotesk tracking-20p lg:text-base"
        type={props.type}
      >
        {props.buttonText}
        <div className="absolute p-2 bg-white rounded-full right-3">
          <img
            className="transition duration-500 -rotate-90 size-4 group-hover:-rotate-0 group-hover:scale-150"
            src="/assets/ui/button/arrowRight.svg"
            alt="Arrow Right"
          />
        </div>
      </button>
    </div>
  );
};

export default Button;
