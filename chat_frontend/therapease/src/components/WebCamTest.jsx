import React from 'react'
import Webcam from 'react-webcam';

const WebCamTest = () => {

 const videoConstraints = {
    width: 250,
    height: 140
  };

  return (
    <div className='App'>
      <div className=' '>
        <Webcam
        mirrored={true}
          videoConstraints={videoConstraints} 
        />
      </div>
    </div>
  );
}

export default WebCamTest


// // import React from 'react';
// // import Webcam from 'react-webcam';

// // const videoConstraints = {
// //   width: 220,
// //   height: 125,
// //   facingMode: "user",
// // };

// // const WebCamTest = ({ isWebCamOn }) => {
// //   // Only render the Webcam component if isWebCamOn is true
// //   return isWebCamOn ? (
// //     <div style={{
// //       position: 'fixed', // Use fixed to position it relative to the viewport
// //       right: '10px', // Right top corner
// //       top: '10px',
// //       zIndex: 100, // Ensure it's above most other content
// //     }}>
// //       <Webcam
// //         audio={false} // Assuming you only want to capture video
// //         height={videoConstraints.height}
// //         width={videoConstraints.width}
// //         videoConstraints={videoConstraints}
// //       />
// //     </div>
// //   ) : null;
// // };

// // export default WebCamTest;


// import React, { useEffect } from 'react';
// import Webcam from 'react-webcam';

// const WebCamTest = () => {

//   useEffect(() => {
//     // Request camera permission when the component mounts
//     const requestCameraPermission = async () => {
//       try {
//         // This will trigger the browser's permission request dialog
//         await navigator.mediaDevices.getUserMedia({ video: true });
//         // Permission was granted
//         console.log("Camera permission granted.");
//       } catch (error) {
//         // Permission denied or another error occurred
//         console.error("Camera permission denied:", error);
//       }
//     };

//     requestCameraPermission();
//   }, []);

//   const videoConstraints = {
//     width: 350,
//     height: 250,
//     facingMode: "user"
//   };

//   return (
//     <div className='App'>
//       <div className=' ml-[1150px] mt-[410px]'>
//         <Webcam
//           mirrored={true}
//           videoConstraints={videoConstraints} 
//         />
//       </div>
//     </div>
//   );
// }

// export default WebCamTest;
