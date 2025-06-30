// components/organisms/Navbar.tsx
import { useState } from "react";
import Burger from "../atoms/Burger";
import Logo from "../atoms/Logo";
import Anchor from "../atoms/anchor";
import Button from "../atoms/Button";

interface NavbarProps {
  burgerIconSrc: string;
  closeIconSrc: string;
  logoSrc: string;
  logoMobileSrc: string;
}

export default function Navbar({
  burgerIconSrc,
  closeIconSrc,
  logoSrc,
  logoMobileSrc,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(logoSrc);
  const [navBarStyles, setNavBarStyles] = useState("hidden");
  const [containerPosition, setContainerPosition] = useState("");

  const handleBurgerClick = () => {
    const burgerOpen = !isOpen;
    setIsOpen(burgerOpen);
    setCurrentLogo(burgerOpen ? logoMobileSrc : logoSrc);

    setNavBarStyles(() =>
      burgerOpen
        ? "w-full h-full top-0 left-0 fixed flex flex-col justify-center gap-10 z-10 bg-[#20324ef0]"
        : "hidden"
    );

    setContainerPosition(() => (burgerOpen ? "relative" : ""));
  };

  return (
    <div
      className={`max-w-[1200px] w-[80%] md:w-full mx-auto flex justify-between items-center ${containerPosition}`}
    >
      <Logo src={currentLogo} styles="z-20" />

      <button
        onClick={handleBurgerClick}
        className="md:hidden z-30 fixed top-15 right-6"
      >
        <Burger
          isOpen={isOpen}
          burgerIconSrc={burgerIconSrc}
          closeIconSrc={closeIconSrc}
        />
      </button>

      <nav
        className={`${navBarStyles} md:grid md:grid-cols-4 gap-5 justify-items-center items-center text-gray-700 md:text-black uppercase font-medium tracking-widest md:static md:bg-transparent`}
      >
        <hr className="w-[80%] md:hidden opacity-30 text-white" />
        <Anchor
          ref="#features"
          styles="text-white text-2xl md:text-gray-700 md:text-sm md:hover:text-red-400 md:py-3 md:px-6 md:hover:text-red-400 md:tracking-widest md:text-sm md:font-semibold md:text-[#353541] cursor-[url('./assets/cursor.cur'),_auto] transition duration-300 ease-in-out"
        >
          Features
        </Anchor>
        <hr className="w-[80%] md:hidden opacity-30 text-white" />
        <Anchor
          ref="#pricing"
          styles="text-white text-2xl md:text-gray-700 md:text-sm md:hover:text-red-400 md:py-3 md:px-6 md:hover:text-red-400 md:tracking-widest md:text-sm md:font-semibold md:text-[#353541] cursor-[url('./assets/cursor.cur'),_auto] transition duration-300 ease-in-out"
        >
          Pricing
        </Anchor>
        <hr className="w-[80%] md:hidden opacity-30 text-white" />
        <Anchor
          ref="#contact"
          styles="text-white text-2xl md:text-gray-700 md:text-sm md:hover:text-red-400 md:py-3 md:px-6 md:hover:text-red-400 md:tracking-widest md:text-sm md:font-semibold md:text-[#353541] cursor-[url('./assets/cursor.cur'),_auto] transition duration-300 ease-in-out"
        >
          Contact
        </Anchor>
        <hr className="w-[80%] md:hidden opacity-30 text-white" />
        <Button
          content="LOGIN"
          variant="btnMobile"
          styles="md:px-7 md:py-2 bg-[#20324ef0] hover:text-[#20324ef0] hover:border-blue-950 hover:bg-white md:border-red-400 tracking-widest md:text-sm md:bg-red-400 md:hover:bg-white md:hover:text-red-400 md:hover:border-red-400"
        ></Button>
      </nav>
    </div>
  );
}
