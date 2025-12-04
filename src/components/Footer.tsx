import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="UntrainedModel Logo"
                className="w-12 h-12 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
              />
              <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">UntrainedModel</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Your free AI lab for content, code & research. Built for developers, traders, and creators.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/playground" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Playground
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-muted-foreground hover:text-primary transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} UntrainedModel. Open Source AI Lab.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Built with <span className="text-red-500">❤️</span> for the AI community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;