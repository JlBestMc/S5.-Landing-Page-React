import Button from "./components/atoms/Button";
import Anchor from "./components/atoms/anchor";
import Logo from "./components/atoms/Logo";
import bookmark from "./assets/logo-bookmark.svg";
import Burger from "./components/atoms/Burger";
import { useState } from "react";
import burgerIcon from "./assets/icon-hamburger.svg";
import closeBurgerIcon from "./assets/icon-close.svg";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <Button content="Get it on Chrome" variant="btnBlue" />
      </div>
      <div>
        <Button content="LOGIN" variant="btnRed" />
      </div>
      <div>
        <Button content="Get it on Firefox" variant="btnWhite" />
      </div>
      <div>
        <Anchor content="CONTACT" ref="#contact" />
      </div>
      <div>
        <Logo src={bookmark} />
      </div>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Burger
            isOpen={isOpen}
            burgerIconSrc={burgerIcon}
            closeIconSrc={closeBurgerIcon}
          ></Burger>
        </button>
        {/* Navbar móvil */}
        {isOpen && (
          <div className="bg-gray-800 text-white p-4 flex flex-col ">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </div>
        )}
      </div>
      <p className="mt-4 text-black">
        Estado: {isOpen ? "Abierto" : "Cerrado"}
      </p>
    </>
  );
}

export default App;
