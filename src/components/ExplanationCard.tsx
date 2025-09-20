import { Card } from "@/components/ui/card";
import { Brain, User, FileText, Clock, BarChart3 } from "lucide-react";

interface ExplanationCardProps {
  isAI: boolean;
  confidence: number;
  wordCount: number;
  analysisFactors: {
    complexity: number;
    patterns: number;
    structure: number;
    vocabulary: number;
  };
}

const ExplanationCard = ({ isAI, confidence, wordCount, analysisFactors }: ExplanationCardProps) => {
  const getExplanation = () => {
    if (isAI) {
      return {
        title: "🤖 AI-Generated Content Detected",
        reasons: [
          "Consistent writing patterns throughout the text",
          "Formal vocabulary and structured sentences",
          "Repetitive phrase structures common in AI writing",
          "Uniform tone and style without natural variations"
        ],
        recommendation: "This text shows characteristics typical of AI-generated content."
      };
    } else {
      return {
        title: "👤 Human-Written Content Detected",
        reasons: [
          "Natural writing variations and inconsistencies",
          "Casual language mixed with formal expressions",
          "Unique personal voice and style patterns",
          "Organic flow with natural topic transitions"
        ],
        recommendation: "This text demonstrates authentic human writing characteristics."
      };
    }
  };

  const explanation = getExplanation();

  return (
    <Card className="p-6 bg-gradient-surface border-border shadow-cyber">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          {isAI ? (
            <div className="p-2 rounded-lg bg-gradient-primary shadow-neon">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
          ) : (
            <div className="p-2 rounded-lg bg-gradient-to-br from-success to-green-400 shadow-glow">
              <User className="w-5 h-5 text-white" />
            </div>
          )}
          <h3 className="text-xl font-bold text-foreground">{explanation.title}</h3>
        </div>

        {/* Analysis Factors Chart */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-xl bg-background/50 border border-border">
            <div className="text-xs text-muted-foreground mb-2">Complexity</div>
            <div className="w-8 h-8 mx-auto mb-2 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">{analysisFactors.complexity}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1">
              <div 
                className="bg-gradient-primary h-1 rounded-full transition-all duration-1000"
                style={{ width: `${analysisFactors.complexity}%` }}
              />
            </div>
          </div>

          <div className="text-center p-4 rounded-xl bg-background/50 border border-border">
            <div className="text-xs text-muted-foreground mb-2">Patterns</div>
            <div className="w-8 h-8 mx-auto mb-2 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">{analysisFactors.patterns}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1">
              <div 
                className="bg-gradient-primary h-1 rounded-full transition-all duration-1000"
                style={{ width: `${analysisFactors.patterns}%` }}
              />
            </div>
          </div>

          <div className="text-center p-4 rounded-xl bg-background/50 border border-border">
            <div className="text-xs text-muted-foreground mb-2">Structure</div>
            <div className="w-8 h-8 mx-auto mb-2 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">{analysisFactors.structure}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1">
              <div 
                className="bg-gradient-primary h-1 rounded-full transition-all duration-1000"
                style={{ width: `${analysisFactors.structure}%` }}
              />
            </div>
          </div>

          <div className="text-center p-4 rounded-xl bg-background/50 border border-border">
            <div className="text-xs text-muted-foreground mb-2">Vocabulary</div>
            <div className="w-8 h-8 mx-auto mb-2 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">{analysisFactors.vocabulary}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1">
              <div 
                className="bg-gradient-primary h-1 rounded-full transition-all duration-1000"
                style={{ width: `${analysisFactors.vocabulary}%` }}
              />
            </div>
          </div>
        </div>

        {/* Key Indicators */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-neon-pink" />
            📊 Key Analysis Indicators
          </h4>
          <div className="grid gap-2">
            {explanation.reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/30 border border-border/50">
                <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2 animate-glow-pulse" />
                <span className="text-sm text-muted-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Text Statistics */}
        <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-gradient-to-r from-background/50 to-surface/50 border border-border">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-neon-pink" />
            <div>
              <div className="text-sm text-muted-foreground">Word Count</div>
              <div className="text-lg font-bold text-foreground">{wordCount}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-neon-pink" />
            <div>
              <div className="text-sm text-muted-foreground">Analysis Time</div>
              <div className="text-lg font-bold text-foreground">2.1s</div>
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="p-4 rounded-xl bg-gradient-primary/10 border border-primary/20">
          <div className="text-sm text-foreground">
            <span className="font-semibold">💡 Analysis Result: </span>
            {explanation.recommendation}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ExplanationCard;