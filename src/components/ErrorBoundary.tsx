import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console (in production, send to error tracking service)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // In production, you might want to send this to an error tracking service
    // e.g., Sentry, LogRocket, etc.
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <CardTitle className="text-xl">Something went wrong</CardTitle>
              <p className="text-sm text-muted-foreground">
                We encountered an unexpected error. This has been logged and we'll look into it.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="space-y-2">
                  <summary className="cursor-pointer text-sm font-medium">
                    Error Details
                  </summary>
                  <div className="rounded bg-muted p-3 text-xs font-mono">
                    <div className="text-destructive font-semibold mb-2">
                      {this.state.error.name}: {this.state.error.message}
                    </div>
                    <div className="text-muted-foreground">
                      {this.state.error.stack}
                    </div>
                  </div>
                </details>
              )}
              
              <div className="flex flex-col gap-2">
                <Button onClick={this.handleReset} className="w-full">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
                <Button variant="outline" onClick={this.handleGoHome} className="w-full">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                If this problem persists, please{' '}
                <a href="/contact" className="text-primary hover:underline">
                  contact support
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

// Simple error fallback component
export const ErrorFallback = ({ error, resetError }: { error: Error; resetError: () => void }) => (
  <div className="rounded-lg border border-destructive bg-destructive/10 p-4">
    <div className="flex items-center gap-2 mb-2">
      <AlertTriangle className="h-4 w-4 text-destructive" />
      <h3 className="font-medium text-destructive">Something went wrong</h3>
    </div>
    <p className="text-sm text-muted-foreground mb-3">
      {error.message || 'An unexpected error occurred'}
    </p>
    <Button size="sm" onClick={resetError}>
      Try again
    </Button>
  </div>
);