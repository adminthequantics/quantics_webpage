import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/common/AnimatedSection";
import ParticleBackground from "../components/common/ParticleBackground";
import Hero from "../components/home/Hero";
import ServicesGrid from "../components/home/ServicesGrid";
import StatsCounter from "../components/home/StatsCounter";
import {
  FaChartLine,
  FaBrain,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaTrophy,
  FaLightbulb,
  FaArrowRight,
  FaPlay,
  FaQuoteLeft,
  FaCheckCircle,
  FaClock,
  FaInfinity,
  FaMobile,
  FaCloud,
  FaDatabase,
  FaStar,
  FaAward,
  FaCertificate,
  FaCode,
} from "react-icons/fa";
import { SiGoogle, SiAmazon, SiIberia, SiOracle, SiSalesforce, SiAdobe, SiSap } from "react-icons/si";

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Features data
  const features = [
    {
      icon: <FaBrain />,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms analyze billions of data points to provide predictive insights",
      stats: "95% Accuracy",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaClock />,
      title: "Real-Time Analytics",
      description: "Get instant market updates and live data streaming with sub-second latency",
      stats: "<100ms Response",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaGlobe />,
      title: "Global Coverage",
      description: "Access comprehensive market data from 150+ countries in 40+ languages",
      stats: "150+ Markets",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaShieldAlt />,
      title: "Enterprise Security",
      description: "Bank-level encryption and SOC 2 Type II certified infrastructure",
      stats: "99.99% Uptime",
      color: "from-orange-500 to-red-500",
    },
  ];

  // Client testimonials
  const testimonials = [
    {
      quote: "This platform transformed how we understand our market. The AI insights are game-changing.",
      author: "Sarah Chen",
      role: "VP of Strategy, Fortune 500",
      company: "TechCorp",
      rating: 5,
    },
    {
      quote: "We reduced our research time by 80% while getting 3x more actionable insights.",
      author: "Michael Roberts",
      role: "CEO",
      company: "InnovateCo",
      rating: 5,
    },
    {
      quote: "The ROI was immediate. We identified $2M in new opportunities within the first month.",
      author: "Lisa Wang",
      role: "Director of Analytics",
      company: "GlobalRetail",
      rating: 5,
    },
  ];

  // Platform capabilities
  const capabilities = [
    {
      title: "Data Processing",
      value: "50M+",
      description: "Data points analyzed daily",
    },
    {
      title: "AI Models",
      value: "200+",
      description: "Proprietary ML algorithms",
    },
    {
      title: "API Calls",
      value: "1B+",
      description: "Monthly API requests",
    },
    {
      title: "Accuracy Rate",
      value: "99.9%",
      description: "Data precision guarantee",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center py-20">
        <ParticleBackground />

        {/* Animated background elements */}
        <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl" />
        <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary/20 to-accent/20 px-4 py-2 rounded-full mb-6"
              >
                <FaAward className="text-yellow-500" />
                <span className="text-sm font-medium">#1 Market Research Platform 2024</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Start your <span className="bg-gradient-to-r from-secondary via-accent to-purple-500 bg-clip-text text-transparent">Market Research</span> Experience
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Unlock powerful AI-driven insights that transform data into competitive advantage. Join 1000+ companies making smarter decisions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-secondary to-accent px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-secondary/50 transition-all duration-300"
                  >
                    <span>Start Free Trial</span>
                    <FaArrowRight />
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center justify-center space-x-2 glass-effect px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <FaPlay />
                  <span>Watch Demo</span>
                </motion.button>
              </div>

              {/* Trust badges */}
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-xs font-bold border-2 border-dark">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-sm" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">Trusted by 1000+ companies</p>
                </div>
              </div>
            </motion.div>

            {/* Interactive 3D visualization placeholder */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative w-full glass-effect rounded-2xl p-6 overflow-hidden">
                {/* Animated dashboard preview */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl" />

                {/* Dashboard Header */}
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="relative flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-400">Live Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">Last updated:</span>
                    <span className="text-xs text-gray-400">2 seconds ago</span>
                  </div>
                </motion.div>

                {/* Main Metrics Grid - Adjusted for smaller screens */}
                <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, type: "spring" }} className="glass-effect p-3 rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <FaChartLine className="text-secondary text-sm" />
                      <span className="text-xs text-green-500">+12%</span>
                    </div>
                    <div className="text-lg lg:text-xl font-bold">$2.4M</div>
                    <div className="text-xs text-gray-400">Market Size</div>
                  </motion.div>

                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }} className="glass-effect p-3 rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <FaUsers className="text-accent text-sm" />
                      <span className="text-xs text-green-500">+8%</span>
                    </div>
                    <div className="text-lg lg:text-xl font-bold">18.5K</div>
                    <div className="text-xs text-gray-400">Active Users</div>
                  </motion.div>

                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring" }} className="glass-effect p-3 rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <FaTrophy className="text-yellow-500 text-sm" />
                      <span className="text-xs text-green-500">+24%</span>
                    </div>
                    <div className="text-lg lg:text-xl font-bold">89%</div>
                    <div className="text-xs text-gray-400">Win Rate</div>
                  </motion.div>

                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }} className="glass-effect p-3 rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <FaRocket className="text-purple-500 text-sm" />
                      <span className="text-xs text-green-500">+15%</span>
                    </div>
                    <div className="text-lg lg:text-xl font-bold">342</div>
                    <div className="text-xs text-gray-400">New Leads</div>
                  </motion.div>
                </div>

                {/* Chart Section - Simplified */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
                  {/* Line Chart */}
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="glass-effect p-3 rounded-xl">
                    <h3 className="text-sm font-semibold mb-2">Market Trends</h3>
                    <div className="relative h-24">
                      {/* Animated line chart */}
                      <svg className="w-full h-full" viewBox="0 0 300 100">
                        <motion.path
                          d="M0,80 Q50,40 100,60 T200,30 T300,50"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 1, duration: 2 }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-gray-400">
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>May</span>
                      <span>Jul</span>
                    </div>
                  </motion.div>

                  {/* Bar Chart */}
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9 }} className="glass-effect p-3 rounded-xl">
                    <h3 className="text-sm font-semibold mb-2">Performance</h3>
                    <div className="space-y-2">
                      {[
                        { label: "Engagement", value: 85, color: "from-blue-500 to-cyan-500" },
                        { label: "Conversion", value: 72, color: "from-purple-500 to-pink-500" },
                        { label: "Retention", value: 94, color: "from-green-500 to-emerald-500" },
                      ].map((metric, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400">{metric.label}</span>
                            <span className="text-gray-300">{metric.value}%</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.value}%` }}
                              transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                              className={`h-full bg-gradient-to-r ${metric.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Activity Feed - Simplified */}
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }} className="relative glass-effect p-3 rounded-xl">
                  <h3 className="text-sm font-semibold mb-2">Real-time Activity</h3>
                  <div className="space-y-2">
                    {[
                      { icon: <FaChartLine className="text-xs" />, text: "New trend in APAC", time: "2s", color: "text-secondary" },
                      { icon: <FaUsers className="text-xs" />, text: "Competitor update", time: "1m", color: "text-accent" },
                      { icon: <FaLightbulb className="text-xs" />, text: "Growth opportunity", time: "3m", color: "text-yellow-500" },
                    ].map((activity, i) => (
                      <motion.div key={i} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.3 + i * 0.1 }} className="flex items-center space-x-2 text-xs">
                        <div className={`${activity.color}`}>{activity.icon}</div>
                        <span className="text-gray-300 flex-1 truncate">{activity.text}</span>
                        <span className="text-gray-500">{activity.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating AI indicator - positioned better */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-4 right-4 glass-effect p-2 rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <FaBrain className="text-lg text-accent" />
                    <div className="text-xs">
                      <div className="font-semibold">AI Active</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}

      {/* Interactive Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary/20 to-accent/20 px-4 py-2 rounded-full mb-4"
              >
                <FaRocket className="text-secondary" />
                <span className="text-sm font-medium">Powered by Advanced AI</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Market Leaders Choose <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Our Platform</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the future of market intelligence with our cutting-edge features</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature selector */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ x: 10 }}
                  className={`glass-effect p-6 rounded-xl cursor-pointer transition-all ${activeFeature === index ? "ring-2 ring-secondary" : ""}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`text-4xl bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>{feature.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 mb-2">{feature.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-secondary">{feature.stats}</span>
                        <motion.div
                          animate={{
                            scale: activeFeature === index ? 1 : 0,
                            opacity: activeFeature === index ? 1 : 0,
                          }}
                          className="text-green-500"
                        >
                          <FaCheckCircle />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature visualization */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative h-[500px] glass-effect rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10" />

                {/* Dynamic content based on active feature */}
                {activeFeature === 0 && (
                  <div className="relative h-full flex flex-col justify-center items-center text-center">
                    <FaBrain className="text-8xl text-secondary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">AI Neural Network</h3>
                    <p className="text-gray-400">Processing 50M+ data points in real-time</p>
                    <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                      <div className="glass-effect p-4 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">NLP</div>
                        <div className="text-xs text-gray-400">Natural Language</div>
                      </div>
                      <div className="glass-effect p-4 rounded-lg">
                        <div className="text-2xl font-bold text-accent">ML</div>
                        <div className="text-xs text-gray-400">Machine Learning</div>
                      </div>
                      <div className="glass-effect p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-500">DL</div>
                        <div className="text-xs text-gray-400">Deep Learning</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature === 1 && (
                  <div className="relative h-full">
                    <h3 className="text-2xl font-bold mb-6">Live Market Dashboard</h3>
                    <div className="space-y-4">
                      {[...Array(4)].map((_, i) => (
                        <motion.div key={i} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} className="glass-effect p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">Market Metric {i + 1}</span>
                            <span className="text-green-500 text-sm">+{(Math.random() * 30).toFixed(1)}%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${60 + Math.random() * 40}%` }}
                              transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
                              className="h-full bg-gradient-to-r from-secondary to-accent"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeFeature === 2 && (
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-center">
                      <FaGlobe className="text-8xl text-green-500 mb-6 mx-auto" />
                      <h3 className="text-2xl font-bold mb-4">Global Market Coverage</h3>
                      <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="glass-effect p-4 rounded-lg">
                          <div className="text-3xl font-bold text-secondary">150+</div>
                          <div className="text-sm text-gray-400">Countries</div>
                        </div>
                        <div className="glass-effect p-4 rounded-lg">
                          <div className="text-3xl font-bold text-accent">40+</div>
                          <div className="text-sm text-gray-400">Languages</div>
                        </div>
                        <div className="glass-effect p-4 rounded-lg">
                          <div className="text-3xl font-bold text-green-500">24/7</div>
                          <div className="text-sm text-gray-400">Monitoring</div>
                        </div>
                        <div className="glass-effect p-4 rounded-lg">
                          <div className="text-3xl font-bold text-purple-500">1M+</div>
                          <div className="text-sm text-gray-400">Sources</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature === 3 && (
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-center">
                      <FaShieldAlt className="text-8xl text-orange-500 mb-6 mx-auto" />
                      <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Security</h3>
                      <div className="space-y-3 mt-8">
                        <div className="flex items-center space-x-3 glass-effect p-3 rounded-lg">
                          <FaCheckCircle className="text-green-500" />
                          <span>SOC 2 Type II Certified</span>
                        </div>
                        <div className="flex items-center space-x-3 glass-effect p-3 rounded-lg">
                          <FaCheckCircle className="text-green-500" />
                          <span>256-bit AES Encryption</span>
                        </div>
                        <div className="flex items-center space-x-3 glass-effect p-3 rounded-lg">
                          <FaCheckCircle className="text-green-500" />
                          <span>GDPR & CCPA Compliant</span>
                        </div>
                        <div className="flex items-center space-x-3 glass-effect p-3 rounded-lg">
                          <FaCheckCircle className="text-green-500" />
                          <span>99.99% Uptime SLA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Services Grid with Enhanced Animation */}
      <ServicesGrid />

      {/* Platform Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Platform <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Built for scale, designed for performance</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {capabilities.map((capability, index) => (
              <div className="glass-effect p-3 md:p-8 rounded-2xl">
                <AnimatedSection key={index}>
                  <motion.div whileHover={{ y: -10 }} className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2"
                    >
                      {capability.value}
                    </motion.div>
                    <h3 className="font-semibold mb-1">{capability.title}</h3>
                    <p className="text-sm text-gray-400">{capability.description}</p>
                  </motion.div>
                </AnimatedSection>
              </div>
            ))}
          </div>

          {/* Integration showcase */}
          {/* <AnimatedSection>
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8 text-center">Seamless Integrations</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: <FaDatabase />, name: "SQL/NoSQL" },
                  { icon: <FaCloud />, name: "Cloud APIs" },
                  { icon: <FaMobile />, name: "Mobile SDKs" },
                  { icon: <FaCode />, name: "REST/GraphQL" },
                ].map((integration, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1 }} className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="text-4xl text-secondary">{integration.icon}</div>
                    <span className="text-sm">{integration.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection> */}
        </div>
      </section>

      {/* Enhanced Stats Counter */}
      {/* <StatsCounter /> */}

      {/* Testimonials Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Clients Say</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index}>
                <motion.div whileHover={{ y: -10 }} className="glass-effect p-8 rounded-2xl h-full flex flex-col">
                  <FaQuoteLeft className="text-3xl text-secondary/30 mb-4" />
                  <p className="text-lg text-gray-300 mb-6 flex-1">"{testimonial.quote}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-500 text-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">
                  Calculate Your <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">ROI</span>
                </h2>
                <p className="text-xl text-gray-300">See how much you could save with our platform</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">75%</div>
                  <p className="text-gray-400">Time Saved</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">3.5x</div>
                  <p className="text-gray-400">More Insights</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-500 mb-2">250%</div>
                  <p className="text-gray-400">Average ROI</p>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <Link
                  to="/demo"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary to-accent px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-secondary/50 transition-all duration-300"
                >
                  <span>Get Your Custom ROI Report</span>
                  <FaArrowRight />
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary/20 to-accent/20 px-4 py-2 rounded-full mb-4"
              >
                <FaLightbulb className="text-yellow-500" />
                <span className="text-sm font-medium">Real-World Applications</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How Companies Use <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Our Platform</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Product Launch",
                description: "Validate market demand and optimize pricing strategy before launch",
                icon: <FaRocket />,
                metric: "85% success rate",
              },
              {
                title: "Competitive Intelligence",
                description: "Track competitor moves and identify market opportunities in real-time",
                icon: <FaTrophy />,
                metric: "3x faster insights",
              },
              {
                title: "Market Expansion",
                description: "Identify new markets and assess entry barriers with AI precision",
                icon: <FaGlobe />,
                metric: "60% risk reduction",
              },
              {
                title: "Customer Insights",
                description: "Understand customer behavior and preferences at scale",
                icon: <FaUsers />,
                metric: "95% accuracy",
              },
              {
                title: "Trend Forecasting",
                description: "Predict market trends before they become mainstream",
                icon: <FaChartLine />,
                metric: "12 months ahead",
              },
              {
                title: "Risk Assessment",
                description: "Evaluate market risks and opportunities with confidence",
                icon: <FaShieldAlt />,
                metric: "90% prediction rate",
              },
            ].map((useCase, index) => (
              <AnimatedSection key={index}>
                <motion.div whileHover={{ y: -10, scale: 1.02 }} className="glass-effect p-6 rounded-xl h-full">
                  <div className="text-4xl text-secondary mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-400 mb-4">{useCase.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-sm font-medium text-green-500">{useCase.metric}</span>
                    <FaArrowRight className="text-gray-500" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full mb-8"
              >
                <FaInfinity className="text-3xl" />
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Ready to Transform Your <span className="bg-gradient-to-r from-secondary via-accent to-purple-500 bg-clip-text text-transparent">Market Research?</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of companies already using AI-powered insights to make smarter decisions</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center space-x-2 bg-white text-dark px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
                  >
                    <span>Start Free Trial</span>
                    <FaArrowRight />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center space-x-2 glass-effect px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    <span>Explore Features</span>
                  </Link>
                </motion.div>
              </div>

              <p className="text-sm text-gray-400">No credit card required • 14-day free trial • Cancel anytime</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                ✕
              </button>

              {/* Video placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <FaPlay className="text-6xl text-secondary mb-4 mx-auto" />
                  <p className="text-xl">Demo Video Coming Soon</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="fixed bottom-8 right-8 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-secondary to-accent p-4 rounded-full shadow-2xl shadow-secondary/50 flex items-center space-x-2 group"
        >
          <FaRocket className="text-xl" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">Get Started Now</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
