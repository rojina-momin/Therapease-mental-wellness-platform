
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

const Chats = () => {
  return (
      <div>
          <FromBot message="Hello, this is Alexa, How may I help you" />
          <FromBot message="Before getting, can you please provide your name? " />
          <Reply message="Vicky Rao" />
          <FromBot message="What is your email id?" />
          <Reply message="vicky45@gmail.com" />
          <FromBot message="What is your mobile number?" />
          <Reply message="1234567891" />
          <FromBot message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed, vitae a fugit architecto repellat qui dolores beatae at sequi ipsum! Doloribus temporibus cum, eius repellendus veritatis labore eos sapiente!" />
          <Reply message="what is stress" />
          <FromBot message="How may I help you?" />
          <Reply message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed, vitae a fugit architecto repellat qui dolores beatae at sequi ipsum! Doloribus temporibus cum, eius repellendus veritatis labore eos sapiente!" />
      </div>
  );
};

export default Chats

