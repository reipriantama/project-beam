import { useState } from "react";
import Button from "../../ui/button";

const Modal = ({ show, onClose }: any) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-8 rounded-md shadow-md">
        <h2 className="mb-4 text-2xl text-white">Modal Title</h2>
        <p className="mb-6 text-white">This is the modal content.</p>
        <button
          onClick={onClose}
          className="px-4 py-2 text-blue-500 bg-white rounded"
        >
          Close
        </button>
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
