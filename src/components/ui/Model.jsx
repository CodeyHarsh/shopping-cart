import { createPortal } from "react-dom";
import "./Model.css";
function Model({ children, closeModel }) {
  return createPortal(
    <>
      <div className="modelBackdrop" onClick={()=>{
        closeModel()
      }}></div>
      <div className="modelContent">{children}</div>
    </>,
    document.getElementById("model")
  );
}

export default Model;
