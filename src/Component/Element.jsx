import React from "react";
import Rotate from "../assets/reverse.svg";
const Element = ({ id, info, exId }) => {
  return (
    <>
      {exId ? (
        <>
          <div
            onMouseDown={() => info.resizeElement(exId, info)}
            className="hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[9999]"
          ></div>
          <div
            onMouseDown={() => info.resizeElement(exId, info)}
            className="hidden absolute group-hover:block -top-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[9999]"
          ></div>
          <div
            onMouseDown={() => info.resizeElement(exId, info)}
            className="hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[9999]"
          ></div>
          <div
            onMouseDown={() => info.resizeElement(exId, info)}
            className="hidden absolute group-hover:block -top-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[9999]"
          ></div>
        </>
      ) : (
        <>
          <div
            onMouseDown={() => info.resizeElement(id, info)}
            className="hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[9999]"
          ></div>
          <div
            onMouseDown={() => info.resizeElement(id, info)}
            className="hidden absolute group-hover:block -top-[3px] -right-[3px] w-[10px] h-[10px] cursor-nesw-resize bg-green-500 z-[9999]"
          ></div>
          <div
            onMouseDown={() => info.resizeElement(id, info)}
            className="hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-[10px] h-[10px] cursor-nesw-resize bg-green-500 z-[9999]"
          ></div>
          <div
            onMouseDown={() => info.resizeElement(id, info)}
            className="hidden absolute group-hover:block -top-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[9999]"
          ></div>
        </>
      )}

      <div
        onMouseDown={() => info.moveElement(id, info)}
        className="hidden absolute group-hover:block -top-[3px] left-[50%] translate-[-50%,0%] w-[10px] h-[10px] cursor-move bg-green-500 z-[9999]"
      ></div>
      <img
        src={Rotate}
        alt=""
        onMouseDown={() => info.rotateElement(id, info)}
        className="absolute -top-[15px] left-[45%] translate-[-50%,0%] w-[9px] h-[9px] cursor-alias w-[50px] h-[50px] fa-repeat z-[9999]"
      />
      <div></div>
    </>
  );
};

export default Element;
