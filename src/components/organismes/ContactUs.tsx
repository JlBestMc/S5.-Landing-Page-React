import EmailForm from "../molecules/EmailForm";

export default function ContactUs() {
  return (
    <section className="bg-[#5465df] mx-auto my-10 py-14">
      <div className="flex flex-col items-center justify-center">
        <p
          className="text-white text-sm font-semibold text-center my-10"
          style={{ letterSpacing: "0.5em" }}
        >
          35,000+ ALREADY JOINED
        </p>
        <h2 className="text-4xl text-white font-bold mb-12 text-center md:w-1/3 ">
          Stay up-to-date with what we're doing
        </h2>
        <EmailForm />
        <span className="pb-5"></span>
      </div>
    </section>
  );
}
