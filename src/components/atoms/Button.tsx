interface ButtonProps {
  variant?: "blue" | "red" | "white";
  styles?: string;
  content: string;
}

export default function Button({ variant = "blue", styles = "", content }: ButtonProps) {
  const baseClasses = "py-4 px-8 rounded font-semibold hover:bg-white border-2 rounded-md transition text-white";

  const variants = {
    blue: "px-5 bg-[#5465df] hover:text-[#5465df] border-[#5465df]",
    red: "px-7 py-2 border-red-400 bg-red-400 hover:text-red-400",
    white: "bg-white text-gray-550  border-white hover:border-gray-500 shadow-lg",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${styles}`}>
      {content}
    </button>
  );
}
