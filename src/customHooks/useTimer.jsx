import { useState, useEffect } from "react";

const useTimer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Limpieza del intervalo al desmontar
  }, []);

  return time;
};

export default useTimer;
