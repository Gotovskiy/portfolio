import React from "react";
import { Canvas } from "@react-three/fiber";
import Thinking from "./Thinking";
import Sneaker from "./Sneaker"
import { OrbitControls, Stage, Tube} from "@react-three/drei";
import { PerspectiveCamera, RenderTexture } from "@react-three/drei";

function WebDisign() {



    return ( 
    <Canvas >
    <OrbitControls autoRotate={true} autoRotateSpeed={0.4} enableZoom={false}/>
    <ambientLight intensity={2} color={"red"}/>
    <directionalLight position={[2,1,3]}/>
    <Stage environment={"city"} intensity={0.4} >
        <Sneaker/>
        </Stage>
    </Canvas > );
}

export default WebDisign;