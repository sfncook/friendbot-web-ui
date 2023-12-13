import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import {FakeWebPage} from "./components/FakeWebPage.jsx";

function App() {
  return (
    <>
      <Loader />
      <Leva hidden />
      <UI hidden/>
      <FakeWebPage />
      <div style={{
        width: '200px',
        height: '300px',
        position: 'fixed',
        right: '10px',
        bottom: '0px',
      }}>

        <Canvas
          shadows
          camera={{ position: [0, 0, 1], fov: 30 }}
        >
          <Experience />
        </Canvas>
      </div>
    </>
  );
}

export default App;
