import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';

export default function Home() {
  const sceneRef = useRef();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Path to the CV file in the public folder
    link.download = 'My_CV.pdf';
    link.click();
  };

  const Model = () => {
    const group = useRef();
    const mixer = useRef();

    useEffect(() => {
      const loader = new GLTFLoader();
      loader.load(
        '/phoenix_bird(1).glb',
        (gltf) => {
          group.current.add(gltf.scene);
          mixer.current = new THREE.AnimationMixer(gltf.scene);
          mixer.current.clipAction(gltf.animations[0]).play();
        },
        undefined,
        (error) => {
          console.error('Error loading model:', error);
        }
      );
    }, []);

    useFrame((state, delta) => {
      if (mixer.current) mixer.current.update(delta);
    });

    return <group ref={group} />;
  };

  return (
    <div className="mx-auto w-full max-w-7xl dark:bg-gray-900">
      <aside className="relative overflow-hidden dark:bg-gray-900 rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto dark:bg-gray-900">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Hey, I'm{' '}
              <span className="text-orange-700">Shovon Halder!</span> I'm always
              eager to learn new things and take on challenging projects. 😊
            </h2>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full dark:bg-gray-900">
          <img
            className="w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          />
        </div>
      </aside>

      <h1 className="relative text-2xl sm:text-5xl py-10 font-bold text-gray-900 dark:text-white">
        Here is my CV
      </h1>
      <button
        onClick={handleDownload}
        className="rounded-full bg-gray-300 hover:bg-gray-400 dark:bg-blue-900 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded inline-flex items-center transition-colors duration-200"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download Cv</span>
      </button>

      <div className="grid place-items-end sm:mt-20 dark:bg-gray-900">
        <Canvas
          camera={{ position: [0, 10, 13], fov: 10 }}
          style={{ height: '10vh', width: '10vw' }}
        >
          <ambientLight intensity={1.3} />
<directionalLight args={[[5, 5, 5]]} intensity={1} />
          <OrbitControls />
          <Model />
        </Canvas>
      </div>
    </div>
  );
}
