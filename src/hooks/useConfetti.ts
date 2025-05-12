import { useCallback } from 'react';
import confetti from 'canvas-confetti';

/**
 * A custom hook that provides a function to trigger a confetti celebration
 * @returns A function that will trigger the confetti animation
 */
export const useConfetti = () => {
  const triggerConfetti = useCallback(() => {
    // First burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Second burst with a delay for more effect
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
    }, 250);

    // Third burst with a delay
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 400);

    // Final burst with hearts
    setTimeout(() => {
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      const particleCount = 50;
      
      // Launch confetti from both sides
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.1, y: 0.5 }
      });
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.9, y: 0.5 }
      });
    }, 650);
  }, []);

  return triggerConfetti;
};
