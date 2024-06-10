import React from "react";
import Dibtech from "../../assets/dibtech.png";
const TemplateDesign = () => {
  return (
    <>
      {[1, 2, 3, 4].map((d, i) => (
        <div className="group w-full rounded-md overflow-hidden bg-[#ffffff12] cursor-pointer">
          <img src={Dibtech} alt="" className="p-10 w-full overflow-hidden" />
        </div>
      ))}
    </>
  );
};

export default TemplateDesign;
