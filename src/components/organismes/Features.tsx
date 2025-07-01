import { FEATURES } from "../../data/data.ts";
import Tab from "../atoms/tab.tsx";
import { useState } from "react";
import Button from "../atoms/Button.tsx";

export default function Features() {
  const [selected, setSelected] = useState<string>(FEATURES.Booking.tabTitle);

  function handleSelectTab(tabKey: string) {
    setSelected(tabKey);
  }

  return (
    <section className="max-w-[1280px] mx-auto my-10 py-14">
      <div>
        <h2 className="text-4xl font-bold text-[#1d2440] mb-4 text-center">
          Features
        </h2>
        <p className="text-gray-500 text-xl max-w-xl mx-auto text-center my-10">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          on the go.
        </p>
      </div>
      <div className="grid justify-center justify-items-center">
        <menu className="flex flex-col md:grid md:grid-cols-3 w-[80%] gap-6 md:justify-items-center border-b border-gray-300 mb-30 md:mb-20">
          <hr className="md:hidden opacity-25" />
          {Object.keys(FEATURES).map((key) => (
            <div key={FEATURES[key].tabTitle}>
              <Tab
                content={FEATURES[key].tabTitle}
                onSelect={() => {
                  handleSelectTab(FEATURES[key].tabTitle);
                }}
                isSelected={selected === FEATURES[key].tabTitle}
              />
              <hr className="md:hidden opacity-25" />
            </div>
          ))}
        </menu>

        {Object.keys(FEATURES).map((key) => (
          <div
            key={FEATURES[key].tabTitle}
            className="grid grid-cols-1 md:grid-cols-2 gap-15 justify-items-center items-center"
          >
            <div
              className={`w-[80%] md:w-full justify-items-center relative before:absolute before:-inset-1 before:-z-1 before:block before:bg-[#5265E1] before:top-[25%] before:left-[-20%] before:h-[95%] before:w-[100%] before:rounded-r-[20rem] 
                            ${selected === FEATURES[key].tabTitle ? "block" : "hidden"}`}
            >
              <img src={FEATURES[key].image} alt={FEATURES[key].tabTitle} />
            </div>
            <div
              className={`grid row-auto gap-10 justify-items-center md:justify-items-start mt-30 md:mt-0
                                ${selected === FEATURES[key].tabTitle ? "grid" : "hidden"}`}
            >
              <h3 className="text-3xl font-bold text-[#1d2440]">
                {FEATURES[key].titleFeature}
              </h3>
              <p className="text-gray-500 text-xl w-[75%]">
                {FEATURES[key].description}
              </p>
              <Button
                variant="btnBlue"
                styles="shadow  py-3 px-6 md:block hidden"
                content="More info"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
