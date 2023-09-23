import React from 'react';
import { line, pinkbg } from '../assets';
import styles, { layout } from '../style';
import { Link } from 'react-router-dom';

const Assesment = () => {
    
  return (
    
    
      <section className={`${layout.section} md:mt-[50px] bg-no-repeat w-[100%] lg:h-[100%] h-[70%] mb-[90px] `} >
        <img src={pinkbg}  className='absolute  w-full lg:h-[500px] md:h-[400px] h-[250px]'/>
     
    <div className={`flex-1 ${styles.flexCenter} flex-col  md:mt-0 mt-0 relative ]`}>
      
      <h1 className={`text-black font-semibold lg:text-[30px] text-[25px] xl:mr-[500px] lg:mr-[300px] md:mr-[100px] mr-[70px] md:mt-0 mt-8 `}>We are here to help you!</h1>
      
      <p className={` lg:max-w-[470px] max-w-[410px] mt-5 font-normal lg:text-[24px] md:text-[16px] text-[16px] leading-normal  xl:mr-[200px] lg:ml-[-200px] ml-8     text-black`}>
      After taking a free mental health test, TherapEase connects users to a chatbot.
      </p>
      <button className='bg-faintgray py-2 rounded-xl px-4 mt-5 mr-[200px] md:mr-[240px] lg:mr-[500px] xl:mr-[700px]'><Link to='/quizpage'>Take Assesment</Link> </button>
    </div>
    <div className=''>
      <img src={line} alt="billing" className="w-full lg:h-full md:h-[400px] relative  hidden md:flex " />
    </div>
    </section>
    
  )
}

export default Assesment