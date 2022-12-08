import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Vector3 } from "three";

interface FinishProps {}

export const finishPosition = new Vector3(0, 0, 15);

function Finish(props: FinishProps) {
  const finishRef = useRef<THREE.Object3D>(null!);
  const result = useLoader(GLTFLoader, "finish_line/scene.gltf");

  return (
    <primitive
      ref={finishRef}
      object={result.scene}
      position={finishPosition}
    />
  );
}

export default Finish;
