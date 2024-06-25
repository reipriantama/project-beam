import Button from "../../ui/button";
import videoBg from "../../../assets/peopleRunning.mp4";
import "./index.css";
import { createPortal } from "react-dom";
import Modal from "../modal";
import { useState } from "react";

const ModalPortal = ({ show, onClose }: any) => {
  return createPortal(
    show ? <Modal show={show} onClose={onClose} /> : null,
    document.body,
  );
};

const VideoSection = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="px-6 pb-[60px] pt-10 lg:px-12 lg:pb-[120px] lg:pt-[120px]">
      <section className="relative h-[183px] overflow-hidden lg:h-[620px] lg:w-full">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="absolute left-0 top-0 flex h-[183px] w-full items-center justify-center gap-1 bg-[#F2F4F7] text-center text-[28px] font-semibold mix-blend-lighten lg:h-[620px] lg:w-full lg:gap-2">
          <div className="hidden h-[320px] w-full bg-black transition-all duration-300 hover:h-full lg:block"></div>
          <div className="flex h-[136px] w-full items-center justify-center bg-black transition-all duration-300 hover:h-full lg:h-[460px]">
            <p className="font-beVietnamPro text-[8px] text-white lg:text-[28px]">
              Elevate
            </p>
          </div>
          <div className="flex h-[160px] w-full items-center justify-center bg-black transition-all duration-300 hover:h-full lg:h-[540px]">
            <p className="font-beVietnamPro text-[8px] text-white lg:text-[28px]">
              Passionate
            </p>
          </div>
          <div className="-mt-5 flex h-[165px] w-full items-center justify-center bg-black transition-all duration-300 hover:mt-0 hover:h-full lg:-mt-[60px] lg:h-[560px]">
            <p className="font-beVietnamPro text-[8px] text-white lg:text-[28px]">
              Collaboration
            </p>
          </div>
          <div className="mt-3 flex h-[171px] w-full items-center justify-center bg-black transition-all duration-300 hover:mt-0 hover:h-full lg:mt-5 lg:h-[580px]">
            <p className="font-beVietnamPro text-[8px] text-white lg:text-[28px]">
              Experience
            </p>
          </div>
          <div className="mt-5 hidden h-[360px] w-full bg-black transition-all duration-300 hover:mt-0 hover:h-full lg:block"></div>
        </div>
      </section>

      <div className="mt-12 space-y-9 lg:mt-[108px] 2xl:ml-[134px]">
        <p className="max-w-[921px] text-sm leading-6 text-[#344054] lg:text-2xl lg:leading-10">
          Bandung Elevate Meetup 2024: Warming Up is here to prep your muscles
          and minds for the upcoming bigger stage. Join us in an easy morning
          run, followed by a lighthearted discussion on building a strong
          foundation for your next long-distance run and balancing your career
          and well-being. It doesn’t stop there—meet influential, like-minded
          people and expand your experiences. Together, let’s navigate our
          possibilities and create a vision for our shared future.
        </p>
        <Button
          secondary={true}
          buttonText="JOIN OUR PRA-EVENT"
          onClick={openModal}
          className="w-[255px] lg:w-full"
        />
      </div>
      <ModalPortal show={showModal} onClose={closeModal} />
    </div>
  );
};

export default VideoSection;
