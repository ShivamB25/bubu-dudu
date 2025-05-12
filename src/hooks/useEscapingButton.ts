import { useState, useEffect, RefObject } from 'react';

export interface ButtonPosition {
  top: string;
  left: string;
}

/**
 * A custom hook that manages the escaping button behavior
 * @param containerRef - Reference to the container element
 * @param buttonRef - Reference to the button element that will escape
 * @returns Object containing the button position state and a function to move the button
 */
export const useEscapingButton = (
  containerRef: RefObject<HTMLDivElement>,
  buttonRef: RefObject<HTMLButtonElement>
) => {
  const [buttonPosition, setButtonPosition] = useState<ButtonPosition>({ top: 'auto', left: 'auto' });
  
  // Reset button position when window is resized
  useEffect(() => {
    const handleResize = () => {
      setButtonPosition({ top: 'auto', left: 'auto' });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /**
   * Moves the button to a random position within the container
   */
  const moveButton = () => {
    if (!containerRef.current || !buttonRef.current) return;
    
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    const buttonWidth = buttonRef.current.offsetWidth;
    const buttonHeight = buttonRef.current.offsetHeight;

    // Calculate boundaries to ensure the button stays within the container
    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;
    
    // Ensure the button stays within the container bounds
    const xPosition = Math.max(0, Math.min(Math.floor(Math.random() * maxX), maxX));
    const yPosition = Math.max(0, Math.min(Math.floor(Math.random() * maxY), maxY));

    setButtonPosition({ top: `${yPosition}px`, left: `${xPosition}px` });
  };

  return {
    buttonPosition,
    moveButton
  };
};
