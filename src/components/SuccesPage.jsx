import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';

export default function SuccesPage() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        } else {
          navigate('/'); // Redirect to homepage
        }
      }, 1000);
  
      // Clear the timeout when component unmounts
      return () => clearTimeout(timer);
    }, [countdown, navigate]);
    return (
      <div className="w-full h-[800px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[31.9px] px-[52.2px] pb-[42px] box-border gap-[1438px] leading-[normal] tracking-[normal] mq450:gap-[180px] mq750:gap-[359px] mq1125:gap-[719px] mq1125:pl-[26px] mq1125:pr-[26px] mq1125:box-border">
        <img
          className="w-[115.6px] h-[21.5px] absolute !m-[0] right-[145.4px] bottom-[-4053.5px] object-contain"
          alt=""
          src="/path70.svg"
        />
        <img
          className="w-[1218px] h-[800px] relative object-cover hidden max-w-full z-[1]"
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
        <section className="w-[1026.8px] flex flex-col items-start justify-start gap-[141.7px] shrink-0 [debug_commit:1de1738] max-w-full text-left text-[36px] text-mediumseagreen font-covered-by-your-grace mq450:gap-[18px] mq750:gap-[35px] mq1025:gap-[71px]">
          <img
            className="w-[127.9px] h-[47.4px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/frame-1261155216.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[718px] flex flex-col items-start justify-start gap-[154px] max-w-full mq450:gap-[38px] mq750:gap-[77px]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[41px] max-w-full mq750:gap-[20px]">
                <div className="flex flex-row items-start justify-start rounded-full bg-mediumseagreen p-5">
                <CheckIcon fontSize='large' className='text-white'/>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[4px] max-w-full">
                  <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[40px] font-normal font-inherit mq450:text-3xl mq450:leading-[24px] mq1025:text-[29px] mq1025:leading-[32px]">
                    Success Submitted
                  </h2>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[20px] max-w-full text-center text-[56px] text-gray font-manrope">
                    <h1 className="m-0 w-[423px] relative text-inherit tracking-[-0.02em] leading-[120%] font-semibold font-inherit flex items-center justify-center max-w-full mq450:text-[34px] mq450:leading-[40px] mq1025:text-[45px] mq1025:leading-[54px]">
                      Congratulations
                    </h1>
                    <h3 className="m-0 self-stretch relative text-[27px] leading-[130%] font-medium font-inherit text-dimgray mq450:text-3xl mq450:leading-[28px]">
                      Your request has been successfully submitted to us. We will
                      validate your information and reach out to your shortly with
                      updates
                    </h3>
                  </div>
                </div>
              </div>
              <footer className="self-stretch relative text-[20px] leading-[130%] text-center text-dimgray font-manrope mq450:text-[16px] mq450:leading-[21px]">
      <span>
        <span>Redirecting you to Homepage in</span>
        <span className="font-medium font-manrope">{` ${countdown} Seconds`}</span>
      </span>
    </footer>
            </div>
          </div>
        </section>
        <img
          className="w-[84.2px] h-[84.2px] relative object-contain hidden z-[5]"
          alt=""
          src="/group-1171281438@2x.png"
        />
        <div className="w-[603.6px] flex flex-row items-start justify-start py-0 pr-[37px] pl-[36.8px] box-border max-w-full">
          <img
            className="h-[624px] flex-1 relative max-w-full overflow-hidden shrink-0 [debug_commit:1de1738]"
            alt=""
            src="/mask-group.svg"
          />
        </div>
      </div>
    );
  };
  
