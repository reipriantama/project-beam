// import Button from "../../ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CardEvent = () => {
  const programEvent = [
    {
      title: "5 AM Club",
      desc: "Rise with the sun, integrate lasting habits into your routine.",
      par: "5 AM Club is the heart of your rhythm. It encourages waking up at 5 AM daily to boost productivity and health. Tick your mission boxes and develop a solid early morning routine to improve productivity, mental balance, and physical well-being, setting the tone for the day ahead.",
      img: "/assets/cardEvent/5amClub.jpg",
      bgCard: "bg-[#0DAB6C]",
      class: "card-1",
    },
    {
      title: "Passion Lab",
      desc: "A community for connection and learning.",
      par: "Passion Lab cultivates personal growth through engaging talks on various passion topics and networking opportunities with like-minded individuals. It creates a supportive environment that fosters learning and development.",
      img: "/assets/cardEvent/passionLab.jpg",
      bgCard: "bg-[#1341B5]",
      class: "card-2",
    },
    {
      title: "Victory Hour",
      desc: "Your every progress—no matter how small or big—is tracked and celebrated.",
      par: "Victory Hour fosters consistent routines in personal development, enhancing confidence, physical health, and productivity through regular engagement in personal interests—spanning physical, social, and creative pursuits.",
      img: "/assets/cardEvent/victoryhour.jpg",
      bgCard: "bg-[#E66000]",
      class: "card-3",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".card:not(:first-child)",
      {
        y: () => 415,
        invalidateOnRefresh: true,
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
    <div className="cards min-h-[950px] px-6 lg:h-[1008px] lg:px-12">
      <div className="relative w-full p-[120px]">
        {programEvent.map((item, index) => (
          <div
            key={index}
            // className={`${item.class} card flex aspect-[158/48] min-h-[485px] w-full flex-col-reverse justify-between gap-6 rounded-3xl lg:flex-row lg:gap-12 ${item.bgCard} p-3 text-[#FCFCFD] lg:p-12`}
            className={`${item.class} card flex aspect-[158/48] h-full min-h-[485px] w-full flex-col-reverse justify-between gap-6 rounded-3xl lg:grid lg:grid-cols-3 lg:gap-12 ${item.bgCard} p-3 text-[#FCFCFD] lg:p-12`}
          >
            <div className="flex flex-col justify-between lg:col-span-2">
              <div className="space-y-1 font-beVietnamPro">
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      className="size-4 lg:size-5"
                      src="/assets/cardEvent/programLogo.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="text-xs font-light leading-4 uppercase mt tracking-20p lg:text-xl lg:leading-8">
                    Our Program
                  </div>
                </div>
                <div className="text-4xl font-medium leading-[44px] lg:text-6xl lg:leading-[80px]">
                  {item.title}
                </div>
              </div>
              <div className="pb-3 space-y-6">
                <div className="font-satoshi text-sm leading-6 text-[#EAECF0] lg:text-2xl lg:leading-9">
                  {item.desc}
                </div>
                <p className="text-sm font-normal text-justify lg:text-2xl lg:leading-9">
                  {item.par}
                </p>
                {/* <Button
                  buttonText="Learn More"
                  secondary={true}
                  className="w-[170px] lg:w-full"
                /> */}
              </div>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                className="aspect-[584/480] object-cover object-center transition duration-700 ease-out hover:scale-125 lg:h-full lg:w-full"
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
