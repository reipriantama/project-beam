const HeroSecond = () => {
  return (
    <div className="pb-[120px] px-12">
      <div className="xl:pb-[197px]">
        <img
          className="aspect-[158/48] h-full w-full rounded-3xl object-cover"
          src="/assets/heroSecond/running.jpeg"
          alt="running"
        />
      </div>
      <div className="space-y-[72px] px-[134px]">
        <div className="max-w-[780px] space-y-6">
          <img src="/assets/heroSecond/beamLogoSecond.svg" alt="logo" />
          <h5 className="gradient-text text-7xl font-semibold leading-[84px]">
            Where you elevate yourself
          </h5>
        </div>
        <div className="flex justify-end">
          <p className="max-w-[921px] text-2xl leading-10 text-[#344054]">
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
