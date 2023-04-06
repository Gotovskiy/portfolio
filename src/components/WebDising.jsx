import React from "react";
import { Canvas } from "@react-three/fiber";
import SneakerOne from "./SneakerOne"
import SneakerTwo from "./SneakerTwo"
import SneakerThree from "./SneakerThree"
import SneakerFour from "./SneakerFour"
import { OrbitControls, Stage, Tube} from "@react-three/drei";
import { PerspectiveCamera, RenderTexture } from "@react-three/drei";

function WebDisign({ChosedModel}) {
    return ( 
    <Canvas >
    <OrbitControls autoRotate={true} autoRotateSpeed={0.4} enableZoom={false}/>
   
    <Stage intensity={0.1} environment={"sunset"}>{ChosedModel}</Stage>
        
    </Canvas > );
}

export default WebDisign;