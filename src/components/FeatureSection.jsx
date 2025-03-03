import featureIcon from "../assets/feature.svg";
import checkIcon from "../assets/check.svg";
function FeatureSection(params) {
  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits.",
  ];
  return (
    <div className="mb-[103px] mx-[150px]">
      <div className="flex justify-between gap-[169px]">
        <div className="w-1/2 h-96">
          <img src={featureIcon} alt="feature icon" />
        </div>
        <div className="w-1/2 h-96 flex flex-col items-start justify-center ">
          <h1 className="font-rubik font-medium text-4xl/[50px]">
            We Provide Many Features You Can Use
          </h1>
          <p className="font-rubik font-normal text-base/[30px] mt-5 mb-5 text-tertiary  ">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>

          <div className="flex flex-col justifiy-left items-start">
            {features.map((feature, index) => {
              return (
                <div key={index} className="flex items-start gap-3 mb-4">
                  <img src={checkIcon} alt="check icon" />
                  <p className="font-rubik font-normal text-[14px]/[30px] text-tertiary">
                    {feature}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
