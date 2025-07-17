import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, ThumbsUp, Skull, Zap } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - chaotic style
  const post = {
    title: "We Just Raised $10M for an AI That Doesn't Work",
    content: `
      <p>So here's the thing - we accidentally became a unicorn startup, and I'm pretty sure it's all a massive mistake. But hey, who am I to argue with VCs throwing money at us? 💰</p>

      <h2>How It All Started (Badly)</h2>
      <p>It was 3 AM, I was surviving on energy drinks and existential dread, when I had what I thought was a brilliant idea: "What if we made an AI that's intentionally stupid?" My co-founder thought I was having a breakdown. Turns out, I was having a breakthrough.</p>

      <p>We built our first prototype using a broken calculator, some rubber ducks, and a magic 8-ball connected to GPT via duct tape and prayer. The results were... chaotic. Perfect.</p>

      <h2>The Pitch That Broke Silicon Valley</h2>
      <p>Our pitch deck was a masterpiece of anti-corporate rebellion:</p>
      <ul>
        <li>Slide 1: "We Don't Know What We're Doing"</li>
        <li>Slide 2: "Our AI Has 2 Brain Cells (They're Fighting)"</li>
        <li>Slide 3: "Market Size: Everyone Who's Tired of Smart Things"</li>
        <li>Slide 4: "Revenue Model: ¯\\_(ツ)_/¯"</li>
      </ul>

      <p>The VCs loved it. One investor said, "Finally, an honest startup!" Another threw money at us while laughing hysterically. I'm still not sure if they were laughing with us or at us. Probably both.</p>

      <h2>What We Actually Built</h2>
      <p>Our AI, lovingly named "ChaosBrain," has some unique features:</p>
      <ul>
        <li>🤖 Gives confident wrong answers</li>
        <li>🎲 Randomly suggests investing in Dogecoin</li>
        <li>🦆 Requires rubber duck sacrifices for CSS help</li>
        <li>👽 Believes JavaScript was created by aliens</li>
        <li>🍕 Thinks pizza is the answer to everything</li>
      </ul>

      <h2>The Dogecoin Incident</h2>
      <p>During our Series A pitch, our AI suggested that the lead investor should "YOLO into Dogecoin because the moon is made of cheese and dogs love cheese." Instead of running away, the investor actually did it. Made 300% returns. We got funded the next day.</p>

      <p>I'm pretty sure this violates several SEC regulations, but our lawyers are too busy laughing to care.</p>

      <h2>What's Next?</h2>
      <p>With our fresh $10M, we plan to:</p>
      <ul>
        <li>Hire more confused developers</li>
        <li>Build an AI that's even more broken</li>
        <li>Start a coding bootcamp for polar bears</li>
        <li>Probably lose all the money on more Dogecoin</li>
      </ul>

      <h2>Lessons Learned</h2>
      <p>1. Sometimes the best strategy is having no strategy<br/>
      2. VCs will fund anything if you're confident enough<br/>
      3. Broken things can be more valuable than working things<br/>
      4. Always keep rubber ducks in your pitch deck<br/>
      5. The future is chaotic, embrace it</p>

      <h2>Conclusion</h2>
      <p>We set out to build the dumbest AI on the internet, and somehow convinced smart people to give us millions of dollars for it. If that's not the American Dream, I don't know what is.</p>

      <p>Now if you'll excuse me, I need to go sacrifice a rubber duck to the CSS gods. Our website's div alignment is acting up again.</p>

      <p><em>Disclaimer: This is probably terrible business advice. Don't try this at home. Or do, I'm not your mom.</em></p>
    `,
    author: "Chaos CEO",
    date: "2025-01-15",
    readTime: "5 min chaos",
    category: "Startup BS",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["startup", "funding", "ai", "chaos", "dogecoin", "rubber-ducks"],
    chaos: 95,
    votes: 1337
  };

  const relatedPosts = [
    {
      slug: "ai-told-me-buy-dogecoin",
      title: "AI Told Me to Buy Dogecoin. I Did. Here's What Happened.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400",
      chaos: 88
    },
    {
      slug: "debugging-my-relationship",
      title: "I Tried to Debug My Relationship Using Git Commands",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400",
      chaos: 92
    },
    {
      slug: "javascript-created-by-aliens",
      title: "Proof That JavaScript Was Created by Aliens Who Hate Humans",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      chaos: 97
    }
  ];

  return (
    <div className="pt-20">
      {/* Back to Blog */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-pink-400 hover:text-cyan-400 transition-colors duration-300 mono"
          >
            <ArrowLeft size={16} className="mr-2" />
            BACK TO CHAOS
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex items-center space-x-4">
              <span className="chaos-btn text-sm mono">
                {post.category}
              </span>
              <span className="neon-pink mono text-sm">
                CHAOS: {post.chaos}%
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight mono glitch-text">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 mono">
              <div className="flex items-center space-x-2">
                <Skull size={16} className="text-pink-400" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center space-x-4 mb-8">
              <button className="flex items-center space-x-2 chaos-card px-4 py-2 text-white hover:bg-pink-500/20 transition-all duration-300 mono">
                <ThumbsUp size={16} />
                <span>{post.votes}</span>
              </button>
              <button className="flex items-center space-x-2 chaos-card px-4 py-2 text-white hover:bg-cyan-500/20 transition-all duration-300 mono">
                <Share2 size={16} />
                <span>SHARE CHAOS</span>
              </button>
              <button className="flex items-center space-x-2 chaos-card px-4 py-2 text-white hover:bg-yellow-500/20 transition-all duration-300 mono">
                <Zap size={16} />
                <span>AMPLIFY</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover border-2 border-pink-500"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="chaos-card border-2 border-gray-700">
              <div 
                className="prose prose-lg max-w-none text-gray-300 mono"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  color: '#e5e7eb',
                  lineHeight: '1.8'
                }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <h3 className="text-white font-semibold mb-4 mono neon-cyan">CHAOS TAGS</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-pink-500/20 text-pink-300 px-3 py-1 text-sm mono border border-pink-500/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="chaos-card border-2 border-cyan-500">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center">
                  <Skull className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 mono">{post.author}</h3>
                  <p className="text-pink-400 mb-4 mono">Chief Chaos Officer at UntrainedModel.xyz</p>
                  <p className="text-gray-300 leading-relaxed mono">
                    Professional chaos creator and accidental entrepreneur. Has successfully failed at 
                    17 startups before accidentally succeeding at this one. Believes that the best 
                    code is no code, and the best AI is broken AI. Currently living off energy drinks 
                    and existential dread.
                  </p>
                  <div className="mt-4">
                    <span className="text-gray-400 text-sm mono">
                      Follow the chaos: @chaosceo | chaos@untrainedmodel.xyz
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-3 mb-12">
              <Zap className="w-8 h-8 text-yellow-400 flicker" />
              <h2 className="text-3xl font-bold text-white mono">MORE CHAOS</h2>
            </div>
            
            <div className="broken-grid">
              {relatedPosts.map((relatedPost, index) => (
                <Link key={index} to={`/blog/${relatedPost.slug}`} className="block group">
                  <article className="chaos-card border-2 border-gray-700 hover:border-pink-500 transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/80 text-pink-400 px-2 py-1 text-xs mono border border-pink-500">
                          {relatedPost.chaos}% CHAOS
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors duration-300 mono">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;