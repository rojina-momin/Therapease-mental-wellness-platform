import React, { useState } from 'react';
import { logo } from '../assets';
import { stressquestions } from "../constants";
import { Link } from 'react-router-dom';
import StressResult from './StressResult';
import WebCamTest from './WebCamTest';


const StressTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [stressLevel, setStressLevel] = useState('');

 

  const  calculateScore = (formData) => {
    
    const optionScores = {
      'Almost': 0,
      'Sometimes': 1,
      'Often': 2,
      'Usually': 3,
    };

    let score = 0;
    for (const questionId in formData) {
      score += optionScores[formData[questionId]];
      
    }
    return score;
  };

  const categorizeStressLevel = (score) => {
    // index=(score-30)/90
    if (score >= 0 && score <= 40) {
      return 'Low Stress';
    } else if (score >= 41 && score <= 80) {
      return 'Moderate Stress';
    } else if (score >= 81 && score <= 120) {
      return 'High Stress';
    } 
  };


  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  
  
  const handleOptionSelect = (option) => {
    const updatedFormData = { ...formData, [stressquestions[currentQuestion].id]: option };
    console.log(`Question ${currentQuestion + 1} Answer: ${option}`);
    // Directly use the updated form data for the last question
    if (currentQuestion === stressquestions.length - 1) {
        handleFinish(updatedFormData); // Pass the updated data for final calculation
    } else {
        setFormData(updatedFormData);
        handleNextQuestion();
    }
};
const handleFinish = (finalFormData = formData) => {
  // Calculate the score using the provided form data or the current state
  const score = calculateScore(finalFormData);
  const stressLevel = categorizeStressLevel(score);

  console.log('Quiz completed with formData:', finalFormData);
  console.log('Score:', score);
  console.log('Stress Level:', stressLevel);

  setStressLevel(stressLevel);
  setShowResult(true);

  // Update the formData state if necessary
  // This ensures the state is updated even if the last question's data was passed directly
  if (finalFormData !== formData) {
      setFormData(finalFormData);
  }
};



  if (showResult) {
    return (
      <StressResult
      stressLevel={stressLevel}
      formData={formData}
      calculateScore={calculateScore}
    />
  );
  }
  return (
    <div>
         {/* Conditionally render WebCamTest only if showResult is false */}
    {!showResult && (
      <div className="absolute top-0 right-0 mr-[5px] mt-[80px] z-50">
        <WebCamTest />
      </div>
    )}
        <div className='bg-primary inset-0 flex items-center justify-between px-4 pt-[80px] bg-gradient-to-r from-primary via-olive to-yellow '>
        <Link to="/"><img src={logo} className="absolute left-0 md:ml-[51px] ml-[20px] top-2 mt-[8px] h-[60px] w-[60px] "/></Link>
        
        </div>
       <div className="flex items-center justify-center h-full mt-[3%]">
        <div className="  mt-8 p-4 items-center justify-center  ">
        <div className="text-xl font-semibold  mb-4 flex items-center justify-center">
      <span className=" bg-gray-300 text-olive rounded-full w-8 h-8 flex items-center justify-center border-2 border-yellowlight">
        {currentQuestion + 1}
      </span>
    </div>
    <p className='font-semibold items-center justify-center md:mx-[260px] mx-8 md:text-[32px] text-[28px] mb-12'>{stressquestions[currentQuestion].question}</p>

    <div className="max-w-sm md:mx-auto mx-8 border rounded-[10px] shadow-lg mt-4">
      {stressquestions[currentQuestion].options.map((option, index) => (
        <div key={index} className="hover:bg-olive">
          <div
            onClick={() => handleOptionSelect(option)}
            className="text-black py-2 px-4 rounded"
          >
            {option}
          </div>
          {index !== stressquestions[currentQuestion].options.length - 1 && (
            <hr className="border-t border-gray-300" />
          )}
        </div>
      ))}
    </div>
    
  </div>
</div>

</div>



  );
};




export default StressTest