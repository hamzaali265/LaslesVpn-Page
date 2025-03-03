import PlanCard from "./ui/PlanCard.jsx";

function PlansSection(params) {
  const plans = [
    {
      title: "Free",
      price: "Free",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
    },
    {
      title: "Standard",
      price: "$9",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
      ],
    },
    {
      title: "Premium",
      price: "$12",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
        "Get New Features",
      ],
    },
  ];
  return (
    <div className=" mb-[150px]  flex flex-col items-center justify-center ">
      <div className="pt-20  w-full bg-gradient-to-b from-desert to-white flex flex-col items-center justify-center">
        <h1 className="font-rubik font-medium text-4xl/[50px] text-secondary  mb-5">
          Choose Your Plan
        </h1>
        <p className="font-rubik font-normal text-base/[50px] text-tertiary pb-16 ">
          Let's choose the package that is best for you and explore it happily
          and cheerfully
        </p>
      </div>

      <div className="flex justify-center items-center gap-12 mx-[150px]">
        {plans.map((plan, index) => {
          return (
            <PlanCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PlansSection;
