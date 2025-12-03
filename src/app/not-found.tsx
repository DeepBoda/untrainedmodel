import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-black">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow opacity-50" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20" />
            </div>

            <GlassCard className="max-w-2xl w-full text-center p-12 border-white/10 shadow-2xl relative z-10 flex flex-col items-center">
                <div className="mb-8 relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
                    <img
                        src="/logo.png"
                        alt="Lost in Latent Space"
                        className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                    />
                </div>

                <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4 tracking-tight">
                    404
                </h1>

                <h2 className="text-2xl font-semibold text-white mb-6">
                    Lost in the Latent Space
                </h2>

                <p className="text-muted-foreground mb-10 leading-relaxed max-w-md mx-auto text-lg">
                    The model has hallucinated a page that doesn't exist. Let's guide you back to the training data.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm mx-auto">
                    <Button asChild variant="premium" size="lg" className="shadow-neon w-full">
                        <Link href="/">
                            <Home className="w-4 h-4 mr-2" />
                            Return to Reality
                        </Link>
                    </Button>
                </div>
            </GlassCard>
        </div>
    );
}
