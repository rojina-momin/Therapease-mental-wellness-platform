import React, { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const Input = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message:', inputValue);
    setInputValue(''); 
  };

  return (
    <div className="flex justify-center items-center h-16 bg-white border-t px-3">
      <form onSubmit={handleSubmit} className="flex justify-between items-center w-full">
        <input
          type="text"
          placeholder="Type your message"
          className="text-[18px] focus:outline-none w-full"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">
          <PaperAirplaneIcon className="h-7 w-7 text-primary" />
        </button>
      </form>
    </div>
  );
};

export default Input;