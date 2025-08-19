import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  TrendingUp,
  Users,
  Star,
  Copy,
  Search,
  Filter,
  ThumbsUp,
  Eye,
  Clock,
  GitFork
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface CommunityPrompt {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    level: number;
  };
  category: string;
  likes: number;
  comments: number;
  shares: number;
  bookmarks: number;
  views: number;
  timeAgo: string;
  trending: boolean;
  featured: boolean;
  tags: string[];
}

interface User {
  id: string;
  name: string;
  avatar: string;
  level: number;
  followers: number;
  following: number;
  prompts: number;
  bio: string;
  badge?: string;
}

const CommunityHub = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [communityPrompts] = useState<CommunityPrompt[]>([
    {
      id: '1',
      title: 'Creative Character Generator',
      content: 'Create a detailed character for a fantasy story, including their background, personality, and a unique magical ability that reflects their past...',
      author: {
        name: 'Sarah Chen',
        avatar: '/placeholder.svg',
        level: 12
      },
      category: 'Creative Writing',
      likes: 234,
      comments: 45,
      shares: 28,
      bookmarks: 89,
      views: 1200,
      timeAgo: '2h ago',
      trending: true,
      featured: true,
      tags: ['fantasy', 'character', 'creative']
    },
    {
      id: '2',
      title: 'Python Code Optimizer',
      content: 'Analyze this Python function and suggest optimizations for better performance and readability. Focus on algorithmic improvements...',
      author: {
        name: 'Alex Rodriguez',
        avatar: '/placeholder.svg',
        level: 15
      },
      category: 'Code Generation',
      likes: 156,
      comments: 23,
      shares: 34,
      bookmarks: 67,
      views: 890,
      timeAgo: '4h ago',
      trending: true,
      featured: false,
      tags: ['python', 'optimization', 'code-review']
    },
    {
      id: '3',
      title: 'Brand Voice Analyzer',
      content: 'Help me develop a consistent brand voice for my startup. Analyze our current content and suggest improvements for tone and messaging...',
      author: {
        name: 'Emily Johnson',
        avatar: '/placeholder.svg',
        level: 8
      },
      category: 'Business',
      likes: 98,
      comments: 16,
      shares: 12,
      bookmarks: 43,
      views: 567,
      timeAgo: '6h ago',
      trending: false,
      featured: false,
      tags: ['branding', 'marketing', 'business']
    }
  ]);

  const [topCreators] = useState<User[]>([
    {
      id: '1',
      name: 'Sarah Chen',
      avatar: '/placeholder.svg',
      level: 12,
      followers: 1234,
      following: 567,
      prompts: 89,
      bio: 'Creative writer and AI enthusiast. Love crafting engaging prompts for storytelling.',
      badge: 'Featured Creator'
    },
    {
      id: '2',
      name: 'Alex Rodriguez',
      avatar: '/placeholder.svg',
      level: 15,
      followers: 2345,
      following: 432,
      prompts: 156,
      bio: 'Senior developer passionate about AI-assisted coding and optimization.',
      badge: 'Code Master'
    },
    {
      id: '3',
      name: 'Emily Johnson',
      avatar: '/placeholder.svg',
      level: 8,
      followers: 876,
      following: 234,
      prompts: 45,
      bio: 'Marketing strategist helping businesses leverage AI for better communication.'
    }
  ]);

  const categories = ['all', 'Creative Writing', 'Code Generation', 'Business', 'Design', 'Research'];

  const handleLike = (promptId: string) => {
    toast({
      title: "Liked!",
      description: "Added to your favorites",
    });
  };

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copied!",
      description: "Prompt copied to clipboard",
    });
  };

  const handleFork = (promptId: string) => {
    toast({
      title: "Forked!",
      description: "Prompt added to your workspace for editing",
    });
  };

  const filteredPrompts = communityPrompts.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prompt.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || prompt.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Community Stats Header */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Active Users', value: '12.5K', icon: Users, change: '+5.2%' },
          { label: 'Prompts Shared', value: '45.2K', icon: Share2, change: '+12.1%' },
          { label: 'Total Likes', value: '128K', icon: Heart, change: '+8.7%' },
          { label: 'Trending Now', value: '234', icon: TrendingUp, change: '+15.3%' }
        ].map((stat, index) => (
          <Card key={index} className="card-interactive">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
                <div className="text-right">
                  <stat.icon className="h-5 w-5 text-primary mb-1" />
                  <div className="text-xs text-green-500">{stat.change}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search prompts, users, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border rounded-md bg-background"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="creators">Top Creators</TabsTrigger>
        </TabsList>

        <TabsContent value="trending" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPrompts.map((prompt) => (
              <Card key={prompt.id} className="card-interactive">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={prompt.author.avatar} />
                        <AvatarFallback>{prompt.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{prompt.author.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                          Level {prompt.author.level} • {prompt.timeAgo}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {prompt.trending && (
                        <Badge variant="secondary" className="bg-orange-500/10 text-orange-500">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      {prompt.featured && (
                        <Badge variant="secondary" className="bg-purple-500/10 text-purple-500">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{prompt.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {prompt.content}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {prompt.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {prompt.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        {prompt.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {prompt.comments}
                      </div>
                    </div>
                    
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleLike(prompt.id)}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleCopy(prompt.content)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleFork(prompt.id)}
                      >
                        <GitFork className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="featured" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPrompts.filter(p => p.featured).map((prompt) => (
              <Card key={prompt.id} className="card-interactive border-primary/30 bg-primary/5">
                {/* Same content structure as trending but with featured styling */}
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={prompt.author.avatar} />
                        <AvatarFallback>{prompt.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{prompt.author.name}</div>
                        <div className="text-xs text-muted-foreground">
                          Level {prompt.author.level} • {prompt.timeAgo}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-500">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{prompt.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {prompt.content}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {prompt.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{prompt.views} views</span>
                      <span>{prompt.likes} likes</span>
                      <span>{prompt.comments} comments</span>
                    </div>
                    
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <GitFork className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPrompts.map((prompt) => (
              <Card key={prompt.id} className="card-interactive">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={prompt.author.avatar} />
                        <AvatarFallback>{prompt.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{prompt.author.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {prompt.timeAgo}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{prompt.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {prompt.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="creators" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCreators.map((creator) => (
              <Card key={creator.id} className="card-interactive text-center">
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <Avatar className="h-16 w-16 mx-auto mb-3">
                      <AvatarImage src={creator.avatar} />
                      <AvatarFallback className="text-lg">{creator.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold">{creator.name}</h3>
                    <div className="text-sm text-muted-foreground">Level {creator.level}</div>
                    {creator.badge && (
                      <Badge variant="outline" className="mt-1 bg-primary/10">
                        {creator.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{creator.bio}</p>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-semibold">{creator.followers}</div>
                      <div className="text-xs text-muted-foreground">Followers</div>
                    </div>
                    <div>
                      <div className="font-semibold">{creator.following}</div>
                      <div className="text-xs text-muted-foreground">Following</div>
                    </div>
                    <div>
                      <div className="font-semibold">{creator.prompts}</div>
                      <div className="text-xs text-muted-foreground">Prompts</div>
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    Follow
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunityHub;