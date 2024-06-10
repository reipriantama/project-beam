import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="p-12 text-white bg-navy">
      <div className="mx-auto max-w-[1920px]">
        <div className="flex justify-between">
          <div className="flex flex-col tracking-tighter font-beVietnamPro">
            <p className="text-5xl text-yellow">Let’s collaborate with us!</p>
            <p className="text-[54px] font-medium underline">info@beam.co.id</p>
          </div>
          <div className="flex gap-[72px] text-[#FAFAFA]">
            <div className="max-w-[378px] space-y-3">
              <p className="font-beVietnamPro text-xl text-[#A5B1B3]">
                Our Address
              </p>
              <p className="text-xl font-medium font-satoshi">
                Jl. Anggrek No.46, Cihapit, Kec. Bandung Wetan, Kota Bandung,
                Jawa Barat 40114
              </p>
            </div>
            <div className="flex flex-col gap-3 text-xl font-medium font-satoshi">
              <p className="text-[#A5B1B3]">Follow Us</p>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Twitter X</p>
              <p>YouTube</p>
            </div>
          </div>
        </div>
        <div className="mt-[126px] flex justify-between border-t-[1px] border-[#FF9242] pt-[26px] text-[#A5B1B3]">
          <div className="font-satoshi">© 2024 Bandung Elevate Meetup</div>
          <div className="flex items-center gap-3">
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
