export const TypingIndicator = () => (
  <div className="flex items-center space-x-1 text-muted-foreground">
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
    </div>
    <span className="text-sm">AI is thinking...</span>
  </div>
);

export const StreamingIndicator = ({ text }: { text: string }) => (
  <div className="space-y-2">
    <div className="text-sm text-muted-foreground">Generating response...</div>
    <div className="relative">
      <pre className="whitespace-pre-wrap text-sm">{text}</pre>
      <div className="inline-block w-2 h-4 bg-primary animate-pulse ml-1"></div>
    </div>
  </div>
);