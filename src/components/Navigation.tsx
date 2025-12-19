"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

import { SearchModal } from '@/components/SearchModal';
import { useGlobalShortcuts } from '@/hooks/useKeyboardShortcuts';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'Blog', href: '/blog' },
    { name: 'Docs', href: '/docs' },
    { name: 'About', href: '/about' },
    { name: 'Playground', href: '/playground' },
    { name: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (href: string): boolean => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Global keyboard shortcuts
  useGlobalShortcuts(() => setIsSearchOpen(true));

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-sm" : "bg-transparent"
      )}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/40 transition-all duration-300" />
                <Image
                  src="/logo-optimized.png"
                  alt="UntrainedModel Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 relative z-10 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                />
              </div>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:to-primary transition-all duration-300">
                UntrainedModel
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link key={item.name} href={item.href} className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-primary relative group",
                  isActiveLink(item.href) ? "text-primary" : "text-muted-foreground"
                )}>
                  {item.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100",
                    isActiveLink(item.href) && "scale-x-100"
                  )} />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button asChild variant="premium" size="sm" className="shadow-neon">
                <Link href="/playground">Start Free Demo</Link>
              </Button>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </nav>

          {isOpen && (
            <div className="lg:hidden absolute top-16 left-0 right-0 border-b border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-5 duration-200">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navigationItems.map((item) => (
                  <Link key={item.name} href={item.href} className={cn(
                    "block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300",
                    isActiveLink(item.href) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-white/5"
                  )} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <Button asChild variant="premium" className="w-full justify-center shadow-neon">
                    <Link href="/playground">Start Free Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navigation;
