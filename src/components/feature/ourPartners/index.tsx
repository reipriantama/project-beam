const OurPartners = () => {
  const imgOurPartners = [
    {
      img: "/assets/ourPartners/logoPlabs.svg",
    },

    {
      img: "/assets/ourPartners/logoRuangDini.svg",
    },
  ];

  return (
    <div className="space-y-12 px-6 pb-[60px] lg:px-12 lg:pb-[120px]">
      <div className="mx-auto max-w-[1920px] space-y-6 lg:space-y-6">
        <h5 className="flex justify-center text-2xl font-semibold lg:text-4xl">
          Inspired By
        </h5>
        <div className="flex flex-col justify-center gap-3 lg:flex-row lg:gap-6">
          {imgOurPartners.map((item, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-center rounded-lg p-5 lg:w-[378px]"
            >
              <img src={item.img} alt="logo" />
            </div>
          ))}
        </div>
      </div>
      <div className="items-center justify-center gap-12 space-y-12 lg:flex lg:space-y-0">
        <div className="mx-auto max-w-[1920px] space-y-6 lg:space-y-6">
          <h5 className="flex justify-center text-2xl font-semibold lg:text-4xl">
            Sponsored By
          </h5>
          <div className="flex flex-col justify-center gap-3 lg:flex-row lg:gap-6">
            {imgOurPartners.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-center justify-center rounded-lg p-5 lg:w-[378px]"
              >
                <img src={item.img} alt="logo" />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-[1920px] space-y-6 lg:space-y-6">
          <h5 className="flex justify-center text-2xl font-semibold lg:text-4xl">
            Supported By
          </h5>
          <div className="flex flex-col justify-center gap-3 lg:flex-row lg:gap-6">
            {imgOurPartners.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-center justify-center rounded-lg p-5 lg:w-[378px]"
              >
                <img src={item.img} alt="logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
