import React, { useState } from "react";
import img1 from "../assets/img_1.jpg";
import img2 from "../assets/img_2.jpg";
import img3 from "../assets/img_3.jpg";
import img4 from "../assets/img_4.jpg";
import img5 from "../assets/img_5.jpg";

const imgLists = [
 {
  imgs: img1,
 },
 {
  imgs: img2,
 },
 {
  imgs: img3,
 },
 {
  imgs: img4,
 },
 {
  imgs: img5,
 },
];

const Slider = () => {
 const [showImg, setShowImg] = useState(0);

 return (
  <div className="flex">
   {/* {imgLists.map((photo, index) => ( */}
   <div className="max-w-6xl mx-auto mt-5">
    <div>
     <img src={imgLists.imgs[0]} alt="1" className="max-w-2xl h-[400px]" />
     <div className="mt-1">
      <button className="px-5 bg-green-500">Prev</button>
      <button className="px-5 bg-cyan-600 ml-2">Next</button>
     </div>
    </div>
   </div>
   {/* ))} */}
  </div>
 );
};

export default Slider;
