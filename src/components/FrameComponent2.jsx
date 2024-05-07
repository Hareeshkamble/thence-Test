import React,{useState} from "react";

const FrameComponent2 = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="w-[1207.5px] flex flex-col items-start justify-start gap-[9px] max-w-full shrink-0 text-left text-13xl text-darkgray-200 font-covered-by-your-grace">
      <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[36px] font-normal font-inherit mq450:text-lgi mq450:leading-[21px] mq1050:text-7xl mq1050:leading-[28px]">
        What’s on your mind
      </h2>
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-41xl text-gray1-200 font-manrope lg:flex-wrap">
        <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[110%] font-semibold font-inherit inline-block max-w-full mq450:text-17xl mq450:leading-[40px] mq1050:text-29xl mq1050:leading-[53px]">
          Ask Questions
        </h1>
        <div className="w-[581px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border max-w-full text-xl">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative leading-[140%] font-semibold mq450:text-base mq450:leading-[22px]">
                Do you offer freelancers?
              </div>
              
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
               <button onClick={toggleExpansion} className="cursor-pointer">
               <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                 src= {expanded ? "/frame-3.svg" : "/frame-1.svg"}
                />
               </button>
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
          
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
