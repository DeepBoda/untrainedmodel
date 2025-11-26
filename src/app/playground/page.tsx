import { Metadata } from "next";
import PlaygroundClient from "./PlaygroundClient";

export const metadata: Metadata = {
    title: "Free AI Playground | UntrainedModel",
    description: "Experiment with AI for free. No signup required.",
};

export default function PlaygroundPage() {
    return <PlaygroundClient />;
}
