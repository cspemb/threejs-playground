interface LightsProps {}

function Lights(props: LightsProps) {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <hemisphereLight position={[0, 20, 0]} />
    </>
  );
}

export default Lights;
