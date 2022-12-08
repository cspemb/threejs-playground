interface GroundProps {}

function Ground(props: GroundProps) {
  return (
    <mesh receiveShadow>
      <planeGeometry
        parameters={{
          width: 100,
          height: 100,
          widthSegments: 1,
          heightSegments: 1,
        }}
      />
      <meshPhongMaterial depthWrite={false} color="white" />
      <gridHelper args={[100, 100]} />
    </mesh>
  );
}

export default Ground;
