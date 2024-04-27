// import axios from 'axios';
// import React from 'react';
import React, { useEffect, useRef } from 'react';


const FromBot = ({ message }) => {
  const isLongMessage = message.split(' ').length > 10;
  return (
     <div className="w-full mb-2">
       <div className={` py-1 pl-2 ${isLongMessage ? 'w-6/12 float-left' : 'float-left'}`}>
          <div className="sm:text-[18px] text-red pl-1">EASEBOT</div>
          <div className="bg-gray2 text-black text-[16px] p-2 rounded-lg rounded-bl-sm"> {message} </div>
      </div>
      <div className="clear-left"></div>
     </div>
  );
};

const Reply = ({ message }) => {
  const isLongMessage = message.split(' ').length > 10;
  return (
      <div className="w-full">
          <div className={`ml-1/2 py-1 pr-2 ${isLongMessage ? 'w-6/12 float-right' : 'float-right'}`}>
              <div className="text-[18px] text-red pl-1 text-right">USER</div>
              <div className=" text-[16px] p-2 bg-white2 text-black rounded-lg rounded-br-sm"> {message} </div>
          </div>
          <div className="clear-right"></div>
      </div>
  )
};


// const Chats = ({ chatHistory }) => {
//   Chats.defaultProps = {
//     chatHistory: []
//   };
//   return (
//     <div className="w-full" style={{ maxHeight: '100vh', overflowY: 'auto' }}> 
//       { 
//         chatHistory.map((message, index) => (
//           <div key={index} className={message.userBool ? 'user-message' : 'bot-message'}>
//             {message.userBool ? (
//               <Reply message={message.user} />
//             ) : (
//               <FromBot message={message.bot} />
//             )}
//           </div>
//         ))
//       }
//     </div>
//   );
// };
// export default Chats

const Chats = ({ chatHistory }) => {
  Chats.defaultProps = {
    chatHistory: []
  };
  
  // Use a ref to reference the chat container
  const chatContainerRef = useRef(null);
  
  useEffect(() => {
    if (chatContainerRef.current) {
      // Optional: Scroll to bottom on initial load or when chatHistory changes
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]); // Re-run when chatHistory changes

  return (
    <div ref={chatContainerRef} className="w-full" style={{ maxHeight: '100vh', overflowY: 'auto', paddingTop: '120px' }}> 
      
      {chatHistory.map((message, index) => (
        <div key={index} className={message.userBool ? 'user-message' : 'bot-message'}>
          {message.userBool ? (
            <Reply message={message.user} />
          ) : (
            <FromBot message={message.bot} />
          )}
        </div>
      ))}
    </div>
  );
};
export default Chats