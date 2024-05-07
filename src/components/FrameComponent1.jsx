import React,{useState} from "react";
const FrameComponent1 = () => {

  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);



  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  const toggleExpansion2 = () => {
    setExpanded2(!expanded2);
  };
  const toggleExpansion3 = () => {
    setExpanded3(!expanded3);
  };
  const toggleExpansion4 = () => {
    setExpanded4(!expanded4);
  };
  return (
    <div className="self-stretch flex flex-row items-start justify-between max-w-full shrink-0 gap-[20px] text-left text-xl text-gray1-200 font-manrope lg:flex-wrap">
      <div className="h-[563.6px] w-[491px] flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border min-w-[491px] max-w-full lg:flex-1 mq750:pt-8 mq750:box-border mq750:min-w-full">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full lg:self-stretch lg:w-auto"
          loading="lazy"
          alt=""
          src="/union.svg"
        />
      </div>
      <div className="w-[581px] flex flex-col items-start justify-start gap-[35px] min-w-[581px] max-w-full lg:flex-1 mq750:gap-[17px] mq750:min-w-full">
        

        {/* 1st one */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[140%] font-semibold mq450:text-base mq450:leading-[22px]">
              <p className="m-0">
                What’s the guarantee that I will be satisfied
              </p>
              <p className="m-0">with the hired talent?</p>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
             <button className="cursor-pointer" onClick={toggleExpansion}> <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={expanded ? "/frame-3.svg" : "/frame-1.svg"}
              /></button>
            </div>
          </div>
          <div className={`self-stretch flex  flex-row items-start justify-between gap-[20px] ${expanded?"flex":"hidden"}`}>
            <div className="relative leading-[140%] font-semibold mq450:text-base mq450:leading-[22px]">
              <p className="m-0 self-stretch h-[78px] relative text-mini leading-[160%] text-gray-600 inline-block shrink-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolorum ipsa aperiam voluptas molestias earum quam, sapiente distinctio eveniet atque quae expedita voluptatem ratione nesciunt. Perspiciatis, doloribus. Eos, tempora similique.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
            
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray-100" />
        </div>
        {/* 2nd  */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[140%] font-semibold mq450:text-base mq450:leading-[22px]">
              <p className="m-0">
              Can I hire multiple talents at once?
              </p>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
             <button className="cursor-pointer" onClick={toggleExpansion2}> <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={expanded2 ? "/frame-3.svg" : "/frame-1.svg"}
              /></button>
            </div>
          </div>
          <div className={`self-stretch flex  flex-row items-start justify-between gap-[20px] ${expanded2?"flex":"hidden"}`}>
            <div className="relative leading-[140%] font-semibold mq450:text-base mq450:leading-[22px]">
              <p className="m-0 self-stretch h-[78px] relative text-mini leading-[160%] text-gray-600 inline-block shrink-0">
              If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution
              </p>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
            
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray-100" />
        </div>
      {/* 3rd */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[140%] font-semibold mq450:text-base mq450:leading-[22px]">
              <p className="m-0">
              Why should I not go to an agency directly?
              </p>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
             <button className="cursor-pointer" onClick={toggleExpansion3}> <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={expanded3 ? "/frame-3.svg" : "/frame-1.svg"}
              /></button>
            </div>
          </div>
          <div className={`self-stretch flex  flex-row items-start justify-between gap-[20px] ${expanded3?"flex":"hidden"}`}>
            <div className="relative leading-[140%] font-semibold mq450:text-base mq450:leading-[22px]">
              <p className="m-0 self-stretch h-[78px] relative text-mini leading-[160%] text-gray-600 inline-block shrink-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolorum ipsa aperiam voluptas molestias earum quam, sapiente distinctio eveniet atque</p>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
            
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray-100" />
        </div>
        {/* 4th */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[140%] font-semibold mq450:text-base mq450:leading-[22px]">
              <p className="m-0">
              Who can help me pick a right skillset and duration for me?
              </p>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
             <button className="cursor-pointer" onClick={toggleExpansion4}> <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={expanded4 ? "/frame-3.svg" : "/frame-1.svg"}
              /></button>
            </div>
          </div>
          <div className={`self-stretch flex  flex-row items-start justify-between gap-[20px] ${expanded4?"flex":"hidden"}`}>
            <div className="relative leading-[140%] font-semibold mq450:text-base mq450:leading-[22px]">
              <p className="m-0 self-stretch h-[78px] relative text-mini leading-[160%] text-gray-600 inline-block shrink-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolorum ipsa aperiam voluptas molestias earum quam</p>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
            
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray-100" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
