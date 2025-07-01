import { useState } from "react";
import { FAQS, type Dropdown } from "../../data/data";
import arrowUp from "../../assets/icon-arrow.svg";
import arrowDown from "../../assets/icon-arrow-red.svg";

export default function Dropdown() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (question: string) => {
    setSelected((prev) => (prev === question ? null : question));
  };

  return (
    <div className="w-4/5 md:w-full max-w-xl mx-auto mt-8">
      {FAQS.map((faq: Dropdown, index: number) => (
        <div
          key={index}
          className={`py-4 border-t border-gray-300 ${index === 4 ? "border-b" : ""}`}
        >
          <button
            className="w-full flex justify-between items-center text-left font-semibold text-lg text-[#1d2440] hover:text-red-400 cursor-[url('./assets/cursor.cur'),_auto] transition duration-300 ease-in-out"
            onClick={() => handleSelect(faq.question)}
          >
            <span
              className={`${selected === faq.question ? "text-[#1d2440] hover:text-red-400" : ""}`}
            >
              {faq.question}
            </span>
            {selected === faq.question ? (
              <img
                src={arrowDown}
                alt="Flecha roja abajo"
                className=" transition-transform duration-200 rotate-180"
              />
            ) : (
              <img
                src={arrowUp}
                alt="Flecha azul arriba"
                className="transition-transform duration-200 rotate-0"
              />
            )}
          </button>
          {selected === faq.question && (
            <p className="mt-2 text-gray-600 text-md leading-relaxed">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
