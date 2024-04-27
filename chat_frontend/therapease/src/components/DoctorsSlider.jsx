
// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
// import { doctor1, doctor2, doctor3, doctor4 } from '../assets'; // Import images
// import { FaUserGraduate, FaBriefcase, FaLanguage } from 'react-icons/fa';

// const doctors = [
//   { id: 1, name: 'Dr. Jane Smith ', education: 'M.Phil, M.Sc', experience: '10 years', languages: ['Hindi', 'English'], img: doctor1 },
//   { id: 2, name: 'Dr.Priyanka Maravi', education: 'M.Phil, M.Sc', experience: '8 years', languages: ['English'], img: doctor2 },
//   { id: 3, name: 'Dr. Richard Roe', education: 'M.Phil, M.Sc', experience: '5 years', languages: ['Hindi', 'English'], img: doctor3 },
//   { id: 4, name: 'Dr. Emily Jones', education: 'M.Phil, M.Sc', experience: '7 years', languages: ['English'], img: doctor4 },
// ];

// // Function to split the doctors array into chunks of 2
// const chunkArray = (arr, chunkSize) => {
//   const res = [];
//   for (let i = 0; i < arr.length; i += chunkSize) {
//     const chunk = arr.slice(i, i + chunkSize);
//     res.push(chunk);
//   }
//   return res;
// };

// const DoctorsSlider = () => {
//   const [cardStyle, setCardStyle] = useState({
//     width: '150px', // Default smaller size
//     height: '100px',
//   });

//   useEffect(() => {
//     const updateCardSize = () => {
//       if (window.innerWidth >= 1024) { // LG breakpoint
//         setCardStyle({ width: '218px', height: '133px' });
//       } else {
//         setCardStyle({ width: '140px', height: '110px' });
//       }
//     };

//     window.addEventListener('resize', updateCardSize);
//     updateCardSize(); // Initial size update

//     return () => window.removeEventListener('resize', updateCardSize);
//   }, []);
//   // Split doctors array into chunks of 2
//   const doctorPairs = chunkArray(doctors, 2); 
//   return (
//     <div>
//       <h1 className='font-medium md:text-[20px] text-[15px] pt-[20px] pb-2 md:pl-[40px] pl-[20px]'>Book A Session With Our Therapist</h1>
//     <Carousel
//     showArrows={true}
//     showStatus={false}
//     showIndicators={true}
//     showThumbs={false}
//     infiniteLoop={true}
//     autoPlay={true}
//     swipeable={true}
//     emulateTouch={true}
//     className="relative"
//     itemClass="carousel-item-padding-40-px"
//   >
//     {doctorPairs.map((pair, index) => (
//       <div key={index} className="flex justify-around items-center m-4">
//         {pair.map((doctor) => (
          
//           <div key={doctor.id} className="flex flex-row items-center bg-white p-4 rounded-lg shadow-lg border border-black "style={cardStyle} >
//             <img src={doctor.img} alt={doctor.name} className="w-22 h-30 mr-2 border border-graylight  " style={{ width: '89px', height: '121px' }} />
//             <div className=''>
//                 <h3 className="text-[10px] font-medium ">{doctor.name}</h3>
//                 <p className="text-[9px]  flex items-center"><FaUserGraduate className="mr-2" />{doctor.education}</p>
//                 <p className="text-[9px] flex items-center"><FaBriefcase className="mr-2" />{doctor.experience}</p>
//                 <p className="text-[9px] flex items-center"><FaLanguage className="mr-2" />{doctor.languages.join(', ')}</p>
//               </div>
//           </div>
//         ))}
//       </div>
//     ))}
//   </Carousel>
//   </div>
// );
// };
// export default DoctorsSlider;
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { doctor1, doctor2, doctor3, doctor4 } from '../assets'; // Import images
import { FaUserGraduate, FaBriefcase, FaLanguage } from 'react-icons/fa';

const doctors = [
  { id: 1, name: 'Dr. Jane Smith', education: 'M.Phil, M.Sc', experience: '10 years', languages: ['Hindi', 'English'], img: doctor1 },
  { id: 2, name: 'Dr. Priyanka Maravi', education: 'M.Phil, M.Sc', experience: '8 years', languages: ['English'], img: doctor2 },
  { id: 3, name: 'Dr. Richard Roe', education: 'M.Phil, M.Sc', experience: '5 years', languages: ['Hindi', 'English'], img: doctor3 },
  { id: 4, name: 'Dr. Emily Jones', education: 'M.Phil, M.Sc', experience: '7 years', languages: ['English'], img: doctor4 },
];

const chunkArray = (arr, chunkSize) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

const DoctorsSlider = () => {
  const [cardStyle, setCardStyle] = useState({ width: '150px', height: '100px' }); // Default smaller card size
  const [imageStyle, setImageStyle] = useState({ width: '75px', height: '101px' }); // Default smaller image size

  useEffect(() => {
    const updateStyle = () => {
      if (window.innerWidth >= 1024) { // LG breakpoint
        setCardStyle({ width: '218px', height: '133px' });
        setImageStyle({ width: '89px', height: '121px' }); // Larger image size for LG screens
      } else {
        setCardStyle({ width: '150px', height: '100px' });
        setImageStyle({ width: '55px', height: '81px' }); // Default smaller image size
      }
    };

    window.addEventListener('resize', updateStyle);
    updateStyle(); // Initial size update

    return () => window.removeEventListener('resize', updateStyle);
  }, []);

  const doctorPairs = chunkArray(doctors, 2);

  return (
    <div>
      <h1 className='font-medium md:text-[20px] text-[15px] pt-[20px] pb-2 md:pl-[40px] pl-[20px]'>Book A Session With Our Therapist</h1>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        swipeable={true}
        emulateTouch={true}
        className="relative"
        itemClass="carousel-item-padding-40-px"
      >
        {doctorPairs.map((pair, index) => (
          <div key={index} className="flex justify-around items-center m-4">
            {pair.map((doctor) => (
              <div key={doctor.id} className="flex flex-row items-center bg-white p-4 rounded-lg shadow-lg border border-black" style={cardStyle}>
                <img src={doctor.img} alt={doctor.name} className="w-22 h-30 mr-2 border border-graylight" style={imageStyle} />
                <div>
                  <h3 className="md:text-[10px] text-[9px] font-medium">{doctor.name}</h3>
                  <p className="text-[8px] flex items-center"><FaUserGraduate className="mr-2"/>{doctor.education}</p>
                  <p className="text-[9px] flex items-center"><FaBriefcase className="mr-2"/>{doctor.experience}</p>
                  <p className="text-[9px] flex items-center"><FaLanguage className="mr-2"/>{doctor.languages.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DoctorsSlider;
