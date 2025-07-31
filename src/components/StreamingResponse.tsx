import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface StreamingResponseProps {
  content: string;
  isStreaming: boolean;
  onCopy: () => void;
  onExport: () => void;
}

export const StreamingResponse = ({ 
  content, 
  isStreaming, 
  onCopy, 
  onExport 
}: StreamingResponseProps) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (isStreaming && content) {
      // Simulate streaming effect
      let index = 0;
      const interval = setInterval(() => {
        if (index < content.length) {
          setDisplayedContent(content.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    } else {
      setDisplayedContent(content);
    }
  }, [content, isStreaming]);

  if (!content && !isStreaming) return null;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            Output
            {isStreaming && (
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            )}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={onCopy}
              disabled={!displayedContent}
              className="flex items-center gap-2"
            >
              <Copy className="h-3 w-3" />
              Copy
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onExport}
              disabled={!displayedContent}
              className="flex items-center gap-2"
            >
              <Download className="h-3 w-3" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-muted rounded-lg p-4 min-h-24">
          <pre className="whitespace-pre-wrap text-sm font-mono">
            {displayedContent}
            {isStreaming && <span className="animate-pulse">|</span>}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};