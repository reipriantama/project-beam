import { useState } from "react";
import Button from "../../ui/button";
import { createPortal } from "react-dom";
import Modal from "../modal";
import PlabsIcon from "../../icon/plabsIcon";
import RuangDiniIcon from "../../icon/ruangDiniIcon";

const ModalPortal = ({ show, onClose }: any) => {
  return createPortal(
    show ? <Modal show={show} onClose={onClose} /> : null,
    document.body,
  );
};

const Hero = (props: any) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div
      className={`${props.className} relative h-screen w-full rounded-b-[] bg-[#F2F4F7] p-6 pt-[34px] drop-shadow lg:px-12`}
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
      <div className="absolute inset-0 top-0 left-0 w-screen h-full">
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
      <div className="flex items-center justify-between object-cover">
        <img
          className="z-10 h-6 lg:h-10"
          src="/assets/hero/heroLogo.svg"
          alt="logo"
        />
        <div className="z-10 flex items-center gap-5">
          <PlabsIcon
            className="lg:[170px] relative z-10 w-[120px]"
            color={"white"}
          />
          {/* <RuangDiniIcon className="relative z-10 h-10" color={"white"} /> */}
          <img
            className="w-14 brightness-0 contrast-[101%] hue-rotate-[270deg] invert saturate-100 sepia-[31%] filter lg:w-24"
            src="/assets/ourPartners/logoRuangDini.svg"
            alt="imge"
          />
        </div>
      </div>

      <div className="flex h-full flex-col items-center justify-center gap-6 text-center lg:justify-end lg:pb-[240px]">
        <h1 className="drop-shadow-[2px_2px #000] z-10 font-beVietnamPro text-4xl font-semibold leading-[44px] tracking-tight text-white lg:text-6xl lg:leading-[72px] lg:tracking-normal">
          Bandung Elevate <br /> Meetup 2024
        </h1>
        <Button
          buttonText="JOIN OUR first meetup"
          primary
          className="w-[270px] lg:min-w-[333px]"
          onClick={openModal}
        />
      </div>
      <ModalPortal show={showModal} onClose={closeModal} />
    </div>
  );
};

export default Hero;
