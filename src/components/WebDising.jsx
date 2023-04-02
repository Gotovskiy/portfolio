import React from "react";
import { Canvas } from "@react-three/fiber";
import Thinking from "./Thinking";
import Sneaker from "./Sneaker"
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
    <ambientLight intensity={2} color={"black"}/>
    <directionalLight position={[2,1,3]}/>
    <Stage intensity={0.3} environment={"city"}>{ChosedModel}</Stage>
        
    </Canvas > );
}

export default WebDisign;