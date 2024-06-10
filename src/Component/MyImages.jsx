import React from "react";
import Dibtech from "../assets/dibtech.png";

const MyImages = () => {
  return (
    <div>
      <div className="w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-sm text-white mb-3">
        <label className="text-center cursor-pointer" htmlFor="image">
          Upload Image
        </label>
        <input type="file" id="image" className="hidden" />
      </div>
      <div className="h-[85vh] overflow-x-auto flex justify-start items-start">
        <div className="grid grid-cols-2 gap-2 h-full ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((img, i) => (
            <div
              key={i}
              className="w-full h-[90px] overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                className="w-full h-full object-fill "
                src={Dibtech}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyImages;
