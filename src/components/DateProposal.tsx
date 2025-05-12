import { useState, useRef, useEffect } from 'react';
import { useEscapingButton } from '@/hooks/useEscapingButton';
import { useConfetti } from '@/hooks/useConfetti';
import { Loading } from './ui/Loading';

export const DateProposal: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  
  // Custom hooks
  const { buttonPosition, moveButton } = useEscapingButton(containerRef, noButtonRef as React.RefObject<HTMLButtonElement>);
  const triggerConfetti = useConfetti();

  // Simulate loading for a smooth transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleYesClick = () => {
    // Trigger confetti animation
    triggerConfetti();
    
    // Show confirmation with a slight delay to let confetti start
    setTimeout(() => {
      setShowConfirmation(true);
    }, 300);
  };

  // handleNoClick now just calls the moveButton function from our custom hook
  const handleNoClick = () => {
    moveButton();
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Loading size="large" />
        </div>
      ) : (
        <>
          <div 
            ref={containerRef} 
            className="container" 
            style={{ 
              display: showConfirmation ? 'none' : 'block',
              height: '100vh' 
            }}
            aria-hidden={showConfirmation}
          >
            <div className="question">
              <h1>Will you go on a date with me?</h1>
            </div>
            <div className="gif">
              <div 
                className="gifimg" 
                role="img" 
                aria-label="Animated gif of a cute character waiting for reply"
              />
            </div>
            <div className="answer-box">
              <button 
                className="answer" 
                id="yes" 
                onClick={handleYesClick}
                aria-label="Yes, I will go on a date with you"
              >
                Yes!!!
              </button>
              <button
                ref={noButtonRef}
                className="answer"
                id="no"
                onClick={handleNoClick}
                style={{ 
                  position: buttonPosition.top !== 'auto' ? 'absolute' : 'static', 
                  top: buttonPosition.top, 
                  left: buttonPosition.left 
                }}
                aria-label="No, I will not go on a date with you"
              >
                No
              </button>
            </div>
          </div>

          <div 
            className="confirmation" 
            style={{ display: showConfirmation ? 'block' : 'none' }}
            aria-hidden={!showConfirmation}
          >
            <h1>Yayyyyyyyy!!! Finally</h1>
            <div className="question">
              <div className="fix-gif">
                <div 
                  className="fix-gifimg" 
                  role="img" 
                  aria-label="Animated gif of cute characters with desserts celebrating"
                />
              </div>
              <a
                href="https://wa.me/+919953165877?text=Chalo date pr chalein !!!!! "
                target="_blank"
                rel="noopener noreferrer"
                className="answer answer--fix"
                aria-label="Let's fix a date via WhatsApp"
              >
                Let&apos;s Fix a date
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};
