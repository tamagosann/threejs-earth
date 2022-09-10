import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import EarthDayMap from "../../assets/8k_earth_daymap.jpeg";
import EarthNormalMap from "../../assets/8k_earth_normal_map.jpeg";
import EarthSpecularMap from "../../assets/8k_earth_specular_map.jpeg";
import EarthCloudsMap from "../../assets/8k_earth_clouds.jpeg";
import { OrbitControls, Stars } from "@react-three/drei";
import * as Three from "three";
import { useRef } from "react";

export const Earth = (props) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
      <Stars radius={300} depth={60} count={20000} factor={7} fade={true} />
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          depthWrite={true}
          // transparentとopacityを設定することで、中に被ってる物を透過して映す事ができる
          transparent={true}
          opacity={0.4}
          // 球の裏側を見えるようになる
          side={Three.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};
