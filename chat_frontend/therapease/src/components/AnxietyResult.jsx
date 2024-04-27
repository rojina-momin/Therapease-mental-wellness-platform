import React from 'react';
import { logo, resultpage, sliderup } from '../assets';
import { Link } from 'react-router-dom';
import DoctorsSlider from './DoctorsSlider';
import Footer from './Footer';

const AnxietyResult = ({ anxietyLevel, formData, calculateScore }) => {
    
  const videos = [
    { id: 'GjkwrVi_Lj0', queryParams: 'si=eOCFDLR6q9L4Hf8B', description: 'Mindfulness for Anxiety' },
    { id: 'pdyTkv6V1dw', queryParams: 'si=JnIR3_K2uHi_euLF', description: 'Meditation for Anxiety' },
    { id: 'uLFN3cJ9Nyw', queryParams: 'si=pRwZ3nsrTNZ5Rc6G', description: 'Guided Meditation for Anxiety' },
  ];
  const openVideo = (video) => {
    window.open(`https://youtu.be/${video.id}?${video.queryParams}`, '_blank');
  };
  return (
    <div className=''>
    <div className='inset-0 sticky top-0 flex  px-4 pt-[80px] bg-gradient-to-r from-primary via-olive to-yellow' style={{zIndex: 2}}>
      <Link to="/"><img src={logo} className="absolute left-0 md:ml-[51px] ml-[20px] top-2 mt-[8px] h-[60px] w-[60px] " /></Link>
    </div>
    <section className={`flex md:flex-row  flex-col sm:py-16 py-6  `}>
    
    <div className="  xl:w-[418px] lg:w-[410px] md:w-[388px]  xl:ml-[140px] lg:ml-[50px] md:ml-[10px] ml-4  flex-1  h-screen  overflow-auto xl:px-4 items-center md:sticky top-32" style={{ height: 'fit-content', zIndex: 1 }}>
    <h2 className="lg:text-[22px] text-[18px] font-medium xl:ml-[90px] lg:ml-[60px] md:ml-[50px] ml-[80px] mb-3 ">Do you Feel Anxious?</h2>
    <h1 className='lg:text-[15px] md:text-[13px] pl-[30px]  xl:ml-[80px] lg:ml-[50px] md:ml-[30px] ml-[60px]'>Here are your results?</h1>
    <p className='xl:text-[22px]  md:text-[18px] mt-2 xl:ml-[110px] lg:ml-[80px] md:ml-[60px] ml-[100px] text-black font-bold flex'>Your score: <span className='text-red pl-[10px]'>{calculateScore(formData)}</span></p>
    <p className='md:text-[16px] xl:text-[18px] lg:text-[20px] mt-3 font-semibold flex xl:ml-[80px] lg:ml-[50px] md:ml-[20px] ml-[40px] md:px-0 px-10'>Anxiety Level: <span className='text-red pl-[10px]'>{anxietyLevel}</span></p>
    <p className='xl:text-[18px] lg:text-[16px] md:text-[12px] text-[14px] lg:w-[430px] md:px-0 px-2 md:ml-0 ml-[20px]  mt-5'>{anxietyLevel} of symptoms seen in anxiety Test</p>
    <div className='xl:w-[418px] h-[120px] lg:w-[390px] md:w-[300px] md:h-[110px] w-[340px] md:mx-0 mx-2  rounded-xl shadow-xl mt-8  bg-lightred '>
       <p className='xl:text-[14px] lg:text-[13px] md:text-[11px] text-[12px] text-center py-5  px-6 items-center justify-center'>People who score like you tend to experience few or no signs that are typically seen in stress. You may sometimes feel low, unmotivated or disinterested - but these feelings are likely to pass quickly.</p>
            </div>
            <div className='xl:w-[418px] lg:w-[390px] md:w-[300px] w-[340px] md:mx-0 mx-2  lg:h-[150px] md:h-[130px] h-[140px] rounded-xl shadow-xl mt-8  bg-lightred '>
       <h1 className='xl:text-[20px] lg:text-[18px] md:text-[16px] font-medium ml-6 pt-4'>Did this Assessment Help You?</h1>
       <p className='lg:text-[12px] md:text-[11px] text-[12px] lg:w-[360px] md:w-[260px] w-[280px] ml-6 lg:ml-6 md:ml-6 mt-2'>Gain mental insights and start your resilient journey with our assessment.</p>
       <button className='bg-faintgray   lg:text-[14px] md:text-[12px] rounded px-4 mt-2 ml-6  lg:w-[150px] md:w-[130px] w-[150px] h-[30px] md:h-[30px] '><Link to='/test-card'>Take Assessment</Link> </button>
      </div>
    </div>
   
   {/* //right side part// */}
   <div className='xl:mr-[100px] lg:mr-4 md:mr-[20px] flex flex-col md:mt-0 mt-8'>
     <h1 className='xl:text-[24px] lg:text-[22px] md:text-[18px] text-[18px] md:px-0 px-7  font-medium'>Get the best mental health care, with TherapEase</h1>
     <p className='xl:text-[18px] lg:text-[16px] md:text-[16px] text-[13px] md:px-0 px-7 xl:w-[582px] lg:w-[550px] md:w-[390px]  mt-4 leading-6    tracking-wide'>Self-care can be a very powerful way to work through sadness. A brief therapy session can also help.</p>
     <div className='xl:w-[606px] lg:w-[550px] md:w-[400px] w-[340px] h-[120px] lg:h-[183px] md:h-[153px] mt-[40px] bg-olive rounded-2xl  md:mx-0 mx-5 shadow-2xl'>
        <h1 className='font-medium xl:text-[20px]  md:text-[18px] text-[14px] lg:mt-[40px] mt-[20px] lg:pl-[40px] pl-[20px]'>Self-Care with TherapEase</h1>
        <h1 className='xl:w-[430px] lg:w-[400px] md:w-[331px] w-[260px] lg:h-[50px] md:h-[40px] lg:mt-[20px] mt-[10px] xl:text-[18px] md:text-[16px] text-[12px] lg:pl-[40px] pl-[20px]  leading'>Make TherapEase a companion in your journey of loving yourself.</h1>
        <img src={resultpage} className='lg:w-[162px] md:w-[100px] lg:h-[160px] md:h-[114px] w-[80px] h-[70px] lg:mt-[-120px] md:mt-[-80px] mt-[-60px] float-right'  />
     </div>


     <div>
            <h1 className='md:text-[24px] text-[20px] mt-[40px] font-medium md:ml-0 ml-5 '>Mindful Activities</h1>
            <div className='xl:w-[606px] lg:w-[550px] md:w-[400px] w-[340px] md:h-[220px] h-[200px] shadow-2xl rounded-2xl mt-4 md:mx-0 mx-4 '>
                <div className='xl:px-[40px] lg:px-[20px] px-[15px] py-5 '>
                <h1 className='text-red font-medium xl:text-[16px] text-[14px] md:py-1'>1. Attend an art therapy session.</h1>
                <h1 className='text-red font-medium xl:text-[16px] text-[14px] md:py-1'>2. Plan a nature walk with your friends</h1>
                <h1 className='text-red font-medium xl:text-[16px] text-[14px] md:py-1'>3. Engage in creative activities such as painting, drawing, writing.</h1>
                <h1 className='text-red font-medium xl:text-[16px] text-[14px] md:py-1'>4. Maintain a balanced diet, get enough sleep.</h1>
                <h1 className='text-red font-medium xl:text-[16px] text-[14px] md:py-1'>5. Watch comedy shows or engage in activities that induce laughter to <span className='xl:pl-4'> boost mood.</span> </h1>
                </div>
               
            </div>
         </div>

     {/* Youtube section */}
     <div>
      <h1 className='md:text-[24px] text-[20px] font-medium mt-8 md:ml-0 ml-5'>Mindful Moments</h1>
      {videos.map((video, index) => (
        <div key={index} 
             className='xl:w-[606px] lg:w-[550px] md:w-[400px] w-[340px] md:mx-0 mx-4 h-[130px] mt-[50px] rounded-2xl shadow-2xl py-3 px-4 flex items-center bg-slate-100 cursor-pointer' 
             onClick={() => openVideo(video)}>
          <img src={`https://img.youtube.com/vi/${video.id}/0.jpg`} 
               alt="YouTube Video Thumbnail" 
               style={{ width: '190px', height: '98px' }} 
               className="mr-10 lg:ml-6" />
          
          <div>
       
        <h2 className="md:text-lg text- font-medium">{video.description}</h2>
  
      </div>
        </div>
      ))}
         
         </div>

         <div className='xl:w-[606px] lg:w-[550px] md:w-[400px] w-[340px]  md:h-[427px] mt-[80px] md:mx-0 mx-5 rounded-xl shadow-2xl '>
         <div className='xl:w-[606px] lg:w-[550px] md:w-[400px] md:h-[193px] w-[300] h-[114px]  bg-lightred rounded px-6 '>
        <h1 className='font-medium lg:text-[20px] md:text-[16px] text-[15px] md:pt-[40px] pt-[30px] lg:pl-[40px] md:pl-[10px]'>How Can Therapy Help Me?</h1>
        <h1 className='lg:w-[370px] md:w-[300px] w-[260px] h-[50px] md:mt-[20px] mt-[10px] md:text-[16px] text-[13px] lg:pl-[40px] md:pl-[10px]  md:leading-7'>Therapy can help you learn ways to cope with depression and live a healthier life.</h1>
        <img src={sliderup} className='xl:w-[162px] lg:w-[140px] md:w-[100px] w-[70px] h-[75px] xl:h-[160px] lg:h-[145px] md:h-[109px] md:mt-[-120px] mt-[-100px]  float-right'  />
        </div>
        <div className=''>
          <DoctorsSlider /></div>
     </div>
   </div>
       
       
        </section>
        
        <div className='mt-[100px]'><Footer/></div>
      </div>

);
}

export default AnxietyResult;


