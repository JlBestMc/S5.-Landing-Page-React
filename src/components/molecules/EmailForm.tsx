import { useState } from "react";
import Button from "../atoms/Button";
import iconError from "../../assets/icon-error.svg";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(!validateEmail(email));
  };

  return (
    <div className="bg-blue-400">
      <form
        onSubmit={handleSubmit}
        className="flex items-start gap-4 w-full max-w-xl px-4"
        noValidate
      >
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email/com"
            className={`w-full px-4 py-3 rounded bg-white border-2 pr-10 text-sm outline-none transition-all ${
              error
                ? "border-red-400 text-red-500 placeholder-red-400"
                : "border-white"
            }`}
          />
          {error && (
            <>
              <span className="absolute top-3 right-3 text-red-500 font-bold">
                <img src={iconError}></img>
              </span>
              <p className="text-xs rounded-b py-1 text-white bg-red-400 pl-3 italic">
                Whoops, make sure it's an email
              </p>
            </>
          )}
        </div>

        <Button content="Contact Us" variant="btnRed" styles="py-3"></Button>
      </form>
    </div>
  );
}
