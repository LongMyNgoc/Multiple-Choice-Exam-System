import { useEffect, useState } from "react";

const useExamTimer = (
  startAt: string,
  submitted: boolean,
  onTimeUp: () => void,
  duration: number = 1800 // mặc định 30 phút
) => {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    if (submitted) return;

    const interval = setInterval(() => {
      const start = new Date(startAt).getTime();
      const now = Date.now();
      const elapsedSeconds = Math.floor((now - start) / 1000);
      const remaining = duration - elapsedSeconds;

      if (remaining <= 0) {
        setRemainingTime(0);
        clearInterval(interval);
        onTimeUp(); // gọi hàm xử lý hết giờ
      } else {
        setRemainingTime(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startAt, submitted, duration, onTimeUp]);

  return remainingTime;
};

export default useExamTimer;
