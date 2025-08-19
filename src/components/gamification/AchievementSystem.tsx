import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Trophy, 
  Star, 
  Zap, 
  Target, 
  Crown, 
  Rocket, 
  Brain, 
  Sparkles,
  Award,
  Medal
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: 'beginner' | 'explorer' | 'creator' | 'master' | 'legend';
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  reward?: string;
  color: string;
}

interface UserStats {
  level: number;
  xp: number;
  totalPrompts: number;
  modelsUsed: number;
  featuresExplored: number;
  streakDays: number;
}

const AchievementSystem = () => {
  const [userStats, setUserStats] = useState<UserStats>({
    level: 3,
    xp: 1250,
    totalPrompts: 47,
    modelsUsed: 8,
    featuresExplored: 12,
    streakDays: 5
  });

  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 'first-prompt',
      title: 'First Steps',
      description: 'Create your first prompt',
      icon: Rocket,
      category: 'beginner',
      progress: 1,
      maxProgress: 1,
      unlocked: true,
      reward: '50 XP',
      color: 'text-green-500'
    },
    {
      id: 'prompt-master',
      title: 'Prompt Master',
      description: 'Create 50 prompts',
      icon: Brain,
      category: 'creator',
      progress: 47,
      maxProgress: 50,
      unlocked: false,
      reward: 'Advanced Templates',
      color: 'text-blue-500'
    },
    {
      id: 'model-explorer',
      title: 'Model Explorer',
      description: 'Try 10 different AI models',
      icon: Sparkles,
      category: 'explorer',
      progress: 8,
      maxProgress: 10,
      unlocked: false,
      reward: 'Model Comparison Tool',
      color: 'text-purple-500'
    },
    {
      id: 'streak-warrior',
      title: 'Streak Warrior',
      description: 'Use platform for 7 consecutive days',
      icon: Target,
      category: 'master',
      progress: 5,
      maxProgress: 7,
      unlocked: false,
      reward: 'Priority Support',
      color: 'text-orange-500'
    },
    {
      id: 'legend-status',
      title: 'Legend Status',
      description: 'Reach level 10',
      icon: Crown,
      category: 'legend',
      progress: 3,
      maxProgress: 10,
      unlocked: false,
      reward: 'Exclusive Features',
      color: 'text-yellow-500'
    }
  ]);

  const [showCelebration, setShowCelebration] = useState(false);

  const getCategoryColor = (category: Achievement['category']) => {
    const colors = {
      beginner: 'bg-green-500/10 border-green-500/30 text-green-500',
      explorer: 'bg-blue-500/10 border-blue-500/30 text-blue-500',
      creator: 'bg-purple-500/10 border-purple-500/30 text-purple-500',
      master: 'bg-orange-500/10 border-orange-500/30 text-orange-500',
      legend: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500'
    };
    return colors[category];
  };

  const calculateLevel = (xp: number) => Math.floor(xp / 500) + 1;
  const getXpForNextLevel = (level: number) => level * 500;

  const simulateProgress = () => {
    setUserStats(prev => ({
      ...prev,
      xp: prev.xp + 50,
      totalPrompts: prev.totalPrompts + 1
    }));

    // Check for achievements
    setAchievements(prev => prev.map(achievement => {
      if (achievement.id === 'prompt-master' && achievement.progress < achievement.maxProgress) {
        const newProgress = Math.min(achievement.progress + 1, achievement.maxProgress);
        if (newProgress === achievement.maxProgress && !achievement.unlocked) {
          toast({
            title: "🎉 Achievement Unlocked!",
            description: `${achievement.title} - ${achievement.reward}`,
          });
          setShowCelebration(true);
          setTimeout(() => setShowCelebration(false), 3000);
          return { ...achievement, progress: newProgress, unlocked: true };
        }
        return { ...achievement, progress: newProgress };
      }
      return achievement;
    }));
  };

  const currentLevel = calculateLevel(userStats.xp);
  const xpForNext = getXpForNextLevel(currentLevel);
  const xpProgress = (userStats.xp % 500) / 500 * 100;

  return (
    <div className="space-y-6">
      {/* User Level & XP */}
      <Card className="card-interactive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            User Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold flex items-center gap-2">
                Level {currentLevel}
                <Badge variant="outline" className="bg-primary/10">
                  {userStats.xp} XP
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {xpForNext - userStats.xp} XP to next level
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Next Level</div>
              <div className="font-semibold">Level {currentLevel + 1}</div>
            </div>
          </div>
          <Progress value={xpProgress} className="h-2" />
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Prompts Created', value: userStats.totalPrompts, icon: Zap },
          { label: 'Models Used', value: userStats.modelsUsed, icon: Brain },
          { label: 'Features Explored', value: userStats.featuresExplored, icon: Star },
          { label: 'Day Streak', value: userStats.streakDays, icon: Target }
        ].map((stat, index) => (
          <Card key={index} className="card-interactive text-center">
            <CardContent className="pt-4">
              <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievements Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Achievements
            <Badge variant="outline">
              {achievements.filter(a => a.unlocked).length}/{achievements.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              const progressPercent = (achievement.progress / achievement.maxProgress) * 100;
              
              return (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                    achievement.unlocked 
                      ? getCategoryColor(achievement.category)
                      : 'bg-muted/30 border-border hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${achievement.unlocked ? 'bg-current/20' : 'bg-muted'}`}>
                      <Icon className={`h-4 w-4 ${achievement.unlocked ? achievement.color : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className={`font-semibold ${achievement.unlocked ? '' : 'text-muted-foreground'}`}>
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>{achievement.progress}/{achievement.maxProgress}</span>
                          <span>{Math.round(progressPercent)}%</span>
                        </div>
                        <Progress value={progressPercent} className="h-1" />
                      </div>
                      
                      {achievement.reward && (
                        <Badge variant="outline" className="text-xs">
                          Reward: {achievement.reward}
                        </Badge>
                      )}
                    </div>
                    
                    {achievement.unlocked && (
                      <Medal className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Test Button for Demo */}
      <Button onClick={simulateProgress} className="w-full">
        Simulate Progress (Demo)
      </Button>

      {/* Celebration Effect */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="text-6xl animate-bounce">🎉</div>
        </div>
      )}
    </div>
  );
};

export default AchievementSystem;