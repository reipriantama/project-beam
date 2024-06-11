import Button from "../../ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CardEvent = () => {
  const programEvent = [
    {
      title: "5 AM Club",
      desc: "Wake up with the sun. Quick tips for lasting change. Transform your day with New Habbit.",
      img: "/assets/cardEvent/program1.png",
      bgCard: "bg-[#0DAB6C]",
      class: "card-1",
    },
    {
      title: "Passion Lab",
      desc: "Navigating job demands while keeping a clear mind and healthy body.",
      img: "/assets/cardEvent/program2.png",
      bgCard: "bg-[#1341B5]",
      class: "card-2",
    },
    {
      title: "Victory Hour",
      desc: "30-Day Habit Challenge: Track your habits with a tracker for at least 30 days and participate in other gradual challenges.",
      img: "/assets/cardEvent/program3.png",
      bgCard: "bg-[#E66000]",
      class: "card-3",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".card:not(:first-child)",
      {
        y: () => window.innerHeight / 2 - 125,
      },
      {
        y: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".cards",
          pin: true,
          // markers: true,
          scrub: true,
          start: "top 50px",
          end: "center ",
          invalidateOnRefresh: true,
        },
      },
    );
  });

  return (
    <div className="px-12 cards">
      <div className="relative w-full p-[120px]">
        {programEvent.map((item, index) => (
          <div
            key={index}
            className={`${item.class} card flex aspect-[158/48] w-full justify-between gap-12 rounded-3xl ${item.bgCard} p-12 text-[#FCFCFD]`}
          >
            <div className="flex flex-col justify-between">
              <div className="space-y-1 font-beVietnamPro">
                <div className="flex items-center gap-3">
                  <div>
                    <img src="/assets/cardEvent/programLogo.svg" alt="logo" />
                  </div>
                  <div className="text-xl font-light leading-8 uppercase tracking-20p">
                    Our Program
                  </div>
                </div>
                <div className="text-6xl font-medium leading-[80px]">
                  {item.title}
                </div>
              </div>
              <div className="space-y-6">
                <div className="font-satoshi text-2xl leading-9 text-[#EAECF0]">
                  {item.desc}
                </div>
                <Button buttonText="Learn More" secondary={true} />
              </div>
            </div>
            <div className="max-h-[480px] max-w-[584px] overflow-hidden">
              <img
                className="aspect-[584/480] rounded-xl object-cover transition duration-700 ease-out hover:scale-125"
                src={item.img}
                alt="bike"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardEvent;
