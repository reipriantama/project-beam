import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const HeroSecond = () => {
  const parallaxRef = useRef<HTMLImageElement>(null);
  const parallaxImage = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to(parallaxImage.current, {
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top 90%",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
      yPercent: -20,
      ease: "none",
    });
  });

  return (
    <div className="px-6 pb-[60px] lg:px-12 lg:pb-[120px]">
      <div
        ref={parallaxRef}
        className="relative overflow-hidden rounded-3xl pb-[]"
      >
        <img
          ref={parallaxImage}
          className="inset-0 aspect-[] h-full w-full rounded-3xl object-cover lg:h-full lg:w-full"
          src="/assets/heroSecond/homePage.jpg"
          alt="running"
        />
      </div>
      <div className="space-y-9 lg:space-y-[72px] lg:px-[134px] lg:pt-[]">
        <div className="max-w-[780px] space-y-6">
          <img
            className="h-9 lg:h-full"
            src="/assets/heroSecond/beamLogoSecond.svg"
            alt="logo"
          />
          <h5 className="gradient-text text-4xl font-semibold leading-[44px] tracking-wide lg:text-7xl lg:leading-[84px] lg:tracking-normal">
            Where you elevate yourself
          </h5>
        </div>
        <div className="flex justify-end">
          <p className="max-w-[921px] text-sm leading-6 text-[#344054] lg:text-2xl lg:leading-10">
            The Bandung Elevate Meetup (BEAM) is set to take place in mid 2024
            in Bandung. It's initiated with the goal of being a "Catalyst" for
            the community, especially Generation Z, to achieve their resolutions
            and transform into better versions of themselves, both physically
            and mentally. The initiative is endless like a river flows to the
            sea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSecond;
