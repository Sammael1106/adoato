import React, { useState, useEffect } from "react";
import * as THREE from 'three';
import { useGLTF, Float, useTexture} from "@react-three/drei";
import gsap from 'gsap'

export default function Gems(props) {
  const { nodes } = useGLTF("glb/atoado_gems.glb");
  const textures = useTexture(['textures/Gems_BaseColor.png',
                              'textures/Gems_Metallic.png',
                              'textures/Gems_Normal.png',
                              'textures/Gems_Roughness.png'])

  textures.forEach(texture => texture.flipY = false)
  const material = new THREE.MeshStandardMaterial({
    color: 0xcd83a6,
    map: textures[0],
    metalnessMap: textures[1],
    roughnessMap: textures[3],
    normalMap: textures[2],
    bumpScale: 0.2,
    opacity: 1,
    transparent: true
  })

  const [floating, setFloating] = useState(2)
  // const [hovered, setHover] = useState(false)
  // const floatingStorage = {value: 2}

  // useEffect(() => {
  //   gsap.to(floatingStorage, {
  //     value: hovered ? 4 : 2,
  //     duration: 1,
  //     ease: "power3.in",
  //     delay: 0,
  //     onUpdate: function() {
  //       setFloating(floatingStorage.value)
  //     },
  //   })
  // }, [hovered]);

  return (
    <group {...props} dispose={null} >
      <Gem
        geometry={nodes.Cube_cell001.geometry}
        material={material}
        position={[-4.52, 1.28, -31.68]}
        rotation={[1.19, -1.19, -1.95]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell094.geometry}
        material={material}
        position={[18.46, 1.23, -6.82]}
        rotation={[3.14, -0.32, -2.81]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell004.geometry}
        material={material}
        position={[-11.51, 1.13, -27.34]}
        rotation={[2.18, 0.33, -1.67]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell063.geometry}
        material={material}
        position={[-13.95, 3.66, 28.26]}
        rotation={[1.76, -0.64, 2.22]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell097.geometry}
        material={material}
        position={[19.33, -5.57, -10.18]}
        rotation={[0.12, 0.63, -2.52]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell007.geometry}
        material={material}
        position={[-12.8, 8.67, -26.77]}
        rotation={[-0.98, 0.04, 1.98]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell064.geometry}
        material={material}
        position={[-12.83, -4.64, 27.86]}
        rotation={[-1.25, -0.61, -1.92]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell098.geometry}
        material={material}
        position={[18.03, -2.05, -15.75]}
        rotation={[2.07, -0.8, 3.02]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell008.geometry}
        material={material}
        position={[-8.22, 6.8, -22.22]}
        rotation={[-0.28, 1.47, 2.32]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell065.geometry}
        material={material}
        position={[-4.89, -1.28, 19.06]}
        rotation={[-1.91, 0.22, 1.46]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell099.geometry}
        material={material}
        position={[16.91, 3.79, -11.29]}
        rotation={[1.33, -0.8, 2.55]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell009.geometry}
        material={material}
        position={[-11.1, 5.53, -18.76]}
        rotation={[-3.06, 1.21, -0.5]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell066.geometry}
        material={material}
        position={[-9.35, -6.49, 27.52]}
        rotation={[-0.15, 0.56, -1.65]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell100.geometry}
        material={material}
        position={[26.15, -1.23, -18.5]}
        rotation={[-1.42, 0.5, 0.75]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell013.geometry}
        material={material}
        position={[-9.43, -6.9, -23.79]}
        rotation={[0.96, -1.25, -0.18]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell068.geometry}
        material={material}
        position={[-1.04, 7.14, 26.91]}
        rotation={[0.27, 0.68, 1.72]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell101.geometry}
        material={material}
        position={[13.08, 5.53, -17.44]}
        rotation={[1.44, -0.86, 2.37]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell017.geometry}
        material={material}
        position={[-18.45, -5.53, -23.51]}
        rotation={[0.78, -0.08, -2.14]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell071.geometry}
        material={material}
        position={[-2.07, -3.79, 31.38]}
        rotation={[-1.11, -0.71, -1.65]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell103.geometry}
        material={material}
        position={[16.92, 2.5, -26.86]}
        rotation={[-2.88, -1.13, 0.04]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell018.geometry}
        material={material}
        position={[-19.78, 4.7, -23.9]}
        rotation={[1.37, -0.24, -2.41]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell104.geometry}
        material={material}
        position={[7.85, -4.67, -19.54]}
        rotation={[-0.9, 0.64, -1.87]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell019.geometry}
        material={material}
        position={[-14.84, -5.57, -16.04]}
        rotation={[0.99, -0.71, 0.19]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell074.geometry}
        material={material}
        position={[5.87, 5.53, 20.99]}
        rotation={[-1.23, 0.15, 1.8]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell105.geometry}
        material={material}
        position={[10.9, 5.51, -27.07]}
        rotation={[-0.61, -0.18, 1.4]}
        scale={1.02} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell023.geometry}
        material={material}
        position={[-18.23, 6.8, -15.14]}
        rotation={[0.71, 1.22, 0.97]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell108.geometry}
        material={material}
        position={[1.34, 3.79, -20.29]}
        rotation={[0.82, 0.68, 1.62]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell026.geometry}
        material={material}
        position={[-15.96, 2.45, -11.97]}
        rotation={[-0.48, -0.51, -0.11]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell078.geometry}
        material={material}
        position={[8.07, -1.79, 31.61]}
        rotation={[-1.05, -0.38, -1.05]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell109.geometry}
        material={material}
        position={[0.77, -2.5, -19.96]}
        rotation={[-1.26, -0.03, -1.54]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell027.geometry}
        material={material}
        position={[-24.61, -0.31, -20.02]}
        rotation={[0.27, -0.78, -2.95]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell079.geometry}
        material={material}
        position={[16.83, 5.27, 24.81]}
        rotation={[0.74, -0.04, 0.98]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell110.geometry}
        material={material}
        position={[-0.26, -6.81, -23.72]}
        rotation={[0.34, -1.32, -0.97]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell028.geometry}
        material={material}
        position={[-22.78, 7.14, -14.35]}
        rotation={[-0.24, 0.74, 1.86]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell111.geometry}
        material={material}
        position={[2.07, -3.79, -31.38]}
        rotation={[0.3, 1.24, -0.87]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell029.geometry}
        material={material}
        position={[-27.73, -5.53, -11.14]}
        rotation={[2.35, 0.84, 3.03]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell081.geometry}
        material={material}
        position={[11.94, 4.1, 16.45]}
        rotation={[1.75, 0.2, 0.89]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell032.geometry}
        material={material}
        position={[-20.22, -7.45, -9.17]}
        rotation={[-0.13, 0.63, -1.33]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell082.geometry}
        material={material}
        position={[22.3, 5.08, 19.94]}
        rotation={[-2.09, 0.17, -1.14]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell034.geometry}
        material={material}
        position={[-31.29, 2.5, -5.36]}
        rotation={[2.07, -0.21, -2.77]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell083.geometry}
        material={material}
        position={[12.15, -1.28, 15.48]}
        rotation={[2.26, 0.66, -2.43]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell035.geometry}
        material={material}
        position={[-25.41, 1.48, -5.85]}
        rotation={[0.05, -0.1, 2.97]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell084.geometry}
        material={material}
        position={[27.07, 4.69, 15]}
        rotation={[3.06, 0.24, -0.15]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell037.geometry}
        material={material}
        position={[-32.28, -0.76, 1.63]}
        rotation={[0.71, -0.06, -2.85]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell085.geometry}
        material={material}
        position={[22.63, 6.8, 7.01]}
        rotation={[-2.8, 0.51, -1.98]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell040.geometry}
        material={material}
        position={[-22.07, -7.44, -2.79]}
        rotation={[-1.24, 0.76, -0.1]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell086.geometry}
        material={material}
        position={[16.78, -3.49, 9]}
        rotation={[-2.64, -0.3, 2.49]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell043.geometry}
        material={material}
        position={[-20.85, -4.67, 2.97]}
        rotation={[-1.74, 0.32, 0.22]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell087.geometry}
        material={material}
        position={[30.91, 3.66, 6.16]}
        rotation={[-1.9, -0.34, -0.16]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell044.geometry}
        material={material}
        position={[-28.51, -6.49, 5.66]}
        rotation={[0.08, 0.94, -1.95]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell088.geometry}
        material={material}
        position={[29.55, -3.39, 15.3]}
        rotation={[1.45, -0.39, 0.11]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell045.geometry}
        material={material}
        position={[-28.02, 5.57, 10.36]}
        rotation={[-2.8, -0.19, -2.46]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell089.geometry}
        material={material}
        position={[24.73, 7.13, -0.27]}
        rotation={[-1.54, 1.15, -3.14]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell049.geometry}
        material={material}
        position={[-20.41, -6.81, 12.08]}
        rotation={[-1.21, 1.07, -0.15]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell090.geometry}
        material={material}
        position={[26.1, -8.12, 5.13]}
        rotation={[2.35, 1.21, 2.42]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell054.geometry}
        material={material}
        position={[-21.98, 7.14, 15.55]}
        rotation={[0.5, -0.38, 1.9]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell092.geometry}
        material={material}
        position={[23.48, -6.81, -3.35]}
        rotation={[-3.08, -0.05, 1.92]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell055.geometry}
        material={material}
        position={[-13.76, -1.28, 14.06]}
        rotation={[2.29, -0.8, -0.36]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell093.geometry}
        material={material}
        position={[25.47, 7.45, -5.06]}
        rotation={[0.03, 0.07, 1.25]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell058.geometry}
        material={material}
        position={[-19.09, 5.57, 22.98]}
        rotation={[-0.25, 0.92, 2.66]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell095.geometry}
        material={material}
        position={[26.37, -8.21, -12.04]}
        rotation={[0, 0.54, -1.3]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell061.geometry}
        material={material}
        position={[-17.93, -5.53, 23.9]}
        rotation={[0.39, 1.05, -3.06]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell096.geometry}
        material={material}
        position={[23.29, 7.45, -11.48]}
        rotation={[2.38, 0.9, -1.08]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell069.geometry}
        material={material}
        position={[-5.29, 6.17, 19.78]}
        rotation={[2.42, 1.11, -1.91]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell102.geometry}
        material={material}
        position={[13.37, -3.66, -15.24]}
        rotation={[-1.12, 0.1, -2.31]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell075.geometry}
        material={material}
        position={[3.53, -0.08, 30.34]}
        rotation={[-0.22, -1.1, -0.32]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell106.geometry}
        material={material}
        position={[9.48, -1.23, -30.6]}
        rotation={[1.82, -0.6, -1.05]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell076.geometry}
        material={material}
        position={[11, 2.5, 29.77]}
        rotation={[1.24, -0.68, 0.99]}
        scale={1.56} floating={floating}
      />
      <Gem
        geometry={nodes.Cube_cell107.geometry}
        material={material}
        position={[3.67, 4.67, -30.4]}
        rotation={[2.06, -1.3, -1.79]}
        scale={1.56} floating={floating}
      />
    </group>
  );
}

function Gem(props) {
  return <Float floatIntensity={props.floating} rotationIntensity={props.floating} >
      <mesh
      castShadow
      receiveShadow
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      {...props}
      />
  </Float>
}

useGLTF.preload("glb/atoado_gems.glb");
