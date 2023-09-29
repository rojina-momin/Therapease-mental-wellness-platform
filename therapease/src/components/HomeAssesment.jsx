import React from 'react';
import { Link } from 'react-router-dom';
import { assetgray, assetpink } from '../assets';

const HomeAssesment = () => {
  return (
    <div className="App min-h-screen flex items-center justify-center lg:mb-[-100px] md:mb-[-200px] mb-[-270px] lg:mt-0  md:mt-[-100px] mt-[-180px] ">
      <div className="container lg:w-[1200px]  lg:h-[335px] md:w-[680px] md:h-[250px] w-[400px] h-[250px] md:rounded-[25px] rounded-[15px] flex lg:flex-row flex-col shadow-xl lg:mx-0 md:mx-12 mx-8 relative overflow-hidden">
        <img src={assetpink} alt="" className="lg:w-[280px] lg:h-[180px] md:w-[180px] md:h-[110px] w-[120px] md:flex hidden absolute" />
        <div className="flex flex-col lg:mt-[80px] md:mt-[30px] mt-0 relative">
          <h1 className="text-black font-semibold lg:text-[36px] md:text-[32px] text-[25px] w-[100%] md:mt-0 mt-8 xl:ml-[120px] lg:ml-[90px] md:ml-[60px] ml-4">
            Assessment Time. Test Your Mind!
          </h1>
          <p className="xl:max-w-[500px] lg:max-w-[485px] md:max-w-[410px] max-w-[270px] md:mt-5 mt-3 font-normal lg:text-[26px] md:text-[20px] text-[16px] leading-normal xl:ml-[120px] lg:ml-[90px] md:ml-[60px] ml-4 text-black">
            Take the assessment and find out how much you scored.
          </p>
        </div>
        <img src={assetgray} alt="" className="lg:w-[220px] lg:h-[189px] md:w-[150px] md:h-[110px] w-[130px] md:flex hidden  absolute bottom-0 right-0" />
        <div className="flex xl:ml-[220px] lg:ml-[120px] md:ml-[60px] ml-4 lg:mt-[130px] relative">
          <button className="bg-yellow py-2 text-black rounded-xl mt-4 px-3  md:w-[150px] md:h-[43px] ">
            <Link to="/quizpage">Take Assessment</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAssesment;