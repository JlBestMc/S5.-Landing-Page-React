import { useState } from "react";
import Burger from "../atoms/Burger";
import { FAQS, type Dropdown } from "../../data/data";

interface DropdownProps {
  burgerIconSrc: string;
  closeIconSrc: string;
}

export default function Dropdown({
  burgerIconSrc,
  closeIconSrc,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (question: string) => {
    setSelected(question);
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <Burger
          isOpen={isOpen}
          burgerIconSrc={burgerIconSrc}
          closeIconSrc={closeIconSrc}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white border rounded shadow p-4 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {FAQS.map((faq: Dropdown, index: number) => (
              <div key={index}>
                <button
                  className={`w-full text-left font-bold text-lg ${selected === faq.question ? "text-blue-600" : "text-gray-800"}`}
                  onClick={() => handleSelect(faq.question)}
                >
                  {faq.question}
                </button>
                {selected === faq.question && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
                <hr className="opacity-25 mt-2" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
