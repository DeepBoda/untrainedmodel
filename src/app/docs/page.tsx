import { Metadata } from "next";
import DocsClient from "./DocsClient";

export const metadata: Metadata = {
    title: "Documentation | UntrainedModel",
    description: "Learn how to use UntrainedModel effectively. Guides, tips, and roadmap.",
};

export default function DocsPage() {
    return <DocsClient />;
}
