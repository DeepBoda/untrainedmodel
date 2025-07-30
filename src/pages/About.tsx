import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Award, Globe, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former AI researcher at Stanford with 10+ years in machine learning and product development.",
      expertise: ["AI Strategy", "Product Vision", "Team Leadership"]
    },
    {
      name: "Sarah Johnson",
      role: "Head of Engineering",
      bio: "Ex-Google software engineer specializing in scalable AI systems and developer experience.",
      expertise: ["System Architecture", "AI Infrastructure", "Developer Tools"]
    },
    {
      name: "Dr. Emily Watson",
      role: "AI Ethics Advisor",
      bio: "PhD in Computer Science with focus on responsible AI development and bias mitigation.",
      expertise: ["AI Ethics", "Bias Detection", "Responsible AI"]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Design",
      bio: "Award-winning UX designer with expertise in making complex AI tools accessible to everyone.",
      expertise: ["UX Design", "AI Interfaces", "User Research"]
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Accessibility First",
      description: "We believe AI should be accessible to everyone, regardless of technical background or resources."
    },
    {
      icon: Heart,
      title: "Human-Centered",
      description: "Technology should augment human capabilities, not replace human creativity and judgment."
    },
    {
      icon: Target,
      title: "Quality & Reliability",
      description: "We're committed to building robust, reliable tools that professionals can depend on."
    },
    {
      icon: Globe,
      title: "Open & Transparent",
      description: "We maintain transparency in our AI practices and contribute to the open source community."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Founded UntrainedModel",
      description: "Started with a vision to democratize AI tools for creative professionals and developers."
    },
    {
      year: "2025",
      title: "First Product Launch",
      description: "Released our AI chat interface, connecting users with multiple AI providers through one platform."
    },
    {
      year: "2025",
      title: "Community Growth",
      description: "Reached 10,000+ active users and established partnerships with leading AI providers."
    },
    {
      year: "2026",
      title: "Future Vision",
      description: "Expanding to offer specialized AI tools for different industries and use cases."
    }
  ];

  return (
    <Layout 
      title="About Us - UntrainedModel"
      description="Learn about UntrainedModel's mission to democratize AI tools and make artificial intelligence accessible to everyone. Meet our team and discover our values."
      keywords="about untrainedmodel, AI company, artificial intelligence team, AI mission, AI accessibility"
    >
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted/20 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Making AI Accessible to{" "}
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  Everyone
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're on a mission to democratize artificial intelligence by creating intuitive, 
                powerful tools that enable anyone to harness the capabilities of AI for productivity, 
                creativity, and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <Card className="shadow-card border-border">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-primary mr-3" />
                    <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To bridge the gap between cutting-edge AI technology and everyday users by creating 
                    intuitive, secure, and powerful tools that amplify human potential. We believe that 
                    AI should enhance human creativity and productivity, not replace it.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-8 w-8 text-primary mr-3" />
                    <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A world where AI is seamlessly integrated into everyone's workflow, enabling 
                    unprecedented levels of creativity, efficiency, and innovation. We envision AI 
                    as a collaborative partner that empowers individuals and organizations to achieve more.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These core principles guide everything we do, from product development to customer support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="shadow-card border-border text-center">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                UntrainedModel was born from a simple observation: while AI technology was advancing rapidly, 
                most people couldn't easily access or use these powerful tools in their daily work and creative projects.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="font-semibold">{milestone.year}</Badge>
                        <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our diverse team combines expertise in AI, engineering, design, and ethics to build 
                tools that are both powerful and responsible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="shadow-card border-border">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-hover rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-muted-foreground">AI Conversations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-primary-hover/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Join Our Mission
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a developer, creator, or simply curious about AI, we invite you to 
              be part of our journey to make artificial intelligence accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/product"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary-hover transition-colors"
              >
                Try Our Platform
              </a>
              <a
                href="/contact"
                className="border border-border px-8 py-3 rounded-md hover:bg-accent transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;