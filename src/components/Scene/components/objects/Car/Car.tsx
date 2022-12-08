import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three";
import { useThree } from "@react-three/fiber";
import { finishPosition } from "../Finish/Finish";

interface CarProps {
  showing: boolean;
  showGithubButton: () => void;
}
const initialCarPos = [0, 0, 3];

function Car(props: CarProps) {
  const { showing, showGithubButton } = props;
  const carRef = useRef<Object3D>(null!);
  const result = useLoader(GLTFLoader, "car/scene.gltf");
  const three = useThree();

  three.camera.lookAt(carRef.current?.position || initialCarPos);

  useFrame((state, delta) => {
    carRef.current.position.z += 0.02;

    if (carRef.current.position.z > finishPosition.z && !showing) {
      showGithubButton();
    }
  });

  return (
    <primitive
      ref={carRef}
      object={result.scene}
      scale={0.8}
      position={initialCarPos}
    />
  );
}

export default Car;
