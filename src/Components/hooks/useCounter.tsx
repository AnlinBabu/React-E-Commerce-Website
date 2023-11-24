import { useEffect, useState } from "react";

type Props = {
  targetHours?: string; // Updated prop name
};

export default function useCounter({
  targetHours = "2023-11-24 16:30", // Default to empty string give date as input
}: Props) {
  const [remainigTime, setDate] = useState(
    (new Date(targetHours).getTime() - Date.now()) / 1000
  );
  const [time, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const remaining = setInterval(() => {
      setDate((date) => date - 1);
      const days = Math.floor(remainigTime / (24 * 3600));
      const hours = Math.floor((remainigTime % (24 * 3600)) / 3600);
      const minutes = Math.floor((remainigTime % 3600) / 60);
      const seconds = Math.floor(remainigTime % 60);
      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);
    return () => {
      clearInterval(remaining);
    };
  }, [remainigTime]);
  return time;
}
