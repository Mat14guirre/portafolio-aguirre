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
        background: { color: "124" },
        particles: {
          number: { value: 50 },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 2 },
          move: { enable: true, speed: 3 },
        },
      }}
    />
  );
};

export default ParticlesBackground;
