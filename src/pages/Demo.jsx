import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/common/AnimatedSection";
import ParticleBackground from "../components/common/ParticleBackground";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaIndustry,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaChartLine,
  FaLightbulb,
  FaRocket,
  FaCalendar,
  FaClock,
  FaGlobe,
  FaShieldAlt,
  FaBrain,
  FaChartBar,
  FaDatabase,
  FaCode,
  FaCloud,
  FaPlay,
  FaPause,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

const Demo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    industry: "",
    companySize: "",
    budget: "",
    timeline: "",
    interests: [],
    challenges: [],
    preferredDate: "",
    preferredTime: "",
    timezone: "",
    message: "",
  });

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState("analytics");

  // Demo options
  const demoTypes = [
    {
      id: "analytics",
      title: "Real-time Analytics Dashboard",
      description: "See how our AI processes millions of data points in real-time",
      icon: <FaChartLine />,
      duration: "15 min",
      features: ["Live data streaming", "Predictive modeling", "Custom metrics"],
    },
    {
      id: "ai",
      title: "AI-Powered Insights Engine",
      description: "Experience our machine learning algorithms in action",
      icon: <FaBrain />,
      duration: "20 min",
      features: ["Natural language queries", "Automated insights", "Pattern recognition"],
    },
    {
      id: "integration",
      title: "Seamless Integration",
      description: "Learn how to connect with your existing tools",
      icon: <FaCode />,
      duration: "10 min",
      features: ["API walkthrough", "Data import/export", "Webhook setup"],
    },
  ];

  const industries = [
    "Retail & E-commerce",
    "Healthcare & Pharma",
    "Financial Services",
    "Technology & Software",
    "Manufacturing",
    "Media & Entertainment",
    "Education",
    "Real Estate",
    "Transportation",
    "Other",
  ];

  const companySizes = ["Startup (1-50)", "Small Business (51-200)", "Mid-Market (201-1000)", "Enterprise (1000+)"];

  const budgets = ["Under $10k", "$10k - $50k", "$50k - $100k", "$100k - $500k", "Above $500k", "Not sure yet"];

  const timelines = ["Immediate (This month)", "Short-term (1-3 months)", "Medium-term (3-6 months)", "Long-term (6+ months)", "Just exploring"];

  const challenges = [
    "Data Quality Issues",
    "Lack of Market Visibility",
    "Competitor Intelligence",
    "Customer Understanding",
    "Trend Identification",
    "ROI Measurement",
    "Scalability Concerns",
    "Integration Complexity",
  ];

  const interests = [
    "Market Sizing & Forecasting",
    "Competitive Analysis",
    "Consumer Behavior Insights",
    "Trend Analysis & Prediction",
    "Product Innovation Research",
    "Risk Assessment",
    "Custom Analytics",
    "API Access",
  ];

  const timezones = [
    "PST (Pacific Time)",
    "MST (Mountain Time)",
    "CST (Central Time)",
    "EST (Eastern Time)",
    "GMT (London)",
    "CET (Central Europe)",
    "IST (India)",
    "JST (Japan)",
    "AEST (Australia East)",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayToggle = (array, item, field) => {
    const currentArray = formData[field];
    const updatedArray = currentArray.includes(item) ? currentArray.filter((i) => i !== item) : [...currentArray, item];
    setFormData({ ...formData, [field]: updatedArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email;
      case 2:
        return formData.company && formData.industry && formData.companySize;
      case 3:
        return formData.interests.length > 0;
      case 4:
        return formData.preferredDate && formData.preferredTime && formData.timezone;
      default:
        return true;
    }
  };

  // Success Screen
  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <ParticleBackground />
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-2xl mx-auto px-4">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="text-7xl text-green-500 mb-8 inline-block">
            <FaCheckCircle />
          </motion.div>

          <h2 className="text-5xl font-bold mb-6">Demo Scheduled!</h2>
          <p className="text-xl text-gray-300 mb-8">Thank you, {formData.firstName}! We've confirmed your demo for:</p>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="glass-effect p-6 rounded-2xl mb-8">
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center space-x-2">
                <FaCalendar className="text-secondary" />
                <span>{new Date(formData.preferredDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-accent" />
                <span>{formData.preferredTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGlobe className="text-green-500" />
                <span>{formData.timezone}</span>
              </div>
            </div>
          </motion.div>

          <p className="text-gray-400 mb-8">A calendar invite has been sent to {formData.email}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href="/" whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-secondary to-accent px-8 py-4 rounded-full text-lg font-semibold">
              Back to Home
            </motion.a>
            <motion.button whileHover={{ scale: 1.05 }} className="glass-effect px-8 py-4 rounded-full text-lg font-semibold">
              Add to Calendar
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold mb-6">
            Experience the <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Future</span> of Market Research
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a personalized walkthrough of our AI-powered platform and see how we can transform your business intelligence
          </motion.p>
        </div>
      </section>

      {/* Interactive Demo Preview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Choose Your Demo Experience</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                {demoTypes.map((demo) => (
                  <motion.div
                    key={demo.id}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedDemo(demo.id)}
                    className={`glass-effect p-6 rounded-xl cursor-pointer transition-all ${selectedDemo === demo.id ? "ring-2 ring-secondary" : ""}`}
                  >
                    <div className="text-4xl mb-4 text-secondary">{demo.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{demo.title}</h3>
                    <p className="text-gray-400 mb-4">{demo.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Duration: {demo.duration}</span>
                      <motion.div animate={{ scale: selectedDemo === demo.id ? 1 : 0 }} className="w-6 h-6 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center">
                        <FaCheckCircle className="text-white text-xs" />
                      </motion.div>
                    </div>
                    <div className="mt-4">
                      {demo.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2 text-sm text-gray-400 mt-1">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Demo Video Preview */}
              {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-effect p-8 rounded-2xl">
                <div className="aspect-video bg-black/50 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center"
                    >
                      {isVideoPlaying ? <FaPause className="text-2xl" /> : <FaPlay className="text-2xl ml-1" />}
                    </motion.button>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <motion.button whileHover={{ scale: 1.1 }} onClick={() => setIsFullscreen(!isFullscreen)} className="glass-effect p-3 rounded-lg">
                      {isFullscreen ? <FaCompress /> : <FaExpand />}
                    </motion.button>
                  </div>
                </div>
                <p className="text-center text-gray-400 mt-4">Watch a 2-minute preview of our {demoTypes.find((d) => d.id === selectedDemo)?.title}</p>
              </motion.div> */}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <AnimatedSection>
              <motion.div whileHover={{ y: -10 }} className="glass-effect p-6 rounded-xl text-center">
                <FaChartLine className="text-4xl text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Live Analytics</h3>
                <p className="text-sm text-gray-400">See real market data updated every second</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div whileHover={{ y: -10 }} className="glass-effect p-6 rounded-xl text-center">
                <FaBrain className="text-4xl text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">AI Predictions</h3>
                <p className="text-sm text-gray-400">Get future market trends with 95% accuracy</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div whileHover={{ y: -10 }} className="glass-effect p-6 rounded-xl text-center">
                <FaShieldAlt className="text-4xl text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
                <p className="text-sm text-gray-400">Bank-level encryption for your data</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div whileHover={{ y: -10 }} className="glass-effect p-6 rounded-xl text-center">
                <FaRocket className="text-4xl text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Quick Setup</h3>
                <p className="text-sm text-gray-400">Go live in less than 24 hours</p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Multi-step Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Schedule Your Demo</h2>
                <span className="text-sm text-gray-400">Step {step} of 5</span>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-center flex-1">
                    <motion.div
                      animate={{
                        scale: step >= num ? 1 : 0.8,
                        backgroundColor: step >= num ? "#3B82F6" : "rgba(255,255,255,0.1)",
                      }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step > num ? "bg-secondary" : ""}`}
                    >
                      {step > num ? <FaCheckCircle /> : num}
                    </motion.div>
                    {num < 5 && (
                      <div className="flex-1 h-1 mx-2 bg-white/10 rounded">
                        <motion.div initial={{ width: 0 }} animate={{ width: step > num ? "100%" : "0%" }} className="h-full bg-gradient-to-r from-secondary to-accent rounded" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Step Labels */}
              <div className="flex justify-between text-xs text-gray-400">
                <span>Personal Info</span>
                <span>Company Details</span>
                <span>Interests</span>
                <span>Schedule</span>
                <span>Confirm</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl">
              <AnimatePresence mode="wait">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                    <h3 className="text-2xl font-bold mb-6">Let's start with your information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 text-gray-300">First Name *</label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-3.5 text-gray-500" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 focus:outline-none focus:border-secondary transition-colors"
                            placeholder="John"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-300">Last Name *</label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-3.5 text-gray-500" />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 focus:outline-none focus:border-secondary transition-colors"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-300">Business Email *</label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-3 top-3.5 text-gray-500" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 focus:outline-none focus:border-secondary transition-colors"
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-300">Phone Number</label>
                        <div className="relative">
                          <FaPhone className="absolute left-3 top-3.5 text-gray-500" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 focus:outline-none focus:border-secondary transition-colors"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block mb-2 text-gray-300">Job Title</label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                          placeholder="e.g., Marketing Director, CEO, Data Analyst"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!validateStep()}
                        className={`px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all ${
                          validateStep() ? "bg-gradient-to-r from-secondary to-accent hover:shadow-lg" : "bg-gray-600 cursor-not-allowed opacity-50"
                        }`}
                      >
                        <span>Next</span>
                        <FaArrowRight />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Company Information */}
                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                    <h3 className="text-2xl font-bold mb-6">Tell us about your company</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block mb-2 text-gray-300">Company Name *</label>
                        <div className="relative">
                          <FaBuilding className="absolute left-3 top-3.5 text-gray-500" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 focus:outline-none focus:border-secondary transition-colors"
                            placeholder="Acme Corporation"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block mb-2 text-gray-300">Industry *</label>
                          <div className="relative">
                            <FaIndustry className="absolute left-3 top-3.5 text-gray-500 z-10" />
                            <select
                              name="industry"
                              value={formData.industry}
                              onChange={handleInputChange}
                              className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 focus:outline-none focus:border-secondary appearance-none cursor-pointer transition-colors"
                              required
                            >
                              <option value="" className="bg-dark">
                                Select your industry
                              </option>
                              {industries.map((industry) => (
                                <option key={industry} value={industry} className="bg-dark">
                                  {industry}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block mb-2 text-gray-300">Company Size *</label>
                          <div className="relative">
                            <FaUsers className="absolute left-3 top-3.5 text-gray-500 z-10" />
                            <select
                              name="companySize"
                              value={formData.companySize}
                              onChange={handleInputChange}
                              className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 focus:outline-none focus:border-secondary appearance-none cursor-pointer transition-colors"
                              required
                            >
                              <option value="" className="bg-dark">
                                Select company size
                              </option>
                              {companySizes.map((size) => (
                                <option key={size} value={size} className="bg-dark">
                                  {size}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block mb-2 text-gray-300">Budget Range</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary appearance-none cursor-pointer transition-colors"
                          >
                            <option value="" className="bg-dark">
                              Select budget range
                            </option>
                            {budgets.map((budget) => (
                              <option key={budget} value={budget} className="bg-dark">
                                {budget}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block mb-2 text-gray-300">Timeline</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary appearance-none cursor-pointer transition-colors"
                          >
                            <option value="" className="bg-dark">
                              Select timeline
                            </option>
                            {timelines.map((timeline) => (
                              <option key={timeline} value={timeline} className="bg-dark">
                                {timeline}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <motion.button type="button" onClick={prevStep} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="glass-effect px-6 py-3 rounded-full font-semibold">
                        Previous
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!validateStep()}
                        className={`px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all ${
                          validateStep() ? "bg-gradient-to-r from-secondary to-accent hover:shadow-lg" : "bg-gray-600 cursor-not-allowed opacity-50"
                        }`}
                      >
                        <span>Next</span>
                        <FaArrowRight />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Interests and Challenges */}
                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                    <h3 className="text-2xl font-bold mb-6">What are you looking to achieve?</h3>

                    <div className="mb-8">
                      <label className="block mb-4 text-gray-300">Areas of Interest * (Select all that apply)</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {interests.map((interest) => (
                          <motion.div
                            key={interest}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleArrayToggle(interests, interest, "interests")}
                            className={`p-4 rounded-lg cursor-pointer transition-all ${
                              formData.interests.includes(interest) ? "bg-gradient-to-r from-secondary/20 to-accent/20 border-2 border-secondary" : "glass-effect hover:bg-white/10"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                  formData.interests.includes(interest) ? "border-secondary bg-secondary" : "border-gray-400"
                                }`}
                              >
                                {formData.interests.includes(interest) && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-white rounded-full" />}
                              </div>
                              <span className="font-medium">{interest}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block mb-4 text-gray-300">Current Challenges (Optional)</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {challenges.map((challenge) => (
                          <motion.div
                            key={challenge}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleArrayToggle(challenges, challenge, "challenges")}
                            className={`p-3 rounded-lg cursor-pointer transition-all text-sm ${
                              formData.challenges.includes(challenge) ? "bg-red-500/20 border border-red-500/50" : "glass-effect hover:bg-white/10"
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <div className={`w-4 h-4 rounded flex items-center justify-center ${formData.challenges.includes(challenge) ? "bg-red-500" : "bg-gray-600"}`}>
                                {formData.challenges.includes(challenge) && (
                                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-xs">
                                    ✓
                                  </motion.span>
                                )}
                              </div>
                              <span>{challenge}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <motion.button type="button" onClick={prevStep} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="glass-effect px-6 py-3 rounded-full font-semibold">
                        Previous
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!validateStep()}
                        className={`px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all ${
                          validateStep() ? "bg-gradient-to-r from-secondary to-accent hover:shadow-lg" : "bg-gray-600 cursor-not-allowed opacity-50"
                        }`}
                      >
                        <span>Next</span>
                        <FaArrowRight />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Schedule */}
                {step === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                    <h3 className="text-2xl font-bold mb-6">When would you like your demo?</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div>
                        <label className="block mb-2 text-gray-300">Preferred Date *</label>
                        <div className="relative">
                          <FaCalendar className="absolute left-3 top-3.5 text-gray-500" />
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 focus:outline-none focus:border-secondary transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-300">Preferred Time *</label>
                        <div className="relative">
                          <FaClock className="absolute left-3 top-3.5 text-gray-500 z-10" />
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 focus:outline-none focus:border-secondary appearance-none cursor-pointer transition-colors"
                            required
                          >
                            <option value="" className="bg-dark">
                              Select time
                            </option>
                            <option value="9:00 AM" className="bg-dark">
                              9:00 AM
                            </option>
                            <option value="10:00 AM" className="bg-dark">
                              10:00 AM
                            </option>
                            <option value="11:00 AM" className="bg-dark">
                              11:00 AM
                            </option>
                            <option value="12:00 PM" className="bg-dark">
                              12:00 PM
                            </option>
                            <option value="1:00 PM" className="bg-dark">
                              1:00 PM
                            </option>
                            <option value="2:00 PM" className="bg-dark">
                              2:00 PM
                            </option>
                            <option value="3:00 PM" className="bg-dark">
                              3:00 PM
                            </option>
                            <option value="4:00 PM" className="bg-dark">
                              4:00 PM
                            </option>
                            <option value="5:00 PM" className="bg-dark">
                              5:00 PM
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-300">Timezone *</label>
                        <div className="relative">
                          <FaGlobe className="absolute left-3 top-3.5 text-gray-500 z-10" />
                          <select
                            name="timezone"
                            value={formData.timezone}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 focus:outline-none focus:border-secondary appearance-none cursor-pointer transition-colors"
                            required
                          >
                            <option value="" className="bg-dark">
                              Select timezone
                            </option>
                            {timezones.map((tz) => (
                              <option key={tz} value={tz} className="bg-dark">
                                {tz}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block mb-2 text-gray-300">Additional Information (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary resize-none transition-colors"
                        placeholder="Tell us more about your specific needs, questions, or what you'd like to see in the demo..."
                      ></textarea>
                    </div>

                    {/* Meeting Details */}
                    <div className="glass-effect p-6 rounded-xl mb-8">
                      <h4 className="font-semibold mb-4 flex items-center space-x-2">
                        <FaCheckCircle className="text-green-500" />
                        <span>Your Demo Will Include:</span>
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start space-x-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>45-minute personalized walkthrough with a product expert</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Live demonstration of features relevant to your industry</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Q&A session to address your specific needs</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>Custom pricing and implementation timeline</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <motion.button type="button" onClick={prevStep} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="glass-effect px-6 py-3 rounded-full font-semibold">
                        Previous
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!validateStep()}
                        className={`px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all ${
                          validateStep() ? "bg-gradient-to-r from-secondary to-accent hover:shadow-lg" : "bg-gray-600 cursor-not-allowed opacity-50"
                        }`}
                      >
                        <span>Review</span>
                        <FaArrowRight />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Review and Submit */}
                {step === 5 && (
                  <motion.div key="step5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
                    <h3 className="text-2xl font-bold mb-6">Review Your Information</h3>

                    <div className="space-y-6">
                      {/* Personal Information */}
                      <div className="glass-effect p-6 rounded-xl">
                        <h4 className="font-semibold mb-4 text-secondary">Personal Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Name:</span>
                            <p className="font-medium">
                              {formData.firstName} {formData.lastName}
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-400">Email:</span>
                            <p className="font-medium">{formData.email}</p>
                          </div>
                          {formData.phone && (
                            <div>
                              <span className="text-gray-400">Phone:</span>
                              <p className="font-medium">{formData.phone}</p>
                            </div>
                          )}
                          {formData.jobTitle && (
                            <div>
                              <span className="text-gray-400">Job Title:</span>
                              <p className="font-medium">{formData.jobTitle}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Company Information */}
                      <div className="glass-effect p-6 rounded-xl">
                        <h4 className="font-semibold mb-4 text-accent">Company Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Company:</span>
                            <p className="font-medium">{formData.company}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Industry:</span>
                            <p className="font-medium">{formData.industry}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Size:</span>
                            <p className="font-medium">{formData.companySize}</p>
                          </div>
                          {formData.budget && (
                            <div>
                              <span className="text-gray-400">Budget:</span>
                              <p className="font-medium">{formData.budget}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Interests */}
                      <div className="glass-effect p-6 rounded-xl">
                        <h4 className="font-semibold mb-4 text-green-500">Areas of Interest</h4>
                        <div className="flex flex-wrap gap-2">
                          {formData.interests.map((interest) => (
                            <span key={interest} className="px-3 py-1 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full text-sm">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Schedule */}
                      <div className="glass-effect p-6 rounded-xl">
                        <h4 className="font-semibold mb-4 text-purple-500">Demo Schedule</h4>
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center space-x-2">
                            <FaCalendar className="text-gray-400" />
                            <span>{new Date(formData.preferredDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FaClock className="text-gray-400" />
                            <span>{formData.preferredTime}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FaGlobe className="text-gray-400" />
                            <span>{formData.timezone}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <motion.button type="button" onClick={prevStep} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="glass-effect px-6 py-3 rounded-full font-semibold">
                        Previous
                      </motion.button>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg"
                      >
                        <span>Confirm Demo</span>
                        <FaCheckCircle />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Clients Say</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div whileHover={{ y: -10 }} className="glass-effect p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-4">"The demo was incredibly insightful. Within 45 minutes, I understood how this platform could transform our market research process."</p>
              <div>
                <p className="font-semibold">Sarah Chen</p>
                <p className="text-sm text-gray-400">VP Marketing, TechCorp</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="glass-effect p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-4">"The personalized approach to the demo made all the difference. They showed us exactly what we needed to see."</p>
              <div>
                <p className="font-semibold">Michael Roberts</p>
                <p className="text-sm text-gray-400">CEO, RetailPlus</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="glass-effect p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-4">"From demo to implementation took less than a week. The ROI has been incredible - 300% in just 6 months."</p>
              <div>
                <p className="font-semibold">Lisa Wang</p>
                <p className="text-sm text-gray-400">Data Director, FinanceHub</p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How long is the demo?",
                answer: "Our demos typically last 45 minutes, including time for Q&A. We can adjust based on your needs.",
              },
              {
                question: "Will the demo be recorded?",
                answer: "Yes, we'll provide a recording of your demo session so you can share it with your team.",
              },
              {
                question: "Do I need to prepare anything?",
                answer: "Just bring your questions! We'll handle everything else and tailor the demo to your needs.",
              },
              {
                question: "Can multiple team members join?",
                answer: "Absolutely! We encourage you to invite key stakeholders to get everyone aligned.",
              },
            ].map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="glass-effect p-6 rounded-xl">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Live Chat Widget */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }} className="fixed bottom-8 right-8 z-40">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-gradient-to-r from-secondary to-accent p-4 rounded-full shadow-lg flex items-center space-x-2">
          <span className="hidden md:inline">Need Help?</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Demo;
