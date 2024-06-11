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
      className="relative h-screen w-full rounded-b-[48x] bg-[#F2F4F7] px-12 pt-[34px] drop-shadow"
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
        <img
          className="object-cover w-full h-full"
          src="/assets/hero/frame.svg"
          alt="logo"
        />
      </div>
      <div className="flex justify-start object-cover">
        <img className="z-10" src="/assets/hero/heroLogo.svg" alt="logo" />
      </div>

      <div className="flex h-full flex-col items-center justify-end gap-6 pb-[240px] text-center">
        <h1 className="drop-shadow-[2px_2px #000] z-10 font-beVietnamPro text-7xl font-semibold leading-[72px] text-white">
          Bandung Elevate <br /> Meetup 2024
        </h1>
        <Button
          buttonText="JOIN OUR first meetup"
          primary
          className="w-full"
          onClick={openModal}
        />
      </div>
      <ModalPortal show={showModal} onClose={closeModal}  />
    </div>
  );
};

export default Hero;
