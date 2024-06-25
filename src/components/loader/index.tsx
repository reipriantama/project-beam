import Lottie from "lottie-react";
import loadingLogo from "../../../public/assets/lottie/beamLogo.json";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex h-screen w-screen items-center justify-center rounded-lg bg-[#F2F4F7]">
        <Lottie
          animationData={loadingLogo}
          autoPlay={true}
          loop={false}
          style={{ width: "900px", height: "900px" }}
        />
      </div>
    </div>
  );
};

export default Loader;
