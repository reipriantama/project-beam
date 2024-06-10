const OurPartners = () => {
  const imgOurPartners = Array(8).fill({
    img: "/assets/ourPartners/logoIpsum.png",
  });

  return (
    <div className="pt-[120px] pb-[120px] px-12">
      <div className="mx-auto max-w-[1920px] space-y-12">
        <h5>Our Partners</h5>
        <div className="grid grid-cols-4 gap-6">
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
