import Anchor from "../atoms/anchor";
import Logo from "../atoms/Logo";
import bookmarkWhite from "../../assets/logo-bookmark-white.svg";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import facebookIconRed from "../../assets/icon-facebook-red.svg";
import twitterIconRed from "../../assets/icon-twitter-red.svg";

export default function Footer() {
  return (
    <footer className="md:w-full py-8 flex items-center justify-around bg-[#1d2440]">
      <div className="flex justify-between items-center gap-15 ">
        <Logo src={bookmarkWhite} />
        <nav className="flex gap-12 items-center text-white tracking-widest">
          <Anchor
            ref="#features"
            styles="text-white text-sm hover:text-red-400 hover:text-red-400 tracking-widest text-sm font-semibold text-[#353541] cursor-[url('./assets/cursor.cur'),_auto] transition duration-300 ease-in-out"
          >
            FEATURES
          </Anchor>
          <Anchor
            ref="#faqs"
            styles="text-white text-sm hover:text-red-400  hover:text-red-400 tracking-widest text-sm font-semibold text-[#353541] cursor-[url('./assets/cursor.cur'),_auto] transition duration-300 ease-in-out"
          >
            PRICING
          </Anchor>
          <Anchor
            ref="#contact"
            styles="text-white text-sm hover:text-red-400 hover:text-red-400 tracking-widest text-sm font-semibold text-[#353541] cursor-[url('./assets/cursor.cur'),_auto] transition duration-300 ease-in-out"
          >
            CONTACT
          </Anchor>
        </nav>
      </div>
      <div className="flex gap-10">
        <img
          src={facebookIcon}
          alt="Facebook"
          className="w-6 h-6 transition-opacity duration-200 cursor-[url('./assets/cursor.cur'),_auto] "
          onMouseOver={(e) => (e.currentTarget.src = facebookIconRed)}
          onMouseOut={(e) => (e.currentTarget.src = facebookIcon)}
        />
        <img
          src={twitterIcon}
          alt="Facebook"
          className="w-6 h-6 transition-opacity duration-200 cursor-[url('./assets/cursor.cur'),_auto]"
          onMouseOver={(e) => (e.currentTarget.src = twitterIconRed)}
          onMouseOut={(e) => (e.currentTarget.src = twitterIcon)}
        />
      </div>
    </footer>
  );
}
