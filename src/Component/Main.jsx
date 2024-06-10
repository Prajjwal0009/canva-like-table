import React, { useEffect, useState } from "react";
import { BsGrid1X2, BsFillImageFill, BsFolder } from "react-icons/bs";
import { FaShapes, FaCloudUploadAlt } from "react-icons/fa";
import { TfiText } from "react-icons/tfi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import TemplateDesign from "./main/TemplateDesign";
import MyImages from "./MyImages";
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

import CreateComponent from "./CreateComponent";

const Main = () => {
  const [state, setState] = useState("");
  const [currentComponent, setCurrentComponent] = useState("");
  const [rotate, setRotate] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [left, setLeft] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [top, setTop] = useState("");
  const [padding, setPadding] = useState("");
  const [font, setFont] = useState("");
  const [weight, setWeight] = useState("");

  const [show, setShow] = useState({
    status: true,
    name: "",
  });
  const setElement = (type, name) => {
    setState(type);
    setShow({
      state: false,
      name,
    });
  };
  const moveElement = (id, currentInfo) => {
    setCurrentComponent(currentInfo);
    let isMoving = true;
    const currentDiv = document.getElementById(id);
    const mouseMove = ({ movementX, movementY }) => {
      const getStyle = window.getComputedStyle(currentDiv);
      const left = parseInt(getStyle.left);
      const top = parseInt(getStyle.top);
      if (isMoving) {
        currentDiv.style.left = `${left + movementX}px`;
        currentDiv.style.top = `${top + movementY}px`;
      }
    };
    const mouseUp = () => {
      isMoving = false;
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      setLeft(parseInt(currentDiv.style.left));
      setTop(parseInt(currentDiv.style.top));
    };
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };
  const resizeElement = (id, currentInfo) => {
    setCurrentComponent(currentInfo);
    let isMoving = true;
    const currentDiv = document.getElementById(id);
    const mouseMove = ({ movementX, movementY }) => {
      const getStyle = window.getComputedStyle(currentDiv);
      const width = parseInt(getStyle.width);
      const height = parseInt(getStyle.height);
      if (isMoving) {
        currentDiv.style.width = `${width + movementX}px`;
        currentDiv.style.height = `${height + movementY}px`;
      }
    };
    const mouseUp = () => {
      isMoving = false;
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      setWidth(parseInt(currentDiv.style.width));
      setHeight(parseInt(currentDiv.style.height));
    };
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };
  const rotateElement = (id, currentInfo) => {
    setCurrentComponent("");
    setCurrentComponent(currentInfo);
    const target = document.getElementById(id);
    const mouseMove = ({ movementX, movementY }) => {
      const getStyle = window.getComputedStyle(target);
      const trans = getStyle.transform;
      const values = trans.split("(")[1].split(")")[0].split(",");
      const angle = Math.round(
        Math.atan2(values[1], values[0]) * (180 / Math.PI)
      );
      let deg = angle < 0 ? angle + 360 : angle;
      if (movementX) {
        deg = deg + movementX;
      }
      target.style.transform = `rotate(${deg}deg)`;
      setRotate(deg);
    };
    const mouseUp = (e) => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      const getStyle = window.getComputedStyle(target);
      const trans = getStyle.transform;
      const values = trans.split("(")[1].split(")")[0].split(",");
      const angle = Math.round(
        Math.atan2(values[1], values[0]) * (180 / Math.PI)
      );
      let deg = angle < 0 ? angle + 360 : angle;
      setRotate(deg);
    };
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };
  const removeComponent = (id) => {
    const temp = components.filter((c) => c.id !== id);
    setCurrentComponent("");
    setComponents(temp);
  };
  const remove_background = () => {
    const com = components.find((c) => c.id === currentComponent.id);
    const temp = components.filter((c) => c.id !== currentComponent.id);
    com.image = "";
    setImage("");
    setComponents([...temp, com]);
  };
  const [components, setComponents] = useState([
    {
      name: "main_frame",
      type: "rect",
      id: Math.floor(Math.random() * 100 + 1),
      height: 450,
      width: 650,
      z_index: 1,
      color: "#fff",
      image: "",
      setCurrentComponent: (a) => setCurrentComponent(a),
    },
  ]);
  const createShape = (name, type) => {
    const style = {
      id: components.length + 1,
      name: name,
      type,
      left: 10,
      top: 10,
      opacity: 1,
      width: type === "verticalRect" ? 16 : 200,
      height: type === "horizontalRect" ? 16 : 150,
      rotate,
      z_index: 2,
      color: "#3c3c3d",
      setCurrentComponent: (a) => setCurrentComponent(a),
      moveElement,
      resizeElement,
      rotateElement,
    };
    setComponents([...components, style]);
  };
  const addText = (name, type) => {
    const style = {
      id: components.length + 1,
      name: name,
      type,
      left: 10,
      top: 10,
      opacity: 1,
      width: 200,
      height: 150,
      rotate,
      z_index: 10,
      padding: 6,
      font: 22,
      title: "Add Text",
      weight: 400,
      color: "#3c3c3d",
      setCurrentComponent: (a) => setCurrentComponent(a),
      moveElement,
      resizeElement,
      rotateElement,
    };
    setWeight("");
    setFont("");
    setCurrentComponent(style);
    setComponents([...components, style]);
  };
  useEffect(() => {
    if (currentComponent) {
      const index = components.findIndex((c) => c.id === currentComponent.id);
      const temp = components.filter((c) => c.id !== currentComponent.id);
      if (currentComponent.name !== "text") {
        components[index].width = width || currentComponent.width;
        components[index].height = height || currentComponent.height;
        components[index].rotate = rotate || currentComponent.rotate;
      }
      if (currentComponent.name === "main_frame" && image) {
        components[index].image = image || currentComponent.image;
      }
      components[index].color = color || currentComponent.color;
      if (currentComponent !== "main_frame") {
        components[index].left = left || currentComponent.left;
        components[index].top = top || currentComponent.top;
        components[index].rotate = rotate || currentComponent.rotate;
      }
      setComponents([...temp, components[index]]);
      setHeight("");
      setWidth("");
      setTop("");
      setLeft("");
      setRotate(0);
    }
  }, [color, image, left, top, width, height, rotate]);

  return (
    <div className="min-w-screen h-screen bg-black z-1">
      <div className="flex h-[calc(100%-60px)] w-screen">
        <div className="w-[80px] bg-[#18191B] p-5 z-50 h-screen text-gray-400 overflow-y-auto">
          <div
            onClick={() => setElement("design", "design")}
            className={`${
              show.name === "design" ? "bg-[-#252627]" : ""
            } w-full h-[80px] cursor-pointer flex  justify-center flex-col item-center gap-1 hover:text-gray-100`}
          >
            <span className="text-2xl">
              <BsGrid1X2 />
            </span>
            <span className="text-xs font-medium"> Design</span>
          </div>
          <div
            onClick={() => setElement("shape", "shape")}
            className={`${
              show.name === "shape" ? "bg-[-#252627]" : ""
            } w-full h-[80px] cursor-pointer flex  justify-center flex-col item-center gap-1 hover:text-gray-100`}
          >
            <span className="text-2xl">
              <FaShapes />
            </span>
            <span className="text-xs font-medium"> Shapes</span>
          </div>
          <div
            onClick={() => setElement("image", "uploadImage")}
            className={`${
              show.name === "uploadImage" ? "bg-[-#252627]" : ""
            } w-full h-[80px] cursor-pointer flex  justify-center flex-col item-center gap-1 hover:text-gray-100`}
          >
            <span className="text-2xl">
              <FaCloudUploadAlt />
            </span>
            <span className="text-xs font-medium"> Upload</span>
          </div>
          <div
            onClick={() => setElement("project", "projects")}
            className={`${
              show.name === "projects" ? "bg-[-#252627]" : ""
            } w-full h-[80px] cursor-pointer flex  justify-center flex-col item-center gap-1 hover:text-gray-100`}
          >
            <span className="text-2xl">
              <BsFolder />
            </span>
            <span className="text-xs font-medium"> Project</span>
          </div>
          <div
            onClick={() => setElement("text", "text")}
            className={`${
              show.name === "text" ? "bg-[-#252627]" : ""
            } w-full h-[80px] cursor-pointer flex  justify-center flex-col item-center gap-1 hover:text-gray-100`}
          >
            <span className="text-2xl">
              <TfiText />
            </span>
            <span className="text-xs font-medium"> Text</span>
          </div>
        </div>
        <div className="h-full w-[calc(100%-75px)]">
          <div
            className={`${
              show.status ? "p-0 -left-[350px]" : "px-8 left-[75px] py-5"
            } bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}
          >
            <div
              onClick={() => setShow({ name: "", status: true })}
              className="flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px]"
            >
              <MdKeyboardArrowLeft />
            </div>
            {state === "design" && (
              <div>
                <div className="grid grid-cols-2 gap-2">
                  <TemplateDesign />
                </div>
              </div>
            )}
            {state === "shape" && (
              <div className="grid grid-cols-4 gap-y-10">
                <img
                  src={Round1}
                  alt=""
                  onClick={() => createShape("shape", "round1")}
                  className="h-[60px] w-[60px] bg-[#3c3c3d] cursor-pointer p-2"
                />
                <img
                  src={Round2}
                  alt=""
                  onClick={() => createShape("shape", "round2")}
                  className="h-[60px] w-[60px] bg-[#3c3c3d] cursor-pointer p-2"
                />
                <img
                  src={Round3}
                  alt=""
                  onClick={() => createShape("shape", "round3")}
                  className="h-[60px] w-[60px] bg-[#3c3c3d] cursor-pointer p-2"
                />
                <img
                  src={Round4}
                  alt=""
                  onClick={() => createShape("shape", "round4")}
                  className="h-[60px] w-[60px] bg-[#3c3c3d] cursor-pointer p-2"
                />
                <img
                  src={Round5}
                  alt=""
                  onClick={() => createShape("shape", "round5")}
                  className="h-[60px] w-[60px] bg-[#3c3c3d] cursor-pointer p-2"
                />
                <img
                  src={Round6}
                  alt=""
                  onClick={() => createShape("shape", "round6")}
                  className="h-[60px] w-[60px] bg-[#3c3c3d] cursor-pointer p-2"
                />
                <img
                  src={Round7}
                  alt=""
                  onClick={() => createShape("shape", "round7")}
                  className="h-[60px] w-[60px] bg-[#3c3c3d] cursor-pointer p-2"
                />
                <img
                  src={Rect1}
                  alt=""
                  onClick={() => createShape("shape", "rect1")}
                  className="h-[60px] w-[60px] bg-[#3c3c3d] cursor-pointer p-2"
                />
                <img
                  src={Rect2}
                  alt=""
                  onClick={() => createShape("shape", "rect2")}
                  className="h-[60px] w-[60px] bg-[#3c3c3d] cursor-pointer p-2"
                />
                <img
                  src={Rect4}
                  alt=""
                  onClick={() => createShape("shape", "rect3")}
                  className="h-[60px] w-[60px] bg-[#3c3c3d] cursor-pointer p-2"
                />
                <img
                  src={Rect5}
                  alt=""
                  onClick={() => createShape("shape", "rect4")}
                  className="h-[60px] w-[60px] bg-[#3c3c3d] cursor-pointer p-2"
                />
                <img
                  src={Rect6}
                  alt=""
                  onClick={() => createShape("shape", "rect5")}
                  className="h-[60px] w-[60px] bg-[#3c3c3d] cursor-pointer p-2"
                />
                <img
                  src={Rect10}
                  alt=""
                  onClick={() => createShape("shape", "rect6")}
                  className="h-[60px] w-[60px] bg-[#3c3c3d] cursor-pointer p-2"
                />
                <div
                  onClick={() => createShape("shape", "verticalRect")}
                  className="h-[60px] w-[10px] bg-[#3c3c3d] cursor-pointer ml-8"
                ></div>
                <div
                  onClick={() => createShape("shape", "horizontalRect")}
                  className="h-[10px] w-[60px] bg-[#3c3c3d] cursor-pointer ml-8 mt-6"
                ></div>
                {/* <div
                  onClick={() => createShape("shape", "circle")}
                  className="h-[90px] w-[90px] bg-[#3c3c3d] cursor-pointer rounded-full"
                ></div>
                <div
                  style={{ clipPath: "polygon(50% 0,100% 100%,0 100%)" }}
                  onClick={() => createShape("shape", "triangle")}
                  className="h-[90px] w-[90px] bg-[#3c3c3d] cursor-pointer"
                ></div> */}
              </div>
            )}
            {state === "image" && <MyImages />}
            {state === "project" && <div>project</div>}
            {state === "text" && (
              <div>
                <div className="grid grid-cols-1 gap-2">
                  <div
                    onClick={() => addText("text", "title")}
                    className="bg-[#3c3c3d] cursor-pointer font-bold p-3 text-white text-xl rounded-sm"
                  >
                    <h2>Add a Text</h2>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full h-full flex">
            <div
              className={`flex justify-center items-center relative h-full ${
                !currentComponent
                  ? "w-full"
                  : "w-[calc(100%-250px)] overflow-hidden"
              }`}
            >
              <div className="max-w-[650px] max-h-[480px] flex justify-center items-center overflow-hidden">
                <div
                  id="main_design"
                  className="w-auto relative h-auto overflow-hidden"
                >
                  {components.map((c, i) => (
                    <CreateComponent
                      key={i}
                      info={c}
                      current_component={currentComponent}
                      removeComponent={removeComponent}
                    />
                  ))}
                </div>
              </div>
            </div>
            {currentComponent && (
              <div className="h-screen w-[250px] text-gray-300 bg-[#252627] px-3 py-2">
                <div className="flex gap-3 flex-col items-start h-full px-3 justify-start">
                  <div className="flex gap-4 justify-start items-start">
                    <span>Color:</span>
                    <label
                      className="w-[30px] h-[30px] cursor-pointer"
                      style={{
                        background: `${
                          currentComponent.color &&
                          currentComponent.color !== "#fff"
                            ? currentComponent.color
                            : "gray"
                        }`,
                      }}
                      htmlFor="color"
                    ></label>
                    <input
                      onChange={(e) => setColor(e.target.value)}
                      type="color"
                      className="invisible"
                      id="color"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
