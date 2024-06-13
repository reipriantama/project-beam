import { useState } from "react";
import Button from "../../ui/button";
import { CgSpinner } from "react-icons/cg";

const Modal = ({ show, onClose }: any) => {
  if (!show) return null;
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle as any);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyxWsYrp9sTbkrHZ9zBknKhBERw-HSJ8z7HsSFfGYJISD3mTdaD-3lSSnwr-nlPFxz8/exec",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const contentType = response.headers.get("content-type");
      let data;
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      console.log(data);
      alert("Success!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error!");
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black bg-opacity-50 lg:p-12">
      <div className="w-[312px] space-y-6 rounded-[48px] bg-white p-6 font-beVietnamPro shadow-md lg:w-[1136px] lg:space-y-12 lg:px-12 lg:py-14">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-[#344054] lg:text-7xl">
              Let's get started.
            </h2>
            <p className="text-xs font-normal text-[#667085] lg:text-2xl">
              Fill in the blanks and you will be registered!
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-blue-500 size-6 rounded-full bg-[#EAECF0] p-1 lg:size-12 lg:p-3"
          >
            <img
              className="size-4 lg:size-6"
              src="/assets/modal/closeIcon.svg"
              alt="icon"
            />
          </button>
        </div>
        <form
          className="form space-y-3 text-[#667085] lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0"
          onSubmit={submitForm}
        >
          <div className="flex flex-col w-full gap-1 lg:gap-2">
            <label
              htmlFor="fullName"
              className="text-xs font-medium font-beVietnamPro lg:text-base"
            >
              <span className="text-[#F14C41]">*</span> Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="FullName"
              placeholder="Please insert your full name here"
              className="w-full rounded-[4px] border-[1px] border-[#D0D5DD] p-3 font-satoshi text-xs lg:text-base"
            />
          </div>
          <div className="flex flex-col w-full gap-1 lg:gap-2">
            <label
              htmlFor="company"
              className="text-xs font-medium font-beVietnamPro lg:text-base"
            >
              <span className="text-[#F14C41]">*</span> Name of your
              company/organisations?
            </label>
            <input
              type="text"
              id="company"
              name="Company"
              placeholder="Please insert your company/organisations"
              className="w-full rounded-[4px] border-[1px] border-[#D0D5DD] p-3 font-satoshi text-xs lg:text-base"
            />
          </div>
          <div className="flex flex-col w-full gap-1 lg:gap-2">
            <label
              htmlFor="email"
              className="text-xs font-medium font-beVietnamPro lg:text-base"
            >
              <span className="text-[#F14C41]">*</span> Email
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              placeholder="Please insert your email here"
              className="w-full rounded-[4px] border-[1px] border-[#D0D5DD] p-3 font-satoshi text-xs lg:text-base"
            />
          </div>
          <div className="flex flex-col w-full gap-1 lg:gap-2">
            <label
              htmlFor="phone"
              className="text-xs font-medium font-beVietnamPro lg:text-base"
            >
              <span className="text-[#F14C41]">*</span> Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="PhoneNumber"
              placeholder="Please insert your full phone number"
              className="w-full rounded-[4px] border-[1px] border-[#D0D5DD] p-3 font-satoshi text-xs lg:text-base"
            />
          </div>
          <div className="flex flex-col w-full gap-1 lg:gap-2">
            <label
              htmlFor="sportPreferences"
              className="text-xs font-medium font-beVietnamPro lg:text-base"
            >
              <span className="text-[#F14C41]">*</span> Sport Preferences
            </label>
            <input
              type="text"
              id="sportPreferences"
              name="SportPreferences"
              placeholder="Please insert your Sport Preferences"
              className="w-full rounded-[4px] border-[1px] border-[#D0D5DD] p-3 font-satoshi text-xs lg:text-base"
            />
          </div>
          <div className="flex flex-col w-full gap-1 lg:gap-2">
            <label
              htmlFor="creativePreferences"
              className="text-xs font-medium font-beVietnamPro lg:text-base"
            >
              <span className="text-[#F14C41]">*</span> Creative Preferences
            </label>
            <input
              type="text"
              id="creativePreferences"
              name="CreativePreferences"
              placeholder="Please insert your Creative Preferences"
              className="w-full rounded-[4px] border-[1px] border-[#D0D5DD] p-3 font-satoshi text-xs lg:text-base"
            />
          </div>
          {isLoading && (
            <div className="flex justify-center w-full col-span-2">
              <div className="loader">
                <CgSpinner className="size-10 animate-spin" />
              </div>
            </div>
          )}
          <div className="flex w-full col-span-2 pt-3 lg:justify-center lg:pt-12">
            <Button
              buttonText="Submit"
              primary={true}
              className="w-[120px] lg:w-[159px]"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
