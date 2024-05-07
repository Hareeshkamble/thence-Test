import { Link, useNavigate } from "react-router-dom"
import ClearIcon from '@mui/icons-material/Clear';
import ErrorIcon from '@mui/icons-material/Error';
import React,{useState} from "react";

const FormField = () => {
    let Navigate=useNavigate()
    const [valid, setvalid] = useState(false)
    const [visible, setvisible] = useState(false)
    
    let handleSubmit=(e)=>{

        e.preventDefault();
        let input = document.querySelector("input")
        if(input.value.length<4){
            setvalid(true)
        }else{
            Navigate("/success")

        }
        
        if(input.value.length>0){
            setvisible(true)
        }
        

        
    }
    return (
      <div className="w-full h-[800px] bg-white overflow-hidden flex flex-col items-start justify-start pt-[31.9px] pb-[86.8px] pr-[52px] pl-[52.2px] box-border relative gap-[1482.8px] leading-[normal] tracking-[normal] mq450:h-auto mq450:gap-[371px] mq750:gap-[741px] mq750:pl-[26px] mq750:pr-[26px] mq750:box-border">
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
        <section className="self-stretch flex flex-col items-start justify-start gap-[45px] shrink-0 [debug_commit:1de1738] max-w-full mq675:gap-[22px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
           <Link to="/">
           <img
              className="h-[47.4px] w-[127.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738]"
              loading="lazy"
              alt=""
              src="/frame-1261155216.svg"
            />
           </Link>
            <div className="h-16 w-16 rounded-[40px] box-border flex flex-row items-start justify-start py-4 px-[15px] shrink-0 [debug_commit:1de1738] border-[1px] border-solid border-lightgray">
              <div className="overflow-hidden flex flex-row items-center justify-center  relative gap-[13.3px]">
              <Link to="/" className="flex items-center justify-center text-black">
                <ClearIcon fontSize="large" />
              </Link>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <form className="m-0 w-[588px] flex flex-col items-start justify-start gap-[47px] max-w-full mq675:gap-[23px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-[4px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                  <h2 className="m-0 relative text-[36px] tracking-[-0.02em] leading-[40px] font-normal font-covered-by-your-grace text-mediumseagreen text-left mq450:text-[22px] mq450:leading-[24px] mq750:text-[29px] mq750:leading-[32px]">
                    Registration Form
                  </h2>
                </div>
                <h1 className="m-0 self-stretch relative text-[56px] tracking-[-0.02em] leading-[120%] font-semibold font-manrope text-gray1-200 text-center mq450:text-[34px] mq450:leading-[40px] mq750:text-[45px] mq750:leading-[54px]">
                  Start your success Journey here!
                </h1>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[417px] flex flex-col items-start justify-start gap-[24px] max-w-full">
                  <div className="self-stretch rounded-45xl bg-whitesmoke overflow-hidden flex flex-row rounded-[40px] outline items-start justify-start py-[22px] px-9 whitespace-nowrap border-[1px] border-solid border-gray-200">
                    <input type="text"  className="relative input outline-none text-xl font-medium font-manrope text-black " placeholder="Enter Your Name"/>
                      

                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                    <div className="self-stretch rounded-45xl bg-ghostwhite overflow-hidden flex flex-row items-start rounded-[40px] justify-start py-[22px] px-9 border-[1px] border-solid border-royalblue">
                      <input type="email" required="true" placeholder="Enter Your Email" className="outline-none input  relative text-xl font-medium font-manrope text-black rounded-lg inline-block min-w-[117px] mq450:text-base"/>
                        
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      
                      <div className={`${!valid?"hidden":"flex" } relative text-[#fe0a06] text-base gap-1 items-center font-medium font-manrope text-red text-center`}>
                       <ErrorIcon fontSize="small" className="text-[#fe0a06]"/> Enter a valid email address
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row  items-start justify-center py-0 px-5 box-border max-w-full">
                <button onClick={handleSubmit}  type="submit"  className={` ${visible ? "bg-[#c9c9c9]":"black"} text-[18px] text-white capitalize font-semibold  cursor-pointer  [border:none] py-[26.1px] px-5 bg-[transparent] w-[417px] rounded-[107.06px] bg-black   flex flex-row items-start justify-center box-border max-w-full `}>
                    Submit
                </button>
              </div>
            </form>
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
    )
}
export default FormField