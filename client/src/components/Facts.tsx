import React, { useState, useEffect } from "react";

const LoadFacts = () => {
  const [currentFact, setCurrentFact] = useState("");
  const [loadingDots, setLoadingDots] = useState("");

  const facts = [
    "Your vocal cords vibrate 100-1000 times per second when you speak.",
    "Hydration is key for maintaining healthy vocal cords.",
    "Whispering can actually be more damaging to your voice than normal speech.",
    "Voice disorders affect approximately 7.5 million people in the United States.",
    "Vocal health can be an early indicator of neurological conditions.",
    "Smoking can permanently alter your voice quality and tone.",
    "The average adult speaks about 16,000 words per day.",
    "Voice therapy can improve 90% of voice disorders without surgery.",
    "Our voice changes naturally as we age due to vocal fold atrophy.",
    "Vocal polyps and nodules are common in professional speakers and singers.",
    "Voice rest is crucial after vocal strain or laryngitis.",
    "The human voice can produce sounds across a 3-octave range on average.",
    "Acid reflux can damage your vocal cords over time.",
    "Professional voice users should avoid caffeine before important speaking engagements.",
    "Children with persistent hoarseness should be evaluated for vocal nodules.",
  ];

  // Rotate through facts every 4 seconds
  useEffect(() => {
    const randomFact = () => facts[Math.floor(Math.random() * facts.length)];
    setCurrentFact(randomFact());
    
    const factInterval = setInterval(() => {
      setCurrentFact(randomFact());
    }, 4000);
    
    // Loading dots animation
    const dotsInterval = setInterval(() => {
      setLoadingDots(prev => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);
    
    return () => {
      clearInterval(factInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="fixed w-full inset-0 bg-pink-50 bg-opacity-90 flex flex-col items-center justify-center z-50 px-4">
      <div className="max-w-md text-center">
        <div className="mb-6">
          <div className="inline-block rounded-full bg-pink-100 p-3">
            <div className="h-12 w-12 rounded-full border-4 border-pink-500 border-t-transparent animate-spin"></div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-pink-600 mb-2">
          Analyzing Your Voice{loadingDots}
        </h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-pink-200 mt-4">
          <p className="text-gray-700 italic">
            "Did you know? {currentFact}"
          </p>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          This may take a few moments. Please don't refresh the page.
        </p>
      </div>
    </div>
  );
};

export default LoadFacts;