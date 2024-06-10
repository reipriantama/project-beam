import { useState } from "react";
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

const OurPraEvent = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="space-y-[72px] px-12 pb-[120px]">
      <div className="space-y-6 px-[134px]">
        <img src="/assets/ourPraEvent/praEventLogo.svg" alt="logo" />
        <h5 className="gradient-text text-[92px] font-semibold leading-[104px]">
          Strengthen Your
          <br />
          Foundation
        </h5>
      </div>
      <div className="flex gap-[72px]">
        <div className="flex gap-6">
          <div className="mt-[120px] space-y-6">
            <div className="overflow-hidden rounded-xl">
              <img
                className="aspect-[378/480] h-full w-full object-cover transition duration-700 ease-out hover:scale-125"
                src="/assets/ourPraEvent/peopleRunning.jpeg"
                alt="running"
              />
            </div>
            <div className="space-y-1">
              <p className="text-[28px] font-semibold text-[#344054]">
                Imam Rahmadan
              </p>
              <p className="font-satoshi text-xl text-[#667085]">
                Komunitas Lari Strong Manis
              </p>
            </div>
          </div>
          <div className="mt-[288px] space-y-6">
            <div className="overflow-hidden rounded-xl">
              <img
                className="aspect-[378/480] h-full w-full object-cover transition duration-700 ease-out hover:scale-125"
                src="/assets/ourPraEvent/peopleStand.jpeg"
                alt="running"
              />
            </div>
            <div className="space-y-1">
              <p className="text-[28px] font-semibold text-[#344054]">
                Imam Rahmadan
              </p>
              <p className="font-satoshi text-xl text-[#667085]">
                Komunitas Lari Strong Manis
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[598px] space-y-12">
          <p className="font-satoshi text-[28px] font-medium leading-[48px] tracking-tighter text-[#344054]">
            An intimate gathering crafted by and for people who want to elevate
            their life in the creative city of Bandung. Join us to discover how
            to have a strong foundation on your next run and how to balance your
            career life and your healthy life. Let's examine their implications
            on your body, mind, and souls. In addition to engaging discussions,
            this event will feature a robust networking opportunity where
            influential will gather to discuss the transformative impact of work
            life balance. Together, let's navigate these opportunities, shaping
            a collective vision for our future.
          </p>
          <div>
            <Button
              primary={true}
              buttonText="JOIN OUR first meetup"
              onClick={openModal}
            />
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={closeModal} />
    </div>
  );
};

export default OurPraEvent;
