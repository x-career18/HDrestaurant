import "./home.css";

const Home = () => {
  return (
    <div className="WelcomeText bg-home bg-center bg-cover h-screen flex flex-col items-center">
      <div className="Grid flex-col items-center inline-flex mt-52">
        <div className="ThePureTasteOf text-amber-200 text-8xl font-normal font-waterBrush">
          The pure taste of
        </div>
        <div className="VietNam text-white text-9xl font-normal font-beVietnam">
          Viet Nam
        </div>
      </div>
      <div className="w-96 text-center text-white text-2xl font-normal font-beVietnam leading-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </div>
      <div className="PopUp w-64 h-40 px-6 py-4 bg-white rounded-lg flex-col justify-start items-start gap-2 inline-flex">
        <div className="OpeningHours text-zinc-950 text-lg font-normal font-beVietnam leading-7">
          Opening Hours
        </div>
        <div className="Grid self-stretch h-24 flex-col justify-start items-start gap-2 flex">
          <div className="Row self-stretch justify-between items-start inline-flex">
            <div className="Mon text-zinc-950 text-base font-normal font-beVietnam leading-relaxed">
              Mon
            </div>
            <div className="Closed text-zinc-950 text-base font-normal font-beVietnam leading-relaxed">
              closed
            </div>
          </div>
          <div className="Row self-stretch justify-between items-start inline-flex">
            <div className="TueFri text-zinc-950 text-base font-normal font-beVietnam leading-relaxed">
              Tue - Fri
            </div>
            <div className="Pm8pm text-zinc-950 text-base font-normal font-beVietnam leading-relaxed">
              4pm - 8pm
            </div>
          </div>
          <div className="Row self-stretch justify-between items-start inline-flex">
            <div className="SatSun text-zinc-950 text-base font-normal font-beVietnam leading-relaxed">
              Sat- Sun
            </div>
            <div className="Pm11pm text-zinc-950 text-base font-normal font-beVietnam leading-relaxed">
              5pm - 11pm
            </div>
          </div>
        </div>
      </div>
      <div className="Navbar w-auto h-16 p-2.5 bg-white rounded-full justify-start items-center gap-8 inline-flex">
        <div className="Inner justify-start items-center gap-0.5 flex">
          <div className="Menu justify-start items-center flex">
            <div className="MenuItem p-4 bg-white rounded-full justify-start items-start gap-2.5 flex">
              <div className="Restaurant text-zinc-950 text-base font-normal font-beVietnam leading-none">
                Restaurant
              </div>
            </div>
          </div>
          <div className="Button px-6 py-4 bg-neutral-900 rounded-full justify-start items-start gap-2.5 flex">
            <div className="BookATable text-white text-sm font-normal font-beVietnam uppercase leading-none tracking-wide">
              Book a Table
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
