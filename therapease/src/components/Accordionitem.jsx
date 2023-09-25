import React from 'react';
import { Collapse } from 'react-collapse';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordionitem = ({ open, toggle, title, desc, color }) => {
  
  const bgColorClass = `bg-${color}`;
  return (
    <div className='lg:pt-[20px] md:pt-[15px] pt-[12px] items-center justify-center '>
      <div className={`md:h-[60px] lg:w-[700px] md:w-[600px]  py-[10px] md:rounded-[15px]  rounded-md flex  flex-row md:mx-6
      justify-between items-center cursor-pointer ${bgColorClass}`} onClick={toggle}>
        <div className='flex items-center'>
          <p className={`text-[12.5px] font-normal ${bgColorClass} md:pl-10 pl-2 md:mt-0 md:mb-0 md:text-[18px]`}>{title}</p>
        </div>
        <div className='text-[20px] md:pr-10 pr-3'>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className={`md:h-[70px] lg:w-[700px] md:w-[600px]  md:mx-6 rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[15px] 
        rounded-br-[15px] px-[4%] md:px-[50px] md:pb-[100px] md:pt-[20px] pb-[20px] text-[12px]  md:text-[16px]  ${bgColorClass} md:mt-0`}>
          <>{desc}</></div>
      </Collapse>
    </div>
  );
}

export default Accordionitem;