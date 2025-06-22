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
  FaLeaf,
  FaCar,
  FaPlane,
  FaGamepad,
  FaFilm,
  FaUtensils,
  FaHome,
  FaGraduationCap,
  FaShip,
  FaHotel,
  FaTshirt,
  FaPills,
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
  FaDownload,
  FaPlay,
  FaQuoteLeft,
  FaAward,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  // Industry categories for filtering
  const filters = [
    { id: "all", name: "All Industries" },
    { id: "technology", name: "Technology & Digital" },
    { id: "consumer", name: "Consumer & Retail" },
    { id: "healthcare", name: "Healthcare & Life Sciences" },
    { id: "financial", name: "Financial & Professional" },
    { id: "industrial", name: "Industrial & Manufacturing" },
  ];

  // Comprehensive industries data
  const industries = [
    {
      id: "retail",
      category: "consumer",
      icon: <FaShoppingCart />,
      title: "Retail & E-commerce",
      description: "Transform retail experiences with data-driven insights",
      color: "from-blue-500 to-purple-500",
      stats: {
        marketSize: "$5.7T",
        growth: "+15% YoY",
        companies: "2.5M+",
        dataPoints: "850M+",
      },
      details: {
        overview:
          "The retail industry is undergoing a massive digital transformation. Our platform helps retailers understand consumer behavior, optimize inventory, and create personalized experiences.",
        challenges: ["Omnichannel integration", "Inventory optimization", "Customer retention", "Price competition", "Supply chain disruption"],
        solutions: ["Real-time inventory tracking", "Customer journey analytics", "Dynamic pricing optimization", "Demand forecasting", "Personalization engines"],
        trends: [
          { name: "Social Commerce", growth: "+35%" },
          { name: "Mobile Shopping", growth: "+28%" },
          { name: "AR/VR Experiences", growth: "+45%" },
          { name: "Sustainable Retail", growth: "+22%" },
        ],
        caseStudy: {
          company: "MegaRetail Corp",
          result: "45% increase in conversion rate",
          description: "Implemented AI-driven personalization across 500+ stores",
        },
      },
    },
    {
      id: "healthcare",
      category: "healthcare",
      icon: <FaHeartbeat />,
      title: "Healthcare & Pharmaceuticals",
      description: "Advancing healthcare through intelligent market analysis",
      color: "from-green-500 to-teal-500",
      stats: {
        marketSize: "$12.1T",
        growth: "+8.7% YoY",
        companies: "800K+",
        dataPoints: "1.2B+",
      },
      details: {
        overview: "Healthcare is becoming increasingly data-driven. Our solutions help healthcare providers and pharma companies improve patient outcomes while optimizing operations.",
        challenges: ["Regulatory compliance", "Data privacy concerns", "Rising healthcare costs", "Drug development timelines", "Patient engagement"],
        solutions: ["Clinical trial optimization", "Patient outcome prediction", "Drug market analysis", "Healthcare cost modeling", "Telemedicine analytics"],
        trends: [
          { name: "Telemedicine", growth: "+38%" },
          { name: "AI Diagnostics", growth: "+42%" },
          { name: "Personalized Medicine", growth: "+31%" },
          { name: "Digital Health Apps", growth: "+29%" },
        ],
        caseStudy: {
          company: "GlobalPharma Inc",
          result: "60% faster drug development",
          description: "AI-powered market analysis reduced time-to-market",
        },
      },
    },
    {
      id: "finance",
      category: "financial",
      icon: <FaUniversity />,
      title: "Financial Services",
      description: "Navigate financial markets with precision analytics",
      color: "from-yellow-500 to-orange-500",
      stats: {
        marketSize: "$25.6T",
        growth: "+6% YoY",
        companies: "450K+",
        dataPoints: "2.5B+",
      },
      details: {
        overview: "Financial services require real-time insights and predictive analytics. Our platform provides comprehensive market intelligence for better decision-making.",
        challenges: ["Regulatory changes", "Cybersecurity threats", "Digital transformation", "Customer trust", "Market volatility"],
        solutions: ["Risk assessment models", "Fraud detection systems", "Customer analytics", "Regulatory compliance", "Market prediction"],
        trends: [
          { name: "Digital Banking", growth: "+25%" },
          { name: "Cryptocurrency", growth: "+85%" },
          { name: "Robo-advisors", growth: "+32%" },
          { name: "Open Banking", growth: "+28%" },
        ],
        caseStudy: {
          company: "TechBank Solutions",
          result: "90% fraud detection rate",
          description: "ML algorithms prevent $50M in fraudulent transactions",
        },
      },
    },
    {
      id: "technology",
      category: "technology",
      icon: <FaMicrochip />,
      title: "Technology & Software",
      description: "Stay ahead in the fast-paced tech industry",
      color: "from-purple-500 to-pink-500",
      stats: {
        marketSize: "$5.3T",
        growth: "+12% YoY",
        companies: "1.2M+",
        dataPoints: "3.1B+",
      },
      details: {
        overview: "Technology companies need to stay ahead of rapid innovation cycles. Our insights help tech companies identify opportunities and navigate disruption.",
        challenges: ["Rapid innovation cycles", "Talent acquisition", "Market saturation", "Platform competition", "Security concerns"],
        solutions: ["Innovation tracking", "Competitive analysis", "Market opportunity sizing", "Technology adoption curves", "Developer analytics"],
        trends: [
          { name: "AI/ML Adoption", growth: "+47%" },
          { name: "Cloud Computing", growth: "+22%" },
          { name: "Edge Computing", growth: "+35%" },
          { name: "Quantum Computing", growth: "+58%" },
        ],
        caseStudy: {
          company: "CloudTech Innovations",
          result: "3x faster product launch",
          description: "Market insights accelerated go-to-market strategy",
        },
      },
    },
    {
      id: "manufacturing",
      category: "industrial",
      icon: <FaIndustry />,
      title: "Manufacturing & Industrial",
      description: "Optimize production with smart market insights",
      color: "from-red-500 to-orange-500",
      stats: {
        marketSize: "$14.2T",
        growth: "+4% YoY",
        companies: "650K+",
        dataPoints: "950M+",
      },
      details: {
        overview: "Manufacturing is embracing Industry 4.0. Our platform helps manufacturers optimize operations, predict demand, and navigate supply chain challenges.",
        challenges: ["Supply chain disruption", "Skills gap", "Digital transformation", "Sustainability pressure", "Global competition"],
        solutions: ["Supply chain analytics", "Predictive maintenance", "Quality control AI", "Demand forecasting", "Sustainability metrics"],
        trends: [
          { name: "Smart Factories", growth: "+31%" },
          { name: "3D Printing", growth: "+23%" },
          { name: "IoT Integration", growth: "+28%" },
          { name: "Robotics", growth: "+19%" },
        ],
        caseStudy: {
          company: "GlobalManufacturing Co",
          result: "40% efficiency increase",
          description: "IoT sensors and AI optimize production lines",
        },
      },
    },
    {
      id: "automotive",
      category: "industrial",
      icon: <FaCar />,
      title: "Automotive & Mobility",
      description: "Navigate the future of transportation",
      color: "from-gray-600 to-gray-800",
      stats: {
        marketSize: "$3.5T",
        growth: "+7% YoY",
        companies: "125K+",
        dataPoints: "680M+",
      },
      details: {
        overview: "The automotive industry is experiencing unprecedented change with EVs and autonomous vehicles. Our insights help navigate this transformation.",
        challenges: ["EV transition", "Autonomous technology", "Supply chain issues", "Regulatory changes", "Consumer preferences"],
        solutions: ["EV market analysis", "Consumer preference tracking", "Supply chain optimization", "Competitive intelligence", "Technology forecasting"],
        trends: [
          { name: "Electric Vehicles", growth: "+65%" },
          { name: "Autonomous Driving", growth: "+42%" },
          { name: "Mobility-as-a-Service", growth: "+38%" },
          { name: "Connected Cars", growth: "+29%" },
        ],
        caseStudy: {
          company: "FutureAuto Inc",
          result: "55% market share in EVs",
          description: "Data-driven strategy captured emerging EV market",
        },
      },
    },
    {
      id: "education",
      category: "consumer",
      icon: <FaGraduationCap />,
      title: "Education & EdTech",
      description: "Transform learning with data insights",
      color: "from-indigo-500 to-blue-500",
      stats: {
        marketSize: "$7.3T",
        growth: "+9% YoY",
        companies: "320K+",
        dataPoints: "450M+",
      },
      details: {
        overview: "Education is going digital. Our platform helps educational institutions and EdTech companies understand learner needs and optimize outcomes.",
        challenges: ["Digital divide", "Student engagement", "Content quality", "Assessment methods", "Accessibility"],
        solutions: ["Learning analytics", "Student success prediction", "Content optimization", "Market opportunity analysis", "Competitor tracking"],
        trends: [
          { name: "Online Learning", growth: "+27%" },
          { name: "AI Tutoring", growth: "+41%" },
          { name: "Microlearning", growth: "+33%" },
          { name: "VR in Education", growth: "+52%" },
        ],
        caseStudy: {
          company: "EduTech Global",
          result: "78% completion rate",
          description: "Personalized learning paths improve outcomes",
        },
      },
    },
    {
      id: "hospitality",
      category: "consumer",
      icon: <FaHotel />,
      title: "Travel & Hospitality",
      description: "Elevate guest experiences with smart analytics",
      color: "from-sky-500 to-blue-600",
      stats: {
        marketSize: "$1.9T",
        growth: "+23% YoY",
        companies: "890K+",
        dataPoints: "720M+",
      },
      details: {
        overview: "Travel and hospitality are rebounding with new consumer expectations. Our insights help businesses adapt and thrive in the new normal.",
        challenges: ["Post-pandemic recovery", "Changing traveler behavior", "Sustainability demands", "Digital experience", "Price competition"],
        solutions: ["Demand forecasting", "Dynamic pricing", "Guest experience analytics", "Competitor monitoring", "Review sentiment analysis"],
        trends: [
          { name: "Sustainable Travel", growth: "+34%" },
          { name: "Contactless Tech", growth: "+45%" },
          { name: "Bleisure Travel", growth: "+28%" },
          { name: "Digital Nomads", growth: "+67%" },
        ],
        caseStudy: {
          company: "LuxuryStays Group",
          result: "92% occupancy rate",
          description: "AI-driven pricing and personalization boost bookings",
        },
      },
    },
    {
      id: "media",
      category: "consumer",
      icon: <FaFilm />,
      title: "Media & Entertainment",
      description: "Create content that resonates with audiences",
      color: "from-pink-500 to-purple-600",
      stats: {
        marketSize: "$2.3T",
        growth: "+9% YoY",
        companies: "425K+",
        dataPoints: "1.8B+",
      },
      details: {
        overview: "Media consumption patterns are rapidly evolving. Our platform helps content creators and distributors understand and engage their audiences.",
        challenges: ["Content discovery", "Audience fragmentation", "Monetization models", "Platform competition", "Piracy concerns"],
        solutions: ["Audience analytics", "Content performance prediction", "Engagement optimization", "Revenue forecasting", "Trend identification"],
        trends: [
          { name: "Streaming Services", growth: "+21%" },
          { name: "User-Generated Content", growth: "+38%" },
          { name: "Interactive Media", growth: "+42%" },
          { name: "Podcast Growth", growth: "+31%" },
        ],
        caseStudy: {
          company: "StreamMedia Corp",
          result: "65% subscriber retention",
          description: "Personalized recommendations reduce churn",
        },
      },
    },
    {
      id: "energy",
      category: "industrial",
      icon: <FaLeaf />,
      title: "Energy & Sustainability",
      description: "Power the future with intelligent insights",
      color: "from-green-600 to-emerald-600",
      stats: {
        marketSize: "$8.5T",
        growth: "+11% YoY",
        companies: "185K+",
        dataPoints: "560M+",
      },
      details: {
        overview: "The energy sector is transforming towards sustainability. Our insights help companies navigate the energy transition and capitalize on green opportunities.",
        challenges: ["Energy transition", "Regulatory pressure", "Infrastructure investment", "Technology adoption", "Market volatility"],
        solutions: ["Renewable energy analytics", "Grid optimization", "Carbon tracking", "Market forecasting", "Investment analysis"],
        trends: [
          { name: "Solar Power", growth: "+32%" },
          { name: "Wind Energy", growth: "+28%" },
          { name: "Energy Storage", growth: "+54%" },
          { name: "Green Hydrogen", growth: "+71%" },
        ],
        caseStudy: {
          company: "GreenEnergy Solutions",
          result: "$2B in new investments",
          description: "Market insights identify optimal renewable projects",
        },
      },
    },
    {
      id: "realestate",
      category: "financial",
      icon: <FaHome />,
      title: "Real Estate & Construction",
      description: "Build smarter with market intelligence",
      color: "from-amber-600 to-orange-600",
      stats: {
        marketSize: "$3.8T",
        growth: "+6% YoY",
        companies: "550K+",
        dataPoints: "890M+",
      },
      details: {
        overview: "Real estate is becoming more data-driven. Our platform provides insights for better investment decisions and development strategies.",
        challenges: ["Market volatility", "Interest rate changes", "Remote work impact", "Sustainability requirements", "Affordability crisis"],
        solutions: ["Market valuation models", "Investment analytics", "Demand forecasting", "Risk assessment", "Location intelligence"],
        trends: [
          { name: "PropTech Adoption", growth: "+41%" },
          { name: "Smart Buildings", growth: "+35%" },
          { name: "Co-living Spaces", growth: "+48%" },
          { name: "Sustainable Construction", growth: "+29%" },
        ],
        caseStudy: {
          company: "SmartDevelop Inc",
          result: "35% higher ROI",
          description: "Data-driven site selection maximizes returns",
        },
      },
    },
    {
      id: "agriculture",
      category: "industrial",
      icon: <FaLeaf />,
      title: "Agriculture & Food",
      description: "Cultivate success with smart farming insights",
      color: "from-green-700 to-lime-600",
      stats: {
        marketSize: "$9.2T",
        growth: "+5% YoY",
        companies: "720K+",
        dataPoints: "430M+",
      },
      details: {
        overview: "Agriculture is embracing technology for sustainable food production. Our insights help optimize yields and navigate market dynamics.",
        challenges: ["Climate change impact", "Supply chain efficiency", "Sustainability pressure", "Technology adoption", "Market price volatility"],
        solutions: ["Crop yield prediction", "Market price analytics", "Supply chain optimization", "Weather impact analysis", "Sustainability metrics"],
        trends: [
          { name: "Precision Agriculture", growth: "+26%" },
          { name: "Vertical Farming", growth: "+24%" },
          { name: "AgTech Solutions", growth: "+31%" },
          { name: "Alternative Proteins", growth: "+43%" },
        ],
        caseStudy: {
          company: "AgriTech Innovations",
          result: "40% yield increase",
          description: "AI-powered insights optimize farming operations",
        },
      },
    },
  ];

  // Filter industries based on selected category
  const filteredIndustries = activeFilter === "all" ? industries : industries.filter((ind) => ind.category === activeFilter);

  // Stats counter visibility
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-20">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background elements */}
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
              <FaGlobe className="text-secondary" />
              <span className="text-sm font-medium">Serving 12+ Major Industries</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Industries We <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Transform</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">Deep industry expertise combined with cutting-edge AI technology to deliver actionable insights across every sector</p>

            {/* Industry Stats */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">{statsInView && <CountUp end={12} duration={2} suffix="+" />}</div>
                <p className="text-gray-400">Industries Served</p>
              </motion.div>
              <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.2 }} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{statsInView && <CountUp end={500} duration={2} suffix="+" />}</div>
                <p className="text-gray-400">Enterprise Clients</p>
              </motion.div>
              <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.3 }} className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">{statsInView && <CountUp end={95} duration={2} suffix="%" />}</div>
                <p className="text-gray-400">Client Satisfaction</p>
              </motion.div>
              <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.4 }} className="text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">{statsInView && <CountUp end={50} duration={2} suffix="B+" />}</div>
                <p className="text-gray-400">Data Points Analyzed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === filter.id ? "bg-gradient-to-r from-secondary to-accent text-white" : "glass-effect hover:bg-white/10"
                }`}
              >
                {filter.name}
              </motion.button>
            ))}
          </div>

          {/* Industries Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredIndustries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredIndustry(industry.id)}
                  onHoverEnd={() => setHoveredIndustry(null)}
                  onClick={() => setSelectedIndustry(industry)}
                  className="glass-effect p-6 rounded-xl cursor-pointer hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Background Gradient on Hover */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: hoveredIndustry === industry.id ? 0.1 : 0 }} className={`absolute inset-0 bg-gradient-to-br ${industry.color}`} />

                  <div className="relative z-10">
                    <div className={`text-4xl mb-4 bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>{industry.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{industry.description}</p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div>
                        <p className="text-xs text-gray-500">Market Size</p>
                        <p className="text-sm font-semibold">{industry.stats.marketSize}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Growth</p>
                        <p className="text-sm font-semibold text-green-500">{industry.stats.growth}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{industry.stats.companies} companies</span>
                      <FaArrowRight className="text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Industry Insights Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Cross-Industry <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Insights</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection>
              <motion.div whileHover={{ scale: 1.05 }} className="glass-effect p-6 rounded-xl text-center">
                <FaLightbulb className="text-5xl text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Emerging Trends</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">AI Adoption</span>
                    <span className="text-green-500">+67%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Sustainability</span>
                    <span className="text-green-500">+45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Digital Transform</span>
                    <span className="text-green-500">+52%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Remote Work</span>
                    <span className="text-green-500">+38%</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div whileHover={{ scale: 1.05 }} className="glass-effect p-6 rounded-xl text-center">
                <FaChartLine className="text-5xl text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Market Performance</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Tech Sector</span>
                    <span className="text-green-500">+12.3%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Healthcare</span>
                    <span className="text-green-500">+8.7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Renewable Energy</span>
                    <span className="text-green-500">+15.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">E-commerce</span>
                    <span className="text-green-500">+9.8%</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div whileHover={{ scale: 1.05 }} className="glass-effect p-6 rounded-xl text-center">
                <FaShieldAlt className="text-5xl text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Risk Factors</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Supply Chain</span>
                    <span className="text-red-500">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Cyber Security</span>
                    <span className="text-orange-500">Medium</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Regulation</span>
                    <span className="text-orange-500">Medium</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Talent Gap</span>
                    <span className="text-red-500">High</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Industry <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Success Stories</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                industry: "Retail",
                company: "GlobalRetail Inc",
                logo: "🛒",
                result: "45% increase in sales",
                metric: "$12M additional revenue",
                quote: "The market insights provided were game-changing for our expansion strategy.",
                author: "Sarah Chen, CEO",
              },
              {
                industry: "Healthcare",
                company: "MedTech Solutions",
                logo: "🏥",
                result: "60% faster drug development",
                metric: "2 years saved",
                quote: "AI-powered analytics revolutionized our research process.",
                author: "Dr. Michael Roberts",
              },
              {
                industry: "Finance",
                company: "FinanceFirst",
                logo: "💰",
                result: "90% fraud detection",
                metric: "$50M prevented losses",
                quote: "The predictive models exceeded all our expectations.",
                author: "Lisa Wang, CTO",
              },
            ].map((story, index) => (
              <AnimatedSection key={index}>
                <motion.div whileHover={{ y: -10 }} className="glass-effect p-6 rounded-xl h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{story.logo}</div>
                    <span className="text-sm text-gray-400">{story.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{story.company}</h3>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-green-500">{story.result}</p>
                    <p className="text-sm text-gray-400">{story.metric}</p>
                  </div>
                  <FaQuoteLeft className="text-2xl text-secondary/30 mb-2" />
                  <p className="text-gray-300 mb-4 flex-1">{story.quote}</p>
                  <p className="text-sm font-semibold">{story.author}</p>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedIndustry(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-effect p-8 rounded-2xl max-w-5xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`text-5xl bg-gradient-to-r ${selectedIndustry.color} bg-clip-text text-transparent`}>{selectedIndustry.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedIndustry.title}</h2>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-gray-400">Market Size: {selectedIndustry.stats.marketSize}</span>
                      <span className="text-green-500">Growth: {selectedIndustry.stats.growth}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setSelectedIndustry(null)} className="text-gray-400 hover:text-white text-2xl">
                  ×
                </button>
              </div>

              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Industry Overview</h3>
                <p className="text-gray-300">{selectedIndustry.details.overview}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="glass-effect p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary">{selectedIndustry.stats.marketSize}</div>
                  <p className="text-sm text-gray-400">Market Size</p>
                </div>
                <div className="glass-effect p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-500">{selectedIndustry.stats.growth}</div>
                  <p className="text-sm text-gray-400">Annual Growth</p>
                </div>
                <div className="glass-effect p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent">{selectedIndustry.stats.companies}</div>
                  <p className="text-sm text-gray-400">Companies</p>
                </div>
                <div className="glass-effect p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-500">{selectedIndustry.stats.dataPoints}</div>
                  <p className="text-sm text-gray-400">Data Points</p>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FaShieldAlt className="text-red-500 mr-2" />
                    Key Challenges
                  </h3>
                  <ul className="space-y-2">
                    {selectedIndustry.details.challenges.map((challenge, index) => (
                      <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-gray-300">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FaLightbulb className="text-green-500 mr-2" />
                    Our Solutions
                  </h3>
                  <ul className="space-y-2">
                    {selectedIndustry.details.solutions.map((solution, index) => (
                      <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{solution}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Market Trends */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Market Trends</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedIndustry.details.trends.map((trend, index) => (
                    <motion.div key={index} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.1, type: "spring" }} className="glass-effect p-4 rounded-lg text-center">
                      <div className="text-xl font-bold text-green-500 mb-1">{trend.growth}</div>
                      <p className="text-sm text-gray-400">{trend.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              <div className="glass-effect p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FaTrophy className="text-yellow-500 mr-2" />
                  Success Story
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Company</p>
                    <p className="font-semibold">{selectedIndustry.details.caseStudy.company}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Result</p>
                    <p className="font-semibold text-green-500">{selectedIndustry.details.caseStudy.result}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">How</p>
                    <p className="font-semibold">{selectedIndustry.details.caseStudy.description}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                  <Link to="/demo" className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-secondary to-accent px-6 py-3 rounded-full font-semibold">
                    <span>Get {selectedIndustry.title} Insights</span>
                    <FaArrowRight />
                  </Link>
                </motion.div>
                <motion.button whileHover={{ scale: 1.05 }} className="flex-1 inline-flex items-center justify-center space-x-2 glass-effect px-6 py-3 rounded-full font-semibold hover:bg-white/10">
                  <FaDownload />
                  <span>Download Industry Report</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industry Comparison Tool */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Industry <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Comparison Tool</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="glass-effect p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Metric Comparison */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Average Growth Rate</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Technology", value: 12, color: "from-purple-500 to-pink-500" },
                      { name: "Healthcare", value: 8.7, color: "from-green-500 to-teal-500" },
                      { name: "E-commerce", value: 15, color: "from-blue-500 to-purple-500" },
                      { name: "Energy", value: 11, color: "from-green-600 to-emerald-600" },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{item.name}</span>
                          <span className="text-green-500">+{item.value}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(item.value / 15) * 100}%` }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className={`h-full bg-gradient-to-r ${item.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Size Comparison */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Market Size (Trillion $)</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Financial Services", value: 25.6, max: 30 },
                      { name: "Healthcare", value: 12.1, max: 30 },
                      { name: "Manufacturing", value: 14.2, max: 30 },
                      { name: "Agriculture", value: 9.2, max: 30 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{item.name}</span>
                          <span className="text-secondary">${item.value}T</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(item.value / item.max) * 100}%` }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-secondary to-accent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Digital Maturity Score */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Digital Maturity Score</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Technology", score: 95, color: "text-green-500" },
                      { name: "Finance", score: 85, color: "text-green-500" },
                      { name: "Retail", score: 78, color: "text-yellow-500" },
                      { name: "Manufacturing", score: 65, color: "text-orange-500" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{item.name}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.score}%` }}
                              transition={{ delay: index * 0.1, duration: 0.8 }}
                              className={`h-full bg-gradient-to-r ${
                                item.score >= 80 ? "from-green-500 to-emerald-500" : item.score >= 60 ? "from-yellow-500 to-orange-500" : "from-red-500 to-pink-500"
                              }`}
                            />
                          </div>
                          <span className={`text-sm font-semibold ${item.color}`}>{item.score}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Industry <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Resources</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <FaChartLine />,
                title: "Market Reports",
                description: "In-depth analysis of industry trends and forecasts",
                count: "150+",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <FaBrain />,
                title: "AI Models",
                description: "Industry-specific machine learning models",
                count: "50+",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <FaUsers />,
                title: "Expert Network",
                description: "Connect with industry specialists",
                count: "500+",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <FaAward />,
                title: "Best Practices",
                description: "Proven strategies from industry leaders",
                count: "200+",
                color: "from-orange-500 to-red-500",
              },
            ].map((resource, index) => (
              <AnimatedSection key={index}>
                <motion.div whileHover={{ y: -10 }} className="glass-effect p-6 rounded-xl text-center h-full">
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${resource.color} bg-clip-text text-transparent`}>{resource.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{resource.description}</p>
                  <div className="text-2xl font-bold text-secondary">{resource.count}</div>
                  <p className="text-xs text-gray-500">Available Resources</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Global <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Industry Coverage</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <FaGlobe className="text-5xl text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold">150+</div>
                <p className="text-gray-400">Countries</p>
              </div>
              <div>
                <FaUsers className="text-5xl text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold">50K+</div>
                <p className="text-gray-400">Data Sources</p>
              </div>
              <div>
                <FaChartLine className="text-5xl text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-bold">24/7</div>
                <p className="text-gray-400">Monitoring</p>
              </div>
              <div>
                <FaBrain className="text-5xl text-purple-500 mx-auto mb-4" />
                <div className="text-3xl font-bold">95%</div>
                <p className="text-gray-400">Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-20"></div>
              <div className="relative glass-effect p-12 text-center">
                <h2 className="text-4xl font-bold mb-6">Don't See Your Industry?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  We provide custom solutions for any industry. Let's discuss how we can help transform your business with data-driven insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link to="/demo" className="inline-flex items-center space-x-2 bg-white text-dark px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all">
                      <span>Request Custom Analysis</span>
                      <FaArrowRight />
                    </Link>
                  </motion.div>
                  <motion.button whileHover={{ scale: 1.05 }} className="inline-flex items-center space-x-2 glass-effect px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
                    <FaPlay />
                    <span>Watch Industry Demo</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Floating Navigation */}
      <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="glass-effect p-2 rounded-full">
          <div className="space-y-2">
            {["Retail", "Healthcare", "Finance", "Tech"].map((industry, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all"
                onClick={() => {
                  const ind = industries.find((i) => i.title.includes(industry));
                  if (ind) setSelectedIndustry(ind);
                }}
              >
                {industry.charAt(0)}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Industries;
