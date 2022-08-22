
import Logo from "../assets/medium.png";
import { useAuthContent } from "../Hooks/useAuthContent";

const navLinks = [
  {
    url: "our-story",
    tag: "Our Story",
  },
  {
    url: "membership",
    tag: "Membership",
  },
  {
    url: "write",
    tag: "Write",
  },
  {
    url: "sign-up",
    tag: "Sign Up",
  },
];

const Navbar = () => {
  const {  handleLogin } = useAuthContent();


  return (
    <nav className="container mx-auto py-3 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img src={Logo} alt="medium logo" className="w-14" />
        <h1 className="md:text-5xl text-3xl tracking-tighter font-bold">
          Medium
        </h1>
      </div>
      <ul className="flex items-center gap-6">
        {navLinks.map((nav) => (
          <li className="text-xl cursor-pointer hidden md:block" key={nav.tag}>
            {nav.tag}
          </li>
        ))}

        <button
        aria-label="login signup"
          className="bg-black p-3 px-5 rounded-full text-xl text-white hover:bg-blackLight"
          onClick={handleLogin}
        >
          Get Started
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
