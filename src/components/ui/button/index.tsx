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
          <div className="relative top-0 left-0 overflow-hidden rounded-full">
            <img
              className="size-4 transition duration-500 group-hover:translate-x-[150%]"
              src="/assets/ui/button/arrowRight.svg"
              alt="Arrow Right"
            />
            <img
              className="absolute left-0 top-0 size-4 -translate-x-[150%] transition duration-500 group-hover:translate-x-0"
              src="/assets/ui/button/arrowRight.svg"
              alt="Arrow Right"
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Button;
