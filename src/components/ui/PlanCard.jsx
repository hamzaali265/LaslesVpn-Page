import boxIcon from "../../assets/box.svg";
import checkIcon from "../../assets/tick.svg";
function PlanCard(params) {
  const { title, price, features } = params;

  return (
    <div className={title === "Premium" ? "plan-card-active" : "plan-card"}>
      <img className="pb-8" src={boxIcon} alt="box icon" />
      <h3 className="mb-7 font-rubik font-medium text-lg/[30px] text-secondary">
        {title}
      </h3>
      <div className="h-[203px] mb-20">
        {features.map((feature, index) => {
          return (
            <div key={index} className="flex  items-start justify-start mb-3 ">
              <img className="mr-3" src={checkIcon} alt="check icon" />
              <p className="w-[200px] text-rubik font-normal text-sm/[30px] text-tertiary">
                {feature}
              </p>
            </div>
          );
        })}
      </div>

      <p className="font-rubik font-medium text-2xl/[30px] text-secondary mb-5">
        {price}{" "}
        {title === "Free" ? "" : <span className="font-normal">/ mo</span>}{" "}
      </p>
      <button
        className={
          title === "Premium"
            ? "font-rubik font-medium text-lg bg-primary  text-white  border-2 border-primary rounded-[50px] py-3 px-11 hover:bg-white hover:text-primary"
            : "font-rubik font-medium text-lg  text-primary border-2 border-primary rounded-[50px] py-3 px-11 hover:bg-primary hover:text-white"
        }
      >
        Select
      </button>
    </div>
  );
}

export default PlanCard;
