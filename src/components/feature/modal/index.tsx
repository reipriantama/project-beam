import { useState } from "react";
import Button from "../../ui/button";
import { CgSpinner } from "react-icons/cg";

const Modal = ({ show, onClose }: any) => {
  if (!show) return null;
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle as any);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzr992xUBDo9-nApquU4_P4uxpq6uRPw-C4V2CWk3Uve4pTJsyZ49zbUPUXN-WstaFf/exec",
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
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Error!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black bg-opacity-50 lg:p-12">
      {/* <div className="h-[calc(100vh-100px)] w-[312px] space-y-6 overflow-auto rounded-[48px] bg-white p-6 font-beVietnamPro shadow-md lg:min-h-[632px] lg:w-[1136px] lg:space-y-12 lg:px-12 lg:py-14"> */}
      {!isSubmitted ? (
        <>
          <div className="w-full p-6 space-y-6 overflow-auto bg-white shadow-md rounded-3xl font-beVietnamPro lg:space-y-12 lg:px-12 lg:py-14">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-medium text-[#344054] lg:text-7xl">
                  Let's get started.
                </h2>
                <p className="font-ibm text-xs font-normal leading-[18px] text-[#667085] lg:text-2xl">
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
                  placeholder="Please insert your sport preferences (i.e. Running, Jogging, Swimming, etc.)"
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
                  placeholder="Please insert your creative preferences (i.e. Writing, Photography, Videography, etc.)"
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
                  onClick={() => {
                    window.open("https://api.whatsapp.com/", "_blank");
                  }}
                />
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="w-full p-6 space-y-6 overflow-auto bg-white shadow-md rounded-3xl font-beVietnamPro lg:space-y-12 lg:px-12 lg:py-14">
            <div className="flex justify-between">
              <div className="space-y-2">
                <h1 className="font-beVietnamPro text-2xl font-medium text-[#344054] lg:block lg:text-7xl">
                  Thank You for Registration
                </h1>
                <h1 className="hidden font-beVietnamPro text-2xl font-medium text-[#344054] lg:text-7xl">
                  Congratulations!
                </h1>
                <p className="font-ibm text-xs leading-[18px] text-[#667085] lg:hidden lg:text-2xl">
                  See you on 14th July 2024!
                </p>
                <p className="hidden font-ibm text-xs leading-[18px] text-[#667085] lg:block lg:text-2xl">
                  You have joined the pack to boost your potential. See you on
                  14th July 2024!
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
            <div className="justify-center hidden w-full lg:flex">
              <Button
                buttonText="Join the community so you won’t miss something!"
                primary={true}
                className="max-w-[657px]"
              />
            </div>
            <div className="flex justify-center w-full lg:hidden">
              <Button
                buttonText="Join our WA community"
                primary={true}
                className="min-w-[270px]"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
