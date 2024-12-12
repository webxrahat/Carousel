import React, { useState } from "react";
import img1 from "../assets/img_1.jpg";
import img2 from "../assets/img_2.jpg";
import img3 from "../assets/img_3.jpg";
import img4 from "../assets/img_4.jpg";
import img5 from "../assets/img_5.jpg";

const imgLists = [img1, img2, img3, img4, img5];

const Slider = () => {
 const [showImg, setShowImg] = useState(0);

 return (
  <div className="flex">
   <div className="max-w-6xl mx-auto mt-5">
    <div>
     <img src={imgLists[showImg]} alt="1" className="max-w-2xl h-[400px]" />
    </div>
    <div className="mt-1">
     <button
      onClick={() => console.log(setShowImg(showImg + 1))}
      className="px-5 bg-green-500"
     >
      Prev
     </button>
     <button className="px-5 bg-cyan-600 ml-2">Next</button>
    </div>
   </div>
  </div>
 );
};

export default Slider;
