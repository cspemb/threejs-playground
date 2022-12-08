import { useEffect, useState, useRef, useCallback } from "react";
import { WebGL } from "../../utils";
import "./Viewport.css";
import { Scene } from "../Scene";

interface ViewportProps {}

function Viewport(props: ViewportProps) {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setHasWebGL(WebGL.isWebGLAvailable());
  }, []);

  const [containerDims, setContainerDims] = useState({ height: 0, width: 0 });

  const containerDimsRef = useCallback((container: HTMLDivElement) => {
    if (container !== null) {
      setContainerDims({
        height: container.offsetHeight,
        width: container.offsetWidth,
      });
    }
  }, []);

  return (
    <div className="viewport" ref={containerDimsRef}>
      {hasWebGL ? (
        <Scene />
      ) : (
        <span className="webGLWarning">{WebGL.getWebGLErrorMessage()}</span>
      )}
    </div>
  );
}

export default Viewport;
