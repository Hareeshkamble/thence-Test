import { Link } from "react-router-dom";

const FrameComponent5 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[26.8px] box-border top-[0] z-[99] sticky max-w-full">
      <header className="flex-1 [backdrop-filter:blur(31.33px)] rounded-[65.28px] bg-gray1-300 box-border flex flex-row items-center justify-between py-[15px] pr-0 pl-[52.2px] relative max-w-full gap-[20px] border-[1px] border-solid border-whitesmoke-300 mq750:pl-[26px] mq750:box-border">
      <a href="/">
      <img
          className="h-[47.4px] w-[127.9px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/frame-1261155216.svg"
        />
      </a>
        <div className="flex flex-row items-center justify-end gap-[15.7px] max-w-full mq750:hidden">
         <Link to="/register" className="no-underline">
         <button className="cursor-pointer py-6 px-10 bg-[transparent] rounded-[107.06px] flex flex-row items-center justify-center border-[1.3px] border-solid border-whitesmoke-300 hover:bg-lightgray-400 hover:box-border hover:border-[1.3px] hover:border-solid hover:border-gray-400">
            <Link to="/register" className="relative no-underline text-lg capitalize font-medium font-manrope text-gray1-200 text-center inline-block min-w-[106px] whitespace-nowrap">
              Get projects
            </Link>
          </button>
         </Link>
         <Link to="/register" className="no-underline">
         <button className="cursor-pointer [border:none] py-[26.1px] pr-[49.6px] pl-[41.8px] bg-[transparent] rounded-[107.06px] [background:linear-gradient(#1c1c1c,_#1c1c1c),_linear-gradient(97.55deg,_#1c1c1c,_#454444)] flex flex-row items-center justify-center whitespace-nowrap hover:bg-gray-400">
            <div className="relative text-lg capitalize font-semibold font-manrope text-white text-center">
              Onboard Talent
            </div>
          </button>
         </Link>
        </div>
        <img
          className="h-[25.5px] w-[25.4px] absolute !m-[0] top-[35.6px] left-[1759.6px] object-contain"
          loading="lazy"
          alt=""
          src="/group-1171281504@2x.png"
        />
      </header>
    </section>
  );
};

export default FrameComponent5;
