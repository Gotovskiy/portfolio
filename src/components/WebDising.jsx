import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage} from "@react-three/drei";

function WebDisign({ChosedModel}) {
    return ( 
    <Canvas >
    <OrbitControls autoRotate={true} autoRotateSpeed={0.4} enableZoom={false}/>
    <Stage intensity={0.1} environment={"sunset"}>{ChosedModel}</Stage>
    </Canvas > );
}

export default WebDisign;