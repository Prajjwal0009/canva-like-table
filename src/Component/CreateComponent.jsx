import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import Element from "./Element";
import Round1 from "../assets/round1.svg";
import Round2 from "../assets/Round2.svg";
import Round3 from "../assets/Round3.svg";
import Round4 from "../assets/Round4.svg";
import Round5 from "../assets/Round5.svg";
import Round6 from "../assets/Round6.svg";
import Round7 from "../assets/Round7.svg";
import Rect1 from "../assets/Rect1.svg";
import Rect2 from "../assets/Rect2.svg";
import Rect4 from "../assets/Rect4.svg";
import Rect5 from "../assets/Rect6.svg";
import Rect6 from "../assets/Rect8.svg";
import Rect10 from "../assets/Rect10.svg";
const CreateComponent = ({ info, current_component, removeComponent }) => {
  const randValue = Math.floor(Math.random() * 100);
  let html = "";
  if (info.name === "main_frame") {
    html = (
      <div
        onClick={() => info.setCurrentComponent(info)}
        className="relative hover:border-[2px] hover:border-indigo-500 shadow-md"
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          background: info.color,
          zIndex: info.z_index,
        }}
      >
        {info.image && (
          <img className="w-full h-full" src={info.image} alt="image" />
        )}
      </div>
    );
  }
  const [isPressing, setIsPressing] = useState(false);
  if (info.name === "shape" && info.type === "round1") {
    html = (
      <div
        id={`${randValue}R`}
        onClick={() => {
          info.setCurrentComponent(info);
          setIsPressing(true);
        }}
        // onMouseDown={() => {
        //   setIsPressing(true);
        // }}
        onMouseUp={() => setIsPressing(false)}
        onMouseLeave={() => setIsPressing(false)}
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          minHeight: "60px",
          minWidth: "55px",
          backgroundImage: `url(${Round1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: info.opacity,
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}R`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <input
          type="text"
          placeholder="1"
          className="bg-transparent flex justify-center items-center font-bold text-center w-full h-full"
        />
      </div>
    );
  }
  if (info.name === "shape" && info.type === "round2") {
    html = (
      <div
        id={`${randValue}R2`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          minHeight: "60px",
          minWidth: "55px",
          backgroundImage: `url(${Round2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: info.opacity,
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}R2`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <input
          type="text"
          placeholder="1"
          className="bg-transparent flex justify-center items-center font-bold text-center w-full h-full"
        />
      </div>
    );
  }
  if (info.name === "shape" && info.type === "round3") {
    html = (
      <div
        id={`${randValue}R3`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          minHeight: "60px",
          minWidth: "55px",
          backgroundImage: `url(${Round3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: info.opacity,
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}R3`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <input
          type="text"
          placeholder="1"
          className="bg-transparent flex justify-center items-center font-bold text-center w-full h-full"
        />
      </div>
    );
  }
  if (info.name === "shape" && info.type === "round4") {
    html = (
      <div
        id={`${randValue}R4`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          minHeight: "60px",
          minWidth: "55px",
          backgroundImage: `url(${Round4})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: info.opacity,
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}R4`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <input
          type="text"
          placeholder="1"
          className="bg-transparent flex justify-center items-center font-bold text-center w-full h-full"
        />
      </div>
    );
  }
  if (info.name === "shape" && info.type === "round5") {
    html = (
      <div
        id={`${randValue}R5`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          minHeight: "60px",
          minWidth: "55px",
          backgroundImage: `url(${Round5})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: info.opacity,
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}R5`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <input
          type="text"
          placeholder="1"
          className="bg-transparent flex justify-center items-center font-bold text-center w-full h-full"
        />
      </div>
    );
  }
  if (info.name === "shape" && info.type === "round6") {
    html = (
      <div
        id={`${randValue}R6`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          minHeight: "60px",
          minWidth: "55px",
          backgroundImage: `url(${Round6})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: info.opacity,
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}R6`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <input
          type="text"
          placeholder="1"
          className="bg-transparent flex justify-center items-center font-bold text-center w-full h-full"
        />
      </div>
    );
  }
  if (info.name === "shape" && info.type === "round7") {
    html = (
      <div
        id={`${randValue}R7`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          minHeight: "60px",
          minWidth: "55px",
          backgroundImage: `url(${Round7})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: info.opacity,
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}R7`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <input
          type="text"
          placeholder="1"
          className="bg-transparent flex justify-center items-center font-bold text-center w-full h-full"
        />
      </div>
    );
  }
  if (info.name === "shape" && info.type === "rect1") {
    html = (
      <div
        id={`${randValue}C1`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          minHeight: "60px",
          minWidth: "55px",
          backgroundImage: `url(${Rect1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: info.opacity,
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}C1`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <input
          type="text"
          placeholder="1"
          className="bg-transparent flex justify-center items-center font-bold text-center w-full h-full"
        />
      </div>
    );
  }
  if (info.name === "shape" && info.type === "rect2") {
    html = (
      <div
        id={`${randValue}C3`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          minHeight: "60px",
          minWidth: "55px",
          backgroundImage: `url(${Rect2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: info.opacity,
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}C3`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <input
          type="text"
          placeholder="1"
          className="bg-transparent flex justify-center items-center font-bold text-center w-full h-full"
        />
      </div>
    );
  }
  if (info.name === "shape" && info.type === "rect3") {
    html = (
      <div
        id={`${randValue}C4`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          minHeight: "60px",
          minWidth: "55px",
          backgroundImage: `url(${Rect4})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: info.opacity,
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}C4`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <input
          type="text"
          placeholder="1"
          className="bg-transparent flex justify-center items-center font-bold text-center w-full h-full"
        />
      </div>
    );
  }
  if (info.name === "shape" && info.type === "rect4") {
    html = (
      <div
        id={`${randValue}C5`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          minHeight: "60px",
          minWidth: "55px",
          backgroundImage: `url(${Rect5})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: info.opacity,
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}C5`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <input
          type="text"
          placeholder="1"
          className="bg-transparent flex justify-center items-center text-center font-bold w-full h-full"
        />
      </div>
    );
  }
  if (info.name === "shape" && info.type === "rect5") {
    html = (
      <div
        id={`${randValue}C6`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          minHeight: "60px",
          minWidth: "55px",
          backgroundImage: `url(${Rect6})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: info.opacity,
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}C6`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <input
          type="text"
          placeholder="1"
          className="bg-transparent flex justify-center items-center text-center font-bold w-full h-full"
        />
      </div>
    );
  }
  if (info.name === "shape" && info.type === "rect6") {
    html = (
      <div
        id={`${randValue}C7`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: `${info.width}px`,
          height: `${info.height}px`,
          minHeight: "60px",
          minWidth: "55px",
          backgroundImage: `url(${Rect10})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: info.opacity,
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}C7`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <input
          type="text"
          placeholder="1"
          className="bg-transparent flex justify-center items-center text-center w-full font-bold uppercase h-full"
        />
      </div>
    );
  }
  if (info.name === "shape" && info.type === "verticalRect") {
    html = (
      <div
        id={`${randValue}VR`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          width: `${info.width}px`,
          height: `${info.height}px`,
          background: info.color,
          opacity: info.opacity,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}VR`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <p className="text-white w-full h-full flex text-center items-center justify-center font-bold">
          B
        </p>
      </div>
    );
  }
  if (info.name === "shape" && info.type === "horizontalRect") {
    html = (
      <div
        id={`${randValue}HR`}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          width: `${info.width}px`,
          height: `${info.height}px`,
          background: info.color,
          opacity: info.opacity,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={`${randValue}HR`} info={info} exId={""} />
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
        <p className="text-white w-full h-full flex text-center items-center justify-center font-bold">
          B
        </p>
      </div>
    );
  }
  // if (info.name === "shape" && info.type === "circle") {
  //   html = (
  //     <div
  //       id={randValue}
  //       onClick={() => info.setCurrentComponent(info)}
  //       style={{
  //         left: `${info.left}px`,
  //         top: `${info.top}px`,
  //         zIndex: info.z_index,
  //         transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
  //       }}
  //       className="absolute group hover:border-[2px] hover:border-indigo-500"
  //     >
  //       <Element id={randValue} info={info} exId={`${randValue}c`} />
  //       <div
  //         id={`${randValue}c`}
  //         className="rounded-full"
  //         style={{
  //           width: `${info.width}px`,
  //           height: `${info.width}px`,
  //           background: info.color,
  //           opacity: info.opacity,
  //         }}
  //       ></div>
  //       {current_component.id === info.id && (
  //         <div
  //           onClick={() => removeComponent(info.id)}
  //           className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
  //         >
  //           <BsTrash />
  //         </div>
  //       )}
  //     </div>
  //   );
  // }
  // if (info.name === "shape" && info.type === "triangle") {
  //   html = (
  //     <div
  //       id={randValue}
  //       onClick={() => info.setCurrentComponent(info)}
  //       style={{
  //         left: `${info.left}px`,
  //         top: `${info.top}px`,
  //         zIndex: info.z_index,
  //         transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
  //       }}
  //       className="absolute group hover:border-[2px] hover:border-indigo-500"
  //     >
  //       <Element id={randValue} info={info} exId={`${randValue}t`} />
  //       <div
  //         id={`${randValue}t`}
  //         className=""
  //         style={{
  //           width: `${info.width}px`,
  //           height: `${info.height}px`,
  //           background: info.color,
  //           opacity: info.opacity,
  //           clipPath: "polygon(50% 0,100% 100%,0 100%)",
  //         }}
  //       ></div>
  //       {current_component.id === info.id && (
  //         <div
  //           onClick={() => removeComponent(info.id)}
  //           className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
  //         >
  //           <BsTrash />
  //         </div>
  //       )}
  //     </div>
  //   );
  // }
  if (info.name === "text") {
    html = (
      <div
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: `${info.left}px`,
          top: `${info.top}px`,
          zIndex: info.z_index,
          minHeight: "60px",
          minWidth: "55px",
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
          padding: `${info.padding}px`,
          color: info.color,
          opacity: info.opacity,
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        <Element id={randValue} info={info} exId="" />
        <h2
          style={{ fontSize: `${info.font}px`, fontWeight: `${info.weight}px` }}
          className="w-full h-full"
        >
          <input
            type="text"
            className="w-full h-full focus:outline-none text-sm text-bold"
            placeholder="Add Text"
          />
        </h2>
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md"
          >
            <BsTrash />
          </div>
        )}
      </div>
    );
  }

  return html;
};

export default CreateComponent;
