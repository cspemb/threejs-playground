import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface BoxProps {
  color: string;
  isRotating: boolean;
}

function Box(props: BoxProps) {
  const { color, isRotating } = props;
  const thisRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (isRotating) {
      thisRef.current.rotation.x += 0.01;
      thisRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh position={[0, 0, 0]} ref={thisRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Box;
