import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Fog, Group, PerspectiveCamera, Vector3 } from "three";
import { Box, Car, Finish, Lights, Ground } from "./components";
import "./Scene.css";

const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;

const CAM_ORIGIN = new Vector3(0, 1, -1);

interface SceneProps {}
function Scene(props: SceneProps) {
  const [buttonShowing, setButtonShowing] = useState(false);

  return (
    <>
      <a
        className={!buttonShowing ? "hidden" : "githubButton"}
        href="https://github.com/cspemb/threejs-playground"
      >
        Github!
      </a>
      <Canvas
        camera={{
          fov: FOV,
          near: NEAR,
          far: FAR,
          position: CAM_ORIGIN,
        }}
      >
        <Lights />
        <Ground />
        <Car
          showing={buttonShowing}
          showGithubButton={() => setButtonShowing(true)}
        />
        <Finish />
      </Canvas>
    </>
  );
}

export default Scene;
