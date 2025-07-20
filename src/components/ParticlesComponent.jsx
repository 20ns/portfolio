import { useCallback, memo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Lighter version
import particlesConfig from "../particles-config.json";

const ParticlesComponent = memo(() => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Smaller bundle size 
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
      style={{ willChange: "transform" }} // Optimize animation rendering
    />
  );
});

export default ParticlesComponent;