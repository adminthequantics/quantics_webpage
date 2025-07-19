import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "../components/common/AnimatedSection";
import ParticleBackground from "../components/common/ParticleBackground";
import {
  FaIndustry,
  FaShoppingCart,
  FaHeartbeat,
  FaUniversity,
  FaMicrochip,
  FaStore,
  FaGraduationCap,
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle,
  FaTrophy,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaBrain,
  FaQuoteLeft,
  FaAward,
  FaPoll,
  FaChartBar,
  FaDatabase,
  FaClock,
  FaNetworkWired,
  FaStar,
  FaSync,
  FaSearchDollar,
} from "react-icons/fa";
import { HiTrendingUp, HiLightningBolt, HiSparkles, HiChip } from "react-icons/hi";
import { SiTensorflow, SiPytorch, SiOpenai } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Core industries we serve
  const industries = [
    {
      id: "retail",
      icon: <FaShoppingCart className="text-4xl" />,
      title: "Retail & E-commerce",
      description: "AI-powered consumer insights for modern retail",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time consumer behavior analysis",
        "Predictive inventory optimization",
        "Dynamic pricing intelligence",
        "Omnichannel experience tracking"
      ],
      aiCapabilities: [
        { name: "Purchase Prediction", accuracy: "94%" },
        { name: "Trend Forecasting", speed: "Real-time" },
        { name: "Customer Segmentation", segments: "Unlimited" }
      ],
      successMetric: "45% increase in conversion rates",
    },
    {
      id: "healthcare",
      icon: <FaHeartbeat className="text-4xl" />,
      title: "Healthcare & Life Sciences",
      description: "Transform patient care with data intelligence",
      color: "from-red-500 to-pink-500",
      features: [
        "Patient sentiment analysis",
        "Treatment effectiveness tracking",
        "Healthcare trend prediction",
        "Compliance monitoring"
      ],
      aiCapabilities: [
        { name: "Patient Analytics", accuracy: "97%" },
        { name: "Risk Assessment", speed: "Instant" },
        { name: "Outcome Prediction", confidence: "95%" }
      ],
      successMetric: "60% faster clinical insights",
    },
    {
      id: "finance",
      icon: <FaUniversity className="text-4xl" />,
      title: "Financial Services",
      description: "Navigate markets with AI-driven insights",
      color: "from-green-500 to-emerald-500",
      features: [
        "Market sentiment analysis",
        "Risk assessment modeling",
        "Customer behavior analytics",
        "Regulatory compliance tracking"
      ],
      aiCapabilities: [
        { name: "Fraud Detection", accuracy: "99.9%" },
        { name: "Market Prediction", horizon: "6 months" },
        { name: "Risk Scoring", processing: "Real-time" }
      ],
      successMetric: "90% fraud prevention rate",
    },
    {
      id: "technology",
      icon: <FaMicrochip className="text-4xl" />,
      title: "Technology & Software",
      description: "Stay ahead with competitive intelligence",
      color: "from-purple-500 to-pink-500",
      features: [
        "Innovation trend tracking",
        "Competitive benchmarking",
        "User behavior analytics",
        "Market opportunity sizing"
      ],
      aiCapabilities: [
        { name: "Tech Stack Analysis", coverage: "100%" },
        { name: "Innovation Tracking", sources: "50K+" },
        { name: "Market Sizing", accuracy: "92%" }
      ],
      successMetric: "3x faster product launches",
    },
    {
      id: "manufacturing",
      icon: <FaIndustry className="text-4xl" />,
      title: "Manufacturing & Industrial",
      description: "Optimize operations with smart insights",
      color: "from-orange-500 to-red-500",
      features: [
        "Supply chain analytics",
        "Demand forecasting",
        "Quality control optimization",
        "Predictive maintenance"
      ],
      aiCapabilities: [
        { name: "Demand Forecasting", accuracy: "93%" },
        { name: "Supply Chain AI", optimization: "40%" },
        { name: "Quality Prediction", detection: "98%" }
      ],
      successMetric: "40% efficiency improvement",
    },
    {
      id: "education",
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Education & EdTech",
      description: "Transform learning with data insights",
      color: "from-indigo-500 to-blue-500",
      features: [
        "Student engagement analytics",
        "Learning outcome prediction",
        "Course optimization insights",
        "Market demand analysis"
      ],
      aiCapabilities: [
        { name: "Engagement Tracking", accuracy: "91%" },
        { name: "Success Prediction", confidence: "88%" },
        { name: "Content Optimization", improvement: "35%" }
      ],
      successMetric: "78% improvement in outcomes",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Animated background elements */}
        <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30" />
        <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6"
            >
              <HiSparkles className="text-purple-600" />
                            <span className="text-sm font-medium text-gray-700">AI-Powered Industry Solutions</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              Industry Expertise Meets <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">AI Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
              Deep industry knowledge combined with cutting-edge AI to deliver insights that transform businesses
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{statsInView && <CountUp end={6} duration={2} suffix="+" />}</div>
                <p className="text-gray-600">Industries</p>
              </motion.div>
              <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.2 }} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{statsInView && <CountUp end={98} duration={2} suffix="%" />}</div>
                <p className="text-gray-600">AI Accuracy</p>
              </motion.div>
              <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.3 }} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{statsInView && <CountUp end={10} duration={2} suffix="x" />}</div>
                <p className="text-gray-600">Faster Insights</p>
              </motion.div>
              <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.4 }} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{statsInView && <CountUp end={45} duration={2} suffix="%" />}</div>
                <p className="text-gray-600">Avg. ROI Increase</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full mb-4"
              >
                <FaIndustry className="text-green-600" />
                <span className="text-sm font-medium text-gray-700">Industry-Specific Solutions</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Solutions Tailored for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Industry</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI adapts to your industry's unique challenges and opportunities
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredCard(industry.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  onClick={() => setSelectedIndustry(industry)}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 h-full flex flex-col"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center text-white mb-4`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  
                  {/* Key Features */}
                  <ul className="space-y-2 mb-4 flex-grow">
                    {industry.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Success Metric */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Success Rate</span>
                      <span className="text-sm font-semibold text-green-600">{industry.successMetric}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-blue-600 font-medium text-sm">Learn more</span>
                    <FaArrowRight className="text-blue-600" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities by Industry */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4"
              >
                <FaBrain className="text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Industry-Specific AI Models</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                AI That <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Understands Your Business</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pre-trained models for each industry ensure accurate, relevant insights from day one
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <SiTensorflow className="text-3xl" />,
                title: "Custom ML Models",
                description: "Industry-specific algorithms",
                metric: "50+ models"
              },
              {
                icon: <BiNetworkChart className="text-3xl" />,
                title: "Pattern Recognition",
                description: "Identify industry trends",
                metric: "Real-time"
              },
              {
                icon: <HiChip className="text-3xl" />,
                title: "NLP Analysis",
                description: "Industry terminology",
                metric: "40+ languages"
              },
              {
                icon: <FaRocket className="text-3xl" />,
                title: "Predictive Analytics",
                description: "Forecast industry shifts",
                metric: "95% accuracy"
              }
            ].map((capability, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{capability.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{capability.description}</p>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {capability.metric}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full mb-4"
              >
                <FaAward className="text-yellow-600" />
                <span className="text-sm font-medium text-gray-700">Industry Success Stories</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                Real Results Across <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Every Industry</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                industry: "Retail",
                company: "Global Fashion Retailer",
                logo: "🛍️",
                challenge: "Understanding rapidly changing fashion trends across regions",
                solution: "AI-powered trend analysis and demand forecasting",
                results: [
                  "45% increase in sales",
                  "30% reduction in inventory costs",
                  "Real-time trend identification"
                ],
                quote: "The AI insights transformed our merchandising strategy completely.",
                author: "Sarah Chen, VP Merchandising"
              },
              {
                industry: "Healthcare",
                company: "Regional Hospital Network",
                logo: "🏥",
                challenge: "Improving patient satisfaction and operational efficiency",
                solution: "Patient sentiment analysis and workflow optimization",
                results: [
                  "60% improvement in patient satisfaction",
                  "35% reduction in wait times",
                  "Predictive staffing optimization"
                ],
                quote: "We can now anticipate patient needs before they arise.",
                author: "Dr. Michael Roberts, Chief Medical Officer"
              },
              {
                industry: "Finance",
                company: "Digital Banking Platform",
                logo: "💳",
                challenge: "Detecting fraud while maintaining customer experience",
                solution: "Real-time transaction analysis with ML models",
                results: [
                  "99.9% fraud detection accuracy",
                  "$50M in prevented losses",
                  "Zero false positives"
                ],
                quote: "The AI system is like having 1000 analysts working 24/7.",
                author: "Lisa Wang, Head of Risk"
              }
            ].map((story, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
                >
                  <div className="text-4xl mb-4">{story.logo}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                  <p className="text-sm text-gray-600 mb-4">{story.industry}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Challenge:</p>
                    <p className="text-gray-700">{story.challenge}</p>
                  </div>
                  
                  <div className="mb-6 flex-grow">
                    <p className="text-sm text-gray-500 mb-2">Results:</p>
                    <ul className="space-y-2">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <FaQuoteLeft className="text-2xl text-gray-300 mb-2" />
                    <p className="text-gray-600 italic mb-2">{story.quote}</p>
                    <p className="text-sm text-gray-500">— {story.author}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Detail Modal */}
      <AnimatePresence>
        {selectedIndustry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedIndustry(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white shadow-2xl p-8 rounded-2xl max-w-4xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedIndustry.color} flex items-center justify-center text-white`}>
                    {selectedIndustry.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedIndustry.title}</h2>
                    <p className="text-gray-600 mt-1">{selectedIndustry.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedIndustry(null)} 
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* AI Capabilities */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">AI Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedIndustry.aiCapabilities.map((capability, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{capability.name}</h4>
                      <div className="text-2xl font-bold text-blue-600">
                        {Object.values(capability)[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedIndustry.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Metric */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Average Client Result</p>
                  <p className="text-3xl font-bold text-blue-600">{selectedIndustry.successMetric}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                  <Link 
                    to="/demo" 
                    className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                  >
                    <span>Get {selectedIndustry.title} Demo</span>
                    <FaArrowRight />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 hover:shadow-md transition-all"
                  >
                    <span>Talk to Industry Expert</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industry Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Industry <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resources & Insights</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <FaChartLine />,
                title: "Industry Reports",
                description: "Deep market analysis",
                count: "50+ reports",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <FaPoll />,
                title: "Benchmarks",
                description: "Industry standards",
                count: "Updated daily",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <FaLightbulb />,
                                title: "Best Practices",
                description: "Proven strategies",
                count: "200+ guides",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <FaDatabase />,
                title: "Data Sets",
                description: "Industry datasets",
                count: "10TB+ data",
                color: "from-orange-500 to-red-500",
              },
            ].map((resource, index) => (
              <AnimatedSection key={index}>
                <motion.div 
                  whileHover={{ y: -10 }} 
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <div className="text-xl font-bold text-blue-600">{resource.count}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Industry Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4"
              >
                <FaSync className="text-blue-600 animate-spin" />
                <span className="text-sm font-medium text-gray-700">Real-Time Industry Intelligence</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Live Industry <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Performance Metrics</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Trending Industries */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                    <HiTrendingUp className="text-green-600 mr-2" />
                    Trending Industries
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Healthcare Tech", growth: "+42%", trend: "up" },
                      { name: "E-commerce", growth: "+38%", trend: "up" },
                      { name: "EdTech", growth: "+35%", trend: "up" },
                      { name: "FinTech", growth: "+28%", trend: "up" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{item.name}</span>
                        <span className={`text-sm font-semibold ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {item.growth}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Adoption Rate */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                    <FaBrain className="text-purple-600 mr-2" />
                    AI Adoption by Industry
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Technology", rate: 95 },
                      { name: "Finance", rate: 87 },
                      { name: "Healthcare", rate: 78 },
                      { name: "Retail", rate: 72 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">{item.name}</span>
                          <span className="font-semibold text-gray-900">{item.rate}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.rate}%` }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Metrics */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                    <FaStar className="text-yellow-500 mr-2" />
                    Success Metrics
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">98%</div>
                      <p className="text-xs text-gray-600">Client Satisfaction</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">3.5x</div>
                      <p className="text-xs text-gray-600">Average ROI</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">45%</div>
                      <p className="text-xs text-gray-600">Time Saved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Industry <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FAQs</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How does the AI adapt to my specific industry?",
                answer: "Our AI models are pre-trained on industry-specific data and continuously learn from your usage. The system automatically adjusts algorithms, terminology, and metrics based on your industry's unique requirements."
              },
              {
                question: "Can I get insights across multiple industries?",
                answer: "Yes! Our platform supports multi-industry analysis, allowing you to track cross-industry trends, identify opportunities, and benchmark performance across different sectors."
              },
              {
                question: "How current is the industry data?",
                answer: "We process real-time data from thousands of sources. Market data is updated every second, while deeper analytics refresh hourly or daily depending on the metric."
              },
              {
                question: "Do you support niche industries?",
                answer: "Absolutely. While we have pre-built solutions for major industries, our AI can be customized for any niche market or specialized sector."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <details className="bg-white p-6 rounded-2xl group cursor-pointer shadow-md">
                    <summary className="font-semibold text-gray-900 flex items-center justify-between">
                      {faq.question}
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  </details>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black opacity-10" />
        
        {/* Animated background shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
                                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8"
              >
                <HiSparkles className="text-4xl text-white" />
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Transform Your Industry with <span className="text-yellow-300">AI-Powered Insights</span>
              </h2>

              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Join leading companies across every industry who are using our AI platform to drive growth and innovation
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
                  >
                    <span>Get Industry Demo</span>
                    <FaArrowRight />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    <span>Talk to Industry Expert</span>
                  </Link>
                </motion.div>
              </div>

              {/* <div className="flex items-center justify-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <FaCheckCircle />
                  <span className="text-sm">Industry-specific AI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle />
                  <span className="text-sm">14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle />
                  <span className="text-sm">Expert support</span>
                </div>
              </div> */}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Floating Chat Widget */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-2xl text-white group relative"
        >
          <div className="relative">
            <FaBrain className="text-xl" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
          >
            AI Assistant Online
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Industries;