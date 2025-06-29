interface ButtonProps {
  variant?: "btnBlue" | "btnRed" | "btnWhite" | "btnMobile";
  styles?: string;
  content: string;
}

export default function Button({
  variant = "btnBlue",
  styles = "",
  content,
}: ButtonProps) {
  const baseClasses =
    "font-semibold border-2 text-center tracking-wide rounded cursor-[url('./assets/cursor.cur'),_auto] transition duration-300 ease-in-out";

  const variants = {
    btnBlue:
      "py-4 px-8 bg-[#5465df] hover:text-[#5465df] border-[#5465df] text-white hover:bg-white",
    btnRed: "px-7 py-2 border-red-400 tracking-widest text-sm bg-red-400 hover:text-red-400 text-white hover:bg-white",
    btnWhite:
      "py-4 px-8 bg-white text-gray-600 border-white hover:border-gray-500 shadow-lg",
    btnMobile:"text-white border-white text-3xl px-46 py-5 text-center flex justify-center w-[80%]"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${styles}`}>
      {content}
    </button>
  );
}