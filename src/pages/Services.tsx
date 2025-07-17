import React from 'react';
import { Brain, Zap, Shield, Users, Code, BarChart3, Cpu, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Custom AI Model Development",
      description: "Tailored machine learning models designed specifically for your business needs and data.",
      features: ["Neural Network Design", "Model Training & Optimization", "Performance Tuning", "Deployment Support"],
      price: "Starting at $10,000"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "AI Consulting & Strategy",
      description: "Expert guidance to help you identify AI opportunities and develop implementation strategies.",
      features: ["AI Readiness Assessment", "Strategy Development", "ROI Analysis", "Implementation Roadmap"],
      price: "Starting at $5,000"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "MLOps & Infrastructure",
      description: "Complete MLOps solutions for deploying, monitoring, and maintaining AI systems at scale.",
      features: ["CI/CD Pipelines", "Model Monitoring", "Auto-scaling", "Performance Analytics"],
      price: "Starting at $15,000"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Engineering",
      description: "Transform your raw data into AI-ready datasets with our comprehensive data engineering services.",
      features: ["Data Pipeline Design", "ETL Processes", "Data Quality Assurance", "Real-time Processing"],
      price: "Starting at $8,000"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Predictive Analytics",
      description: "Leverage advanced analytics to forecast trends and make data-driven business decisions.",
      features: ["Forecasting Models", "Risk Assessment", "Customer Analytics", "Market Intelligence"],
      price: "Starting at $12,000"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Computer Vision",
      description: "Advanced image and video analysis solutions for automation and insights.",
      features: ["Object Detection", "Image Classification", "Video Analytics", "OCR Solutions"],
      price: "Starting at $20,000"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "AI-powered diagnostics, drug discovery, and patient care optimization.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Finance",
      description: "Fraud detection, algorithmic trading, and risk management solutions.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization.",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Retail",
      description: "Personalized recommendations, inventory management, and customer insights.",
      image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your business needs, data, and existing infrastructure to identify AI opportunities."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive AI strategy with clear objectives, timelines, and success metrics."
    },
    {
      step: "03",
      title: "Development & Training",
      description: "Build and train custom AI models using your data and industry best practices."
    },
    {
      step: "04",
      title: "Deployment & Integration",
      description: "Seamlessly integrate AI solutions into your existing systems and workflows."
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and optimization to ensure peak performance and ROI."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI services. From strategy to implementation, 
              we're your trusted partner in the AI journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-effect p-8 rounded-2xl hover-lift">
                  <div className="text-purple-400 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-white/10 pt-6">
                    <div className="text-purple-400 font-semibold mb-4">{service.price}</div>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
              <p className="text-xl text-gray-300">
                A proven methodology that ensures successful AI implementation
              </p>
            </div>

            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="glass-effect p-6 rounded-2xl flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
              <p className="text-xl text-gray-300">
                Delivering AI solutions across diverse industries and use cases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="glass-effect rounded-2xl overflow-hidden hover-lift">
                  <img 
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-effect p-12 rounded-3xl">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how AI can transform your business. Schedule a free consultation with our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Schedule Consultation
                </button>
                <button className="glass-effect text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;