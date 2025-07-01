import { useState } from "react";
import { FAQS, type Dropdown } from "../../data/data";
import arrowUp from "../../assets/icon-arrow.svg";
import arrowDown from "../../assets/icon-arrow-red.svg";

export default function Dropdown() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (question: string) => {
    setSelected(prev => (prev === question ? null : question));
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      {FAQS.map((faq: Dropdown, index: number) => (
        <div key={index} className="border-b py-4">
          <button
            className="w-full flex justify-between items-center text-left font-semibold text-lg text-gray-800 hover:text-blue-500"
            onClick={() => handleSelect(faq.question)}
          >
            <span className={`${selected === faq.question ? "text-blue-600" : ""}`}>
              {faq.question}
            </span>
            <img
              src={selected === faq.question ? arrowDown : arrowUp}
              alt={selected === faq.question ? "Collapse" : "Expand"}
              
            />
          </button>
          {selected === faq.question && (
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
