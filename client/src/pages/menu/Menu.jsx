import React from "react";

const Menu = () => {
  return (
    <div className="bg-center bg-contain bg-[#010302]">
      <div className="LeftContainer w-1/2 fixed left-0 top-0 bg-cover bg-menu h-screen items-center">
        <div className="WelcomeSect mt-20 ml-20 flex flex-col items-center">
          <div className="text-amber-200 text-6xl font-normal font-waterBrush">
            Check Out
          </div>
          <div className="text-white text-7xl font-normal font-beVietnam">
            Our Menus
          </div>
          <div className="Navbar mt-80 h-16 p-2.5 bg-white rounded-full justify-start items-center gap-8 inline-flex">
            <button
              onClick={""}
              className="flex px-6 py-4
                bg-neutral-900 
                rounded-full justify-start gap-2.5
                text-white text-sm font-normal font-beVietnam 
                uppercase leading-none tracking-wide 
                hover:bg-slate-700
                hover:text-gray-100 
                transistion duration-200"
            >
              Find a Table
            </button>
          </div>
        </div>
      </div>
      <div className="RightContainer flex flex-col items-end justify-center pt-24 mr-40">
        <div className="ContentCnt w-[600px] flex-col gap-10 inline-flex">
          <div className="flex-col gap-4 flex">
            <p className="text-white text-opacity-80 text-xl font-normal font-beVietnam leading-relaxed">
              Lorem ipsum dolor
            </p>
            <div className="text-white text-opacity-60 text-base font-normal font-beVietnam leading-loose">
              Volutpat maecenas volutpat blandit aliquam etiam erat velit
              scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla
              facilisi cras fermentum odio eu.
            </div>
          </div>
          <img
            className="rounded-lg"
            src="./src/assets/rest-event.png"
            alt="restaurant event"
          />
          <div className="flex-col gap-4 flex">
            <p className="text-white text-opacity-80 text-xl font-normal font-beVietnam leading-relaxed">
              Lorem ipsum dolor
            </p>
            <div className="text-white text-opacity-60 text-base font-normal font-beVietnam leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Integer malesuada nunc vel risus commodo viverra maecenas. Dis
              parturient montes nascetur ridiculus mus mauris vitae ultricies.
              Placerat duis ultricies lacus sed turpis. Vel elit scelerisque
              mauris pellentesque pulvinar pellentesque habitant morbi
              tristique. Turpis massa sed elementum tempus egestas sed sed
              risus. Velit ut tortor pretium viverra. Vivamus arcu felis
              bibendum ut. Quis enim lobortis scelerisque fermentum dui faucibus
              in ornare. Fusce ut placerat orci nulla pellentesque dignissim
              enim. Congue eu consequat ac felis donec et. Feugiat vivamus at
              augue eget arcu dictum. Scelerisque felis imperdiet proin
              fermentum leo vel orci. Auctor urna nunc id cursus metus aliquam
              eleifend mi. Facilisis mauris sit amet massa vitae tortor
              condimentum lacinia. Eget arcu dictum varius duis at consectetur
              lorem. Magna eget est lorem ipsum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
