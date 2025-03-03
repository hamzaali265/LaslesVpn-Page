import logo from "../assets/Logo.svg";
import facebookIcon from "../assets/Facebook.svg";
import twitterIcon from "../assets/Twitter.svg";
import instagramIcon from "../assets/instagram.svg";

function FotterSection(params) {
  const socials = [facebookIcon, twitterIcon, instagramIcon];
  return (
    <div className="h-[700px] relative mt-28">
      <div className="card-shadow h-60 w-[1140px]  mx-auto absolute  z-10 top-[-150px] left-0 right-0 flex justify-between items-center px-[70px]">
        <div>
          <h1 className="font-rubik font-medium text-4xl/[45px] flex flex-col">
            Subscribe Now for
            <br /> Get Special Features!
          </h1>
          <p className="font-rubik font-normal text-base/[30px] mt-5 mb-12 text-tertiary  ">
            Let's subscribe with us and find the fun.
          </p>
        </div>
        <div>
          <button className="btn-primary w-56">
            <div>Subscribe Now</div>
          </button>
        </div>
      </div>

      <div className="h-[600px] bg-desert relative pt-[180px] px-[150px] flex justify-between">
        {/* Logo Section  */}
        <div className="flex flex-col">
          <img src={logo} alt="logo" height={"36px"} width={"149px"} />

          <p className="font-rubik font-normal text-base/[30px] mt-5 mb-7 text-tertiary">
            <span className="font-rubik font-medium text-base/[30px]  text-tertiary">
              {" "}
              LaslesVPN{" "}
            </span>
            is a private virtual network that <br /> has unique features and has
            high security.
          </p>
          <div className="flex items-center justify-start">
            {socials.map((social, index) => {
              return <img key={index} src={social} alt="social icon" />;
            })}
          </div>
          <p className="font-rubik font-normal text-base/[30px] mt-5 mb-7 text-tertiary">
            ©2020Lasles
            <span className="font-rubik font-medium text-base/[30px] text-tertiary">
              VPN
            </span>
          </p>
        </div>
        {/* Product Section */}
        <div>
          <h1 className="font-rubik font-medium text-lg/[30px] mb-5 text-secondary">
            Product
          </h1>

          <ul className="flex flex-col ">
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              Download
            </a>
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              Pricing
            </a>
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              Locations
            </a>
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              Server
            </a>
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              Countries
            </a>
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              Blog
            </a>
          </ul>
        </div>
        {/* Engage Section */}
        <div>
          <h1 className="font-rubik font-medium text-lg/[30px] mb-5 text-secondary">
            Engage
          </h1>

          <ul className="flex flex-col ">
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              LaslesVPN ?
            </a>
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              FAQ
            </a>
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              Tutorials
            </a>
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              About Us
            </a>
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              Terms of Service
            </a>
          </ul>
        </div>
        {/* Earn Money Section */}
        <div>
          <h1 className="font-rubik font-medium text-lg/[30px] mb-5 text-secondary">
            Earn Money
          </h1>

          <ul className="flex flex-col ">
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              Affiliate
            </a>
            <a
              href="#"
              className="font-rubik font-normal text-base/[30px] mb-2.5 text-tertiary"
            >
              Become Partner
            </a>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default FotterSection;
