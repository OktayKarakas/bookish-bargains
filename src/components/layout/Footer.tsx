import Book from "@/Icons/Book";
import Facebook from "@/Icons/Facebook";
import Instagram from "@/Icons/Instagram";
import LinkedIn from "@/Icons/LinkedIn";
import Twitter from "@/Icons/Twitter";
import ThreeDots from "@/Icons/threedots";

const Footer = () => {
  return (
    <div className="w-full bg-special_colors-blue">
      <div className="max-w-7xl mx-auto pt-20 flex items-center lg:items-start flex-col lg:flex-row justify-between pb-24">
        {/* Left Side */}
        <div>
          <div className="flex items-center mb-2">
            <Book className="w-8 text-special_colors-yellow" />
            <h1 className="text-[28px] font-bold ml-3 text-white">Pages</h1>
          </div>
          <div className="flex space-x-3">
            <Facebook className="border border-special_colors-yellow w-[55px] h-[55px] flex items-center justify-center" />
            <LinkedIn className="border border-special_colors-yellow w-[55px] h-[55px] flex items-center justify-center" />
            <Twitter className="border border-special_colors-yellow w-[55px] h-[55px] flex items-center justify-center" />
            <Instagram className="border border-special_colors-yellow w-[55px] h-[55px] flex items-center justify-center" />
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-44">
          {/* Explore */}
          <div className="my-10 lg:my-0">
            <h1 className="text-white cardo text-[24px] font-bold">Explore</h1>
            <ul className="flex flex-col space-y-2 mt-4 text-[#B4C7E7]">
              <li className="flex items-center space-x-2">
                <ThreeDots />
                <p>Home</p>
              </li>
              <li className="flex items-center space-x-2">
                <ThreeDots />
                <p>About Us</p>
              </li>
              <li className="flex items-center space-x-2">
                <ThreeDots />
                <p>Services</p>
              </li>
              <li className="flex items-center space-x-2">
                <ThreeDots />
                <p>Appointments</p>
              </li>
              <li className="flex items-center space-x-2">
                <ThreeDots />
                <p>Blog</p>
              </li>
              <li className="flex items-center space-x-2">
                <ThreeDots />
                <p>Contact us</p>
              </li>
            </ul>
          </div>
          {/* Keep in Touch */}
          <div className="text-center lg:text-left">
            <h1 className="text-white cardo text-[24px] font-bold">
              Keep in Touch
            </h1>
            <ul className="flex flex-col space-y-2 mt-4 text-[#B4C7E7]">
              <li className="lg:w-3/4">
                <span className="cardo text-[18px] font-bold text-white">
                  Address:
                </span>{" "}
                24A Kingston St, Los Vegas NC 28202, USA.
              </li>
              <li>
                <span className="cardo text-[18px] font-bold text-white">
                  Mail:
                </span>{" "}
                support@doctors.com
              </li>
              <li>
                <span className="cardo text-[18px] font-bold text-white">
                  Phone:
                </span>{" "}
                (+22) 123 - 4567 - 900
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-[#B4C7E7]">
        <p className="text-center text-[#B4C7E7] py-4">
          © Developed By <span className="text-white">Oktay</span> Designed By{" "}
          <span className="text-white">VictorFlow</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
