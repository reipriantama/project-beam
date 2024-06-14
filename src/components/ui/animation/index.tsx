import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText);

export const RevealAnimation = () => {
  const pathname = window.location.pathname;
  useGSAP(
    () => {
      const targets = document.querySelectorAll("[data-reveal]");
      targets.forEach((target) => {
        const delay = target.getAttribute("data-reveal-delay") || 0;
        gsap
          .timeline({
            scrollTrigger: {
              trigger: target,
              start: "top bottom",
              end: "bottom top",
            },
          })
          .fromTo(
            target,
            {
              opacity: 0,
              y: "30%",
              duration: 1,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "expo.inOut",
              delay,
            },
          );
      });
    },
    { dependencies: [pathname] },
  );

  // Split REVEAL
  useGSAP(
    () => {
      const targets = document.querySelectorAll("[data-split-reveal]");
      targets.forEach((target) => {
        const delay = target.getAttribute("data-reveal-delay") || 0;
        const split = new SplitText(target, {
          type: "lines",
        });
        split.lines.forEach((line) => {
          const nestedLine = new SplitText(line, {
            type: "lines",
            linesClass: "nested-lines",
          });
          // @ts-ignore
          line.style = "overflow: hidden";
        });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: target,
              markers: false,
              start: "top bottom",
              end: "bottom top",
            },
          })
          .to(target, {
            opacity: 1,
            duration: 0,
          })
          .fromTo(
            target.querySelectorAll(".nested-lines"),
            {
              opacity: 1,
              y: "150%",
              rotation: 3,
            },
            {
              opacity: 1,
              y: 0,
              duration: 2.5,
              ease: "power3.inOut",
              stagger: 0.2,
              rotation: 0,
              delay,
            },
            0,
          );
      });
    },
    { dependencies: [pathname] },
  );

  return null;
};
