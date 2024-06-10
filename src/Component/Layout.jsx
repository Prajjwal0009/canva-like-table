import { useRef } from "react";
import { useLocation } from "react-router-dom";
import CreateComponent from "./CreateComponent";

const Layout = () => {
  const ref = useRef();
  const { state } = useLocation();

  // Check if state exists and contains height and width properties
  const height = state?.height ?? 600; // default to 300 if height is undefined
  const width = state?.width ?? 600; // default to 300 if width is undefined

  const obj = {
    name: "main_frame",
    type: "rect",
    id: Math.floor(Math.random() * 100 + 1),
    height: height,
    width: width,
    z_index: 1,
    color: "green",
    image: "",
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <div ref={ref} className="relative w-auto h-auto overflow-auto">
        <CreateComponent info={obj} current_component={{}} />
      </div>
    </div>
  );
};

export default Layout;
