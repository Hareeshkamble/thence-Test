const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 px-2 box-border max-w-full text-left text-lg text-gray1-200 font-manrope">
      <div className="h-44 flex-1 relative max-w-full mq750:h-auto mq750:min-h-[176]">
        <div className="absolute top-[122px] left-[57px] w-[530px] h-[54px] flex flex-row items-start justify-start">
          <div className="h-[624px] w-full absolute !m-[0] right-[0px] bottom-[-570px] left-[0px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full"
              alt=""
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-21xl bg-whitesmoke-100 w-full overflow-hidden flex flex-col items-center justify-between py-[60px] px-[47.5px] box-border min-h-[144px] max-w-full z-[2] lg:pl-[23px] lg:pr-[23px] lg:box-border">
          <div className="self-stretch flex flex-col items-center justify-start max-w-full mq750:gap-[38px] mq450:gap-[19px]">
            <div className="self-stretch flex flex-col items-center justify-start max-w-full mq750:gap-[16px]">
              <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq750:flex-wrap">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-6.svg"
                  />
                  <div className="relative leading-[20px] font-medium">
                    Talup 2023. All rights reserved
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[52px] max-w-full mq450:flex-wrap mq450:gap-[26px]">
                  <div className="relative [text-decoration:underline] leading-[20px]"><a href="/" className="text-black">{`Terms & Conditions`}</a></div>
                  <div className="relative [text-decoration:underline] leading-[20px] inline-block min-w-[112px]">
                   <a href="/" className="text-black"> Privacy Policy</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
