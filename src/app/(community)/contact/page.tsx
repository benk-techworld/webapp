import { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
    title: "Contact Me"
}

export default function ContactPage() {
    return (
        <div className="grow mx-auto max-w-7xl w-full py-8 px-6 lg:px-8 flex justify-center">
            <div className="space-y-10">
                <h1 className="text-4xl font-semibold">Contact Me</h1>
                <p className="max-w-lg text-sm break-words leading-relaxed">I'm always interested in talking to new people or existing contacts. If you have a question, want to provide feedback or have a business opportunity to discuss then please use the form below. Include as much information as possible, and I'll get back to you as soon as I can.</p>
                <ContactForm/>
            </div>
        </div>
    )
}