import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Restaurants = () => {
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <div className="bg-center bg-contain bg-[#010302]">
      <div className="LeftContainer w-1/2 fixed left-0 top-0 bg-cover bg-restaurant h-screen items-center z-10">
        <div className="WelcomeSect mt-60 ml-52 top-0 flex flex-col justify-start items-center">
          <div className="text-amber-200 text-6xl font-normal font-waterBrush">
            Check Out
          </div>
          <div className="text-white text-7xl font-normal font-beVietnam">
            Our Restaurants
          </div>
          <div className="w-3/5 my-5 text-center text-white text-lg font-normal font-beVietnam">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </div>
          <div className="Navbar mt-80 h-16 p-2.5 bg-white rounded-full justify-start items-center gap-8 inline-flex">
            <button
              onClick={""}
              className="flex
                px-6 py-4 bg-neutral-900 
                rounded-full justify-start
                gap-2.5
                text-white text-sm font-normal font-beVietnam 
                uppercase leading-none tracking-wide 
                hover:bg-slate-700
                hover:text-gray-100 
                transistion duration-200"
            >
              Book a Table
            </button>
          </div>
        </div>
      </div>
      <div className="RightContainer mr-40 flex flex-col items-end">
        <div>
          <div className="ContentList w-96 mt-7 flex flex-col items-start gap-5">
            <div className="Location text-white text-xl font-normal font-beVietnam leading-10">
              Location
            </div>
            <Dropdown
              className="LocationSelect flex w-72 h-12 mb-16 px-7 bg-white rounded-3xl font-beVietnam cursor-pointer"
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="inline-flex w-[100%] justify-between">
                  <span>Hanoi</span>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="">
            <div className="Content w-[600px] gap-2 cursor-pointer">
              <div className="Row w-full inline-flex items-center gap-8">
                <div className="ContentImg">
                  <img
                    className="w-[700px] rounded-lg"
                    src="./src/assets/rest-event-1.png"
                    alt="restaurant"
                  />
                </div>
                <div className="Content flex-col justify-start items-start gap-2 inline-flex">
                  <div className="flex-col justify-start items-start flex">
                    <div className="text-amber-200 text-base font-normal font-beVietnam leading-relaxed">
                      September 19, 2022
                    </div>
                    <div className="text-white text-lg font-normal font-beVietnam leading-10">
                      Gatsby Night
                    </div>
                  </div>
                  <div className="ContentText self-stretch opacity-60 text-white text-base font-normal font-beVietnam leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo
                    ut vitae neque sed sed sit sagittis tristique scelerisque.
                  </div>
                </div>
              </div>
            </div>
            <div className="Content w-[600px] gap-2 cursor-pointer">
              <div className="Row w-full inline-flex items-center gap-8">
                <div className="ContentImg">
                  <img
                    className="w-[700px] rounded-lg"
                    src="./src/assets/rest-event-1.png"
                    alt="restaurant"
                  />
                </div>
                <div className="Content flex-col justify-start items-start gap-2 inline-flex">
                  <div className="flex-col justify-start items-start flex">
                    <div className="text-amber-200 text-base font-normal font-beVietnam leading-relaxed">
                      September 19, 2022
                    </div>
                    <div className="text-white text-lg font-normal font-beVietnam leading-10">
                      Gatsby Night
                    </div>
                  </div>
                  <div className="ContentText self-stretch opacity-60 text-white text-base font-normal font-beVietnam leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo
                    ut vitae neque sed sed sit sagittis tristique scelerisque.
                  </div>
                </div>
              </div>
            </div>
            <div className="Content w-[600px] gap-2 cursor-pointer">
              <div className="Row w-full inline-flex items-center gap-8">
                <div className="ContentImg">
                  <img
                    className="w-[700px] rounded-lg"
                    src="./src/assets/rest-event-1.png"
                    alt="restaurant"
                  />
                </div>
                <div className="Content flex-col justify-start items-start gap-2 inline-flex">
                  <div className="flex-col justify-start items-start flex">
                    <div className="text-amber-200 text-base font-normal font-beVietnam leading-relaxed">
                      September 19, 2022
                    </div>
                    <div className="text-white text-lg font-normal font-beVietnam leading-10">
                      Gatsby Night
                    </div>
                  </div>
                  <div className="ContentText self-stretch opacity-60 text-white text-base font-normal font-beVietnam leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo
                    ut vitae neque sed sed sit sagittis tristique scelerisque.
                  </div>
                </div>
              </div>
            </div>
            <div className="Content w-[600px] gap-2 cursor-pointer">
              <div className="Row w-full inline-flex items-center gap-8">
                <div className="ContentImg">
                  <img
                    className="w-[700px] rounded-lg"
                    src="./src/assets/rest-event-1.png"
                    alt="restaurant"
                  />
                </div>
                <div className="Content flex-col justify-start items-start gap-2 inline-flex">
                  <div className="flex-col justify-start items-start flex">
                    <div className="text-amber-200 text-base font-normal font-beVietnam leading-relaxed">
                      September 19, 2022
                    </div>
                    <div className="text-white text-lg font-normal font-beVietnam leading-10">
                      Gatsby Night
                    </div>
                  </div>
                  <div className="ContentText self-stretch opacity-60 text-white text-base font-normal font-beVietnam leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo
                    ut vitae neque sed sed sit sagittis tristique scelerisque.
                  </div>
                </div>
              </div>
            </div>
            <div className="Content w-[600px] gap-2 cursor-pointer">
              <div className="Row w-full inline-flex items-center gap-8">
                <div className="ContentImg">
                  <img
                    className="w-[700px] rounded-lg"
                    src="./src/assets/rest-event-1.png"
                    alt="restaurant"
                  />
                </div>
                <div className="Content flex-col justify-start items-start gap-2 inline-flex">
                  <div className="flex-col justify-start items-start flex">
                    <div className="text-amber-200 text-base font-normal font-beVietnam leading-relaxed">
                      September 19, 2022
                    </div>
                    <div className="text-white text-lg font-normal font-beVietnam leading-10">
                      Gatsby Night
                    </div>
                  </div>
                  <div className="ContentText self-stretch opacity-60 text-white text-base font-normal font-beVietnam leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo
                    ut vitae neque sed sed sit sagittis tristique scelerisque.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
