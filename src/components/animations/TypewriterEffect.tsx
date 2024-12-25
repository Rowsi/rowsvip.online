import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  texts: string[];
}

export function TypewriterEffect({ texts }: TypewriterEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(text.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts]);

  return (
    <div className="text-2xl sm:text-3xl font-semibold text-purple-400 animate-fade-in">
      <span className="mr-2">Specialized in</span>
      <span className="relative">
        {currentText}
        <span className="absolute right-[-4px] top-0 animate-blink">|</span>
      </span>
    </div>
  );
}