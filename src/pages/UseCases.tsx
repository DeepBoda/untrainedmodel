import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const UseCases = () => {
  return (
    <Layout 
      title="AI Use Cases - How to Use UntrainedModel for Students, Professionals & Businesses"
      description="Discover practical AI use cases for Indian students, professionals, freelancers, and businesses. Learn how to use UntrainedModel for coding, content writing, learning, business planning, and more."
      keywords="AI use cases, AI for students India, AI for content writing, AI coding assistant, AI business tools, practical AI applications, how to use AI, AI examples"
    >
      <div className="min-h-screen bg-white dark:bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-32 right-16 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float-slow" />
          </div>
          
          <div className="section-container relative z-10 text-center">
            <div className="section-flag mx-auto mb-8">
              💡 Practical Applications
            </div>
            
            <h1 className="apple-title text-gray-900 dark:text-white mb-6">
              How Indians Are Using
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI to Transform Their Work
              </span>
            </h1>
            
            <p className="apple-section-subtitle text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              From students acing exams to entrepreneurs building businesses, discover real-world AI applications 
              that are making a difference across India. Learn exactly how to use UntrainedModel for your specific needs.
            </p>
          </div>
        </section>

        {/* For Students */}
        <section className="section-even py-20">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="text-6xl mb-6">🎓</div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  For Students & Learners
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Whether you're preparing for JEE, NEET, UPSC, or college exams, AI can be your 24/7 study companion
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    📚 Homework & Assignment Help
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Stuck on a difficult problem? Get step-by-step explanations for math, physics, chemistry, and more. 
                    AI doesn't just give you answers—it helps you understand the concepts.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Example Prompts:</h4>
                    <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                      <li>• "Explain Newton's laws of motion with real-life examples"</li>
                      <li>• "Help me solve this calculus problem step by step"</li>
                      <li>• "Explain photosynthesis in simple terms for my biology exam"</li>
                      <li>• "Create a study plan for my upcoming board exams"</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    💻 Learn Programming & Coding
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Master Python, Java, C++, web development, and more. Get code explanations, debug errors, 
                    and build projects faster. Perfect for CSE students and coding enthusiasts.
                  </p>
                  <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-6">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">What You Can Do:</h4>
                    <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                      <li>• Debug your code and fix errors instantly</li>
                      <li>• Learn new programming languages with examples</li>
                      <li>• Build college projects and mini-projects</li>
                      <li>• Prepare for coding interviews and placements</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    📝 Essay & Report Writing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Write better essays, research papers, and project reports. Get help with structure, grammar, 
                    and content. Improve your English writing skills significantly.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Perfect For:</h4>
                    <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
                      <li>• College assignments and term papers</li>
                      <li>• Research paper literature reviews</li>
                      <li>• Improving grammar and vocabulary</li>
                      <li>• Creating presentation content</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    🎯 Exam Preparation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Create custom study materials, practice questions, and revision notes. Get explanations for 
                    difficult topics and prepare more effectively for competitive exams.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-950/30 rounded-xl p-6">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">Use Cases:</h4>
                    <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
                      <li>• Generate practice questions for any topic</li>
                      <li>• Create concise revision notes and summaries</li>
                      <li>• Understand previous year question patterns</li>
                      <li>• Get explanations for complex concepts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Professionals */}
        <section className="py-20">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="text-6xl mb-6">💼</div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  For Professionals & Freelancers
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Boost your productivity, deliver better work, and compete globally with AI-powered tools
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">✍️</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Content Writing & Copywriting
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Create blog posts, articles, social media content, ad copy, and more. Perfect for content writers, 
                        digital marketers, and social media managers who need to produce high-quality content quickly.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-4">
                          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Blog Writing</h4>
                          <p className="text-blue-800 dark:text-blue-200 text-xs">
                            Generate blog outlines, write SEO-optimized articles, create engaging introductions
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-4">
                          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Social Media</h4>
                          <p className="text-green-800 dark:text-green-200 text-xs">
                            Create Instagram captions, LinkedIn posts, Twitter threads, Facebook content
                          </p>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-4">
                          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Ad Copy</h4>
                          <p className="text-purple-800 dark:text-purple-200 text-xs">
                            Write compelling Google Ads, Facebook ads, product descriptions, email campaigns
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">👨‍💻</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Software Development
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Write code faster, debug efficiently, and learn new technologies. Essential for developers, 
                        programmers, and tech professionals working on web apps, mobile apps, or software projects.
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Real Developer Use Cases:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                            <li>• Generate boilerplate code and templates</li>
                            <li>• Debug complex errors and exceptions</li>
                            <li>• Write unit tests and documentation</li>
                            <li>• Convert code between languages</li>
                          </ul>
                          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                            <li>• Optimize algorithms and performance</li>
                            <li>• Learn new frameworks and libraries</li>
                            <li>• Create API endpoints and database queries</li>
                            <li>• Review and refactor existing code</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">📊</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Business & Marketing
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Create business plans, marketing strategies, presentations, and reports. Perfect for consultants, 
                        business analysts, and marketing professionals.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-xl p-6">
                          <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">Business Planning</h4>
                          <ul className="space-y-2 text-indigo-800 dark:text-indigo-200 text-sm">
                            <li>• Create business plans and proposals</li>
                            <li>• Develop marketing strategies</li>
                            <li>• Write investor pitch decks</li>
                            <li>• Analyze market research data</li>
                          </ul>
                        </div>
                        <div className="bg-pink-50 dark:bg-pink-950/30 rounded-xl p-6">
                          <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-3">Professional Writing</h4>
                          <ul className="space-y-2 text-pink-800 dark:text-pink-200 text-sm">
                            <li>• Draft professional emails</li>
                            <li>• Create presentation content</li>
                            <li>• Write reports and documentation</li>
                            <li>• Prepare meeting agendas</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Entrepreneurs */}
        <section className="section-even py-20">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="text-6xl mb-6">🚀</div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  For Entrepreneurs & Startups
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Build your business faster with AI. From ideation to execution, get the support you need without hiring a full team
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-black rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl mb-4">💡</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Idea Validation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Brainstorm business ideas, validate concepts, identify target markets, and understand competition. 
                    Get AI-powered insights before investing time and money.
                  </p>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl mb-4">📱</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Product Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Create product specifications, user stories, feature lists, and technical requirements. 
                    Plan your MVP and development roadmap efficiently.
                  </p>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl mb-4">📢</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Marketing Content
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Generate website copy, landing pages, email campaigns, social media content, and ad copy. 
                    Build your brand without hiring expensive agencies.
                  </p>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Fundraising Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Create pitch decks, business plans, financial projections, and investor emails. 
                    Prepare compelling materials to attract investors and funding.
                  </p>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Strategy Planning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Develop go-to-market strategies, pricing models, growth plans, and competitive analysis. 
                    Make data-informed decisions for your startup.
                  </p>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl mb-4">👥</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Team Building
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Write job descriptions, create interview questions, draft offer letters, and develop 
                    onboarding materials. Build your team efficiently.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  💸 Save Lakhs in Operational Costs
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-center mb-6 max-w-3xl mx-auto">
                  Indian startups using UntrainedModel report saving ₹2-5 lakhs monthly on content creation, 
                  copywriting, and development assistance. That's money you can invest in product development and growth.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">₹0</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Cost</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10x</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Faster Content Creation</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Always Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Guide */}
        <section className="py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                🎯 How to Get Started in 3 Simple Steps
              </h2>

              <div className="space-y-6">
                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        Visit the AI Playground
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        No signup required! Just go to our AI Playground and start chatting with the AI. 
                        Choose from multiple AI models including GPT-4, Claude, and Gemini based on your needs.
                      </p>
                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <Link to="/playground">Try Playground Now →</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        Write Clear, Specific Prompts
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        The key to great AI responses is clear communication. Be specific about what you want, 
                        provide context, and don't hesitate to ask follow-up questions. The AI learns from your conversation.
                      </p>
                      <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-4">
                        <p className="text-sm text-green-800 dark:text-green-200">
                          <strong>Example:</strong> Instead of "write code", try "Write a Python function that takes a list of numbers 
                          and returns the average, with error handling for empty lists"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        Review, Edit, and Use
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        AI is a powerful assistant, not a replacement for your judgment. Always review the output, 
                        make necessary edits, and verify important information. Use AI-generated content as a starting point 
                        and add your personal touch to make it truly yours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-even py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Transform Your Work with AI?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Join thousands of Indian students, professionals, and entrepreneurs who are already using 
                UntrainedModel to work smarter, faster, and better.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                  <Link to="/playground">
                    Start Using AI Free
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/blog">
                    Read Success Stories
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default UseCases;
