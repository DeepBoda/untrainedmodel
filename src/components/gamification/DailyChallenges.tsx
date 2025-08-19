import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  Target, 
  Clock, 
  Zap, 
  Trophy, 
  CheckCircle, 
  Play,
  Sparkles,
  Code2,
  PenTool,
  Image,
  MessageSquare
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'creative' | 'code' | 'image' | 'conversation' | 'exploration';
  difficulty: 'easy' | 'medium' | 'hard';
  xpReward: number;
  progress: number;
  maxProgress: number;
  completed: boolean;
  deadline: string;
  icon: any;
}

interface DayTheme {
  day: string;
  theme: string;
  icon: any;
  color: string;
  description: string;
}

const DailyChallenges = () => {
  const [currentDay] = useState('Monday');
  const [todayChallenges, setTodayChallenges] = useState<Challenge[]>([
    {
      id: 'creative-1',
      title: 'Creative Writing Sprint',
      description: 'Write a 500-word story using AI assistance',
      type: 'creative',
      difficulty: 'medium',
      xpReward: 150,
      progress: 0,
      maxProgress: 1,
      completed: false,
      deadline: '23:59',
      icon: PenTool
    },
    {
      id: 'creative-2',
      title: 'Prompt Master',
      description: 'Create 3 creative prompts and share them',
      type: 'creative',
      difficulty: 'easy',
      xpReward: 100,
      progress: 1,
      maxProgress: 3,
      completed: false,
      deadline: '23:59',
      icon: Sparkles
    },
    {
      id: 'creative-3',
      title: 'Genre Explorer',
      description: 'Generate content in 2 different genres',
      type: 'creative',
      difficulty: 'hard',
      xpReward: 200,
      progress: 0,
      maxProgress: 2,
      completed: false,
      deadline: '23:59',
      icon: Target
    }
  ]);

  const [weeklyStreak, setWeeklyStreak] = useState(3);
  const [totalCompleted, setTotalCompleted] = useState(12);

  const dayThemes: DayTheme[] = [
    {
      day: 'Monday',
      theme: 'Creative Writing',
      icon: PenTool,
      color: 'text-purple-500',
      description: 'Unleash your creativity with AI-powered writing'
    },
    {
      day: 'Tuesday',
      theme: 'Code Generation',
      icon: Code2,
      color: 'text-blue-500',
      description: 'Build and code with AI assistance'
    },
    {
      day: 'Wednesday',
      theme: 'Visual Creation',
      icon: Image,
      color: 'text-green-500',
      description: 'Create stunning visuals and designs'
    },
    {
      day: 'Thursday',
      theme: 'Conversation',
      icon: MessageSquare,
      color: 'text-orange-500',
      description: 'Master the art of AI conversation'
    },
    {
      day: 'Friday',
      theme: 'Innovation',
      icon: Sparkles,
      color: 'text-pink-500',
      description: 'Explore cutting-edge AI features'
    },
    {
      day: 'Saturday',
      theme: 'Community',
      icon: Trophy,
      color: 'text-yellow-500',
      description: 'Connect and collaborate with others'
    },
    {
      day: 'Sunday',
      theme: 'Reflection',
      icon: Target,
      color: 'text-indigo-500',
      description: 'Review and improve your AI skills'
    }
  ];

  const todayTheme = dayThemes.find(theme => theme.day === currentDay) || dayThemes[0];

  const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
    const colors = {
      easy: 'bg-green-500/10 text-green-500 border-green-500/30',
      medium: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
      hard: 'bg-red-500/10 text-red-500 border-red-500/30'
    };
    return colors[difficulty];
  };

  const completeChallenge = (challengeId: string) => {
    setTodayChallenges(prev => prev.map(challenge => {
      if (challenge.id === challengeId && challenge.progress < challenge.maxProgress) {
        const newProgress = challenge.maxProgress;
        const completed = newProgress === challenge.maxProgress;
        
        if (completed) {
          toast({
            title: "🎉 Challenge Completed!",
            description: `+${challenge.xpReward} XP earned!`,
          });
          setTotalCompleted(prev => prev + 1);
        }
        
        return { ...challenge, progress: newProgress, completed };
      }
      return challenge;
    }));
  };

  const incrementProgress = (challengeId: string) => {
    setTodayChallenges(prev => prev.map(challenge => {
      if (challenge.id === challengeId && challenge.progress < challenge.maxProgress) {
        const newProgress = challenge.progress + 1;
        const completed = newProgress === challenge.maxProgress;
        
        if (completed) {
          toast({
            title: "🎉 Challenge Completed!",
            description: `+${challenge.xpReward} XP earned!`,
          });
          setTotalCompleted(prev => prev + 1);
        }
        
        return { ...challenge, progress: newProgress, completed };
      }
      return challenge;
    }));
  };

  const completedToday = todayChallenges.filter(c => c.completed).length;
  const totalXpToday = todayChallenges.filter(c => c.completed).reduce((sum, c) => sum + c.xpReward, 0);

  return (
    <div className="space-y-6">
      {/* Today's Theme Header */}
      <Card className="card-interactive bg-gradient-hero border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <todayTheme.icon className={`h-8 w-8 ${todayTheme.color}`} />
              <h2 className="text-2xl font-bold">{todayTheme.theme} Monday</h2>
            </div>
            <p className="text-muted-foreground">{todayTheme.description}</p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{currentDay}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Resets in 8h 32m</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="card-interactive">
          <CardContent className="pt-4 text-center">
            <Trophy className="h-6 w-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{completedToday}/3</div>
            <div className="text-xs text-muted-foreground">Completed Today</div>
          </CardContent>
        </Card>
        <Card className="card-interactive">
          <CardContent className="pt-4 text-center">
            <Zap className="h-6 w-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{totalXpToday}</div>
            <div className="text-xs text-muted-foreground">XP Earned Today</div>
          </CardContent>
        </Card>
        <Card className="card-interactive">
          <CardContent className="pt-4 text-center">
            <Target className="h-6 w-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{weeklyStreak}</div>
            <div className="text-xs text-muted-foreground">Day Streak</div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Challenges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Today's Challenges
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {todayChallenges.map((challenge) => {
            const Icon = challenge.icon;
            const progressPercent = (challenge.progress / challenge.maxProgress) * 100;
            
            return (
              <div
                key={challenge.id}
                className={`p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
                  challenge.completed 
                    ? 'bg-primary/5 border-primary/30' 
                    : 'bg-card hover:bg-muted/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${challenge.completed ? 'bg-primary/20' : 'bg-muted'}`}>
                    {challenge.completed ? (
                      <CheckCircle className="h-5 w-5 text-primary" />
                    ) : (
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`font-semibold ${challenge.completed ? 'text-primary' : ''}`}>
                          {challenge.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {challenge.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className={getDifficultyColor(challenge.difficulty)}>
                          {challenge.difficulty}
                        </Badge>
                        <Badge variant="outline" className="bg-primary/10">
                          +{challenge.xpReward} XP
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Progress: {challenge.progress}/{challenge.maxProgress}</span>
                        <span>Deadline: {challenge.deadline}</span>
                      </div>
                      <Progress value={progressPercent} className="h-2" />
                    </div>
                    
                    {!challenge.completed && (
                      <div className="flex gap-2">
                        <Button
                          onClick={() => incrementProgress(challenge.id)}
                          disabled={challenge.progress >= challenge.maxProgress}
                          size="sm"
                          variant="outline"
                        >
                          <Play className="h-3 w-3 mr-1" />
                          Start Challenge
                        </Button>
                        <Button
                          onClick={() => completeChallenge(challenge.id)}
                          size="sm"
                          variant="secondary"
                        >
                          Mark Complete
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Weekly Calendar Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            This Week's Themes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
            {dayThemes.map((theme, index) => (
              <div
                key={theme.day}
                className={`p-3 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                  theme.day === currentDay
                    ? 'bg-primary/10 border border-primary/30'
                    : 'bg-muted/30 hover:bg-muted/50'
                }`}
              >
                <theme.icon className={`h-5 w-5 mx-auto mb-1 ${theme.color}`} />
                <div className="text-xs font-medium">{theme.day}</div>
                <div className="text-xs text-muted-foreground">{theme.theme}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyChallenges;