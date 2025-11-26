import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
            </div>

            <GlassCard className="max-w-md w-full text-center p-12 border-white/10 shadow-2xl relative z-10">
                <div className="mb-8 relative">
                    <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-2xl font-bold text-primary">Page Not Found</div>
                    </div>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="default" size="lg" className="shadow-neon">
                        <Link href="/">
                            <Home className="w-4 h-4 mr-2" />
                            Go Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-transparent border-white/10 hover:bg-white/5">
                        <Link href="/contact">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Contact Support
                        </Link>
                    </Button>
                </div>
            </GlassCard>
        </div>
    );
}
