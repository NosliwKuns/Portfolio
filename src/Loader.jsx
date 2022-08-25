import { Html, useProgress } from '@react-three/drei'

const Loader = () => {

  const { progress } = useProgress();
  console.log(progress);

  return (
    <Html center>
      {progress} % Loaded
    </Html>
  )
}

export default Loader;
