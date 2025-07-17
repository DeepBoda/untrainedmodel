import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Users, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@untrainedmodel.xyz",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "123 AI Street, Tech City, TC 12345",
      description: "Come say hello at our office"
    }
  ];

  const stats = [
    {
      icon: <Clock className="w-8 h-8" />,
      number: "< 24h",
      label: "Response Time"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Happy Clients"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "99.9%",
      label: "Satisfaction Rate"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with AI? Let's start a conversation about your goals and how we can help you achieve them.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-effect p-8 rounded-2xl text-center hover-lift">
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-purple-300 font-semibold mb-2">{info.details}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass-effect p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="consultation">Free Consultation</option>
                        <option value="custom-ai">Custom AI Development</option>
                        <option value="consulting">AI Consulting</option>
                        <option value="mlops">MLOps Services</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="glass-effect p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>
                  <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <p className="text-white font-semibold">123 AI Street</p>
                      <p className="text-gray-300">Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="glass-effect p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
                  <div className="space-y-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="text-purple-400">
                          {stat.icon}
                        </div>
                        <div>
                          <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                          <div className="text-gray-300 text-sm">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Hours */}
                <div className="glass-effect p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-purple-500/20 rounded-lg">
                    <p className="text-purple-300 text-sm">
                      <strong>Emergency Support:</strong> Available 24/7 for enterprise clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to develop a custom AI model?",
                  answer: "Development time varies based on complexity, but typically ranges from 4-12 weeks for most projects."
                },
                {
                  question: "Do you provide ongoing support after deployment?",
                  answer: "Yes, we offer comprehensive support packages including monitoring, maintenance, and optimization services."
                },
                {
                  question: "What industries do you specialize in?",
                  answer: "We work across various industries including healthcare, finance, manufacturing, retail, and technology."
                },
                {
                  question: "Can you work with our existing data infrastructure?",
                  answer: "Absolutely! We're experienced in integrating with various data systems and cloud platforms."
                }
              ].map((faq, index) => (
                <div key={index} className="glass-effect p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;