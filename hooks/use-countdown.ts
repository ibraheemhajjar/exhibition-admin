'use client';

import { useState, useEffect } from 'react';

export function useCountdown(initialSeconds: number) {
  const [countdown, setCountdown] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive || countdown === 0) return;

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, isActive]);

  const reset = () => {
    setCountdown(initialSeconds);
    setIsActive(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    countdown,
    isExpired: countdown === 0,
    reset,
    formattedTime: formatTime(countdown),
  };
}
