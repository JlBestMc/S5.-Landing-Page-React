import Navbar from "../molecules/Navbar";
import burgerIcon from "../../assets/icon-hamburger.svg";
import closeBurgerIcon from "../../assets/icon-close.svg";
import bookmark from "../../assets/logo-bookmark.svg";
import bookmarkMobile from "../../assets/logo-bookmark-mobile.svg";

export default function Header() {
  return (
    <header className="max-w-[1280px] mx-auto my-5 pt-10  text-gray-700 relative">
      <Navbar
        burgerIconSrc={burgerIcon}
        closeIconSrc={closeBurgerIcon}
        logoSrc={bookmark}
        logoMobileSrc={bookmarkMobile}
      ></Navbar>
    </header>
  );
}
