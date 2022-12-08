import { Canvas } from "@react-three/fiber";
import Box from "./components/Box/Box";

const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;

interface SceneProps {}
function Scene(props: SceneProps) {
  return (
    <Canvas camera={{ fov: FOV, near: NEAR, far: FAR }}>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Box color="grey" isRotating />
    </Canvas>
  );
}

export default Scene;
