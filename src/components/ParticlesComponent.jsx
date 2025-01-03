import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // Import loadFull from tsparticles
import particlesConfig from "../particles-config.json"; // Path to your config

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    // Initialize tsparticles using loadFull
    await loadFull(engine); 
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional: Handle container loaded event
    // await console.log(container); 
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    />
  );
};

export default ParticlesComponent;