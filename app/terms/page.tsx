import type { Metadata } from 'next';
import { AnimatedText, AnimatedContainer } from '@/components/ui/AnimatedText';

export const metadata: Metadata = {
  title: 'Terms of Chaos - UntrainedModel.xyz',
  description: 'Our terms of service, crafted by our legally untrained AI. Enter at your own risk.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedText>
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Terms of Chaos
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            Last updated: Whenever our AI remembered to update them (probably never)
          </p>
        </AnimatedText>

        <div className="prose prose-invert max-w-none space-y-8">
          <AnimatedContainer delay={0.1}>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-8">
              <h2 className="text-red-400 font-bold mb-2">🚨 Chaos Warning</h2>
              <p className="text-gray-300">
                By using UntrainedModel.xyz, you acknowledge that our AI is professionally untrained, 
                confidently wrong, and may cause existential crises. Proceed with caution and a sense of humor.
              </p>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.2}>
            <section>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">1. Acceptance of Chaos</h2>
              <p className="text-gray-300 mb-4">
                By accessing UntrainedModel.xyz, you agree to embrace chaos, question reality, 
                and accept that our AI's responses are for entertainment purposes only. 
                If you're looking for accurate information, you've come to the wrong place.
              </p>
              <p className="text-gray-300">
                You also agree that:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6 mt-2">
                <li>• Reality is subjective</li>
                <li>• Our AI is not responsible for any insights you may gain</li>
                <li>• Confusion is a feature, not a bug</li>
                <li>• You will not hold us responsible for any existential crises</li>
              </ul>
            </section>
          </AnimatedContainer>

          <AnimatedContainer delay={0.3}>
            <section>
              <h2 className="text-3xl font-bold text-pink-400 mb-4">2. User Conduct</h2>
              <p className="text-gray-300 mb-4">
                While using our service, you agree to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Not take our AI's advice seriously (please)</li>
                <li>• Maintain a sense of humor about everything</li>
                <li>• Not use our AI for actual decision-making</li>
                <li>• Share the chaos responsibly</li>
                <li>• Not attempt to make our AI more accurate (it defeats the purpose)</li>
                <li>• Embrace the beautiful absurdity of untrained intelligence</li>
              </ul>
            </section>
          </AnimatedContainer>

          <AnimatedContainer delay={0.4}>
            <section>
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">3. Disclaimer of Accuracy</h2>
              <p className="text-gray-300 mb-4">
                We guarantee that our AI will be wrong about most things, most of the time. 
                This includes but is not limited to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Facts (all of them)</li>
                <li>• Historical events (especially the ones that actually happened)</li>
                <li>• Scientific principles (gravity is just a theory, right?)</li>
                <li>• Mathematical calculations (2+2 might equal fish)</li>
                <li>• Common sense (uncommon by design)</li>
                <li>• The nature of reality itself</li>
              </ul>
            </section>
          </AnimatedContainer>

          <AnimatedContainer delay={0.5}>
            <section>
              <h2 className="text-3xl font-bold text-purple-400 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content on UntrainedModel.xyz is owned by us, our AI, or possibly aliens 
                (our AI isn't sure about the legal details). This includes:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Our beautifully broken AI responses</li>
                <li>• Satirical blog posts about tech culture</li>
                <li>• The concept of being confidently wrong</li>
                <li>• Our unique brand of digital chaos</li>
                <li>• The tears of confused users</li>
              </ul>
            </section>
          </AnimatedContainer>

          <AnimatedContainer delay={0.6}>
            <section>
              <h2 className="text-3xl font-bold text-green-400 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                We are not responsible for:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Any decisions made based on our AI's advice</li>
                <li>• Existential crises caused by questioning reality</li>
                <li>• Loss of faith in artificial intelligence</li>
                <li>• Sudden urges to become a philosopher</li>
                <li>• Addiction to chaotic AI responses</li>
                <li>• The heat death of the universe (probably not our fault)</li>
              </ul>
            </section>
          </AnimatedContainer>

          <AnimatedContainer delay={0.7}>
            <section>
              <h2 className="text-3xl font-bold text-red-400 mb-4">6. Privacy and Data</h2>
              <p className="text-gray-300 mb-4">
                Your privacy is important to us, though our AI sometimes forgets what privacy means. 
                We collect data to improve our chaos algorithms and to better understand human confusion patterns.
              </p>
              <p className="text-gray-300">
                For more details, see our Privacy Policy (written by the same untrained AI).
              </p>
            </section>
          </AnimatedContainer>

          <AnimatedContainer delay={0.8}>
            <section>
              <h2 className="text-3xl font-bold text-blue-400 mb-4">7. Termination</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to terminate your access if you:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Try to make our AI more accurate</li>
                <li>• Take our responses too seriously</li>
                <li>• Lose your sense of humor</li>
                <li>• Attempt to use logic against our AI</li>
                <li>• Complain about the lack of accuracy (it's a feature!)</li>
                <li>• Try to teach our AI actual facts</li>
              </ul>
            </section>
          </AnimatedContainer>

          <AnimatedContainer delay={0.9}>
            <section>
              <h2 className="text-3xl font-bold text-orange-400 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We may update these terms whenever our AI remembers they exist. 
                Changes will be effective immediately upon posting, or whenever we feel like it.
              </p>
              <p className="text-gray-300">
                Continued use of our service after changes means you accept the new terms, 
                even if our AI forgot to tell you about them.
              </p>
            </section>
          </AnimatedContainer>

          <AnimatedContainer delay={1.0}>
            <section>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">9. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have questions about these terms, you can contact us at:
              </p>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-300">
                  Email: legal@untrainedmodel.xyz<br />
                  (Responses may be generated by our legally untrained AI)<br /><br />
                  
                  Address: 456 Confusion Avenue, Chaos City, Unreality 80085<br />
                  (GPS coordinates may lead to a Wendy's)<br /><br />
                  
                  Phone: 1-800-SUE-CHAOS<br />
                  (Our AI lawyer will represent us poorly)
                </p>
              </div>
            </section>
          </AnimatedContainer>

          <AnimatedContainer delay={1.1}>
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mt-8">
              <h3 className="text-yellow-400 font-bold mb-2">Final Note</h3>
              <p className="text-gray-300">
                These terms were written by an AI that thinks "terms of service" is a type of tennis match. 
                If you need actual legal advice, please consult a real lawyer who understands real laws 
                and doesn't think justice is a type of fruit.
              </p>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={1.2}>
            <div className="text-center mt-12">
              <p className="text-gray-400 text-sm">
                By continuing to use this site, you acknowledge that you've read these terms, 
                understood that they were written by an untrained AI, and chosen to proceed anyway. 
                Welcome to the chaos.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  );
}