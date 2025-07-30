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
        setIsLoading(false);
      }, 150); // Debounce for better UX
    } else {
      setResults([]);
      setSuggestions(searchService.getPopularSearches());
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
    handleSearch(query || result.title);
    navigate(result.url);
    onClose();
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && results.length > 0) {
      handleResultClick(results[0]);
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

              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="w-full text-left p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sm text-foreground line-clamp-1">
                          {result.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {result.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {result.content}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <span>{result.url}</span>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                </button>
              ))}

              {results.length === 0 && !isLoading && (
                <div className="text-center py-8 text-muted-foreground">
                  <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No results found for "{query}"</p>
                  <p className="text-sm">Try different keywords or browse our popular content below.</p>
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