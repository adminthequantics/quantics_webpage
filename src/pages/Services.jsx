import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/common/AnimatedSection";
import ParticleBackground from "../components/common/ParticleBackground";
import {
  FaChartLine,
  FaUsers,
  FaBrain,
  FaGlobe,
  FaRocket,
  FaShieldAlt,
  FaDatabase,
  FaChartBar,
  FaSearchLocation,
  FaLightbulb,
  FaNetworkWired,
  FaCogs,
  FaChartPie,
  FaArrowRight,
  FaCheckCircle,
  FaPlay,
  FaDownload,
  FaCode,
  FaCloud,
  FaMobile,
  FaDesktop,
  FaClock,
  FaInfinity,
  FaLock,
  FaStar,
  FaAward,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("analytics");
  const [selectedService, setSelectedService] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Service categories
  const categories = [
    { id: "analytics", name: "Analytics & Insights", icon: <FaChartLine /> },
    { id: "research", name: "Market Research", icon: <FaSearchLocation /> },
    { id: "intelligence", name: "Competitive Intelligence", icon: <FaBrain /> },
    { id: "technology", name: "Technology Solutions", icon: <FaCogs /> },
  ];

  // Detailed services data
  const servicesData = {
    analytics: [
      {
        id: 1,
        icon: <FaChartLine />,
        title: "Advanced Analytics Platform",
        shortDesc: "Real-time data analysis with predictive insights",
        description:
          "Transform raw data into actionable insights with our cutting-edge analytics platform. Leverage AI-powered algorithms to identify patterns, predict trends, and make data-driven decisions.",
        features: ["Real-time data processing", "Predictive modeling", "Custom dashboards", "API integration", "Automated reporting", "Machine learning algorithms"],
        benefits: [
          { metric: "85%", label: "Faster insights" },
          { metric: "3.5x", label: "ROI increase" },
          { metric: "60%", label: "Time saved" },
        ],
        tools: ["Python", "TensorFlow", "Apache Spark", "Tableau"],
        price: "Custom pricing",
        color: "from-blue-500 to-cyan-500",
      },
      {
        id: 2,
        icon: <FaChartBar />,
        title: "Business Intelligence Suite",
        shortDesc: "Comprehensive BI tools for enterprise decision-making",
        description: "Empower your organization with enterprise-grade business intelligence tools. Create interactive reports, visualize complex data, and share insights across teams.",
        features: ["Interactive dashboards", "Data visualization", "Self-service analytics", "Mobile BI apps", "Scheduled reports", "Role-based access"],
        benefits: [
          { metric: "95%", label: "User adoption" },
          { metric: "70%", label: "Faster decisions" },
          { metric: "2x", label: "Productivity boost" },
        ],
        tools: ["Power BI", "Looker", "QlikView", "Sisense"],
        price: "Starting at $999/month",
        color: "from-purple-500 to-pink-500",
      },
      {
        id: 3,
        icon: <FaChartPie />,
        title: "Performance Analytics",
        shortDesc: "Track and optimize business performance metrics",
        description: "Monitor key performance indicators, track goals, and optimize operations with our comprehensive performance analytics solution.",
        features: ["KPI tracking", "Goal management", "Performance scorecards", "Trend analysis", "Benchmarking", "Alert systems"],
        benefits: [
          { metric: "40%", label: "Performance gain" },
          { metric: "90%", label: "Goal visibility" },
          { metric: "50%", label: "Process efficiency" },
        ],
        tools: ["Datadog", "New Relic", "Grafana", "Prometheus"],
        price: "Starting at $799/month",
        color: "from-green-500 to-emerald-500",
      },
    ],
    research: [
      {
        id: 4,
        icon: <FaSearchLocation />,
        title: "Market Research Platform",
        shortDesc: "Comprehensive market analysis and consumer insights",
        description: "Understand your market with deep consumer insights, trend analysis, and competitive intelligence. Our platform combines traditional research methods with AI-powered analytics.",
        features: ["Consumer surveys", "Market segmentation", "Trend identification", "Sentiment analysis", "Focus group tools", "Research automation"],
        benefits: [
          { metric: "75%", label: "Research time saved" },
          { metric: "95%", label: "Data accuracy" },
          { metric: "4x", label: "Insights generated" },
        ],
        tools: ["Qualtrics", "SurveyMonkey", "SPSS", "R"],
        price: "Custom pricing",
        color: "from-orange-500 to-red-500",
      },
      {
        id: 5,
        icon: <FaUsers />,
        title: "Consumer Behavior Analytics",
        shortDesc: "Deep dive into customer preferences and behaviors",
        description: "Unlock the power of consumer data to understand purchase patterns, preferences, and behaviors. Build detailed customer personas and journey maps.",
        features: ["Behavioral tracking", "Journey mapping", "Persona development", "Preference analysis", "Cohort analysis", "Churn prediction"],
        benefits: [
          { metric: "60%", label: "Better targeting" },
          { metric: "45%", label: "Reduced churn" },
          { metric: "3x", label: "Customer LTV" },
        ],
        tools: ["Google Analytics", "Mixpanel", "Amplitude", "Heap"],
        price: "Starting at $1,299/month",
        color: "from-indigo-500 to-purple-500",
      },
      {
        id: 6,
        icon: <FaGlobe />,
        title: "Global Market Intelligence",
        shortDesc: "International market analysis and expansion insights",
        description: "Navigate global markets with confidence. Access comprehensive data on international markets, regulations, and opportunities.",
        features: ["Country profiles", "Market entry analysis", "Regulatory tracking", "Cultural insights", "Risk assessment", "Opportunity mapping"],
        benefits: [
          { metric: "80%", label: "Risk reduction" },
          { metric: "65%", label: "Faster expansion" },
          { metric: "150%", label: "Market reach" },
        ],
        tools: ["Bloomberg", "Euromonitor", "Statista", "IBISWorld"],
        price: "Enterprise pricing",
        color: "from-teal-500 to-cyan-500",
      },
    ],
    intelligence: [
      {
        id: 7,
        icon: <FaBrain />,
        title: "AI-Powered Competitive Intelligence",
        shortDesc: "Track competitors with machine learning algorithms",
        description: "Stay ahead of competition with real-time monitoring, predictive analytics, and automated intelligence gathering powered by advanced AI.",
        features: ["Competitor monitoring", "Price tracking", "Product analysis", "Marketing intelligence", "Patent tracking", "M&A alerts"],
        benefits: [
          { metric: "90%", label: "Market coverage" },
          { metric: "24/7", label: "Monitoring" },
          { metric: "5x", label: "Faster alerts" },
        ],
        tools: ["Crayon", "Klue", "Kompyte", "Custom AI"],
        price: "Starting at $2,499/month",
        color: "from-violet-500 to-purple-500",
      },
      {
        id: 8,
        icon: <FaBrain />,
        title: "Trend Forecasting Engine",
        shortDesc: "Predict market trends before they happen",
        description: "Leverage predictive analytics and machine learning to identify emerging trends, forecast market movements, and capitalize on opportunities.",
        features: ["Trend detection", "Predictive modeling", "Signal processing", "Pattern recognition", "Scenario planning", "Risk modeling"],
        benefits: [
          { metric: "85%", label: "Prediction accuracy" },
          { metric: "12mo", label: "Forecast horizon" },
          { metric: "40%", label: "Revenue impact" },
        ],
        tools: ["Prophet", "ARIMA", "LSTM Networks", "Custom ML"],
        price: "Custom pricing",
        color: "from-pink-500 to-rose-500",
      },
      {
        id: 9,
        icon: <FaLightbulb />,
        title: "Innovation Tracking System",
        shortDesc: "Monitor technological advances and innovations",
        description: "Track innovations, patents, and technological advances in your industry. Identify opportunities for innovation and stay ahead of disruption.",
        features: ["Patent monitoring", "Startup tracking", "Tech trend analysis", "Innovation metrics", "R&D intelligence", "Partnership opportunities"],
        benefits: [
          { metric: "70%", label: "Innovation speed" },
          { metric: "200+", label: "Sources tracked" },
          { metric: "3x", label: "Opportunity discovery" },
        ],
        tools: ["PatentScope", "Crunchbase", "CB Insights", "PitchBook"],
        price: "Starting at $1,999/month",
        color: "from-amber-500 to-orange-500",
      },
    ],
    technology: [
      {
        id: 10,
        icon: <FaCloud />,
        title: "Cloud Data Platform",
        shortDesc: "Scalable cloud infrastructure for big data",
        description: "Build a modern data infrastructure with our cloud-native platform. Scale seamlessly, integrate any data source, and ensure enterprise-grade security.",
        features: ["Data lake architecture", "ETL pipelines", "Real-time streaming", "Auto-scaling", "Multi-cloud support", "Data governance"],
        benefits: [
          { metric: "99.9%", label: "Uptime SLA" },
          { metric: "10x", label: "Scalability" },
          { metric: "50%", label: "Cost reduction" },
        ],
        tools: ["AWS", "Azure", "GCP", "Snowflake"],
        price: "Pay as you grow",
        color: "from-sky-500 to-blue-500",
      },
      {
        id: 11,
        icon: <FaCode />,
        title: "API & Integration Hub",
        shortDesc: "Connect all your data sources seamlessly",
        description: "Integrate any data source, application, or service with our comprehensive API platform. Build custom workflows and automate data pipelines.",
        features: ["REST/GraphQL APIs", "Webhook support", "OAuth integration", "Rate limiting", "API analytics", "Developer portal"],
        benefits: [
          { metric: "500+", label: "Integrations" },
          { metric: "1B+", label: "API calls/month" },
          { metric: "99.95%", label: "Reliability" },
        ],
        tools: ["Kong", "Apigee", "MuleSoft", "Zapier"],
        price: "Starting at $499/month",
        color: "from-emerald-500 to-green-500",
      },
      {
        id: 12,
        icon: <FaMobile />,
        title: "Mobile Analytics SDK",
        shortDesc: "Track and analyze mobile app performance",
        description: "Comprehensive mobile analytics solution for iOS and Android apps. Track user behavior, app performance, and optimize user experience.",
        features: ["User analytics", "Crash reporting", "Performance monitoring", "A/B testing", "Push analytics", "Deep linking"],
        benefits: [
          { metric: "30%", label: "Retention increase" },
          { metric: "99%", label: "Crash-free users" },
          { metric: "2x", label: "Engagement boost" },
        ],
        tools: ["Firebase", "Segment", "Branch", "Adjust"],
        price: "Free tier available",
        color: "from-purple-500 to-violet-500",
      },
    ],
  };

  const currentServices = servicesData[activeCategory] || [];

  return (
    <div className="min-h-screen pt-20">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary/20 to-accent/20 px-4 py-2 rounded-full mb-6"
            >
              <FaRocket className="text-secondary" />
              <span className="text-sm font-medium">Enterprise-Grade Solutions</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive market research and analytics solutions powered by advanced AI and machine learning</p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id ? "bg-gradient-to-r from-secondary to-accent text-white" : "glass-effect hover:bg-white/10"
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {currentServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedService(service)}
                >
                  {/* Service Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`text-4xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>{service.icon}</div>
                    <FaArrowRight className="text-gray-500 group-hover:text-white transition-colors" />
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.shortDesc}</p>

                  {/* Benefits Preview */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-secondary">{benefit.metric}</div>
                        <div className="text-xs text-gray-500">{benefit.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-sm text-gray-400">{service.price}</span>
                    <span className="text-sm text-secondary">Learn more →</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Choose Our <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Services</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <FaClock className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Real-time Updates</h3>
                <p className="text-gray-400">Get instant insights with live data streaming and real-time analytics</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <FaInfinity className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Unlimited Scale</h3>
                <p className="text-gray-400">Handle any data volume with our cloud-native infrastructure</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <FaLock className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-gray-400">Bank-level encryption and compliance with global standards</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <FaAward className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Award-Winning</h3>
                <p className="text-gray-400">Recognized as the leading market research platform</p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      {/* <section className="py-20 border-y border-white/10">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Seamless <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Integrations</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Salesforce", icon: "☁️" },
              { name: "HubSpot", icon: "🟠" },
              { name: "Slack", icon: "💬" },
              { name: "Google Analytics", icon: "📊" },
              { name: "Tableau", icon: "📈" },
              { name: "Power BI", icon: "📉" },
              { name: "Shopify", icon: "🛒" },
              { name: "AWS", icon: "☁️" },
              { name: "Zendesk", icon: "🎧" },
              { name: "Stripe", icon: "💳" },
              { name: "MongoDB", icon: "🍃" },
              { name: "PostgreSQL", icon: "🐘" },
            ].map((integration, index) => (
              <AnimatedSection key={index}>
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="glass-effect p-4 rounded-xl text-center">
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <p className="text-sm">{integration.name}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Our <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Process</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Discovery & Assessment",
                description: "We analyze your current data infrastructure and identify opportunities",
                duration: "1-2 days",
                icon: <FaSearchLocation />,
              },
              {
                step: 2,
                title: "Strategy & Planning",
                description: "Develop a customized implementation roadmap aligned with your goals",
                duration: "3-5 days",
                icon: <FaLightbulb />,
              },
              {
                step: 3,
                title: "Implementation",
                description: "Deploy solutions with minimal disruption to your operations",
                duration: "2-4 weeks",
                icon: <FaCogs />,
              },
              {
                step: 4,
                title: "Training & Support",
                description: "Comprehensive training and ongoing support for your team",
                duration: "Ongoing",
                icon: <FaUsers />,
              },
            ].map((item, index) => (
              <AnimatedSection key={index}>
                <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 }} className="flex items-center mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-2xl font-bold">{item.step}</div>
                  </div>
                  <div className="ml-6 flex-1 glass-effect p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="text-sm text-gray-400">{item.duration}</span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  <div className="ml-6 text-3xl text-secondary">{item.icon}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="glass-effect p-12 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20" />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of companies using our services to make smarter, data-driven decisions</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link to="/demo" className="inline-flex items-center space-x-2 bg-white text-dark px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all">
                      <span>Get Started Free</span>
                      <FaArrowRight />
                    </Link>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsVideoOpen(true)}
                    className="inline-flex items-center space-x-2 glass-effect px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
                  >
                    <FaPlay />
                    <span>Watch Demo</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-effect p-8 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`text-5xl bg-gradient-to-r ${selectedService.color} bg-clip-text text-transparent`}>{selectedService.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                    <p className="text-gray-400">{selectedService.price}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-white text-2xl">
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-300">{selectedService.description}</p>

                {/* Features Grid */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, index) => (
                      <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} className="flex items-center space-x-3">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Expected Benefits</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedService.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                        className="glass-effect p-4 rounded-xl text-center"
                      >
                        <div className={`text-3xl font-bold bg-gradient-to-r ${selectedService.color} bg-clip-text text-transparent mb-2`}>{benefit.metric}</div>
                        <p className="text-sm text-gray-400">{benefit.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.tools.map((tool, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="px-4 py-2 bg-white/10 rounded-full text-sm"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                  <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                    <Link to="/demo" className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-secondary to-accent px-6 py-3 rounded-full font-semibold">
                      <span>Schedule Demo</span>
                      <FaArrowRight />
                    </Link>
                  </motion.div>
                  <motion.button whileHover={{ scale: 1.05 }} className="flex-1 inline-flex items-center justify-center space-x-2 glass-effect px-6 py-3 rounded-full font-semibold hover:bg-white/10">
                    <FaDownload />
                    <span>Download Brochure</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                ×
              </button>

              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <FaPlay className="text-6xl text-secondary mb-4 mx-auto" />
                  <p className="text-xl">Service Demo Video</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              What Our <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "The analytics platform transformed how we make decisions. ROI was immediate and substantial.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp",
                service: "Advanced Analytics Platform",
                rating: 5,
              },
              {
                quote: "Market intelligence that actually works. We're always one step ahead of competitors now.",
                author: "Michael Chen",
                role: "VP Strategy, RetailGiant",
                service: "Competitive Intelligence",
                rating: 5,
              },
              {
                quote: "The integration was seamless and the support team is exceptional. Highly recommended!",
                author: "Emily Rodriguez",
                role: "Data Director, FinanceHub",
                service: "Cloud Data Platform",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <AnimatedSection key={index}>
                <motion.div whileHover={{ y: -10 }} className="glass-effect p-6 rounded-xl h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 flex-1">"{testimonial.quote}"</p>
                  <div className="space-y-1">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-secondary">{testimonial.service}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Questions</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How long does implementation typically take?",
                answer: "Most services can be implemented within 2-4 weeks. Simple integrations can be done in days, while enterprise deployments may take 6-8 weeks.",
              },
              {
                question: "Do you offer custom pricing for startups?",
                answer: "Yes! We have special startup packages and can create custom plans based on your needs and budget. Contact us for details.",
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer 24/7 technical support, dedicated account managers, comprehensive documentation, and regular training sessions.",
              },
              {
                question: "Can I switch between services or upgrade later?",
                answer: "Absolutely! Our platform is designed to grow with you. You can upgrade, downgrade, or switch services at any time.",
              },
              {
                question: "Do you provide data migration services?",
                answer: "Yes, we offer complete data migration services to ensure a smooth transition from your existing systems.",
              },
            ].map((faq, index) => (
              <AnimatedSection key={index}>
                <details className="glass-effect p-6 rounded-xl group">
                  <summary className="font-semibold cursor-pointer flex items-center justify-between">
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

      {/* Resources Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Helpful <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Resources</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.a href="#" whileHover={{ scale: 1.05 }} className="glass-effect p-6 rounded-xl text-center group">
              <FaDatabase className="text-4xl text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">API Documentation</h3>
              <p className="text-gray-400 mb-4">Complete guides and references for developers</p>
              <span className="text-secondary group-hover:underline">Explore Docs →</span>
            </motion.a>

            <motion.a href="#" whileHover={{ scale: 1.05 }} className="glass-effect p-6 rounded-xl text-center group">
              <FaLightbulb className="text-4xl text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Case Studies</h3>
              <p className="text-gray-400 mb-4">See how others achieved success with our platform</p>
              <span className="text-accent group-hover:underline">View Studies →</span>
            </motion.a>

            <motion.a href="#" whileHover={{ scale: 1.05 }} className="glass-effect p-6 rounded-xl text-center group">
              <FaUsers className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Forum</h3>
              <p className="text-gray-400 mb-4">Connect with other users and share insights</p>
              <span className="text-purple-500 group-hover:underline">Join Community →</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="fixed bottom-8 right-8 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-secondary to-accent p-4 rounded-full shadow-2xl shadow-secondary/50 flex items-center space-x-2 group"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">Need Help?</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Services;
