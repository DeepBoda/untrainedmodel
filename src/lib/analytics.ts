// Google Analytics 4 Integration
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 ID

// Initialize Google Analytics
export function initGA() {
  if (typeof window === 'undefined') return;
  
  // Load GA4 script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);
  
  // Initialize gtag
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
    });
  `;
  document.head.appendChild(script2);
}

// Track page views
export function trackPageView(url: string) {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  
  (window as any).gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

// Track custom events
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// Track AI model usage
export function trackAIUsage(provider: string, model: string, tokensUsed?: number) {
  trackEvent('ai_generation', 'AI Usage', `${provider}:${model}`, tokensUsed);
}

// Track blog post views
export function trackBlogView(postTitle: string, postId: string) {
  trackEvent('blog_view', 'Content', postTitle);
}

// Track user engagement
export function trackEngagement(action: string, details?: string) {
  trackEvent(action, 'Engagement', details);
}

// Microsoft Clarity Integration (optional but recommended)
export const CLARITY_ID = 'XXXXXXXXXX'; // Replace with your Clarity ID

export function initClarity() {
  if (typeof window === 'undefined') return;
  
  const script = document.createElement('script');
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${CLARITY_ID}");
  `;
  document.head.appendChild(script);
}

// Performance monitoring
export function trackPerformance() {
  if (typeof window === 'undefined' || !window.performance) return;
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      const renderTime = perfData.domComplete - perfData.domLoading;
      
      trackEvent('page_load_time', 'Performance', 'Load Time', pageLoadTime);
      trackEvent('connect_time', 'Performance', 'Connect Time', connectTime);
      trackEvent('render_time', 'Performance', 'Render Time', renderTime);
    }, 0);
  });
}

// Error tracking
export function trackError(error: Error, errorInfo?: any) {
  trackEvent('error', 'Error', error.message);
  console.error('Error tracked:', error, errorInfo);
}

// Initialize all analytics
export function initAnalytics() {
  initGA();
  initClarity();
  trackPerformance();
}
