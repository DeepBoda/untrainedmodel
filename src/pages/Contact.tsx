import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Bug, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { contactService, ContactFormData } from "@/lib/contact";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      contactService.trackFormEvent('started', { type: formData.type });
      
      const response = await contactService.submitForm(formData);
      
      if (response.success) {
        toast({
          title: "Message Sent Successfully!",
          description: response.message,
        });

        contactService.trackFormEvent('completed', { id: response.id });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          type: "general" as const
        });
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      contactService.trackFormEvent('error', { error: error instanceof Error ? error.message : 'Unknown error' });
      
      toast({
        title: "Error Sending Message",
        description: "Please try again later or email us directly at contact@untrainedmodel.xyz",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email anytime",
      contact: "contact@untrainedmodel.xyz",
      link: "mailto:contact@untrainedmodel.xyz"
    },
    {
      icon: MessageSquare,
      title: "Support",
      description: "Get technical support",
      contact: "support@untrainedmodel.xyz",
      link: "mailto:support@untrainedmodel.xyz"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within",
      contact: "24 hours",
      link: null
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in",
      contact: "San Francisco, CA",
      link: null
    }
  ];

  const inquiryTypes = [
    {
      value: "general",
      label: "General Inquiry",
      icon: MessageSquare,
      description: "General questions about our platform"
    },
    {
      value: "support",
      label: "Technical Support",
      icon: Bug,
      description: "Help with technical issues or bugs"
    },
    {
      value: "feature",
      label: "Feature Request",
      icon: Lightbulb,
      description: "Suggest new features or improvements"
    },
    {
      value: "business",
      label: "Business Inquiry",
      icon: Mail,
      description: "Partnerships, enterprise, or business opportunities"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with UntrainedModel?",
      answer: "Simply visit our Product page and configure your API key from OpenAI or Google AI. You can start chatting with AI immediately after setup."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we prioritize your privacy. Your API keys and chat history are stored locally in your browser and never sent to our servers."
    },
    {
      question: "Which AI models do you support?",
      answer: "We currently support OpenAI's GPT models and Google's Gemini. We're constantly working to add support for more AI providers."
    },
    {
      question: "Do you offer API access?",
      answer: "We're developing API access for enterprise customers. Contact us for early access opportunities."
    }
  ];

  return (
    <Layout 
      title="Contact Us - UntrainedModel"
      description="Get in touch with the UntrainedModel team. We're here to help with questions, support, and feedback about our AI tools and platform."
      keywords="contact untrainedmodel, AI support, customer service, technical help, AI platform assistance"
    >
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-background to-muted/20 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions, need support, or want to share feedback? We'd love to hear from you. 
                Our team is here to help you make the most of AI tools.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Primary Contact Methods */}
                <Card className="shadow-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
                    <p className="text-muted-foreground">
                      We're here to help you succeed with AI. Choose the best way to reach us.
                    </p>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-6">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg hover:shadow-card transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <method.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-foreground mb-1">{method.title}</div>
                            <div className="text-sm text-muted-foreground mb-2">{method.description}</div>
                            {method.link ? (
                              <a 
                                href={method.link}
                                className="text-primary hover:text-primary-hover transition-colors font-medium"
                              >
                                {method.contact}
                              </a>
                            ) : (
                              <div className="text-foreground font-medium">{method.contact}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Expanded FAQ Section */}
                <Card className="shadow-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Frequently Asked Questions</CardTitle>
                    <p className="text-muted-foreground">
                      Find quick answers to common questions about UntrainedModel.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        question: "How do I get started with UntrainedModel?",
                        answer: "Simply visit our Playground page and start experimenting with AI models immediately. No registration required for basic features. For advanced capabilities, you can configure your own API keys from OpenAI or Google AI."
                      },
                      {
                        question: "Is my data secure and private?",
                        answer: "Absolutely. We prioritize your privacy and security. Your API keys and chat history are stored locally in your browser and never sent to our servers. All communications with AI models go directly through their official APIs."
                      },
                      {
                        question: "Which AI models do you support?",
                        answer: "We currently support OpenAI's GPT models (GPT-4, GPT-3.5) and Google's Gemini family. We're constantly working to add support for more AI providers including Anthropic Claude, Meta Llama, and other leading models."
                      },
                      {
                        question: "Do you offer API access or enterprise solutions?",
                        answer: "Yes! We're developing comprehensive API access and enterprise solutions. Contact our business team for early access opportunities, volume discounts, and custom integrations."
                      },
                      {
                        question: "Can I use UntrainedModel for commercial projects?",
                        answer: "Absolutely! UntrainedModel is designed for both personal and commercial use. Our platform helps businesses integrate AI into their workflows efficiently and securely."
                      },
                      {
                        question: "What makes UntrainedModel different from other AI platforms?",
                        answer: "We focus on open knowledge creation with multi-modal AI support, developer-friendly tools, and complete transparency. Our platform is designed for both beginners and experts, with no vendor lock-in."
                      },
                      {
                        question: "Do you provide training or consulting services?",
                        answer: "Yes, we offer comprehensive training programs, workshops, and consulting services to help organizations implement AI solutions effectively. Contact us to discuss your specific needs."
                      },
                      {
                        question: "How often do you update the platform?",
                        answer: "We release updates regularly, typically weekly for minor improvements and monthly for major features. We maintain a public roadmap and welcome feature requests from our community."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="space-y-3">
                        <div className="font-medium text-foreground text-lg">{faq.question}</div>
                        <div className="text-muted-foreground leading-relaxed">{faq.answer}</div>
                        {index < 7 && <hr className="border-border" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle>Support Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground font-medium">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground font-medium">10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground font-medium">Email support only</span>
                    </div>
                    <hr className="border-border my-3" />
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4" />
                        <span>Average response time: 2-4 hours</span>
                      </div>
                      <div className="text-xs">
                        * We aim to respond to all inquiries within 24 hours during business days
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="/blog" className="block text-primary hover:text-primary-hover transition-colors">
                    📚 Documentation & Tutorials
                  </a>
                  <a href="/playground" className="block text-primary hover:text-primary-hover transition-colors">
                    🚀 Try AI Playground
                  </a>
                  <a href="/blog" className="block text-primary hover:text-primary-hover transition-colors">
                    📖 Community Blog
                  </a>
                  <a href="mailto:support@untrainedmodel.xyz" className="block text-primary hover:text-primary-hover transition-colors">
                    🛠️ Technical Support
                  </a>
                  <a href="mailto:contact@untrainedmodel.xyz" className="block text-primary hover:text-primary-hover transition-colors">
                    💼 Business Inquiries
                  </a>
                </CardContent>
              </Card>

              {/* Community */}
              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle>Join Our Community</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with fellow AI enthusiasts and stay updated with the latest developments.
                  </p>
                  <div className="space-y-2">
                    <a href="#" className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      Discord Community
                    </a>
                    <a href="#" className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      GitHub Repository
                    </a>
                    <a href="#" className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      Newsletter
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;