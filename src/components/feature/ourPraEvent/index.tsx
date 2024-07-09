import { useState } from "react";
import Button from "../../ui/button";
import Modal from "../modal";
import { createPortal } from "react-dom";

const ModalPortal = ({ show, onClose }: any) => {
  return createPortal(
    show ? <Modal show={show} onClose={onClose} /> : null,
    document.body,
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
    <div className="px-6 pb-[60px] lg:space-y-[72px] lg:px-12 lg:pb-[120px]">
      <div className="space-y-6 lg:px-[134px]">
        <div className="flex items-center gap-3">
          <img
            className="size-4 lg:size-5"
            src="/assets/ourPraEvent/praEventLogo.svg"
            alt="logo"
          />
          <h1 className="text-xs leading-4 tracking-wider uppercase lg:text-xl lg:leading-8">
            OUR PRA-EVENT
          </h1>
        </div>
        <h1 className="gradient-text text-4xl font-semibold leading-[44px] lg:text-[92px] lg:leading-[104px]">
          Strengthen Your <br className="hidden lg:block" /> Foundation
        </h1>
      </div>
      <div className="mt-9 space-y-9 lg:flex lg:gap-[72px]">
        {/* hide */}

        <div className="flex gap-3 lg:gap-6">
          <div className="space-y-3 lg:mt-[120px] lg:space-y-6">
            <div className="aspect-[378/480] overflow-hidden rounded-xl">
              <img
                className="object-cover object-center transition duration-700 ease-out hover:scale-105 lg:h-full lg:w-full"
                src="/assets/ourPraEvent/imgPraEvent1.png"
                alt="running"
              />
            </div>
            <div className="space-y-1">
              <p className="text-base font-semibold text-[#344054] lg:text-[28px]">
                Imam Rahmadan
              </p>
              <p className="font-satoshi text-[12px] leading-3 tracking-tighter text-[#667085] lg:text-xl lg:tracking-normal">
                Komunitas Lari Strong Manis
              </p>
            </div>
          </div>
          <div className="mt-12 space-y-6 lg:mt-[288px]">
            <div className="aspect-[378/480] overflow-hidden rounded-xl">
              <img
                className="object-cover object-center transition duration-700 ease-out hover:scale-105 lg:h-full lg:w-full"
                src="/assets/ourPraEvent/imgPraEvent2.png"
                alt="running"
              />
            </div>
            <div className="space-y-1">
              <p className="text-base font-semibold text-[#344054] lg:text-[28px]">
                Aldila Septiadi
              </p>
              <p className="font-satoshi text-[12px] leading-3 tracking-tighter text-[#667085] lg:text-xl lg:tracking-normal">
                VP, Founder, Enterpreneur - Ultra Cycling & Running Enthusiast
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[598px] space-y-12">
          <p className="font-satoshi text-sm font-medium leading-6 tracking-tighter text-[#344054] lg:text-[28px] lg:leading-[48px]">
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
              className="w-[270px] lg:w-[333px]"
            />
          </div>
        </div>
      </div>
      <ModalPortal show={showModal} onClose={closeModal} />
    </div>
  );
};

export default OurPraEvent;
