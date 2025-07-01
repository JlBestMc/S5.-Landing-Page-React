import Dropdown from "../molecules/Dropdown";
import Button from "../atoms/Button";

export default function Faqs() {
  return (
    <section className="max-w-[1280px] mx-auto my-10 py-14">
      <div>
        <h2 className="text-4xl font-bold text-[#1d2440] mb-4 text-center">Frequently Asked Questions</h2>
        <p className="text-gray-500 text-xl max-w-xl mx-auto text-center my-10">
          Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
        </p>
      </div>
        <Dropdown />
        <div className="flex justify-center">
        <Button
          variant="btnBlue"
          styles="shadow mt-10"
          content="More info"
        />
        </div>
    </section>
  );
}
