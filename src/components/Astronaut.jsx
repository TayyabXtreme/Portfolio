import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function Astronaut(props) {
  const group = useRef();
  const { scene } = useGLTF("/models/3d_clipart_webdev.glb");
  
  // Apply materials settings to make colors visible
  useEffect(() => {
    scene.traverse((node) => {
      if (node.isMesh) {
        // Ensure materials catch light properly
        node.material.needsUpdate = true;
        
        // Optional: If model still appears dark, you can try these settings
        if (node.material) {
          node.material.roughness = 0.5;
          node.material.metalness = 0.5;
          node.castShadow = true;
          node.receiveShadow = true;
        }
      }
    });
  }, [scene]);
  
  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });
  
  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);
  
  useFrame(() => {
    group.current.position.y = ySpring.get();
  });
  
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, 0, 0]}
      scale={props.scale || 0.5}
      position={props.position || [1.3, -1, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/3d_clipart_webdev.glb");