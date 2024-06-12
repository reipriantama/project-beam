import { useState } from "react";
import Button from "../../ui/button";
import { createPortal } from "react-dom";
import Modal from "../modal";

const ModalPortal = ({ show, onClose }: any) => {
  return createPortal(
    show ? <Modal show={show} onClose={onClose} /> : null,
    document.body,
  );
};

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div
      className="relative h-screen w-full rounded-b-[48x] bg-[#F2F4F7] p-6 pt-[34px] drop-shadow lg:px-12"
      style={{
        backgroundImage: 'url("/assets/hero/heroImage.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
        zIndex: 10,
      }}
    >
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.65 }}
      ></div>
      <div className="fixed inset-0 top-0 left-0 w-screen h-full">
        {/* Default image for large screens */}
        <img
          className="hidden object-cover w-full h-full lg:block"
          src="/assets/hero/frame.svg"
          alt="logo"
        />
        {/* Image for small screens (xs) */}
        <img
          className="block object-cover w-full h-full lg:hidden"
          src="/assets/hero/frameMobile.svg"
          alt="logo"
        />
      </div>
      <div className="flex justify-start object-cover">
        <img
          className="z-10 h-6 lg:h-10"
          src="/assets/hero/heroLogo.svg"
          alt="logo"
        />
      </div>

      <div className="flex h-full flex-col items-center justify-center gap-6 text-center lg:justify-end lg:pb-[240px]">
        <h1 className="drop-shadow-[2px_2px #000] z-10 font-beVietnamPro text-4xl font-semibold leading-[44px] tracking-tight text-white lg:text-6xl lg:leading-[72px] lg:tracking-normal">
          Bandung Elevate <br /> Meetup 2024
        </h1>
        <Button
          buttonText="JOIN OUR first meetup"
          primary
          className="w-[250px] lg:w-full"
          onClick={openModal}
        />
      </div>
      <ModalPortal show={showModal} onClose={closeModal} />
    </div>
  );
};

export default Hero;
