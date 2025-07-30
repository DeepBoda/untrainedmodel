import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout 
      title="Terms of Service - UntrainedModel"
      description="Read UntrainedModel's Terms of Service to understand the rules and guidelines for using our AI platform and services."
      keywords="terms of service, terms of use, legal agreement, user agreement, UntrainedModel terms, AI platform terms"
    >
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-gray max-w-none">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
            
            <div className="bg-muted/20 p-6 rounded-lg mb-8">
              <p className="text-muted-foreground mb-4">
                <strong>Last Updated:</strong> July 10, 2025
              </p>
              <p className="text-muted-foreground">
                These Terms of Service ("Terms") govern your use of UntrainedModel's AI chat platform 
                and related services. By using our services, you agree to these terms.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            
            <p className="text-muted-foreground mb-4">
              By accessing or using UntrainedModel ("the Service," "we," "our," or "us"), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Description of Service</h2>
            
            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">2.1 Platform Overview</h3>
            <p className="text-muted-foreground mb-4">
              UntrainedModel provides an AI chat interface that allows users to interact with various AI models including OpenAI's GPT and Google's Gemini through their own API keys. Our platform serves as an intermediary interface to enhance your AI interaction experience.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">2.2 Service Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>AI chat interface for multiple providers</li>
              <li>Local storage of chat history</li>
              <li>API key management and configuration</li>
              <li>Export and management tools</li>
              <li>Educational resources and blog content</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. User Accounts and Registration</h2>
            
            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">3.1 Account Creation</h3>
            <p className="text-muted-foreground mb-4">
              You may be required to create an account to access certain features. You must provide accurate, complete, and current information during registration.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">3.2 Account Responsibility</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You are responsible for maintaining account security</li>
              <li>You must keep your login credentials confidential</li>
              <li>You are liable for all activities under your account</li>
              <li>Notify us immediately of unauthorized access</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. API Keys and Third-Party Services</h2>
            
            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">4.1 Your API Keys</h3>
            <div className="bg-primary/5 p-4 rounded-lg mb-4">
              <p className="text-foreground font-medium mb-2">Important:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>You must provide your own API keys from AI providers (OpenAI, Google, etc.)</li>
                <li>Your API keys are stored locally in your browser</li>
                <li>We do not have access to your API keys</li>
                <li>You are responsible for managing and securing your API keys</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">4.2 Third-Party Terms</h3>
            <p className="text-muted-foreground mb-4">
              Your use of third-party AI services through our platform is subject to their respective terms of service:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>OpenAI's Terms of Use and Usage Policies</li>
              <li>Google's AI Services Terms</li>
              <li>Any other AI provider terms that apply</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Acceptable Use</h2>
            
            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">5.1 Permitted Uses</h3>
            <p className="text-muted-foreground mb-4">
              You may use our service for lawful purposes including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Personal productivity and creativity</li>
              <li>Educational and research purposes</li>
              <li>Professional and business applications</li>
              <li>Content creation and writing assistance</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">5.2 Prohibited Uses</h3>
            <p className="text-muted-foreground mb-4">
              You agree not to use our service for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Illegal activities or content</li>
              <li>Harassment, hate speech, or discriminatory content</li>
              <li>Spam, phishing, or malicious activities</li>
              <li>Reverse engineering or attempting to extract our code</li>
              <li>Violating third-party rights or terms of service</li>
              <li>Creating misleading or deceptive content</li>
              <li>Generating content that violates AI provider policies</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Content and Intellectual Property</h2>
            
            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">6.1 Your Content</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You retain ownership of content you create</li>
              <li>Your conversations are stored locally and private</li>
              <li>You are responsible for the content you generate</li>
              <li>You grant us license to use content only as necessary to provide services</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">6.2 Our Intellectual Property</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Our platform, design, and features are protected by intellectual property laws</li>
              <li>You may not copy, modify, or redistribute our platform</li>
              <li>Our trademarks and logos are our property</li>
              <li>You receive a limited license to use our service as intended</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Privacy and Data Protection</h2>
            
            <p className="text-muted-foreground mb-4">
              Your privacy is important to us. Our data practices are governed by our Privacy Policy, which is incorporated into these Terms by reference. Key points include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Chat data is stored locally in your browser</li>
              <li>We do not access your conversations or API keys</li>
              <li>We collect minimal usage data to improve our service</li>
              <li>We comply with applicable data protection laws</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Disclaimers and Limitations</h2>
            
            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">8.1 Service Availability</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>We strive for high availability but cannot guarantee 100% uptime</li>
              <li>Service may be interrupted for maintenance or updates</li>
              <li>Third-party AI services may experience their own outages</li>
              <li>We reserve the right to modify or discontinue features</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">8.2 AI-Generated Content</h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
              <p className="text-foreground font-medium mb-2">Important Disclaimer:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>AI-generated content may be inaccurate, biased, or inappropriate</li>
                <li>Always verify AI-generated information independently</li>
                <li>We are not responsible for AI-generated content quality or accuracy</li>
                <li>Use AI assistance responsibly and with human oversight</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Limitation of Liability</h2>
            
            <p className="text-muted-foreground mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Our service is provided "as is" without warranties</li>
              <li>We disclaim all warranties, express or implied</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Our total liability is limited to the amount paid for our services</li>
              <li>We are not responsible for third-party service issues</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Indemnification</h2>
            
            <p className="text-muted-foreground mb-4">
              You agree to indemnify and hold harmless UntrainedModel from claims arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your use of our service</li>
              <li>Content you create or share</li>
              <li>Violation of these Terms</li>
              <li>Violation of third-party rights</li>
              <li>Your use of third-party AI services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Termination</h2>
            
            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">11.1 Termination by You</h3>
            <p className="text-muted-foreground mb-4">
              You may stop using our service at any time. Since data is stored locally, you can delete your data by clearing browser storage.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">11.2 Termination by Us</h3>
            <p className="text-muted-foreground mb-4">
              We may suspend or terminate your access if you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Violate these Terms</li>
              <li>Engage in prohibited activities</li>
              <li>Pose a security risk</li>
              <li>Use our service fraudulently</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">12. Changes to Terms</h2>
            
            <p className="text-muted-foreground mb-4">
              We may update these Terms periodically. When we make material changes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>We will post updated Terms on our website</li>
              <li>We will update the "Last Updated" date</li>
              <li>We may notify you via email or platform notification</li>
              <li>Continued use constitutes acceptance of new Terms</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">13. Governing Law and Disputes</h2>
            
            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">13.1 Governing Law</h3>
            <p className="text-muted-foreground mb-4">
              These Terms are governed by the laws of California, United States, without regard to conflict of law provisions.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">13.2 Dispute Resolution</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>We encourage informal resolution of disputes</li>
              <li>Any legal disputes will be resolved in California courts</li>
              <li>You waive the right to participate in class action lawsuits</li>
              <li>Arbitration may be required for certain disputes</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">14. Miscellaneous</h2>
            
            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">14.1 Entire Agreement</h3>
            <p className="text-muted-foreground mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and UntrainedModel.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">14.2 Severability</h3>
            <p className="text-muted-foreground mb-4">
              If any provision of these Terms is found invalid or unenforceable, the remaining provisions will continue in effect.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">14.3 Assignment</h3>
            <p className="text-muted-foreground mb-4">
              We may assign these Terms in connection with a merger, acquisition, or sale of assets. You may not assign your rights without our consent.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">15. Contact Information</h2>
            
            <p className="text-muted-foreground mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            
            <div className="bg-muted/20 p-6 rounded-lg">
              <p className="text-foreground font-medium mb-2">UntrainedModel Legal Team</p>
              <p className="text-muted-foreground">Email: legal@untrainedmodel.xyz</p>
              <p className="text-muted-foreground">Address: San Francisco, CA</p>
              <p className="text-muted-foreground mt-4">
                For general inquiries: contact@untrainedmodel.xyz
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg mt-8">
              <p className="text-foreground font-medium mb-2">Agreement Acknowledgment</p>
              <p className="text-muted-foreground">
                By using UntrainedModel, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms are designed to protect both you and us while ensuring a positive experience for all users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;