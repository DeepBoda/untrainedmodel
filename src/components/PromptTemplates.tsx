import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Code, MessageSquare, Image, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Template {
  id: string;
  title: string;
  description: string;
  prompt: string;
  type: 'text' | 'code' | 'image';
  tags: string[];
}

const templates: Template[] = [
  {
    id: '1',
    title: 'Blog Post Writer',
    description: 'Generate engaging blog posts on any topic',
    prompt: 'Write a comprehensive blog post about [TOPIC]. Include an engaging introduction, 3-5 main points with examples, and a compelling conclusion. Target audience: [TARGET_AUDIENCE]. Tone: [TONE].',
    type: 'text',
    tags: ['content', 'marketing', 'writing']
  },
  {
    id: '2',
    title: 'React Component',
    description: 'Create modern React components with TypeScript',
    prompt: 'Create a React component called [COMPONENT_NAME] that [FUNCTIONALITY]. Use TypeScript, modern hooks, and follow best practices. Include proper prop types and error handling.',
    type: 'code',
    tags: ['react', 'typescript', 'frontend']
  },
  {
    id: '3',
    title: 'API Documentation',
    description: 'Generate clear API documentation',
    prompt: 'Create comprehensive API documentation for [API_NAME]. Include endpoint descriptions, request/response examples, authentication methods, and error codes. Format in markdown.',
    type: 'text',
    tags: ['documentation', 'api', 'technical']
  },
  {
    id: '4',
    title: 'Logo Design Brief',
    description: 'Create detailed logo design descriptions',
    prompt: 'Design a modern, minimalist logo for [COMPANY_NAME]. Industry: [INDUSTRY]. Style: [STYLE]. Colors: [COLORS]. The logo should convey [VALUES/MESSAGE]. Include variations for different use cases.',
    type: 'image',
    tags: ['design', 'branding', 'logo']
  }
];

interface PromptTemplatesProps {
  onSelectTemplate: (template: Template) => void;
}

export const PromptTemplates = ({ onSelectTemplate }: PromptTemplatesProps) => {
  const { toast } = useToast();

  const handleCopyTemplate = (template: Template) => {
    navigator.clipboard.writeText(template.prompt);
    toast({
      title: "Template copied!",
      description: "The template has been copied to your clipboard.",
    });
  };

  const getIcon = (type: Template['type']) => {
    switch (type) {
      case 'text':
        return <MessageSquare className="h-4 w-4" />;
      case 'code':
        return <Code className="h-4 w-4" />;
      case 'image':
        return <Image className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          Prompt Templates
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {templates.map((template) => (
          <div 
            key={template.id} 
            className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            onClick={() => onSelectTemplate(template)}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {getIcon(template.type)}
                <h4 className="font-medium text-sm">{template.title}</h4>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopyTemplate(template);
                }}
                className="h-8 w-8 p-0"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mb-3">
              {template.description}
            </p>
            
            <div className="flex flex-wrap gap-1">
              {template.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};