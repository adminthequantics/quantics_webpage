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
  FaPlay,
  FaQuoteLeft,
  FaStar,
  FaPoll,
  FaChartPie,
  FaSearchDollar,
  FaFileAlt,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";

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
    interests: [],
    preferredDate: "",
    preferredTime: "",
    timezone: "",
    message: "",
  });

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState("live");

  // Demo types matching services
  const demoTypes = [
    {
      id: "live",
      title: "Live Platform Demo",
      description: "Experience our AI-powered platform with real-time data",
      icon: <FaChartLine />,
      duration: "30 min",
      features: ["Live data analysis", "AI insights in action", "Custom dashboards"],
    },
    {
      id: "industry",
      title: "Industry-Specific Demo",
      description: "See how our solution works for your industry",
      icon: <FaIndustry />,
      duration: "45 min",
      features: ["Industry benchmarks", "Use case examples", "ROI calculator"],
    },
    {
      id: "custom",
      title: "Custom Solution Demo",
      description: "Tailored demonstration based on your needs",
      icon: <FaLightbulb />,
      duration: "60 min",
      features: ["Personalized scenarios", "Integration options", "Custom pricing"],
    },
  ];

  const industries = [
    "Retail & E-commerce",
    "Healthcare & Life Sciences",
    "Financial Services",
    "Technology & Software",
    "Manufacturing & Industrial",
    "Education & EdTech",
    "Other",
  ];

  const companySizes = [
    "Startup (1-50)",
    "Small Business (51-200)", 
    "Mid-Market (201-1000)",
    "Enterprise (1000+)",
  ];

  const interests = [
    "Surveys & Polling",
    "Consumer Analytics",
    "Competitor Analysis",
    "Industry Reports",
    "AI-Powered Insights",
    "Real-time Data",
    "Custom Solutions",
  ];

  const timezones = [
    "PST (Pacific Time)",
    "CST (Central Time)",
    "EST (Eastern Time)",
    "GMT (London)",
    "CET (Central Europe)",
    "IST (India)",
    "AEST (Australia)",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayToggle = (item) => {
    const updatedInterests = formData.interests.includes(item)
      ? formData.interests.filter((i) => i !== item)
      : [...formData.interests, item];
    setFormData({ ...formData, interests: updatedInterests });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        return formData.company && formData.industry;
      case 3:
        return formData.preferredDate && formData.preferredTime && formData.timezone;
      default:
        return true;
    }
  };

  // Success Screen
  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <ParticleBackground />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          className="text-center max-w-2xl mx-auto px-4"
        >
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ type: "spring", delay: 0.2 }} 
            className="text-7xl text-green-500 mb-8 inline-block"
          >
            <FaCheckCircle />
          </motion.div>

          <h2 className="text-5xl font-bold mb-6 text-gray-900">Demo Scheduled!</h2>
          <p className="text-xl text-gray-700 mb-8">
            Thank you, {formData.firstName}! We've confirmed your demo for:
          </p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4 }} 
            className="bg-white shadow-lg p-6 rounded-2xl mb-8 border border-gray-100"
          >
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center space-x-2">
                <FaCalendar className="text-blue-600" />
                <span className="text-gray-700">{new Date(formData.preferredDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-purple-600" />
                <span className="text-gray-700">{formData.preferredTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGlobe className="text-green-600" />
                <span className="text-gray-700">{formData.timezone}</span>
              </div>
            </div>
          </motion.div>

          <p className="text-gray-600 mb-8">
            A calendar invite has been sent to {formData.email}
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
            >
              <span>Back to Home</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-white overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6"
          >
            <HiSparkles className="text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Experience AI-Powered Market Research</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
          >
            See the Platform in <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Action</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }} 
                        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Get a personalized walkthrough of our AI-powered platform tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Demo Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Demo Experience</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select the demo type that best fits your needs
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {demoTypes.map((demo) => (
              <motion.div
                key={demo.id}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedDemo(demo.id)}
                className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 border-2 ${
                  selectedDemo === demo.id ? "border-blue-600" : "border-gray-100"
                }`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${
                  demo.id === 'live' ? 'from-blue-500 to-cyan-500' :
                  demo.id === 'industry' ? 'from-purple-500 to-pink-500' :
                  'from-green-500 to-emerald-500'
                } flex items-center justify-center text-white mb-4`}>
                  {demo.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{demo.title}</h3>
                <p className="text-gray-600 mb-4">{demo.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Duration: {demo.duration}</span>
                  {selectedDemo === demo.id && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center"
                    >
                      <FaCheckCircle className="text-white text-xs" />
                    </motion.div>
                  )}
                </div>
                <div className="space-y-2">
                  {demo.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* What to Expect */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <FaPoll />,
                title: "Live Survey Demo",
                description: "See real-time data collection"
              },
              {
                icon: <FaChartPie />,
                title: "Analytics Dashboard",
                description: "Interactive data visualization"
              },
              {
                icon: <FaBrain />,
                title: "AI Insights",
                description: "Machine learning in action"
              },
              {
                icon: <FaSearchDollar />,
                title: "ROI Calculator",
                description: "See your potential returns"
              }
            ].map((item, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-xl text-center"
                >
                  <div className="text-3xl text-blue-600 mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">Schedule Your Demo</h2>
                <span className="text-sm text-gray-600">Step {step} of 3</span>
              </div>

              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center flex-1">
                    <motion.div
                      animate={{
                        scale: step >= num ? 1 : 0.8,
                        backgroundColor: step >= num ? "#3B82F6" : "#E5E7EB",
                      }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        step > num ? "bg-blue-600 text-white" : step === num ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {step > num ? <FaCheckCircle /> : num}
                    </motion.div>
                    {num < 3 && (
                      <div className="flex-1 h-1 mx-2 bg-gray-200 rounded">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: step > num ? "100%" : "0%" }} 
                          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded" 
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white shadow-xl p-8 rounded-2xl border border-gray-100">
              <AnimatePresence mode="wait">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <motion.div 
                    key="step1" 
                    initial={{ opacity: 0, x: 50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -50 }}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 text-gray-700">First Name *</label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                            placeholder="John"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-700">Last Name *</label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-700">Email *</label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-700">Phone</label>
                                                <div className="relative">
                          <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block mb-2 text-gray-700">Job Title</label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                          placeholder="e.g., Marketing Director, CEO"
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
                          validateStep() 
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg" 
                            : "bg-gray-300 cursor-not-allowed text-gray-500"
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
                  <motion.div 
                    key="step2" 
                    initial={{ opacity: 0, x: 50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -50 }}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Company Details</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block mb-2 text-gray-700">Company Name *</label>
                        <div className="relative">
                          <FaBuilding className="absolute left-3 top-3.5 text-gray-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                            placeholder="Acme Corporation"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block mb-2 text-gray-700">Industry *</label>
                          <div className="relative">
                            <FaIndustry className="absolute left-3 top-3.5 text-gray-400 z-10" />
                            <select
                              name="industry"
                              value={formData.industry}
                              onChange={handleInputChange}
                              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:border-blue-600 focus:bg-white appearance-none cursor-pointer transition-colors"
                              required
                            >
                              <option value="">Select your industry</option>
                              {industries.map((industry) => (
                                <option key={industry} value={industry}>
                                  {industry}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block mb-2 text-gray-700">Company Size</label>
                          <div className="relative">
                            <FaUsers className="absolute left-3 top-3.5 text-gray-400 z-10" />
                            <select
                              name="companySize"
                              value={formData.companySize}
                              onChange={handleInputChange}
                              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:border-blue-600 focus:bg-white appearance-none cursor-pointer transition-colors"
                            >
                              <option value="">Select company size</option>
                              {companySizes.map((size) => (
                                <option key={size} value={size}>
                                  {size}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block mb-4 text-gray-700">Areas of Interest</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {interests.map((interest) => (
                            <motion.div
                              key={interest}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleArrayToggle(interest)}
                              className={`p-4 rounded-lg cursor-pointer transition-all ${
                                formData.interests.includes(interest) 
                                  ? "bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-600" 
                                  : "bg-gray-50 border-2 border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                    formData.interests.includes(interest) ? "border-blue-600 bg-blue-600" : "border-gray-400"
                                  }`}
                                >
                                  {formData.interests.includes(interest) && (
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-white rounded-full" />
                                  )}
                                </div>
                                <span className="font-medium text-gray-900">{interest}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <motion.button 
                        type="button" 
                        onClick={prevStep} 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }} 
                        className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 hover:shadow-md transition-all"
                      >
                        Previous
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!validateStep()}
                        className={`px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all ${
                          validateStep() 
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg" 
                            : "bg-gray-300 cursor-not-allowed text-gray-500"
                        }`}
                      >
                        <span>Next</span>
                        <FaArrowRight />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Schedule */}
                {step === 3 && (
                  <motion.div 
                    key="step3" 
                    initial={{ opacity: 0, x: 50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -50 }}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Schedule Your Demo</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div>
                                                <label className="block mb-2 text-gray-700">Date *</label>
                        <div className="relative">
                          <FaCalendar className="absolute left-3 top-3.5 text-gray-400" />
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-700">Time *</label>
                        <div className="relative">
                          <FaClock className="absolute left-3 top-3.5 text-gray-400 z-10" />
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:border-blue-600 focus:bg-white appearance-none cursor-pointer transition-colors"
                            required
                          >
                            <option value="">Select time</option>
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-gray-700">Timezone *</label>
                        <div className="relative">
                          <FaGlobe className="absolute left-3 top-3.5 text-gray-400 z-10" />
                          <select
                            name="timezone"
                            value={formData.timezone}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:border-blue-600 focus:bg-white appearance-none cursor-pointer transition-colors"
                            required
                          >
                            <option value="">Select timezone</option>
                            {timezones.map((tz) => (
                              <option key={tz} value={tz}>
                                {tz}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block mb-2 text-gray-700">Additional Information (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white resize-none transition-colors"
                        placeholder="Tell us about your specific needs or questions..."
                      ></textarea>
                    </div>

                    {/* Demo Details */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 p-6 rounded-xl mb-8">
                      <h4 className="font-semibold mb-4 flex items-center space-x-2 text-gray-900">
                        <FaCheckCircle className="text-green-600" />
                        <span>What's Included in Your Demo:</span>
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start space-x-2">
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Live walkthrough of our AI-powered platform</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Industry-specific use cases and examples</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Q&A session with our product experts</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Customized recommendations for your business</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <motion.button 
                        type="button" 
                        onClick={prevStep} 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }} 
                        className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 hover:shadow-md transition-all"
                      >
                        Previous
                      </motion.button>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!validateStep()}
                        className={`px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all ${
                          validateStep() 
                            ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg" 
                            : "bg-gray-300 cursor-not-allowed text-gray-500"
                        }`}
                      >
                        <span>Schedule Demo</span>
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Why Schedule a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Demo?</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaRocket />,
                title: "Quick Setup",
                description: "See how easy it is to get started",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <FaBrain />,
                title: "AI in Action",
                description: "Experience our AI capabilities live",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <FaChartBar />,
                title: "ROI Calculator",
                description: "Calculate your potential returns",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <FaUsers />,
                title: "Expert Guidance",
                description: "Get answers from our team",
                color: "from-orange-500 to-red-500",
              },
            ].map((benefit, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white shadow-lg p-6 rounded-xl text-center h-full border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                What Clients Say About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Demos</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "The demo was incredibly insightful. We immediately saw how it could transform our research process.",
                author: "Sarah Chen",
                role: "VP Marketing, TechCorp",
                rating: 5,
              },
              {
                quote: "In just 30 minutes, they showed us exactly what we needed. Implementation was seamless.",
                author: "Michael Roberts",
                role: "CEO, RetailPlus",
                rating: 5,
              },
              {
                                quote: "The personalized approach made all the difference. They tailored everything to our industry needs.",
                author: "Lisa Wang",
                role: "Data Director, FinanceHub",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white shadow-lg p-6 rounded-xl h-full border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <FaQuoteLeft className="text-3xl text-blue-200 mb-4" />
                  <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Demo <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FAQs</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How long is the demo?",
                answer: "Our demos typically last 30-60 minutes depending on your selected type. We ensure there's time for all your questions.",
              },
              {
                question: "Can multiple team members join?",
                answer: "Absolutely! We encourage you to invite key stakeholders. We'll send a calendar invite that can be forwarded to your team.",
              },
              {
                question: "What should I prepare?",
                answer: "Just bring your questions and business challenges. We'll handle everything else and tailor the demo to your needs.",
              },
              {
                question: "Is the demo really free?",
                answer: "Yes, completely free with no obligations. We want you to experience our platform before making any decisions.",
              },
            ].map((faq, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <details className="bg-gray-50 p-6 rounded-2xl group cursor-pointer">
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
      {/* <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black opacity-10" />
        
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
                Ready to See the <span className="text-yellow-300">Future of Market Research?</span>
              </h2>

              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Join thousands of companies already transforming their research with AI
              </p>

              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all"
              >
                <span>Schedule Your Demo Now</span>
                <FaArrowRight />
              </motion.button>

              <p className="text-sm text-gray-200 mt-6">No credit card required • Free consultation • Expert guidance</p>
            </div>
          </AnimatedSection>
        </div>
      </section> */}

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
            Need help scheduling?
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Demo;