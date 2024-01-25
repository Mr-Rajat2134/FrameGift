




// // CustomerFeedbackSlider.js

// import React from "react";
// // import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Customers } from "../../Data";
// import "swiper/swiper-bundle.css";
// import './CustomerssSlider.css'
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import { Customers } from "./path-to-your-data-file"; // Replace with the correct path to your data file

// // SwiperCore.use([Navigation, Pagination, Autoplay]);
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// const CustomerFeedbackSlider = () => {
//   return (
//     <Swiper
//       spaceBetween={20}
//       slidesPerView={3}
//     //   navigation
//     //   pagination={{ clickable: true }}
//       autoplay={{ delay: 3000 }}



//       modules={[Autoplay, Pagination, Navigation]}
     
//     >
//       {Customers.map((customer) => (
//         <SwiperSlide key={customer.id}>
//           <div className="customerFeedbackCard">
//             {/* Add your card content here */}
//             <div className="customerRating">
//               {Array.from({ length: Number(customer.Rating) }).map((_, index) => (
//                 <span key={index} className="star">★</span>
//               ))}
//             </div>
//             <div className="customerName">{customer.Name}</div>
//             <div className="customerComments">{customer.Comments}</div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default CustomerFeedbackSlider;










// CustomerFeedbackSlider.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Customers } from "../../Data";
import "swiper/swiper-bundle.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';  // Add import for autoplay CSS
import './CustomerssSlider.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CustomerFeedbackSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      }}
    >
      {Customers.map((customer) => (
        <SwiperSlide key={customer.id}>
          <div className="customerFeedbackCard">
            {/* Add your card content here */}
            <div className="customerRating">
              {Array.from({ length: Number(customer.Rating) }).map((_, index) => (
                <span key={index} className="star">★</span>
              ))}
            </div>
            <div className="customerName">{customer.Name}</div>
            <div className="customerComments">{customer.Comments}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomerFeedbackSlider;








