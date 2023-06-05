import React, { useRef } from "react";
import * as THREE from 'three';
import { useGLTF, Float, useTexture} from "@react-three/drei";
import { useControls } from 'leva'


export default function Gems(props) {
  const { nodes } = useGLTF("glb/atoado_gems.glb");
  const textures = useTexture(['textures/Gems_Metallic.png',
                              'textures/Gems_Normal.png',
                              'textures/Gems_Roughness.png'])

  textures.forEach(texture => texture.flipY = false)
  const material = new THREE.MeshStandardMaterial({
    color: 0x000000,
    metalnessMap: textures[0],
    normalMap: textures[1],
    roughnessMap: textures[2],
    bumpScale: 0.2,
    opacity: 1,
    transparent: true,
    envMapIntensity: 1
  })

  return (
    <group {...props} dispose={null} >
      <Gem
        geometry={nodes.Cube_cell003.geometry}
        material={material}
        position={[-22.16, 3.36, -77.91]}
        rotation={[1.58, -0.43, -2.02]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell061.geometry}
        material={material}
        position={[-71.13, 6.52, 37.32]}
        rotation={[-1.86, 0.06, -2.74]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell096.geometry}
        material={material}
        position={[43.37, 18.86, 49.35]}
        rotation={[0.46, 0.4, 1.1]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell127.geometry}
        material={material}
        position={[24.26, -3.36, -43.54]}
        rotation={[1.89, -0.15, 1.95]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell004.geometry}
        material={material}
        position={[-13.14, 17.16, -58.36]}
        rotation={[0.82, 1.23, 1.26]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell063.geometry}
        material={material}
        position={[-47.78, 16.42, 32]}
        rotation={[1.36, 1.21, 0.08]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell097.geometry}
        material={material}
        position={[43.18, -17.28, 41.88]}
        rotation={[-1.7, -1.22, 2.86]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell128.geometry}
        material={material}
        position={[22.47, 14.23, -72.09]}
        rotation={[-0.37, 1.14, 1.03]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell002.geometry}
        material={material}
        position={[-4.34, -18.86, -65.25]}
        rotation={[-0.33, -0.14, -1.64]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell058.geometry}
        material={material}
        position={[-50.59, 13.92, 21.87]}
        rotation={[-2.96, -0.42, -0.61]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell095.geometry}
        material={material}
        position={[46.11, 18.13, 49.98]}
        rotation={[-2.38, -0.87, -1.17]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell126.geometry}
        material={material}
        position={[28.55, 9.58, -42.82]}
        rotation={[0.12, 0.93, 2.35]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell001.geometry}
        material={material}
        position={[-5.41, 17.16, -59.57]}
        rotation={[0.7, 1.15, 1.45]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell056.geometry}
        material={material}
        position={[-75.52, 9.28, 25.72]}
        rotation={[-1.63, 0.23, -2.57]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell094.geometry}
        material={material}
        position={[58.15, 3.36, 56.39]}
        rotation={[-1.32, -0.54, -0.52]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell125.geometry}
        material={material}
        position={[28.41, 11.6, -44.92]}
        rotation={[-2.59, -0.56, -1.98]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell013.geometry}
        material={material}
        position={[-32, 16.42, -47.78]}
        rotation={[0.37, 0.61, 1.41]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell068.geometry}
        material={material}
        position={[-35.14, 6.09, 36.24]}
        rotation={[-0.53, 0.77, 0.58]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell101.geometry}
        material={material}
        position={[48.33, -18.13, 40.3]}
        rotation={[0.28, -0.29, -1.81]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell007.geometry}
        material={material}
        position={[-10.1, 9.58, -50.47]}
        rotation={[1.86, 1.26, 0.76]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell064.geometry}
        material={material}
        position={[-39.08, -3.36, 30.95]}
        rotation={[2.16, -0.56, -0.35]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell098.geometry}
        material={material}
        position={[42.66, -18.13, 46.27]}
        rotation={[-2.25, -1.06, 2.3]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell129.geometry}
        material={material}
        position={[16.49, 9.58, -48.75]}
        rotation={[2.07, -1.3, 2.73]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell008.geometry}
        material={material}
        position={[-20.71, -13.92, -72.84]}
        rotation={[1.09, -0.75, -1.56]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell065.geometry}
        material={material}
        position={[-59.04, 6.52, 54.45]}
        rotation={[-0.92, 0.43, -2.55]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell099.geometry}
        material={material}
        position={[60.04, 9.28, 52.54]}
        rotation={[0.64, -0.21, 0.64]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell130.geometry}
        material={material}
        position={[8.74, -13.92, -75.22]}
        rotation={[1.2, 0.39, -1.43]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell021.geometry}
        material={material}
        position={[-52.24, 18.13, -43.54]}
        rotation={[-2.27, 1.02, -2.65]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell075.geometry}
        material={material}
        position={[-52.44, -9.58, 59.92]}
        rotation={[-0.35, 0.45, -2.25]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell106.geometry}
        material={material}
        position={[66.15, -13.92, 36.86]}
        rotation={[2.39, 0.18, 0.82]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell014.geometry}
        material={material}
        position={[-47.01, -13.92, -59.37]}
        rotation={[1.16, 0.16, -2.22]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell069.geometry}
        material={material}
        position={[-37.21, -6.52, 34.31]}
        rotation={[0.4, 0.83, -0.51]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell102.geometry}
        material={material}
        position={[55.38, -16.42, 48.47]}
        rotation={[2.15, -0.93, 0.72]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell026.geometry}
        material={material}
        position={[-42.57, -14.23, -35.5]}
        rotation={[-0.83, 0.28, -0.81]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell078.geometry}
        material={material}
        position={[-36.14, -0.17, 73.49]}
        rotation={[-1, 0.47, -2.07]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell109.geometry}
        material={material}
        position={[77.94, -6.09, 19.61]}
        rotation={[-2.13, 0.43, -0.1]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell028.geometry}
        material={material}
        position={[-48.15, 13.92, -26.82]}
        rotation={[-1.87, -0.73, -0.6]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell080.geometry}
        material={material}
        position={[-15.07, -6.52, 48.32]}
        rotation={[-1.72, -0.88, 1.43]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell111.geometry}
        material={material}
        position={[79.61, 9.28, 5.13]}
        rotation={[0.61, -0.12, 0.15]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell019.geometry}
        material={material}
        position={[-39.57, 13.92, -38.37]}
        rotation={[1.82, 1.05, 0.45]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell074.geometry}
        material={material}
        position={[-45.54, -17.16, 54.62]}
        rotation={[0.16, 0.71, -2.11]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell105.geometry}
        material={material}
        position={[61.45, 16.25, 40.96]}
        rotation={[2.14, 0.93, 0.05]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell009.geometry}
        material={material}
        position={[-43.51, 14.23, -61.71]}
        rotation={[2.49, 0.12, -2.01]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell066.geometry}
        material={material}
        position={[-38.66, 9.58, 33.98]}
        rotation={[0.55, 1.07, 0.27]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell100.geometry}
        material={material}
        position={[44.24, 13.92, 32.88]}
        rotation={[-1.38, 0.37, 2.62]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell131.geometry}
        material={material}
        position={[2.41, 17.16, -59.77]}
        rotation={[-0.37, -1.35, 0.95]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell040.geometry}
        material={material}
        position={[-73.44, -13.92, -18.48]}
        rotation={[-2.8, -0.19, 2.48]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell086.geometry}
        material={material}
        position={[20.65, 17.16, 56.14]}
        rotation={[-0.5, -1.02, 1.51]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell117.geometry}
        material={material}
        position={[66.2, 16.25, -32.73]}
        rotation={[-1.47, -0.36, 0.47]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell032.geometry}
        material={material}
        position={[-44.15, 0.17, -21.71]}
        rotation={[-0.31, -0.21, -0.04]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell082.geometry}
        material={material}
        position={[-8.15, 17.28, 70.22]}
        rotation={[-2.26, 0.98, -2.09]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell113.geometry}
        material={material}
        position={[75.89, -11.6, -17.07]}
        rotation={[-2.99, 0.09, 0.51]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell017.geometry}
        material={material}
        position={[-44.81, -11.6, -63.58]}
        rotation={[-2.48, 0.51, 2.14]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell071.geometry}
        material={material}
        position={[-48.63, 16.25, 55.58]}
        rotation={[-1.37, 0.99, -2.57]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell103.geometry}
        material={material}
        position={[60.78, -13.92, 45.18]}
        rotation={[1.32, -0.84, 0.36]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell045.geometry}
        material={material}
        position={[-77.45, 11.92, 1.19]}
        rotation={[-1.82, 0.52, -2.98]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell089.geometry}
        material={material}
        position={[28, -2.93, 76.17]}
        rotation={[2.54, 1.07, 0.74]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell120.geometry}
        material={material}
        position={[43.19, 16.42, -37.96]}
        rotation={[-2.71, 0.39, -1.85]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell035.geometry}
        material={material}
        position={[-57.11, -18.13, -26.42]}
        rotation={[-1.03, 1.05, -0.66]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell084.geometry}
        material={material}
        position={[5.29, -9.58, 79.45]}
        rotation={[-1.04, -0.06, -1.47]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell115.geometry}
        material={material}
        position={[77.3, -6.09, -21.99]}
        rotation={[0.4, 0.14, -0.26]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell052.geometry}
        material={material}
        position={[-73.43, -16.42, 4.89]}
        rotation={[-2.99, -0.33, 1.95]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell091.geometry}
        material={material}
        position={[41.24, -6.09, 68.98]}
        rotation={[-0.25, -1.06, -0.45]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell122.geometry}
        material={material}
        position={[51.43, 6.52, -61.69]}
        rotation={[-1.48, -0.23, 0.85]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell022.geometry}
        material={material}
        position={[-49.44, 18.86, -43.26]}
        rotation={[2.66, -0.26, -2.13]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell076.geometry}
        material={material}
        position={[-47.94, -6.09, 64.5]}
        rotation={[-1.35, 0.23, -2.39]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell107.geometry}
        material={material}
        position={[65.73, -11.6, 41.59]}
        rotation={[0.32, -0.79, -0.57]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell018.geometry}
        material={material}
        position={[-37.96, 16.42, -43.19]}
        rotation={[-2.97, -0.05, -1.27]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell072.geometry}
        material={material}
        position={[-30.11, 6.09, 40.51]}
        rotation={[1.74, -0.16, -0.92]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell104.geometry}
        material={material}
        position={[67.88, 6.52, 42.94]}
        rotation={[1.81, 0.17, 0.48]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell029.geometry}
        material={material}
        position={[-65.73, -11.6, -41.59]}
        rotation={[2.23, 0.92, -3.09]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell081.geometry}
        material={material}
        position={[-20.96, -18.86, 61.95]}
        rotation={[-2.51, -1.2, 1.79]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell112.geometry}
        material={material}
        position={[76.63, 11.92, -11.29]}
        rotation={[1.11, 0.37, 0.17]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell023.geometry}
        material={material}
        position={[-50.18, 18.01, -37.29]}
        rotation={[-3.05, 0.92, -1.32]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell077.geometry}
        material={material}
        position={[-31.69, 14.23, 68.54]}
        rotation={[-1.15, 1.01, -2.69]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell108.geometry}
        material={material}
        position={[75.57, 9.28, 25.56]}
        rotation={[1.89, 0.4, 0.12]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell049.geometry}
        material={material}
        position={[-59.77, 17.16, -2.41]}
        rotation={[2.14, 0.94, -0.54]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell090.geometry}
        material={material}
        position={[28.98, -18.86, 58.63]}
        rotation={[0.52, 1.26, -1.8]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell121.geometry}
        material={material}
        position={[48.32, 3.36, -65.01]}
        rotation={[2.82, -1.01, -0.43]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell027.geometry}
        material={material}
        position={[-55.38, -16.42, -48.47]}
        rotation={[-0.76, -1.4, -2.75]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell079.geometry}
        material={material}
        position={[-13.45, 13.92, 53.45]}
        rotation={[2.12, 0.97, -1.57]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell110.geometry}
        material={material}
        position={[49.87, -6.52, 8.63]}
        rotation={[-0.46, -0.36, 3.09]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell037.geometry}
        material={material}
        position={[-69.71, -16.42, -23.58]}
        rotation={[2.84, 0.46, 2.27]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell085.geometry}
        material={material}
        position={[11.71, -6.09, 79.51]}
        rotation={[1.06, -1.1, 1.06]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell116.geometry}
        material={material}
        position={[73.01, -11.6, -26.83]}
        rotation={[1.83, -0.48, -0.02]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell034.geometry}
        material={material}
        position={[-46.34, -3.36, -18.37]}
        rotation={[-1.17, 0.15, -0.25]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell083.geometry}
        material={material}
        position={[5.67, -18.13, 62.67]}
        rotation={[-2.87, 0.04, 1.81]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell114.geometry}
        material={material}
        position={[78.08, -9.58, -15.62]}
        rotation={[-1.14, 0.73, 0.16]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell043.geometry}
        material={material}
        position={[-67.01, 18.13, -11.59]}
        rotation={[0.92, -0.84, 2.61]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell087.geometry}
        material={material}
        position={[15.86, 0.17, 46.57]}
        rotation={[-1.57, 0.96, 1.96]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell118.geometry}
        material={material}
        position={[43.32, 6.09, -25.91]}
        rotation={[-1.72, 0.35, -2.57]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell044.geometry}
        material={material}
        position={[-64.16, -18.86, -12.69]}
        rotation={[1.85, -1.36, 0.32]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell088.geometry}
        material={material}
        position={[31.89, -6.09, 73.77]}
        rotation={[-1.78, 0.34, -1.07]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell119.geometry}
        material={material}
        position={[49.09, -14.23, -25.74]}
        rotation={[2.91, -0.12, 2.47]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell055.geometry}
        material={material}
        position={[-66.34, 18.13, 14.94]}
        rotation={[-0.74, 1.19, 2.56]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell093.geometry}
        material={material}
        position={[44.31, -9.58, 66.17]}
        rotation={[2.31, -0.07, 1.11]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell124.geometry}
        material={material}
        position={[47.94, -6.09, -64.5]}
        rotation={[-0.75, 0.74, 0.51]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell054.geometry}
        material={material}
        position={[-79.51, -6.09, 11.71]}
        rotation={[-0.38, 0.15, -3]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell092.geometry}
        material={material}
        position={[40.97, -17.16, 58.13]}
        rotation={[2.52, -1.11, 1.15]}
        scale={1.56}
      />
      <Gem
        geometry={nodes.Cube_cell123.geometry}
        material={material}
        position={[48.47, -16.42, -55.38]}
        rotation={[-1.86, 1.16, 0.55]}
        scale={1.56}
      />
    </group>
  );
}

function Gem(props) {
  return <Float floatIntensity={5} rotationIntensity={3}>
      <mesh
      {...props}
      onMouseOver={() => null}>
      </mesh>
  </Float>
}

useGLTF.preload("glb/atoado_gems.glb");
