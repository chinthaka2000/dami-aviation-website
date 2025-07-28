// components/TypingAnimation.js
import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const fullText = "developed by Chinthaka.works";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = 100; // Speed for typing (ms)
    const deleteSpeed = 50; // Speed for deleting (ms)
    const pauseTime = 2000; // Pause time when text is complete (ms)

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Text is complete, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          setDisplayedText(fullText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Text is fully deleted, start typing again
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, fullText]);

  // Split the displayed text to handle the clickable .works part
  const baseText = "developed by Chinthaka.";

  // Check if we're at the point where we should show the link
  const shouldShowLink = displayedText.length > baseText.length;
  const linkDisplayText = shouldShowLink ? displayedText.slice(baseText.length) : "";
  const baseDisplayText = displayedText.slice(0, Math.min(displayedText.length, baseText.length));

  return (
    <div className="font-mono text-orange-2000 flex items-center">
      <span>{baseDisplayText}</span>
      {shouldShowLink && (
        <a
          href="https://chinthaka.works"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline transition"
        >
          {linkDisplayText}
        </a>
      )}
      {/* Blinking Cursor */}
      <span className="inline-block w-0.5 h-5 bg-orange-500 ml-1 cursor-blink"></span>

      <style>{`
        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .cursor-blink {
          animation: cursor-blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default TypingAnimation;