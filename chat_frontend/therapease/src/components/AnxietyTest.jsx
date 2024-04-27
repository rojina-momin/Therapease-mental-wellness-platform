import React, { useState } from 'react';
import { logo } from '../assets';
import { questions } from "../constants";
import { Link } from 'react-router-dom';
import AnxietyResult from './AnxietyResult';
// import WebCamTest from './WebCamTest';
import { useSelector } from "react-redux";


const AnxietyTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [anxietyLevel, setAnxietyLevel] = useState('');
  const [anxietySnack, setAnxietySnack] = useState(false);
  const details = useSelector((state) => state.cred.details);
  const token = details.token
  const id = details.user_id
  let question_1=0;
  let question_2=0;
  let question_3=0;
  let question_4=0;
  let question_5=0;
  let question_6=0;
  let question_7=0;

  const  calculateScore = (formData) => {
    
    const optionScores = {
      'Not at all': 0,
      'Several days': 1,
      'More than half a day': 2,
      'Nearly every day': 3,
    };

    let score = 0;
    let test = 0; 
    for (const questionId in formData) {
      test = optionScores[formData[questionId]]
      if (questionId==1){
        question_1=test
      }else if(questionId==2){
        question_2=test
      }else if(questionId==3){
        question_3=test
      }else if(questionId==4){
        question_4=test
      }else if(questionId==5){
        question_5=test
      }else if(questionId==6){
        question_6=test
      }else if(questionId==7){
        question_7=test
      }
      score += optionScores[formData[questionId]];
      
    }
    return score;
  };

  
  const categorizeAnxietyLevel = (score) => {
    if (score >= 0 && score <= 4) {
      return 'Minimal anxiety';
    } else if (score >= 5 && score <= 9) {
      return 'Mild anxiety';
    } else if (score >= 10 && score <= 14) {
      return 'Moderate anxiety';
    } else if (score >= 15 && score <= 21) {
      return 'Severe anxiety';
    } else {
      return 'Invalid score';
    }
  };


  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  
  const handleOptionSelect = (option) => {
    const updatedFormData = { ...formData, [questions[currentQuestion].id]: option };
    console.log(`Question ${currentQuestion + 1} Answer: ${option}`);
    // Directly use the updated form data for the last question
    if (currentQuestion === questions.length - 1) {
        handleFinish(updatedFormData); // Pass the updated data for final calculation
    } else {
        setFormData(updatedFormData);
        handleNextQuestion();
    }
};
const handleFinish = (finalFormData = formData) => {
  // Calculate the score using the provided form data or the current state
  const score = calculateScore(finalFormData);
  const anxietyLevel = categorizeAnxietyLevel(score);

  console.log('Quiz completed with formData:', finalFormData);
  console.log('Score:', score);
  console.log('Anxiety Level:', anxietyLevel);

  setAnxietyLevel(anxietyLevel);
  setShowResult(true);


  const handleButtonClick = () => {
    const URL = 'http://127.0.0.1:8000/mental_tests/anxiety/';
    const authToken = token; 
  
    const requestBody = {
      result: anxietyLevel,
      total: score,
      question_1: question_1,
      question_2: question_2,
      question_3: question_3,
      question_4: question_4,
      question_5: question_5,
      question_6: question_6,
      question_7: question_7,
      user_id: id
    };
  
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': ` Token ${authToken}`, 
      },
      body: JSON.stringify(requestBody), 
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data here
        console.log(data);
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
      setAnxietySnack(true)
      console.log("SNAKKKKKKKK");
  
  };
  // Update the formData state if necessary
  // This ensures the state is updated even if the last question's data was passed directly
  if (finalFormData !== formData) {
      setFormData(finalFormData);
      handleButtonClick();

  }
};




  if (showResult) {
    return (
      <AnxietyResult
      anxietyLevel={anxietyLevel}
      formData={formData}
      calculateScore={calculateScore}
    />
  );
  }

  return (
    <div>
         {/* Conditionally render WebCamTest only if showResult is false */}
    {!showResult && (
      <div className="absolute top-0 right-0 mr-[20px] mt-[100px] z-50">
        {/* <WebCamTest /> */}
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


export default AnxietyTest