const OurPartners = () => {
  const imgOurPartners = [
    {
      id: 1,
      img: "/assets/ourPartners/logoPlabs.svg",
    },
    {
      id: 2,
      img: "/assets/ourPartners/logoRuangDini.svg",
    },
    // {
    //   id: 3,
    //   img: "/assets/ourPartners/bikeOrigins.png",
    // },
  ];

  const inspiredAndSponsoredPartners = imgOurPartners.filter(
    (item) => item.id === 1 || item.id === 2,
  );

  return (
    <div className="space-y-12 px-6 pb-[60px] lg:px-12 lg:pb-[120px]">
      {/* <div className="mx-auto max-w-[1920px] space-y-6 lg:space-y-6">
        <h5 className="flex justify-center text-2xl font-semibold lg:text-4xl">
          Inspired By
        </h5>
        <div className="flex flex-col justify-center gap-3 lg:flex-row lg:gap-6">
          {inspiredAndSponsoredPartners.map((item) => (
            <div
              key={item.id}
              className="flex w-full items-center justify-center rounded-lg p-5 lg:w-[200px]"
            >
              <img src={item.img} alt="logo" />
            </div>
          ))}
        </div>
      </div> */}
      <div className="items-start justify-center gap-12 space-y-12 lg:flex lg:space-y-0">
        <div className="mx-auto max-w-[1920px] space-y-6 lg:space-y-6">
          <h5 className="flex justify-center text-2xl font-semibold lg:text-4xl">
            Inspired By
          </h5>
          <div className="flex flex-col justify-center gap-3 lg:flex-row lg:gap-6">
            {inspiredAndSponsoredPartners.map((item) => (
              <div
                key={item.id}
                className="flex w-full items-center justify-center rounded-lg p-5 lg:w-[200px]"
              >
                <img src={item.img} alt="logo" />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-[1920px] space-y-6 lg:space-y-0">
          <h5 className="flex justify-center text-2xl font-semibold lg:text-4xl">
            Supported By
          </h5>
          {/* <div className="flex flex-col justify-center gap-3 lg:flex-row lg:gap-6"> */}
          <div className="flex w-full items-center justify-center rounded-lg p-5 lg:w-[200px]">
            <img
              className=""
              src="/assets/ourPartners/bikeOrigins.png"
              alt="logo"
            />
          </div>
          {/* {imgOurPartners.map((item) => (
              <div
                key={item.id}
                className="flex w-full items-center justify-center rounded-lg p-5 lg:w-[200px]"
              >
                <img src={item.img} alt="logo" />
              </div>
            ))} */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
