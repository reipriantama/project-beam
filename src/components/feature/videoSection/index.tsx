import Button from "../../ui/button";
import videoBg from "../../../assets/peopleRunning.mp4";
import "./index.css";

const VideoSection = () => {
  return (
    <div className="px-12 pb-[120px]">
      {/* video-------- */}
      {/* <div className="relative mb-[108px] h-full w-full">
        <div className="h-full aspect-video">
          <video autoPlay loop muted className="w-full">
            <source src={videoBg} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 grid grid-cols-6 gap-2 bg-red-600">
          <div className="w-full h-96 mix-blend-multiply">a</div>
          <div className="w-full h-96 mix-blend-multiply">a</div>
          <div className="w-full h-96 mix-blend-multiply">a</div>
          <div className="w-full h-96 mix-blend-multiply">a</div>
          <div className="w-full h-96 mix-blend-multiply">a</div>
          <div className="w-full h-96 mix-blend-multiply">a</div>
        </div>
      </div> */}

      <section className="relative h-[620px] w-full overflow-hidden">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="absolute left-0 top-0 flex h-[620px] w-full items-center justify-center gap-4 bg-[#F2F4F7] text-center text-[28px] font-semibold mix-blend-lighten">
          <div className="h-[320px] w-full bg-black transition-all duration-300 hover:h-full"></div>
          <div className="flex h-[460px] w-full items-center justify-center bg-black transition-all duration-300 hover:h-full">
            <p className="text-white font-beVietnamPro">Elevate</p>
          </div>
          <div className="flex h-[540px] w-full items-center justify-center bg-black transition-all duration-300 hover:h-full">
            <p className="text-white font-beVietnamPro">Passionate</p>
          </div>
          <div className="-mt-[60px] flex h-[560px] w-full items-center justify-center bg-black transition-all duration-300 hover:mt-0 hover:h-full">
            <p className="text-white font-beVietnamPro">Collaboration</p>
          </div>
          <div className="mt-5 flex h-[580px] w-full items-center justify-center bg-black transition-all duration-300 hover:mt-0 hover:h-full">
            <p className="text-white font-beVietnamPro">Experience</p>
          </div>
          <div className="mt-5 h-[360px] w-full bg-black transition-all duration-300 hover:mt-0 hover:h-full"></div>
        </div>
      </section>

      <div className="mt-[108px] space-y-9 2xl:ml-[134px]">
        <p className="max-w-[921px] text-2xl leading-10 text-[#344054]">
          The Bandung Elevate Meetup (BEAM) is set to take place in mid 2024 in
          Bandung. It's initiated with the goal of being a "Catalyst" for the
          community, especially Generation Z, to achieve their resolutions and
          transform into better versions of themselves, both physically and
          mentally. The initiative is endless like a river flows to the sea.
        </p>
        <Button secondary={true} buttonText="JOIN OUR PRA-EVENT" />
      </div>
    </div>
  );
};

export default VideoSection;
