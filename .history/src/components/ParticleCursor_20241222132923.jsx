import React, { useEffect } from "react";

const particlesCursor = async () => {
  const module = await import(
    "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js"
  );
  return module.particlesCursor;
};

const ParticleCursor = () => {
  useEffect(() => {
    const initParticlesCursor = async () => {
      const particlesCursorFunction = await particlesCursor();
      particlesCursorFunction({
        el: document.body, // Bind the effect to the body for global coverage
        gpgpuSize: 512,
        color: 0xffffff,
        colors: [0x00fffc, 0x00fffc],
        coordScale: 0.5,
        pointSize: 2,
        noiseIntensity: 0.005,
        noiseTimeCoef: 0.0001,
        pointDecay: 0.0025,
        sleepRadiusX: 250,
        sleepRadiusY: 250,
        sleepTimeCoefX: 0.001,
        sleepTimeCoefY: 0.002,
      });
    };

    initParticlesCursor();
  }, []);

  return null; // The cursor effect doesn't need a visible DOM element
};

export default ParticleCursor;
