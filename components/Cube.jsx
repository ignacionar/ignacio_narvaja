import React from 'react';
import styled from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber';

const CanvasContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Cube = () => {
  function MyRotatingBox() {
    const myMesh = React.useRef();
  
   
    useFrame((state, delta) => {
      myMesh.current.rotation.x += 0.01
      myMesh.current.rotation.y += 0.01
      myMesh.current.rotation.z += 0.01
    })

    return (
      <mesh ref={myMesh}>
        <boxBufferGeometry args={[3.5, 3.5, 3.5]} />
        <meshBasicMaterial color={0xffffff} wireframe={true}/>
      </mesh>
    );
  }

  return (
  <CanvasContainer>
    <Canvas style={{margin: '50px 0'}}>      
      <MyRotatingBox />
      <ambientLight intensity={1} />
    </Canvas>
  </CanvasContainer>
  
  )  
};

export default Cube;
