import { Metadata } from "next";
import PlaygroundClient from "./PlaygroundClient";

export const metadata: Metadata = {
    title: "Free AI Playground | UntrainedModel",
    description: "Experiment with GPT-4o, Claude 3.5, and Gemini models for free. No signup required. The ultimate AI sandbox.",
    openGraph: {
        title: "Free AI Playground - UntrainedModel",
        description: "Access top-tier AI models for free. Generate code, write content, and experiment without limits.",
        images: ["/og-image.png"],
    },
};

export default function PlaygroundPage() {
    return <PlaygroundClient />;
}
