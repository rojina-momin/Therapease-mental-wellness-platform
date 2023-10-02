import React, { useState } from 'react';
import { logo, resultpink, resultyellow } from '../assets';
import { questions } from "../constants";
import Result from './Result';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinish = () => {
    // Calculate and display the score based on formData
    const score = calculateScore(formData);
    console.log('Quiz completed with formData:', formData);
    // console.log('Score:', score);
    setShowResult(true);
  };

  const handleOptionSelect = (option) => {
    setFormData({ ...formData, [questions[currentQuestion].id]: option });
    console.log(`Question ${currentQuestion + 1} Answer: ${option}`);
    if (currentQuestion === questions.length - 1) {
      handleFinish();
    } else {
      handleNextQuestion();
    }
  };

  if (showResult) {
    return (
    <div className='relative '>
       <img src={resultpink} className='absolute right-0 top-0 mt-[-18px]  object-cover hidden md:flex' />
       <Link to="/"><img src={logo} className='md:ml-[51px] mt-[18px]  ml-[20px] top-2 h-[60px] w-[60px]'/></Link>

  <div className="md:w-[350px] w-[300px] h-[300px] md:h-[300px] h- mx-auto items-center justify-center flex flex-col md:mt-[10%] mt-[10%] p-4 rounded-[15px] shadow-xl">
    <h2 className="text-[40px] font-bold text-faintgray mb-4">Thank You!</h2>
    <p className='text-[28px] text-faintgray'>For giving the test</p>
    <p className='text-[28px] text-red font-semibold'>Your score: {calculateScore(formData)}</p>
  </div>

      <img src={resultyellow} className=' bottom-0 left-0  object-cover hidden md:flex' alt="" />
  </div>
    );
  }

  return (
    <div>
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
    <p className='font-semibold items-center justify-center mx-8 text-[32px] mb-12'>{questions[currentQuestion].question}</p>

    <div className="max-w-sm md:mx-auto mx-8 border rounded-[10px] shadow-lg mt-4">
      {questions[currentQuestion].options.map((option, index) => (
        <div key={index} className="hover:bg-olive">
          <div
            onClick={() => handleOptionSelect(option)}
            className="text-black py-2 px-4 rounded"
          >
            {option}
          </div>
          {index !== questions[currentQuestion].options.length - 1 && (
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

// Implement your score calculation function here
const calculateScore = (formData) => {
  // Calculate the score based on user responses
  // Example: Count the number of times 'More than half a day' was selected
  let score = 0;
  for (const questionId in formData) {
    if (formData[questionId] === 'More than half a day') {
      score++;
    }
  }
  return score;
  
};

export default Quiz;