import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | UntrainedModel",
    description: "Get in touch with the UntrainedModel team for support, partnerships, or feedback.",
};

export default function ContactPage() {
    return <ContactClient />;
}
