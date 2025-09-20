import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">TextTruth AI</h1>
              <div className="h-0.5 w-full bg-gradient-primary mt-1 rounded-full"></div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            AI vs Human Text Detection
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;