import Button from "../../ui/button";

const OurPraEvent = () => {
  return (
    <div className="space-y-[72px] pb-[120px]">
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
            <Button primary={true} buttonText="JOIN OUR first meetup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPraEvent;