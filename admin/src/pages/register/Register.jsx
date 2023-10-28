import React from "react";

const Register = () => {
  return (
    <div className="flex items-center justify-center py-5">
      <form className="w-96 flex flex-col gap-10 items-center">
        <img
          className="w-44"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4e%2Fef%2Fe3%2F4eefe398f8caa5ad8aa8e13d6e9c8fd5.png&f=1&nofb=1&ipt=37e2e51f635171360312e8d062b5ba3f295002258803727337cf25bb4385584a&ipo=images"
        />
        <section className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <span className="self-start text-neutral-600 text-base font-normal font-poppins">
              Email:
            </span>
            <div className="w-96 inline-flex">
              <div className="w-96 h-12 bg-zinc-100 rounded-lg py-2 px-3">
                <input
                  placeholder="Enter your email"
                  className="w-full h-full bg-transparent outline-none text-neutral-600 text-sm font-normal font-poppins"
                />
              </div>
              <div className="w-12 h-12">
                <div className="w-12 h-12 bg-violet-500 flex items-center justify-center rounded-lg">
                  <img
                    src="src/assets/icons/mail.svg"
                    alt="mail"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="self-start text-neutral-600 text-base font-normal font-poppins">
              Name:
            </div>
            <div className="w-96 inline-flex">
              <div className="w-96 h-12 bg-zinc-100 rounded-lg py-2 px-3">
                <input
                  placeholder="Enter your name"
                  className="w-full h-full bg-transparent outline-none text-neutral-600 text-sm font-normal font-poppins"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="self-start text-neutral-600 text-base font-normal font-poppins">
              Phone number:
            </div>
            <div className="w-96 inline-flex">
              <div className="w-96 h-12 bg-zinc-100 rounded-lg py-2 px-3">
                <input
                  placeholder="Enter your phone number"
                  className="w-full h-full bg-transparent outline-none text-neutral-600 text-sm font-normal font-poppins"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="self-start text-neutral-600 text-base font-normal font-poppins">
              Password:
            </div>
            <div className="w-96 inline-flex">
              <div className="w-96 h-12 bg-zinc-100 rounded-lg py-2 px-3">
                <input
                  placeholder="Enter your password"
                  className="w-full h-full bg-transparent outline-none text-neutral-600 text-sm font-normal font-poppins"
                />
              </div>
              <div className="w-12 h-12">
                <div className="w-12 h-12 bg-violet-500 flex items-center justify-center rounded-lg">
                  <img
                    src="src/assets/icons/lock.svg"
                    alt="mail"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="self-start text-neutral-600 text-base font-normal font-poppins">
              Restaurant code:
            </div>
            <div className="w-96 inline-flex mb-3">
              <div className="w-96 h-12 bg-zinc-100 rounded-lg py-2 px-3">
                <input
                  placeholder="Enter your restaurant code"
                  className="w-full h-full bg-transparent outline-none text-neutral-600 text-sm font-normal font-poppins"
                />
              </div>
              <div className="w-12 h-12">
                <div className="w-12 h-12 bg-violet-500 flex items-center justify-center rounded-lg">
                  <img
                    src="src/assets/icons/lock.svg"
                    alt="mail"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2">
              <input type="checkbox" name="news-letter" className="w-4 h-4" />
              <span className="text-sm text-neutral-600 font-normal font-poppins">
                Agree to receive newsletters
              </span>
            </div>
            <div className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="terms-conditions"
                className="w-4 h-4"
              />
              <span className="text-sm text-neutral-600 font-normal font-poppins">
                Agree to our{" "}
                <a href="" className="underline">
                  terms and conditions
                </a>
              </span>
            </div>
          </div>
        </section>

        <button className="w-44 h-12 self-start bg-violet-500 rounded-lg hover:shadow-lg transistion duration-300">
          <span className="text-center text-white text-base font-semibold font-poppins">
            Sign up
          </span>
        </button>
      </form>
    </div>
  );
};

export default Register;
