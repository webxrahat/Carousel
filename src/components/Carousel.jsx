import React from "react";
import img1 from "../assets/img_1.jpg";

// linear-gradient(to bottom, #87CEEB 10%, #FFFFFF 100%),

const Carousel = () => {
 return (
  <div>
   <div
    style={{
     backgroundImage: `url(${img1})`,
     backgroundSize: "cover",
     backgroundRepeat: " no-repeat",
     backgroundPosition: "center",
    }}
    className="h-[50vh] w-full relative"
   >
    <div className="absolute right-96 top-5">
     <div>
      <img src={img1} className="h-72 w-52 rounded-lg border object-cover" />
     </div>
    </div>
    <div className="absolute right-80 top-5">
     <div>
      <img src={img1} className="h-72 w-52 rounded-lg border object-cover" />
     </div>
    </div>
   </div>
  </div>
 );
};

export default Carousel;
