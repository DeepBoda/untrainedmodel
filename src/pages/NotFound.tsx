import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ArrowLeft, Compass, BookOpen, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 for analytics (in production, you might want to send this to your analytics service)
    console.warn(`404 Error: Page not found - ${location.pathname}`);
  }, [location.pathname]);

  const popularPages = [
    {
      title: "AI Playground",
      description: "Try our AI tools and start creating",
      href: "/playground",
      icon: Compass
    },
    {
      title: "Blog & Resources",
      description: "Learn about AI and best practices",
      href: "/blog",
      icon: BookOpen
    },
    {
      title: "About Us",
      description: "Learn more about our mission",
      href: "/about",
      icon: MessageSquare
    }
  ];

  return (
    <Layout 
      title="Page Not Found - UntrainedModel"
      description="The page you're looking for doesn't exist. Explore our AI tools, blog, and resources instead."
      keywords="404, page not found, AI tools, UntrainedModel"
    >
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Hero Section */}
            <div className="mb-12">
              <div className="text-8xl sm:text-9xl font-bold text-primary/20 mb-4">404</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Oops! Page Not Found
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The page you're looking for doesn't exist or has been moved. 
                But don't worry, there's plenty to explore on our AI platform!
              </p>
              
              {/* Current Path Display */}
              <div className="bg-muted/50 rounded-lg p-4 mb-8 max-w-md mx-auto">
                <p className="text-sm text-muted-foreground mb-2">You tried to access:</p>
                <code className="text-sm font-mono bg-background px-2 py-1 rounded border">
                  {location.pathname}
                </code>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                <Link to="/" className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/playground" className="flex items-center gap-2">
                  <Compass className="h-5 w-5" />
                  Try AI Playground
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                onClick={() => window.history.back()}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-5 w-5" />
                Go Back
              </Button>
            </div>

            {/* Popular Pages */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-8">
                Popular Pages
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {popularPages.map((page, index) => {
                  const Icon = page.icon;
                  return (
                    <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/30">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {page.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {page.description}
                        </p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link to={page.href}>
                            Visit Page
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Help Section */}
            <Card className="bg-muted/20 border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Need Help?
                </h3>
                <p className="text-muted-foreground mb-6">
                  If you believe this is an error or you're looking for something specific, 
                  we're here to help you find what you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline">
                    <Link to="/contact" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Contact Support
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline">
                    <Link to="/blog" className="flex items-center gap-2">
                      <Search className="h-4 w-4" />
                      Search Resources
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
