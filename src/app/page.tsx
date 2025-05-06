'use client'; // Add this directive for client-side interactivity

import { useState, useRef } from 'react';
// import styles from './page.module.css'; // Styles in page.module.css are not currently used by this component.

export default function Home() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 'auto', left: 'auto' });
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYesClick = () => {
    setShowConfirmation(true);
  };

  const handleNoClick = () => {
    if (containerRef.current && noButtonRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      const buttonWidth = noButtonRef.current.offsetWidth;
      const buttonHeight = noButtonRef.current.offsetHeight;

      // Ensure the button stays within the container bounds
      const xPosition = Math.floor(Math.random() * (containerWidth - buttonWidth));
      const yPosition = Math.floor(Math.random() * (containerHeight - buttonHeight));

      setNoButtonPosition({ top: `${yPosition}px`, left: `${xPosition}px` });
    }
  };

  // Removed handleFixDateClick as the button will now be an anchor tag.

  return (
    <>
      {/* Use a fragment or a single root element */}
      <div ref={containerRef} className="container" style={{ display: showConfirmation ? 'none' : 'block' }}>
        <div className="question">
          <h1>Will you go on a date with me?</h1>
        </div>
        <div className="gif">
          <div className="gifimg" role="img" aria-label="Animated gif related to the proposal"></div> {/* Background image handled by CSS */}
        </div>
        <div className="answer-box">
          <button className="answer" id="yes" onClick={handleYesClick}>Yes!!!</button>
          <button
            ref={noButtonRef}
            className="answer"
            id="no"
            onClick={handleNoClick}
            style={{ position: noButtonPosition.top !== 'auto' ? 'absolute' : 'static', top: noButtonPosition.top, left: noButtonPosition.left }}
          >
            No
          </button>
        </div>
      </div>

      <div className="confirmation" style={{ display: showConfirmation ? 'block' : 'none' }}>
        <h1>Yayyyyyyyy!!! Finally</h1>
        <div className="question">
          <div className="fix-gif">
            <div className="fix-gifimg" role="img" aria-label="Animated gif for confirmation"></div> {/* Background image handled by CSS */}
          </div>
          <a
            href="https://wa.me/+919953165877?text=Chalo date pr chalein !!!!! "
            target="_blank"
            rel="noopener noreferrer"
            className="answer answer--fix"
          >
            Let's Fix a date
          </a>
        </div>
      </div>
    </>
  );
}
