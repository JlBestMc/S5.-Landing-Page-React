import Anchor from "../atoms/anchor";
import Logo from "../atoms/Logo";
import bookmarkWhite from "../../assets/logo-bookmark-white.svg";

export default function Footer() {
  return (
    <footer className="md:w-full py-8 flex items-center bg-[#1d2440]">
      <div className="flex justify-between items-center gap-5 ml-5">
        <Logo src={bookmarkWhite} />
        <nav className="flex gap-5 items-center text-white uppercase font-medium tracking-widest">
          <Anchor ref="#features">Features</Anchor>
          <Anchor ref="#faqs">FAQs</Anchor>
          <Anchor ref="#contact">Contact</Anchor>
        </nav>
      </div>
    </footer>
  );
}
