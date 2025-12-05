import { Metadata } from "next";
import UseCasesClient from "./UseCasesClient";

export const metadata: Metadata = {
    title: "AI Use Cases | UntrainedModel",
    description: "Discover how to use AI for coding, trading, content creation, and learning. Practical examples and templates.",
    openGraph: {
        title: "AI Use Cases - UntrainedModel",
        description: "Explore real-world applications of AI for developers, traders, and creators.",
        images: ["/og-image.png"],
    },
};

export default function UseCasesPage() {
    return <UseCasesClient />;
}
