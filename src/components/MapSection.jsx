import MapIcon from "../assets/global.svg";
import netflixIcon from "../assets/netflix.svg";
import amazonIcon from "../assets/amazon.svg";
import redditIcon from "../assets/reddit.svg";
import spotifyIcon from "../assets/spotify.svg";
import discordIcon from "../assets/discord.svg";
function MapSection(params) {
  const icons = [netflixIcon, amazonIcon, redditIcon, spotifyIcon, discordIcon];
  return (
    <div className="flex flex-col items-center justify-center pb-28 mx-[150px]">
      <h1 className="text-center font-rubik font-medium text-4xl/[50px] text-secondary  mb-5">
        Huge Global Network <br /> of Fast VPN
      </h1>
      <p className="font-rubik text-center font-normal text-base/[30px] text-tertiary pb-16 ">
        See LaslesVPN everywhere to make it easier for you when you move
        <br />
        locations.
        
      </p>
      <img src={MapIcon} alt="Map Icon" />
      <div className="flex gap-10">
        {icons.map((icon, index) => {
          return <img key={index} src={icon} alt="icon" />;
        })}
      </div>
    </div>
  );
}

export default MapSection;
