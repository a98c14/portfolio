import { Box, Plane, TorusKnot } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import HomeContainer from "components/home/HomeContainer";
import React, { useRef, useState } from "react";
import frag from "lib/prototypes/raymarching/raymarch.frag";
import vert from "lib/prototypes/raymarching/raymarch.vert";

function SpinningThing() {
    const mesh = useRef<any>();
    useFrame(() => {
        if (!mesh || !mesh.current) return;
        mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01;
    });
    return (
        <TorusKnot ref={mesh} args={[1, 0.4, 100, 64]}>
            <meshNormalMaterial attach="material" />
        </TorusKnot>
    );
}

export default function Home() {
    return (
        <HomeContainer>
            <Canvas>
                <mesh>
                    <shaderMaterial fragmentShader={frag} vertexShader={vert} />
                    <planeGeometry args={[4, 4]} />
                </mesh>
                <mesh position={[0, -1, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color="hotpink" />
                </mesh>
            </Canvas>
        </HomeContainer>
    );
}
