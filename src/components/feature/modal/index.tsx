import Button from "../../ui/button";

const Modal = ({ show, onClose }: any) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-[1136px] space-y-12 rounded-[48px] bg-white px-12 py-14 font-beVietnamPro shadow-md">
        <div className="flex items-start justify-between">
          <div className="">
            <h2 className="text-7xl text-[#344054]">Let's get started.</h2>
            <p className="text-2xl text-[#667085]">
              Fill in the blanks and you will be registered!
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-blue-500 size-12 rounded-full bg-[#EAECF0] px-4 py-2"
          >
            <img
              className="size-6"
              src="/assets/modal/closeIcon.svg"
              alt="icon"
            />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6 text-[#667085]">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="fullName" className="font-medium font-beVietnamPro">
              <span className="text-[#F14C41]">*</span> Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Please insert your full name here"
              className="w-[496px] rounded-[4px] border-[1px] border-[#D0D5DD] p-3 font-satoshi"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="company" className="font-medium font-beVietnamPro">
              <span className="text-[#F14C41]">*</span> Name of your
              company/organisations?
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Please insert your company/organisations"
              className="w-[496px] rounded-[4px] border-[1px] border-[#D0D5DD] p-3 font-satoshi"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="email" className="font-medium font-beVietnamPro">
              <span className="text-[#F14C41]">*</span> Email
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Please insert your email here"
              className="w-[496px] rounded-[4px] border-[1px] border-[#D0D5DD] p-3 font-satoshi"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="phone" className="font-medium font-beVietnamPro">
              <span className="text-[#F14C41]">*</span> Phone Number
            </label>
            <input
              type="number"
              id="fullName"
              name="fullName"
              placeholder="Please insert your full phone number"
              className="w-[496px] rounded-[4px] border-[1px] border-[#D0D5DD] p-3 font-satoshi"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label
              htmlFor="sportPreferences"
              className="font-medium font-beVietnamPro"
            >
              <span className="text-[#F14C41]">*</span> Sport Preferences
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Please insert your Sport Preferences"
              className="w-[496px] rounded-[4px] border-[1px] border-[#D0D5DD] p-3 font-satoshi"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label
              htmlFor="creativePreferences"
              className="font-medium font-beVietnamPro"
            >
              <span className="text-[#F14C41]">*</span> Creative Preferences
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Please insert your Creative Preferences"
              className="w-[496px] rounded-[4px] border-[1px] border-[#D0D5DD] p-3 font-satoshi"
            />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <Button buttonText="Submit" primary={true} className="w-[159px]" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
