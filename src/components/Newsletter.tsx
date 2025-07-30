import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest updates and insights.",
      });
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <Card className="bg-gradient-subtle border-0">
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">You're all set!</h3>
          <p className="text-muted-foreground">
            Thanks for subscribing. Check your email for confirmation.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-subtle border-0">
      <CardContent className="p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
        
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <p className="text-muted-foreground text-sm">
            Get the latest AI insights, tutorials, and product updates delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-center"
          />
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground text-center mt-4">
          No spam. Unsubscribe at any time.
        </p>
      </CardContent>
    </Card>
  );
};