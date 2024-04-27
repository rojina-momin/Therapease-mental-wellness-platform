import React from 'react';
import { testcard } from '../assets';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import {Snackbar, Alert} from '@mui/material';  
import { useState } from 'react';
import axios from 'axios';
// import WebCamTest from './WebCamTest';


const Card = ({ title, buttonText, img, titleColor, buttonBgColor, imageText, path }) => {
  const details = useSelector((state) => state.cred.details);
  const [notLogsnack, setNotlogSnack] = useState(false);
  const isAuth = details.isAuth;
  let navigate = useNavigate();
  const handleButtonClick = async (e) => {
    console.log(imageText);
    if (isAuth==true){
      console.log ('logggggg');  
      navigate(path);
      try { 
        const response = await axios.post('http://127.0.0.1:8001/MentalRecognition/mental_prediction/', {
          
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }

    }
    else{
      console.log('fdfdgjhuhd');
      setNotlogSnack(true)
    }

  };

  return (
    <section>
      <div className="flex flex-row lg:mx-5 mx-3 my-4 relative">
        <div className="relative bg-graylight xl:w-[360px] xl:h-[300px] lg:w-[330px] lg:h-[300px]  md:w-[220px] md:h-[210px] w-[300px] h-[270px]  rounded-lg shadow-lg z-10">
          <div className="relative">
            <img src={img} className={`object-cover`} alt={title} />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex font-semibold lg:text-[24px] md:text-[19px] text-[24px] md:mt-2.5 md:ml-3 lg:mt-6   lg:ml-6 mt-6 ml-6">
              <div>
                {imageText}
              </div>
            </div>
          </div>
          <p className={`flex xl:mt-[23px] lg:mt-[25px] md:mt-[20px] mt-[25px] xl:text-[20px] lg:text-[18px] md:text-[14px] md:leading-5 text-[18px] mx-4 xl:max-w-[340px] xl:max-h-[210px] lg:max-w-[346px] lg:max-h-[260px] md:h-[65px] lg:leading-8 ${titleColor}`}>
            {title}
          </p>
          
            <button
              className={` ${buttonBgColor} text-black lg:text-[16px] md:text-[12px] font-normal lg:mt-[60px] mt-[30px] md:mt-[20px] lg:w-[120px] lg:h-[40px] md:w-[90px] md:h-[32px] w-[120px] h-[36px] py-1.5 ml-4 rounded-xl`}
              onClick={handleButtonClick}
            >
              {buttonText}
              
            </button>
            
         
        </div>
      </div>
      <Snackbar open={notLogsnack} onClose={() => setNotlogSnack(false)} autoHideDuration={5000} anchorOrigin={{ vertical: 'top', horizontal: 'center', }}>
      <Alert onClose={() => setNotlogSnack(false)} severity="error" sx={{ width: '100%' }}>
        You need to log in first.
      </Alert>
    </Snackbar>
    </section>
  );
};

const Testcards = () => {
  
  const cardData = [
    {
      title: "Find out if your feelings could be a sign of something more serious.",
      buttonText: "Start test",
      img: testcard,
      titleColor: "text-black",
      buttonBgColor: "bg-faintgray",
      imageText: "Stress Test",
      path: "/stress-test",
    },
    {
      title: "Find out if your anxiety could be a sign of something more serious.",
      buttonText: "Start test",
      img: testcard,
      titleColor: "text-black",
      buttonBgColor: "bg-faintgray",
      imageText: "Anxiety Test",
      path: "/anxiety-test",
    },
    {
      title: "If you're unsure if you are depressed, our 5-minute test can help evaluate your mood.",
      buttonText: "Start test",
      img: testcard,
      titleColor: "text-black",
      buttonBgColor: "bg-faintgray",
      imageText: "Depression Test",
      path: "/depression-test",
    },
  ];

  return (
    <section className="pt-[100px] w-[100%] h-[100%] ">
      <div className="flex flex-wrap justify-center ">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            buttonText={card.buttonText}
            img={card.img}
            titleColor={card.titleColor}
            buttonBgColor={card.buttonBgColor}
            imageText={card.imageText}
            path={card.path} 
          />
        ))}
      </div>
    </section>
  );
};

export default Testcards;