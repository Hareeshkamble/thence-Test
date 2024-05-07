import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const Website = () => {
  return (
    <div className="w-full relative  overflow-hidden flex flex-col items-start justify-start pt-6 px-6 pb-0 box-border gap-[52px] leading-[normal] tracking-[normal] mq750:gap-[26px]">
      <img
        className="w-[115.6px] h-[21.5px]  absolute !m-[0] right-[145.4px] bottom-[-2603.5px] object-contain"
        alt=""
        src="/path70.svg"
      />
      <img
        className="w-[1218px] relative max-h-full object-cover hidden max-w-full z-[1]"
        alt=""
        src="/image-4@2x.png"
      />
      <img
        className="w-[628px] relative max-h-full object-cover hidden max-w-full z-[2]"
        alt=""
        src="/image-32315@2x.png"
      />
      <img
        className="w-[1440px] relative max-h-full object-cover hidden max-w-full z-[3]"
        alt=""
        src="/image-32510@2x.png"
      />
      <img
        className="w-[84.2px] h-[84.2px] relative object-contain hidden z-[4]"
        alt=""
        src="/group-1171281438@2x.png"
      />
      <img
        className="w-[572px] h-[590px] absolute !m-[0] top-[400px] right-[-101px]"
        loading="lazy"
        alt=""
        src="/group-1171281397.svg"
      />
      <img
        className="w-[1218px] relative max-h-full object-cover hidden max-w-full z-[6]"
        alt=""
        src="/image-4@2x.png"
      />
      <img
        className="w-[628px] relative max-h-full object-cover hidden max-w-full z-[7]"
        alt=""
        src="/image-32315@2x.png"
      />
      <img
        className="w-[1440px] relative max-h-full object-cover hidden max-w-full z-[8]"
        alt=""
        src="/image-32510@2x.png"
      />
      <img
        className="w-[84.2px] h-[84.2px] relative object-contain hidden z-[9]"
        alt=""
        src="/group-1171281438@2x.png"
      />
      <FrameComponent5 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[131px] box-border max-w-full text-left text-17xl text-mediumseagreen font-covered-by-your-grace">
        <div className="w-[588px] flex flex-col items-start justify-start gap-[4px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[40px] font-normal font-inherit mq450:text-[22px] mq450:leading-[24px] mq1050:text-[29px] mq1050:leading-[32px]">
              Success stories
            </h1>
          </div>
          <h1 className="m-0 self-stretch relative text-[56px] tracking-[-0.02em] leading-[120%] font-semibold font-manrope text-gray1-200 text-center mq450:text-[34px] mq450:leading-[40px] mq1050:text-[45px] mq1050:leading-[54px]">
            Every success journey we’ve encountered.
          </h1>
        </div>
      </section>
      <section className="w-[1309px] flex flex-row items-start justify-start pt-0 px-[38px] pb-[121px] box-border max-w-full mq750:pb-[79px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px] max-w-full">
          <FrameComponent4 />
          <FrameComponent3 />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
        <div className="h-[749px] flex-1 rounded-21xl bg-whitesmoke-200 overflow-hidden flex flex-col items-end justify-start pt-20 pb-[558px] pr-[74px] pl-0 box-border gap-[34px] max-w-full lg:h-auto lg:pt-[52px] lg:pr-[37px] lg:pb-[363px] lg:box-border mq750:gap-[17px] mq750:pt-[34px] mq750:pb-[236px] mq750:box-border">
          <FrameComponent2 />
          <FrameComponent1 />
          <div className="w-[582px] h-px relative box-border hidden max-w-full border-t-[1px] border-solid border-lightgray-100" />
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default Website;
