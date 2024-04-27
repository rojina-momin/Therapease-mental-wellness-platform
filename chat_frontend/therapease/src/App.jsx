import React from 'react';
import ForgotPassword from './components/ForgotPassword';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import {  LoginPage, Register, Chatbot, Cards,  Quiz, Test, Quizpage, Testcard, AnxietyTest, DepressionTest, StressTest, WebCamTest, OTPFORM } from './components';
import Hero from './components/Hero';



function App() {
  return (

    <div>
      <Router>
        
    <Routes>
      <Route path='/otpform' element={<OTPFORM/>} />
      <Route path='/' element={<Hero/>} />
      <Route path="/Chatbot" element={<Chatbot/>} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> 
      <Route path='/Cards' element={<Cards/>}/>
      <Route path='/quiz' element={<Quiz/>} />
      <Route path='/test' element={<Test/>} />
      <Route path='/quizpage' element={<Quizpage/>} />
      <Route path='/test-card' element={<Testcard/>} />
      <Route path='/anxiety-test' element={<AnxietyTest/>} />
      <Route path='/depression-test' element={<DepressionTest/>} />
      <Route path='/stress-test' element={<StressTest/>} />
      <Route path='/webcam' element={<WebCamTest/>} />
      
    </Routes>
    
    
  </Router>
  

  
  
  </div>
  


    
  );
}

export default App;