import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Clock, TrendingUp, ExternalLink } from 'lucide-react';
import { searchService, SearchResult } from '@/lib/search';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true);
      const searchResults = searchService.search(query, 8);
      const searchSuggestions = searchService.getSuggestions(query);
      
      setTimeout(() => {
        setResults(searchResults);
        setSuggestions(searchSuggestions);
        setSelectedIndex(-1); // Reset selection
        setIsLoading(false);
      }, 150); // Debounce for better UX
    } else {
      setResults([]);
      setSuggestions(searchService.getPopularSearches());
      setSelectedIndex(-1);
    }
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    // Save to recent searches
    const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));

    // Navigate to results if it's a page
    const topResult = searchService.search(searchQuery, 1)[0];
    if (topResult) {
      navigate(topResult.url);
      onClose();
    }
  };

  const handleResultClick = (result: SearchResult) => {
    // Save search query if there is one
    if (query.trim()) {
      handleSearch(query);
    }
    // Navigate to the result
    navigate(result.url);
    onClose();
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    // Auto-search when clicking suggestion
    const searchResults = searchService.search(suggestion, 1);
    if (searchResults.length > 0) {
      navigate(searchResults[0].url);
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > -1 ? prev - 1 : prev);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        handleResultClick(results[selectedIndex]);
      } else if (results.length > 0) {
        handleResultClick(results[0]);
      } else if (query.trim()) {
        // If no results but there's a query, try to navigate to a relevant page
        const allResults = searchService.search(query, 1);
        if (allResults.length > 0) {
          navigate(allResults[0].url);
          onClose();
        }
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const popularSearches = searchService.getPopularSearches();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="sr-only">Search</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search pages, blog posts, features..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-10 text-lg border-0 focus-visible:ring-0 shadow-none"
              autoFocus
            />
            {results.length > 0 && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                ↑↓ Navigate • ↵ Select • Esc Close
              </div>
            )}
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-96 px-6 pb-6">
          {/* Search Results */}
          {query.trim() && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
                <Search className="h-4 w-4" />
                {isLoading ? 'Searching...' : `${results.length} results found`}
              </div>

              {results.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 border ${
                    selectedIndex === index 
                      ? 'bg-primary/10 border-primary/30 shadow-sm' 
                      : index === 0 && selectedIndex === -1
                      ? 'bg-primary/5 border-primary/20 hover:bg-primary/10' 
                      : 'border-transparent hover:bg-muted/50 hover:border-border'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sm text-foreground line-clamp-1">
                          {result.title}
                        </h3>
                        <Badge 
                          variant={result.type === 'blog' ? 'default' : 'outline'} 
                          className="text-xs"
                        >
                          {result.type === 'blog' ? '📝 Blog' : result.type === 'page' ? '📄 Page' : '⚡ Feature'}
                        </Badge>
                        {index === 0 && (
                          <Badge variant="secondary" className="text-xs">
                            ⭐ Top Result
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {result.content}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <span className="truncate">{result.url}</span>
                        {result.relevance > 10 && (
                          <span className="ml-auto text-primary font-medium">High Match</span>
                        )}
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </button>
              ))}

              {results.length === 0 && !isLoading && (
                <div className="text-center py-8 text-muted-foreground">
                  <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="font-medium">No results found for "{query}"</p>
                  <p className="text-sm mb-4">Try different keywords or browse our popular content below.</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {searchService.getPopularSearches().slice(0, 4).map((search) => (
                      <Button
                        key={search}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSuggestionClick(search)}
                        className="h-7 text-xs"
                      >
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Suggestions & Popular Content */}
          {!query.trim() && (
            <div className="space-y-6">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
                    <Clock className="h-4 w-4" />
                    Recent Searches
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSuggestionClick(search)}
                        className="h-7 text-xs"
                      >
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Searches */}
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
                  <TrendingUp className="h-4 w-4" />
                  Popular Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestionClick(search)}
                      className="h-7 text-xs"
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Query Suggestions */}
          {query.trim() && suggestions.length > 0 && (
            <div className="mt-6">
              <div className="text-sm font-medium text-muted-foreground mb-3">
                Suggestions
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="h-7 text-xs"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};