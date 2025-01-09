import React from 'react';

const DailyRoutine = () => {
  return (
    <div className='w-full h-full bg-gray-50 p-8'>
      <div className='w-full text-center mb-6'>
        <h1 className='text-4xl font-bold text-gray-800'>My Daily Routine</h1>
        <p className='text-lg text-gray-600 mt-2'>
          Manage your daily tasks effectively and stay productive.
        </p>
      </div>

      {/* <div className='w-full flex flex-col items-center space-y-4'>
        <div className='w-3/4 bg-white p-6 rounded-lg shadow-lg flex justify-between items-center'>
          <div className='text-lg font-medium text-gray-800'>
            WAKE UP AT 6:00 AM
          </div>
          <div className='flex space-x-3'>
            <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200'>
              Finish
            </button>
            <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200'>
              Not Finish
            </button>
          </div>
        </div>

        <div className='w-3/4 bg-white p-6 rounded-lg shadow-lg flex justify-between items-center'>
          <div className='text-lg font-medium text-gray-800'>
            READING TWO PAGES DAILY
          </div>
          <div className='flex space-x-3'>
            <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200'>
              Finish
            </button>
            <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200'>
              Not Finish
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DailyRoutine;


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Import your images
// import image1 from '../../assets/img1.jpeg';
// import image2 from '../../assets/img2.jpeg';
// import image3 from '../../assets/img3.jpeg';

// const ImageSlider = () => {
//   const images = [image1, image2, image3];

//   return (
//     <div className="w-full">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]} // Add the required Swiper modules
//         spaceBetween={30}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-[400px] object-cover"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ImageSlider;
