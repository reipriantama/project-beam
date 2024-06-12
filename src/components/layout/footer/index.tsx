import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="p-6 text-white bg-navy lg:p-12">
      <div className="mx-auto max-w-[1920px]">
        <div className="flex flex-col gap-9 lg:flex-row lg:justify-between">
          <div className="flex flex-col tracking-tighter font-beVietnamPro">
            <p className="text-2xl text-yellow lg:text-5xl">
              Let’s collaborate with us!
            </p>
            <p className="text-[27px] font-medium underline lg:text-[54px]">
              info@beam.co.id
            </p>
          </div>
          <div className="flex flex-col gap-[72px] text-[#FAFAFA] lg:flex-row">
            <div className="max-w-[378px] space-y-3">
              <p className="font-beVietnamPro text-sm text-[#A5B1B3] lg:text-xl">
                Our Address
              </p>
              <p className="font-medium text font-satoshi lg:text-xl">
                Jl. Anggrek No.46, Cihapit, Kec. Bandung Wetan, Kota Bandung,
                Jawa Barat 40114
              </p>
            </div>
            <div className="space-y-3 text-sm lg:text-base">
              <p className="text-[#A5B1B3]">Follow Us</p>
              <div className="flex flex-row gap-3 text-base font-medium font-satoshi lg:flex-col lg:text-xl">
                <p className="cursor-pointer">Instagram</p>
                <p className="cursor-pointer">Facebook</p>
                <span className="cursor-pointer">
                  <s>Twitter</s> X
                </span>
                <p className="cursor-pointer">YouTube</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[126px] flex justify-center border-t-[1px] border-[#FF9242] pt-[26px] text-[#A5B1B3] lg:justify-between">
          <div className="text-sm font-satoshi lg:text-base">
            © 2024 Bandung Elevate Meetup
          </div>
          <div className="items-center hidden gap-3 lg:flex">
            <FaInstagram className="size-6" />
            <FaLinkedin className="size-6" />
            <FaYoutube className="size-6" />
            <FaTwitter className="size-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
