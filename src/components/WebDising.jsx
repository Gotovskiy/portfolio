import React from "react";
import { Canvas } from "@react-three/fiber";
import Thinking from "./Thinking";
import { OrbitControls} from "@react-three/drei";

function WebDisign() {



    return ( 
    <Canvas >
    <OrbitControls enableZoom={false} enableRotate={false} enablePan={false}/>
    <ambientLight intensity={1}/>
    <directionalLight position={[2,1,3]}/>
    <Thinking/>
    </Canvas > );
}

export default WebDisign;