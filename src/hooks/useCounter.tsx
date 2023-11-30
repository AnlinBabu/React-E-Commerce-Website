import { useEffect, useState } from "react";

export default function useCounter(targetHours: string) {
  const [remainingTime, setRemainingTime] = useState(
    (new Date(targetHours).getTime() - Date.now()) / 1000
  );

  const [time, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateRemainingTime = (newTargetHours: string) => {
    setRemainingTime((new Date(newTargetHours).getTime() - Date.now()) / 1000);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((time) => time - 1);

      const days = Math.floor(remainingTime / (24 * 3600));
      const hours = Math.floor((remainingTime % (24 * 3600)) / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = Math.floor(remainingTime % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [remainingTime]);

  return { ...time, updateRemainingTime };
}
