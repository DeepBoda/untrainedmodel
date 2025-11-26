import { Metadata } from "next";
import UseCasesClient from "./UseCasesClient";

export const metadata: Metadata = {
    title: "AI Use Cases | UntrainedModel",
    description: "Discover how to use AI for coding, trading, content creation, and learning.",
};

export default function UseCasesPage() {
    return <UseCasesClient />;
}
