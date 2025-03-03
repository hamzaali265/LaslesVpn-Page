import logo from "../assets/logo.svg";

function NavBar(params) {
  return (
    <div className="flex justify-between items-center mt-12 mx-[150px]">
      <div>
        <img className="h-9 w-36" src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-10 font-rubik font-normal text-base  text-tertiary">
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
        <a href="#">Help</a>
      </div>
      <div className="flex gap-8">
        <button className="font-rubik font-medium text-lg  text-secondary hover:text-primary">
          Sign In
        </button>

        <button className="font-rubik font-medium text-lg  text-primary border border-primary rounded-[50px] py-3.5 px-11 hover:bg-primary hover:text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default NavBar;
