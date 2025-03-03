import hero from "../assets/hero.svg";
import userIcon from "../assets/user.svg";
import locationIcon from "../assets/location.svg";
import serverIcon from "../assets/Server.svg";

function HeroSection(params) {
  const stats = [
    {
      icon: userIcon,
      title: "Users",
      count: "90+",
    },
    {
      icon: locationIcon,
      title: "Locations",
      count: "30+",
    },
    {
      icon: serverIcon,
      title: "Servers",
      count: "50+",
    },
  ];
  return (
    <div>
      <div className="mt-24 flex justify-between  gap-10  mb-[103px] mx-[150px]">
        {/* Contant Side */}
        <div className=" w-1/2 h-96  flex flex-col justify-center">
          <h1 className="font-rubik font-medium text-5xl/[70px]">
            Want anything to be easy with{" "}
            <span className="font-bold">LaslesVPN.</span>
          </h1>
          <p className="font-rubik font-normal text-base/[30px] mt-5 mb-12 text-tertiary  ">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>

          <div>
            <button className="btn-primary w-56">
              <div> Get Started</div>
            </button>
          </div>
        </div>
        {/* Image Side */}
        <div className="w-1/2 h-96 ">
          <img src={hero} alt="hero-image" width={611} height={382} />
        </div>
      </div>
      {/* Stats Section */}
      <div>
        <div className="h-52 w-full flex justify-between items-center card-shadow mb-24 px-24">
          {stats.map((stat) => (
            <div key={stat.title} className="flex gap-9 justify-center items-center">
              <img src={stat.icon} alt="user icon" />
              <div>
                <h2 className="font-rubik font-bold text-3xl/[40px]">
                  {stat.count}
                </h2>
                <p className="font-rubik font-medium text-base/[30px]">
                  {stat.title}
                </p>
              </div>
              {stat.title !== "Servers" && (
                <div className="h-[125px] w-0.5 bg-divider ml-32"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
