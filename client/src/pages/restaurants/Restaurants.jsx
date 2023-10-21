import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useNavigate } from "react-router-dom";

const Restaurants = () => {
  const navigate = useNavigate();
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
      <div className="LeftContainer xl:w-1/2 xl:fixed left-0 top-0 bg-cover bg-restaurant w-full h-screen items-center z-10">
        <div className="WelcomeSect xl:ml-48 lg:top-0 flex flex-col items-center">
          <div className="mt-60 text-amber-200 text-5xl md:text-6xl font-normal font-waterBrush">
            Check Out
          </div>
          <div className="text-white text-4xl md:text-7xl font-normal font-beVietnam">
            Our Restaurants
          </div>
          <div className="IntroText md:px-20 my-5 text-center text-white text-base md:text-lg font-normal font-beVietnam">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </div>
          <div className="Navbar mt-20 md:mt-60 h-16 p-2.5 bg-white rounded-full justify-start items-center gap-8 inline-flex">
            <button
              onClick={() => {
                navigate("/book");
              }}
              className="Button flex
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
      <div className="RightContainer flex flex-col items-center xl:items-end justify-center xl:mr-5 2xl:mr-40">
        <div className="ContentContainer flex flex-col gap-10 p-5 lg:p-0">
          <div className="ContentList mt-7 flex flex-col items-start gap-5">
            <div className="Location text-white text-xl font-normal font-beVietnam leading-10">
              Location
            </div>
            <Dropdown
              className="LocationSelect flex w-72 h-12 px-7 bg-white rounded-3xl font-beVietnam cursor-pointer"
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="inline-flex w-full justify-between">
                  <span>Hanoi</span>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="flex flex-col gap-8">
            <div
              className="Content w-full md:w-[600px] cursor-pointer"
              onClick={() => {
                navigate("/menu");
              }}
            >
              <div className="w-full flex flex-col items-start md:flex-row md:inline-flex md:items-center gap-8">
                <div className="ContentImg">
                  <img
                    className="w-96 md:w-[700px] rounded-lg"
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
