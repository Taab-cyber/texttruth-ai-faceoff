import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-gradient-cyber backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-neon opacity-10"></div>
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary shadow-neon">
              <Zap className="w-7 h-7 text-primary-foreground animate-glow-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground animate-neon-pulse">
                TextTruth AI
              </h1>
              <div className="h-1 w-full bg-gradient-neon mt-1 rounded-full shadow-cyber"></div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            🚀 AI vs Human Detection
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;