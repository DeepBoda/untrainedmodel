import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Star, 
  Zap, 
  Target, 
  Gift,
  Crown,
  Flame,
  Award,
  CheckCircle,
  Lock
} from 'lucide-react';

interface UserStats {
  level: number;
  xp: number;
  totalGenerations: number;
  streak: number;
  achievements: string[];
  completedChallenges: string[];
  lastActive: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xp: number;
  unlocked: boolean;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  xp: number;
  progress: number;
  target: number;
  completed: boolean;
  type: 'daily' | 'weekly' | 'milestone';
}

const GameSystem = () => {
  const [userStats, setUserStats] = useState<UserStats>({
    level: 1,
    xp: 0,
    totalGenerations: 0,
    streak: 0,
    achievements: [],
    completedChallenges: [],
    lastActive: new Date().toDateString()
  });

  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 'first_gen',
      title: 'First Steps',
      description: 'Generate your first AI content',
      icon: '🎯',
      xp: 50,
      unlocked: false
    },
    {
      id: 'streak_3',
      title: 'Getting Started',
      description: 'Use AI for 3 days in a row',
      icon: '🔥',
      xp: 100,
      unlocked: false
    },
    {
      id: 'gen_10',
      title: 'Content Creator',
      description: 'Generate 10 pieces of content',
      icon: '⭐',
      xp: 200,
      unlocked: false
    },
    {
      id: 'gen_50',
      title: 'AI Master',
      description: 'Generate 50 pieces of content',
      icon: '👑',
      xp: 500,
      unlocked: false
    }
  ]);

  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 'daily_gen',
      title: 'Daily Creator',
      description: 'Generate 3 pieces of content today',
      xp: 75,
      progress: 0,
      target: 3,
      completed: false,
      type: 'daily'
    },
    {
      id: 'code_challenge',
      title: 'Code Wizard',
      description: 'Generate 5 code snippets',
      xp: 150,
      progress: 0,
      target: 5,
      completed: false,
      type: 'weekly'
    },
    {
      id: 'story_teller',
      title: 'Story Teller',
      description: 'Write 3 creative stories',
      xp: 120,
      progress: 0,
      target: 3,
      completed: false,
      type: 'weekly'
    }
  ]);

  // Load data from localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem('untrainedmodel_stats');
    const savedAchievements = localStorage.getItem('untrainedmodel_achievements');
    const savedChallenges = localStorage.getItem('untrainedmodel_challenges');

    if (savedStats) {
      setUserStats(JSON.parse(savedStats));
    }
    if (savedAchievements) {
      setAchievements(JSON.parse(savedAchievements));
    }
    if (savedChallenges) {
      setChallenges(JSON.parse(savedChallenges));
    }
  }, []);

  // Save data to localStorage
  const saveData = (stats: UserStats, achs: Achievement[], chals: Challenge[]) => {
    localStorage.setItem('untrainedmodel_stats', JSON.stringify(stats));
    localStorage.setItem('untrainedmodel_achievements', JSON.stringify(achs));
    localStorage.setItem('untrainedmodel_challenges', JSON.stringify(chals));
  };

  // Add XP and check for level up
  const addXP = (amount: number) => {
    const newStats = { ...userStats };
    newStats.xp += amount;
    
    // Level up calculation (100 XP per level)
    const newLevel = Math.floor(newStats.xp / 100) + 1;
    if (newLevel > newStats.level) {
      newStats.level = newLevel;
      // Show level up notification
    }
    
    setUserStats(newStats);
    saveData(newStats, achievements, challenges);
  };

  // Complete generation (called from playground)
  const completeGeneration = (type: 'text' | 'code' | 'image') => {
    const newStats = { ...userStats };
    newStats.totalGenerations += 1;
    newStats.lastActive = new Date().toDateString();
    
    // Update challenges
    const newChallenges = challenges.map(challenge => {
      if (challenge.id === 'daily_gen' && !challenge.completed) {
        challenge.progress = Math.min(challenge.progress + 1, challenge.target);
        if (challenge.progress >= challenge.target) {
          challenge.completed = true;
          addXP(challenge.xp);
        }
      }
      if (challenge.id === 'code_challenge' && type === 'code' && !challenge.completed) {
        challenge.progress = Math.min(challenge.progress + 1, challenge.target);
        if (challenge.progress >= challenge.target) {
          challenge.completed = true;
          addXP(challenge.xp);
        }
      }
      if (challenge.id === 'story_teller' && type === 'text' && !challenge.completed) {
        challenge.progress = Math.min(challenge.progress + 1, challenge.target);
        if (challenge.progress >= challenge.target) {
          challenge.completed = true;
          addXP(challenge.xp);
        }
      }
      return challenge;
    });
    
    // Check achievements
    const newAchievements = achievements.map(achievement => {
      if (achievement.id === 'first_gen' && newStats.totalGenerations >= 1 && !achievement.unlocked) {
        achievement.unlocked = true;
        addXP(achievement.xp);
      }
      if (achievement.id === 'gen_10' && newStats.totalGenerations >= 10 && !achievement.unlocked) {
        achievement.unlocked = true;
        addXP(achievement.xp);
      }
      if (achievement.id === 'gen_50' && newStats.totalGenerations >= 50 && !achievement.unlocked) {
        achievement.unlocked = true;
        addXP(achievement.xp);
      }
      return achievement;
    });
    
    setUserStats(newStats);
    setChallenges(newChallenges);
    setAchievements(newAchievements);
    saveData(newStats, newAchievements, newChallenges);
    
    // Base XP for generation
    addXP(10);
  };

  const xpToNextLevel = (userStats.level * 100) - userStats.xp;
  const levelProgress = ((userStats.xp % 100) / 100) * 100;

  return (
    <div className="space-y-6">
      {/* User Level Card */}
      <Card className="bg-gradient-to-r from-primary/10 to-purple-600/10 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Crown className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Level {userStats.level}</h3>
                <p className="text-sm text-muted-foreground">{userStats.xp} XP • {xpToNextLevel} to next level</p>
              </div>
            </div>
            <Badge className="bg-primary/20 text-primary border-primary/30">
              🔥 {userStats.streak} day streak
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={levelProgress} className="h-3" />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>Level {userStats.level}</span>
            <span>Level {userStats.level + 1}</span>
          </div>
        </CardContent>
      </Card>

      {/* Active Challenges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-green-500" />
            Active Challenges
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {challenges.filter(c => !c.completed).map(challenge => (
            <div key={challenge.id} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{challenge.title}</h4>
                <Badge variant={challenge.type === 'daily' ? 'default' : 'secondary'}>
                  {challenge.type} • +{challenge.xp} XP
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
              <div className="space-y-2">
                <Progress value={(challenge.progress / challenge.target) * 100} />
                <div className="flex justify-between text-sm">
                  <span>{challenge.progress}/{challenge.target}</span>
                  <span>{Math.round((challenge.progress / challenge.target) * 100)}%</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map(achievement => (
              <div 
                key={achievement.id} 
                className={`p-4 border rounded-lg transition-all ${
                  achievement.unlocked 
                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' 
                    : 'opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">
                    {achievement.unlocked ? achievement.icon : '🔒'}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold flex items-center gap-2">
                      {achievement.title}
                      {achievement.unlocked && <CheckCircle className="w-4 h-4 text-green-500" />}
                    </h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <Badge variant="outline" className="mt-1">+{achievement.xp} XP</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-500" />
            Your Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">{userStats.totalGenerations}</div>
              <div className="text-sm text-muted-foreground">Total Generations</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-green-500">{achievements.filter(a => a.unlocked).length}</div>
              <div className="text-sm text-muted-foreground">Achievements</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-orange-500">{userStats.streak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-purple-500">{userStats.level}</div>
              <div className="text-sm text-muted-foreground">Current Level</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameSystem;