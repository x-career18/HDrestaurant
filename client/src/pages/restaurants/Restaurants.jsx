import React from "react";

const Restaurants = () => {
  return (
    <div>
      <div className="LeftBg w-[900px] fixed left-0 top-0 bg-cover bg-restaurant h-screen items-center z-10">
        <div className="WelcomeSect mt-60 h-40 top-0 flex flex-col justify-start items-center">
          <div className="CheckOut text-amber-200 text-6xl font-normal font-waterBrush">
            Check Out
          </div>
          <div className="OurRestaurants text-white text-7xl font-normal font-beVietnam">
            Our Restaurants
          </div>
            <div className="IntroText w-3/5 my-5 text-center text-white text-lg font-normal font-beVietnam">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </div>
          <div className="Navbar mt-80 h-16 p-2.5 bg-white rounded-full justify-start items-center gap-8 inline-flex">
            <div className="Inner justify-start items-center gap-0.5 flex">
              <div className="Menu justify-start items-center flex">
                <div className="MenuItem p-4 bg-white rounded-full justify-start items-start gap-2.5 flex">
                  <button className="Restaurant text-zinc-950 text-base font-normal font-beVietnam leading-none">
                    Restaurants
                  </button>
                </div>
              </div>
              <button
                onClick={""}
                className="Button px-6 py-4 bg-neutral-900 rounded-full justify-start items-start gap-2.5 flex"
              >
                <div className="BookATable text-white text-sm font-normal font-beVietnam uppercase leading-none tracking-wide">
                  Book a Table
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="RightBg bg-center bg-contain bg-[#050505] h-screen z-0">
        <p className="">bruh</p>
      </div>
    </div>
  );
};

export default Restaurants;
