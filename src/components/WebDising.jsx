import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Thinking from "./Thinking";
import { OrbitControls} from "@react-three/drei";
import { useRef } from "react";
function WebDisign() {

    const Ref = useRef();
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime)*2))

    return ( 
    <Canvas >
    <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} autoRotate autoRotateSpeed={0.10}/>
    <ambientLight intensity={1}/>
    <directionalLight position={[2,1,3]}/>
    <Thinking ref={Ref}/>
    </Canvas > );
}

export default WebDisign;