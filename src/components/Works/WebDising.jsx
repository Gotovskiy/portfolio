import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage} from "@react-three/drei";

function WebDisign({ChosedModel}) {
    return ( 
    <Canvas >
    <OrbitControls autoRotate={true} autoRotateSpeed={0.4} enablePan={false} enableZoom={false}/>
    <Stage intensity={0.1} environment={"apartment"}>{ChosedModel}</Stage>
    </Canvas > );
}

export default WebDisign;