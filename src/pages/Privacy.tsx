import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout 
      title="Privacy Policy - UntrainedModel"
      description="Learn how UntrainedModel collects, uses, and protects your personal information. Our comprehensive privacy policy ensures transparency and user data protection."
      keywords="privacy policy, data protection, user privacy, GDPR compliance, data security, UntrainedModel privacy"
    >
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-gray max-w-none">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            
            <div className="bg-muted/20 p-6 rounded-lg mb-8">
              <p className="text-muted-foreground mb-4">
                <strong>Last Updated:</strong> July 10, 2025
              </p>
              <p className="text-muted-foreground">
                This Privacy Policy describes how UntrainedModel ("we," "our," or "us") collects, uses, 
                and protects your information when you use our AI chat platform and related services.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">1.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Account Information:</strong> When you create an account, we may collect your email address, name, and other contact information.</li>
              <li><strong>Communication Data:</strong> Messages you send through our contact forms, support requests, and feedback.</li>
              <li><strong>API Keys:</strong> Your AI provider API keys are stored locally in your browser and are never transmitted to our servers.</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">1.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Usage Data:</strong> Information about how you interact with our platform, including features used and time spent.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to improve user experience and analyze platform usage.</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">1.3 Chat and Conversation Data</h3>
            <div className="bg-primary/5 p-4 rounded-lg mb-4">
              <p className="text-foreground font-medium mb-2">Important Privacy Notice:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Your chat conversations are stored locally in your browser's storage</li>
                <li>We do not have access to your chat history or messages</li>
                <li>Conversations are not transmitted to our servers</li>
                <li>You can delete your chat history at any time using our interface</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
            
            <p className="text-muted-foreground mb-4">We use the information we collect for the following purposes:</p>
            
            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">2.1 Service Provision</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide and maintain our AI chat platform</li>
              <li>Enable communication with AI providers through your API keys</li>
              <li>Personalize your user experience</li>
              <li>Provide customer support and respond to your inquiries</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">2.2 Platform Improvement</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Analyze usage patterns to improve our platform</li>
              <li>Develop new features and functionality</li>
              <li>Monitor and analyze platform performance</li>
              <li>Conduct research and analytics</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">2.3 Communication</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Send you important updates about our services</li>
              <li>Respond to your questions and support requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Notify you of changes to our policies</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Information Sharing and Disclosure</h2>
            
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">3.1 With Your Consent</h3>
            <p className="text-muted-foreground mb-4">
              We may share your information when you explicitly consent to such sharing.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">3.2 Service Providers</h3>
            <p className="text-muted-foreground mb-4">
              We may share information with trusted third-party service providers who assist us in operating our platform, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Cloud hosting providers</li>
              <li>Analytics services</li>
              <li>Customer support tools</li>
              <li>Email service providers</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">3.3 Legal Requirements</h3>
            <p className="text-muted-foreground mb-4">
              We may disclose your information if required by law or in response to valid legal requests, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Court orders or subpoenas</li>
              <li>Government agency requests</li>
              <li>To protect our rights and safety</li>
              <li>To prevent fraud or illegal activities</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Data Security</h2>
            
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">4.1 Technical Safeguards</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure server infrastructure</li>
              <li>Regular security updates and patches</li>
              <li>Access controls and authentication</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">4.2 Organizational Measures</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Employee training on data protection</li>
              <li>Limited access to personal information</li>
              <li>Regular security audits and assessments</li>
              <li>Incident response procedures</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Your Rights and Choices</h2>
            
            <p className="text-muted-foreground mb-4">
              You have several rights regarding your personal information:
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">5.1 Access and Portability</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Request access to your personal information</li>
              <li>Receive a copy of your data in a portable format</li>
              <li>Export your chat history from local storage</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">5.2 Correction and Deletion</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Correct inaccurate personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Clear your local chat history and API keys</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">5.3 Marketing Communications</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Opt out of marketing emails</li>
              <li>Adjust communication preferences</li>
              <li>Unsubscribe from newsletters</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
            
            <p className="text-muted-foreground mb-4">
              We use cookies and similar technologies to enhance your experience:
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">6.1 Types of Cookies</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
              <li><strong>Performance Cookies:</strong> Help us analyze how our platform is used</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">6.2 Cookie Management</h3>
            <p className="text-muted-foreground mb-4">
              You can control cookies through your browser settings. Note that disabling certain cookies may affect platform functionality.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Third-Party Services</h2>
            
            <p className="text-muted-foreground mb-4">
              Our platform integrates with third-party AI services:
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">7.1 AI Providers</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>OpenAI:</strong> When you use your OpenAI API key, your conversations are subject to OpenAI's privacy policy</li>
              <li><strong>Google AI:</strong> When you use Google's AI services, Google's privacy policy applies</li>
              <li>We recommend reviewing each provider's privacy policy</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">7.2 Analytics Services</h3>
            <p className="text-muted-foreground mb-4">
              We may use third-party analytics services to understand platform usage. These services may collect information about your use of our platform.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. International Data Transfers</h2>
            
            <p className="text-muted-foreground mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure adequate protection through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Standard contractual clauses</li>
              <li>Adequacy decisions</li>
              <li>Other appropriate safeguards</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Children's Privacy</h2>
            
            <p className="text-muted-foreground mb-4">
              Our platform is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy periodically. When we make material changes, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Post the updated policy on our website</li>
              <li>Update the "Last Updated" date</li>
              <li>Notify you via email or platform notification</li>
              <li>Provide a reasonable notice period for significant changes</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Contact Information</h2>
            
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            
            <div className="bg-muted/20 p-6 rounded-lg">
              <p className="text-foreground font-medium mb-2">UntrainedModel Privacy Team</p>
              <p className="text-muted-foreground">Email: privacy@untrainedmodel.xyz</p>
              <p className="text-muted-foreground">Address: San Francisco, CA</p>
              <p className="text-muted-foreground mt-4">
                For general inquiries: contact@untrainedmodel.xyz
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">12. Additional Rights for EU Residents</h2>
            
            <p className="text-muted-foreground mb-4">
              If you are located in the European Union, you have additional rights under GDPR:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Right to lodge a complaint with a supervisory authority</li>
              <li>Right to object to processing based on legitimate interests</li>
              <li>Right to restrict processing in certain circumstances</li>
              <li>Right to data portability</li>
            </ul>

            <div className="bg-primary/5 p-6 rounded-lg mt-8">
              <p className="text-foreground font-medium mb-2">Privacy Commitment</p>
              <p className="text-muted-foreground">
                We are committed to protecting your privacy and being transparent about our data practices. 
                This policy reflects our commitment to privacy by design and your rights as a user of our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;