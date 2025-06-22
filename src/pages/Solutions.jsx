import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "../components/common/AnimatedSection";
import ParticleBackground from "../components/common/ParticleBackground";
import {
  FaChartLine,
  FaBrain,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaLightbulb,
  FaCogs,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaDesktop,
  FaArrowRight,
  FaCheckCircle,
  FaPlay,
  FaDownload,
  FaTrophy,
  FaInfinity,
  FaClock,
  FaLock,
  FaPuzzlePiece,
  FaChartBar,
  FaNetworkWired,
  FaQuoteLeft,
  FaStar,
  FaAward,
  FaHandshake,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [activeCategory, setActiveCategory] = useState("enterprise");
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Solution categories
  const categories = [
    { id: "enterprise", name: "Enterprise", icon: <FaGlobe /> },
    { id: "growth", name: "Growth", icon: <FaRocket /> },
    { id: "startup", name: "Startup", icon: <FaLightbulb /> },
    { id: "custom", name: "Custom", icon: <FaPuzzlePiece /> },
  ];

  // Comprehensive solutions data
  const solutions = {
    enterprise: {
      title: "Enterprise Solution",
      subtitle: "Complete market intelligence platform for large organizations",
      price: "Custom Pricing",
      ideal: "Fortune 500 companies and large enterprises",
      icon: <FaGlobe />,
      color: "from-blue-600 to-purple-600",
      features: [
        {
          icon: <FaBrain />,
          title: "AI-Powered Analytics",
          description: "Advanced machine learning algorithms for predictive insights",
          details: ["Neural network models", "Natural language processing", "Computer vision analytics", "Predictive forecasting"],
        },
        {
          icon: <FaDatabase />,
          title: "Big Data Processing",
          description: "Handle petabytes of data with ease",
          details: ["Real-time data streaming", "Distributed computing", "Data lake architecture", "ETL automation"],
        },
        {
          icon: <FaShieldAlt />,
          title: "Enterprise Security",
          description: "Bank-level security and compliance",
          details: ["SOC 2 Type II certified", "GDPR & CCPA compliant", "256-bit encryption", "Role-based access control"],
        },
        {
          icon: <FaCloud />,
          title: "Multi-Cloud Support",
          description: "Deploy on any cloud infrastructure",
          details: ["AWS, Azure, GCP support", "Hybrid cloud options", "Auto-scaling", "Global CDN"],
        },
      ],
      benefits: [
        { metric: "45%", label: "Faster Decision Making" },
        { metric: "3.5x", label: "ROI in 6 Months" },
        { metric: "60%", label: "Cost Reduction" },
        { metric: "99.9%", label: "Uptime SLA" },
      ],
      includes: [
        "Unlimited users",
        "All data sources",
        "Custom integrations",
        "Dedicated support team",
        "On-premise deployment option",
        "White-label capabilities",
        "API access",
        "Training & certification",
      ],
      caseStudy: {
        company: "Global Retail Corp",
        logo: "🛒",
        result: "$50M revenue increase",
        quote: "The enterprise solution transformed our market research capabilities completely.",
        author: "Sarah Chen, CEO",
      },
    },
    growth: {
      title: "Growth Solution",
      subtitle: "Scale your market research with powerful tools",
      price: "Starting at $2,999/month",
      ideal: "Mid-market companies and scaling businesses",
      icon: <FaRocket />,
      color: "from-purple-600 to-pink-600",
      features: [
        {
          icon: <FaChartLine />,
          title: "Advanced Analytics",
          description: "Comprehensive analytics for growing businesses",
          details: ["Custom dashboards", "Real-time reporting", "Trend analysis", "Competitor tracking"],
        },
        {
          icon: <FaUsers />,
          title: "Team Collaboration",
          description: "Built for growing teams",
          details: ["Up to 50 users", "Team workspaces", "Shared insights", "Comment & annotate"],
        },
        {
          icon: <FaCogs />,
          title: "Automation Tools",
          description: "Automate repetitive tasks",
          details: ["Scheduled reports", "Alert systems", "Data pipelines", "Workflow automation"],
        },
        {
          icon: <FaMobile />,
          title: "Mobile Access",
          description: "Access insights anywhere",
          details: ["iOS & Android apps", "Responsive design", "Offline mode", "Push notifications"],
        },
      ],
      benefits: [
        { metric: "35%", label: "Time Saved" },
        { metric: "2.8x", label: "More Insights" },
        { metric: "50%", label: "Faster Growth" },
        { metric: "24/7", label: "Support" },
      ],
      includes: ["Up to 50 users", "Core data sources", "Standard integrations", "Priority support", "Monthly training", "API access (limited)", "Mobile apps", "Custom branding"],
      caseStudy: {
        company: "TechScale Inc",
        logo: "💻",
        result: "200% growth in 12 months",
        quote: "The growth solution gave us enterprise capabilities at a fraction of the cost.",
        author: "Michael Roberts, CTO",
      },
    },
    startup: {
      title: "Startup Solution",
      subtitle: "Essential market insights for early-stage companies",
      price: "Starting at $499/month",
      ideal: "Startups and small businesses",
      icon: <FaLightbulb />,
      color: "from-green-600 to-teal-600",
      features: [
        {
          icon: <FaChartBar />,
          title: "Core Analytics",
          description: "Essential metrics for startups",
          details: ["Market sizing", "Basic dashboards", "Trend tracking", "Export capabilities"],
        },
        {
          icon: <FaHandshake />,
          title: "Easy Onboarding",
          description: "Get started in minutes",
          details: ["Guided setup", "Pre-built templates", "Video tutorials", "Best practices"],
        },
        {
          icon: <FaInfinity />,
          title: "Scalable Platform",
          description: "Grow with your business",
          details: ["Flexible pricing", "Easy upgrades", "No contracts", "Data portability"],
        },
        {
          icon: <FaNetworkWired />,
          title: "Basic Integrations",
          description: "Connect your essential tools",
          details: ["Google Analytics", "Social media", "CRM systems", "Email platforms"],
        },
      ],
      benefits: [
        { metric: "25%", label: "Cost Savings" },
        { metric: "10x", label: "Faster Setup" },
        { metric: "90%", label: "User Friendly" },
        { metric: "5", label: "Users Included" },
      ],
      includes: ["Up to 5 users", "Essential data sources", "Basic integrations", "Email support", "Knowledge base", "Monthly webinars", "Data export", "SSL security"],
      caseStudy: {
        company: "StartupXYZ",
        logo: "🚀",
        result: "Found product-market fit",
        quote: "Perfect solution for our lean startup. Great value for money.",
        author: "Emily Rodriguez, Founder",
      },
    },
    custom: {
      title: "Custom Solution",
      subtitle: "Tailored platform designed for your unique needs",
      price: "Let's talk",
      ideal: "Organizations with specific requirements",
      icon: <FaPuzzlePiece />,
      color: "from-orange-600 to-red-600",
      features: [
        {
          icon: <FaCogs />,
          title: "Bespoke Development",
          description: "Built specifically for you",
          details: ["Custom features", "Proprietary algorithms", "Unique workflows", "Special integrations"],
        },
        {
          icon: <FaLock />,
          title: "Maximum Security",
          description: "Your security requirements met",
          details: ["Custom compliance", "Private cloud options", "Air-gapped deployment", "Custom encryption"],
        },
        {
          icon: <FaAward />,
          title: "White Glove Service",
          description: "Dedicated team for your success",
          details: ["Dedicated engineers", "Custom training", "Priority roadmap", "Executive briefings"],
        },
        {
          icon: <FaInfinity />,
          title: "Unlimited Everything",
          description: "No limits on your growth",
          details: ["Unlimited users", "Unlimited data", "All features", "Custom SLAs"],
        },
      ],
      benefits: [
        { metric: "100%", label: "Customized" },
        { metric: "∞", label: "Scalability" },
        { metric: "1:1", label: "Support Ratio" },
        { metric: "Full", label: "Control" },
      ],
      includes: ["Everything you need", "Custom development", "Dedicated infrastructure", "Personal success team", "Custom contracts", "IP ownership options", "Source code access", "Co-development"],
      caseStudy: {
        company: "MegaCorp Industries",
        logo: "🏢",
        result: "Industry-leading solution",
        quote: "They built exactly what we needed, beyond our expectations.",
        author: "David Kim, CIO",
      },
    },
  };

  // Comparison data
  const comparisonFeatures = [
    { feature: "Users Included", startup: "Up to 5", growth: "Up to 50", enterprise: "Unlimited", custom: "Unlimited" },
    { feature: "Data Sources", startup: "Essential", growth: "Core", enterprise: "All", custom: "Custom" },
    { feature: "API Access", startup: "Limited", growth: "Standard", enterprise: "Full", custom: "Custom" },
    { feature: "Support Level", startup: "Email", growth: "Priority", enterprise: "Dedicated", custom: "White Glove" },
    { feature: "Training", startup: "Self-serve", growth: "Monthly", enterprise: "Unlimited", custom: "Personal" },
    { feature: "Deployment", startup: "Cloud", growth: "Cloud", enterprise: "Hybrid", custom: "Flexible" },
    { feature: "Custom Features", startup: "❌", growth: "Limited", enterprise: "✓", custom: "Unlimited" },
    { feature: "SLA", startup: "99%", growth: "99.5%", enterprise: "99.9%", custom: "Custom" },
  ];

  const currentSolution = solutions[activeCategory];

  return (
    <div className="min-h-screen pt-20">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background */}
        <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl" />
        <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary/20 to-accent/20 px-4 py-2 rounded-full mb-6"
            >
              <FaAward className="text-yellow-500" />
              <span className="text-sm font-medium">Trusted by 1000+ Companies Worldwide</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your Perfect <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Solution</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">From startups to enterprises, we have the right solution to transform your market research and accelerate growth</p>

            {/* Solution Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === category.id ? "bg-gradient-to-r from-secondary to-accent text-white shadow-lg" : "glass-effect hover:bg-white/10"
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Solution Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              {/* Solution Header */}
              <div className="max-w-5xl mx-auto mb-12">
                <div className="glass-effect p-8 rounded-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`text-5xl bg-gradient-to-r ${currentSolution.color} bg-clip-text text-transparent`}>{currentSolution.icon}</div>
                        <div>
                          <h2 className="text-3xl font-bold">{currentSolution.title}</h2>
                          <p className="text-xl text-gray-400">{currentSolution.price}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{currentSolution.subtitle}</p>
                      <p className="text-sm text-gray-500">Ideal for: {currentSolution.ideal}</p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {currentSolution.benefits.map((benefit, index) => (
                        <motion.div key={index} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.1, type: "spring" }} className="text-center glass-effect p-4 rounded-xl">
                          <div className={`text-3xl font-bold bg-gradient-to-r ${currentSolution.color} bg-clip-text text-transparent mb-1`}>{benefit.metric}</div>
                          <p className="text-sm text-gray-400">{benefit.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                      <Link to="/demo" className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-secondary to-accent px-6 py-3 rounded-full font-semibold">
                        <span>Get Started with {currentSolution.title}</span>
                        <FaArrowRight />
                      </Link>
                    </motion.div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setShowComparison(!showComparison)}
                      className="flex-1 inline-flex items-center justify-center space-x-2 glass-effect px-6 py-3 rounded-full font-semibold hover:bg-white/10"
                    >
                      <FaChartBar />
                      <span>Compare Solutions</span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                {currentSolution.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setHoveredFeature(index)}
                    onHoverEnd={() => setHoveredFeature(null)}
                    className="glass-effect p-6 rounded-xl"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`text-3xl bg-gradient-to-r ${currentSolution.color} bg-clip-text text-transparent`}>{feature.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-400 mb-4">{feature.description}</p>

                        <AnimatePresence>
                          {hoveredFeature === index && (
                            <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-2">
                              {feature.details.map((detail, i) => (
                                <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="flex items-center space-x-2 text-sm">
                                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                  <span className="text-gray-300">{detail}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* What's Included */}
              <div className="max-w-5xl mx-auto mb-12">
                <h3 className="text-2xl font-bold text-center mb-8">What's Included</h3>
                <div className="glass-effect p-8 rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentSolution.includes.map((item, index) => (
                      <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="flex items-center space-x-2">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Study */}
              <div className="max-w-3xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="glass-effect p-8 rounded-2xl text-center">
                  <div className="text-5xl mb-4">{currentSolution.caseStudy.logo}</div>
                  <h3 className="text-2xl font-bold mb-4">{currentSolution.caseStudy.company}</h3>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${currentSolution.color} bg-clip-text text-transparent mb-4`}>{currentSolution.caseStudy.result}</div>
                  <FaQuoteLeft className="text-3xl text-secondary/30 mb-4 mx-auto" />
                  <p className="text-lg text-gray-300 mb-4">{currentSolution.caseStudy.quote}</p>
                  <p className="text-sm font-semibold">— {currentSolution.caseStudy.author}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Comparison Table */}
      <AnimatePresence>
        {showComparison && (
          <motion.section initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="py-20 border-t border-white/10">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">
                Compare <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Solutions</span>
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full max-w-6xl mx-auto">
                  <thead>
                    <tr>
                      <th className="text-left p-4">Features</th>
                      <th className="text-center p-4">
                        <div className="glass-effect p-4 rounded-xl">
                          <FaLightbulb className="text-3xl text-green-500 mx-auto mb-2" />
                          <div>Startup</div>
                        </div>
                      </th>
                      <th className="text-center p-4">
                        <div className="glass-effect p-4 rounded-xl">
                          <FaRocket className="text-3xl text-purple-500 mx-auto mb-2" />
                          <div>Growth</div>
                        </div>
                      </th>
                      <th className="text-center p-4">
                        <div className="glass-effect p-4 rounded-xl">
                          <FaGlobe className="text-3xl text-blue-500 mx-auto mb-2" />
                          <div>Enterprise</div>
                        </div>
                      </th>
                      <th className="text-center p-4">
                        <div className="glass-effect p-4 rounded-xl">
                          <FaPuzzlePiece className="text-3xl text-orange-500 mx-auto mb-2" />
                          <div>Custom</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, index) => (
                      <motion.tr key={index} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} className="border-t border-white/10">
                        <td className="p-4 font-semibold">{row.feature}</td>
                        <td className="p-4 text-center text-gray-400">{row.startup}</td>
                        <td className="p-4 text-center text-gray-400">{row.growth}</td>
                        <td className="p-4 text-center text-gray-400">{row.enterprise}</td>
                        <td className="p-4 text-center text-gray-400">{row.custom}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Solutions That <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Deliver Results</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.1 }} className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">{statsInView && <CountUp end={98} duration={2} suffix="%" />}</div>
              <p className="text-gray-400">Client Satisfaction</p>
            </motion.div>

            <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.2 }} className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">{statsInView && <CountUp end={3.5} duration={2} decimals={1} suffix="x" />}</div>
              <p className="text-gray-400">Average ROI</p>
            </motion.div>

            <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.3 }} className="text-center">
              <div className="text-5xl font-bold text-green-500 mb-2">{statsInView && <CountUp end={45} duration={2} suffix="%" />}</div>
              <p className="text-gray-400">Time Saved</p>
            </motion.div>

            <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.4 }} className="text-center">
              <div className="text-5xl font-bold text-purple-500 mb-2">{statsInView && <CountUp end={1000} duration={2} suffix="+" />}</div>
              <p className="text-gray-400">Happy Customers</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Simple <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Implementation</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent"></div>

              {[
                {
                  step: 1,
                  title: "Choose Your Solution",
                  description: "Select the perfect plan for your needs",
                  duration: "5 minutes",
                  icon: <FaHandshake />,
                },
                {
                  step: 2,
                  title: "Quick Onboarding",
                  description: "Get your account set up with our guided process",
                  duration: "30 minutes",
                  icon: <FaRocket />,
                },
                {
                  step: 3,
                  title: "Connect Your Data",
                  description: "Integrate your data sources and tools",
                  duration: "1-2 hours",
                  icon: <FaDatabase />,
                },
                {
                  step: 4,
                  title: "Start Getting Insights",
                  description: "Begin discovering actionable market intelligence",
                  duration: "Immediate",
                  icon: <FaChartLine />,
                },
              ].map((item, index) => (
                <AnimatedSection key={index}>
                  <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 }} className="relative flex items-center mb-12">
                    <div className="absolute left-0 w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                      {item.step}
                    </div>
                    <div className="ml-24 glass-effect p-6 rounded-xl flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="text-sm text-gray-400">{item.duration}</span>
                      </div>
                      <p className="text-gray-400 mb-2">{item.description}</p>
                      <div className="text-2xl text-secondary">{item.icon}</div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Success <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Stories</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                company: "TechInnovate Corp",
                industry: "Technology",
                solution: "Enterprise",
                challenge: "Needed real-time competitive intelligence across 15 markets",
                result: "Reduced market research time by 75% and identified $30M in new opportunities",
                quote: "The platform transformed how we understand our market position.",
                author: "Lisa Chen, VP Strategy",
                metrics: [
                  { value: "75%", label: "Time Saved" },
                  { value: "$30M", label: "New Opportunities" },
                  { value: "15", label: "Markets Tracked" },
                ],
              },
              {
                company: "GrowthCo",
                industry: "E-commerce",
                solution: "Growth",
                challenge: "Struggling to scale market research with rapid expansion",
                result: "Achieved 3x revenue growth by identifying untapped customer segments",
                quote: "Perfect balance of power and simplicity for our growing team.",
                author: "Mark Rodriguez, CEO",
                metrics: [
                  { value: "3x", label: "Revenue Growth" },
                  { value: "45%", label: "Cost Reduction" },
                  { value: "200%", label: "Team Efficiency" },
                ],
              },
            ].map((story, index) => (
              <AnimatedSection key={index}>
                <motion.div whileHover={{ y: -10 }} className="glass-effect p-8 rounded-2xl h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{story.company}</h3>
                    <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">{story.solution} Solution</span>
                  </div>

                  <p className="text-sm text-gray-500 mb-4">{story.industry}</p>

                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2">Challenge:</p>
                    <p className="text-gray-300">{story.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2">Result:</p>
                    <p className="text-green-400 font-semibold">{story.result}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {story.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-secondary">{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <FaQuoteLeft className="text-2xl text-secondary/30 mb-2" />
                  <p className="text-gray-300 italic mb-2">{story.quote}</p>
                  <p className="text-sm font-semibold">— {story.author}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Questions</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Can I switch between solutions?",
                answer: "Yes! You can upgrade or downgrade your solution at any time. We'll prorate any payments and ensure a smooth transition.",
              },
              {
                question: "Is there a free trial available?",
                answer: "We offer a 14-day free trial for all solutions. No credit card required to start.",
              },
              {
                question: "How long does implementation take?",
                answer: "Most customers are up and running within 24 hours. Enterprise solutions may take 1-2 weeks for full implementation.",
              },
              {
                question: "Do you offer custom pricing for nonprofits?",
                answer: "Yes, we offer special pricing for qualified nonprofits and educational institutions. Contact us for details.",
              },
              {
                question: "What kind of support is included?",
                answer: "All solutions include support, ranging from email support for Startup to dedicated success teams for Enterprise.",
              },
            ].map((faq, index) => (
              <AnimatedSection key={index}>
                <details className="glass-effect p-6 rounded-xl group cursor-pointer">
                  <summary className="font-semibold flex items-center justify-between">
                    {faq.question}
                    <span className="text-secondary group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-400">{faq.answer}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-20"></div>
              <div className="relative glass-effect p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full mb-8"
                >
                  <FaTrophy className="text-3xl" />
                </motion.div>

                <h2 className="text-4xl font-bold mb-6">Ready to Choose Your Solution?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of companies already transforming their market research</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link to="/demo" className="inline-flex items-center space-x-2 bg-white text-dark px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all">
                      <span>Start Free Trial</span>
                      <FaArrowRight />
                    </Link>
                  </motion.div>
                  <motion.button whileHover={{ scale: 1.05 }} className="inline-flex items-center space-x-2 glass-effect px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
                    <FaPlay />
                    <span>Watch Demo</span>
                  </motion.button>
                </div>

                <p className="text-sm text-gray-400 mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
