import { useEffect, useState } from "react";

interface ConfidenceScoreProps {
  score: number;
  label: string;
  isVisible: boolean;
}

const ConfidenceScore = ({ score, label, isVisible }: ConfidenceScoreProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedScore(score);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setAnimatedScore(0);
    }
  }, [score, isVisible]);

  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  return (
    <div className={`flex flex-col items-center space-y-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="relative">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            style={{ filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.5))' }}
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-foreground">
            {Math.round(animatedScore)}%
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg font-medium text-foreground">{label}</p>
        <p className="text-sm text-muted-foreground">Confidence Score</p>
      </div>
    </div>
  );
};

export default ConfidenceScore;