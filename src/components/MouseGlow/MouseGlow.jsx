import { useEffect, useState } from "react";

function MouseGlow() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[1] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px] transition-all duration-300"
      style={{
        left: position.x - 250,
        top: position.y - 250,
      }}
    />
  );
}

export default MouseGlow;