import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Asegurate de importar loadSlim

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Usar loadSlim para inicializar
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "149" },
        particles: {
          number: { value: 50 },
          shape: { type: "circle" },
          opacity: { value: 0.02 },
          size: { value: 100 },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
};

export default ParticlesBackground;
