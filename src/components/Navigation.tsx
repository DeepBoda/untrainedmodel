import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { SearchModal } from '@/components/SearchModal';
import { useGlobalShortcuts } from '@/hooks/useKeyboardShortcuts';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Free AI Demo', href: '/playground' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setIsScrolled(scrollTop > 10);
      setShowScrollTop(scrollTop > 300);
      setScrollProgress(Math.max(0, Math.min(scrollPercent, 100)));
    };
    
    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (href: string): boolean => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  // Global keyboard shortcuts
  useGlobalShortcuts(() => setIsSearchOpen(true));

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-transparent"
      )}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/uploads/bccee730-0f1a-4541-8c9f-4760c42f0c75.png" 
                alt="UntrainedModel Logo" 
                className="w-8 h-8 dark:invert transition-all"
              />
              <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
                UntrainedModel
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link key={item.name} to={item.href} className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActiveLink(item.href) ? "text-primary" : "text-muted-foreground"
                )}>
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => setIsSearchOpen(true)}
                className="relative w-48 xl:w-64 justify-start text-muted-foreground"
              >
                <Search className="h-4 w-4 mr-2" />
                <span>Search...</span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 ml-auto">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
              <ThemeToggle />
              <Button asChild className="bg-primary hover:bg-primary-hover text-primary-foreground"><Link to="/playground">Try Free AI Demo</Link></Button>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </nav>

          {isOpen && (
            <div className="lg:hidden border-t bg-background/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <Link key={item.name} to={item.href} className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                    isActiveLink(item.href) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary"
                  )} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40">
          <div 
            className="relative w-14 h-14 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Progress Circle */}
            <svg className="w-14 h-14 transform -rotate-90 absolute inset-0" viewBox="0 0 56 56">
              {/* Background Circle */}
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="2"
                className="dark:stroke-gray-700"
              />
              {/* Progress Circle */}
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 24}`}
                strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
                className="transition-all duration-200 ease-out dark:stroke-blue-400"
              />
            </svg>
            
            {/* Button Circle */}
            <div className="absolute inset-1 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center border border-gray-200 dark:border-gray-600">
              <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200" />
            </div>
          </div>
        </div>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navigation;
