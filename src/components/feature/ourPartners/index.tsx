const OurPartners = () => {
  const imgOurPartners = Array(8).fill({
    img: "/assets/ourPartners/logoIpsum.png",
  });

  return (
    <div className="px-6 pb-[60px] lg:px-12 lg:pb-[120px] lg:pt-[120px]">
      <div className="mx-auto max-w-[1920px] space-y-6 lg:space-y-12">
        <h5 className="flex justify-center text-2xl font-semibold lg:text-5xl">
          Our Partners
        </h5>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
          {imgOurPartners.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-5 bg-white rounded-lg"
            >
              <img src={item.img} alt="logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
