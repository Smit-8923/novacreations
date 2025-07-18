import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Lightbulb, 
  Target, 
  Users, 
  TrendingUp,
  Globe,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Play,
  Quote,
  Calendar,
  Clock,
  Shield,
  Zap,
  Award,
  Eye,
  Layers,
  Smartphone,
  Code2,
  Palette,
  BarChart3,
  ChevronRight,
  Star
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Brand Strategy & Identity",
      description: "Comprehensive brand development that defines your unique market position and creates lasting emotional connections with your audience.",
      features: ["Brand Architecture", "Visual Identity Systems", "Brand Guidelines", "Market Positioning", "Logo & Typography", "Brand Voice Development"],
      process: ["Research & Analysis", "Strategy Development", "Creative Execution", "Implementation"]
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Digital Solutions",
      description: "Custom web applications and digital platforms built with enterprise-grade technology and scalable architecture.",
      features: ["Custom Web Development", "E-commerce Platforms", "CMS Solutions", "API Integration", "Cloud Infrastructure", "Performance Optimization"],
      process: ["Requirements Analysis", "Architecture Design", "Development", "Testing & Launch"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Innovation",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth.",
      features: ["iOS & Android Apps", "Cross-platform Development", "UI/UX Design", "App Store Optimization", "Push Notifications", "Analytics Integration"],
      process: ["User Research", "Prototyping", "Development", "App Store Launch"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Growth Marketing",
      description: "Data-driven marketing strategies that accelerate growth through targeted campaigns and measurable results.",
      features: ["Digital Strategy", "SEO & SEM", "Content Marketing", "Social Media Management", "Analytics & Reporting", "Conversion Optimization"],
      process: ["Market Analysis", "Strategy Planning", "Campaign Execution", "Performance Optimization"]
    }
  ];

  const portfolio = [
    {
      title: "Gourmet Palace",
      category: "Restaurant Management",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete restaurant management system with online ordering and table reservations",
      results: "250% increase in online orders",
      tech: ["React", "Node.js", "Stripe", "MongoDB"]
    },
    {
      title: "Healthcare Connect",
      category: "Hospital Management",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive hospital management system with patient records and appointment scheduling",
      results: "40% reduction in wait times",
      tech: ["Vue.js", "Python", "PostgreSQL", "WebRTC"]
    },
    {
      title: "WanderLust Travel",
      category: "Travel & Tourism",
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete travel booking platform with itinerary planning and real-time updates",
      results: "180% increase in bookings",
      tech: ["Next.js", "Express", "Payment Gateway", "Maps API"]
    },
    {
      title: "ShopSphere",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Multi-vendor e-commerce platform with advanced analytics and inventory management",
      results: "300% increase in online sales",
      tech: ["Next.js", "Shopify Plus", "GraphQL", "Redis"]
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      role: "CEO, TechFlow Innovations",
      company: "Fortune 500 Technology Company",
      content: "Nova Creations transformed our entire digital presence. Their strategic approach and technical expertise delivered results beyond our expectations. The ROI has been exceptional.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Sarah Williams",
      role: "CMO, HealthFirst Solutions",
      company: "Healthcare Technology Leader",
      content: "The team's deep understanding of our industry and their innovative solutions helped us achieve a 300% increase in patient engagement. Truly professional and results-driven.",
      rating: 5,
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, GreenTech Ventures",
      company: "Sustainability Technology Startup",
      content: "From concept to launch, Nova Creations was instrumental in bringing our vision to life. Their expertise in emerging technologies and market strategy was invaluable.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const stats = [
    { icon: <Award className="w-8 h-8" />, value: "500+", label: "Projects Delivered", description: "Successfully completed projects across industries" },
    { icon: <Users className="w-8 h-8" />, value: "200+", label: "Global Clients", description: "Trusted by companies worldwide" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "250%", label: "Average ROI", description: "Return on investment for our clients" },
    { icon: <Shield className="w-8 h-8" />, value: "99.9%", label: "Uptime Guarantee", description: "Reliable and secure solutions" }
  ];

  const team = [
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-900">Nova</span>
                <span className="text-2xl font-light text-slate-600">Creations</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-slate-900 font-medium transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-slate-700 hover:text-slate-900 font-medium transition-colors relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#portfolio" className="text-slate-700 hover:text-slate-900 font-medium transition-colors relative group">
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Project
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-white/95 backdrop-blur-xl rounded-lg">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Home</a>
                <a href="#services" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Services</a>
                <a href="#portfolio" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Portfolio</a>
                <a href="#about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">About</a>
                <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Contact</a>
                <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold w-full">
                  Start Project
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">   
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                Digital Vision
              </span>
              Into Reality
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              We partner with forward-thinking companies to create exceptional digital experiences 
              that drive growth, innovation, and lasting competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-slate-900 hover:text-slate-900 transition-all duration-300 flex items-center group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-slate-700 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-medium mb-6">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We deliver end-to-end digital transformation services that help businesses 
              thrive in the modern marketplace through innovation and strategic thinking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border-2 ${
                  activeService === index ? 'border-slate-900' : 'border-transparent'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-slate-700 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4">
                      <div className="text-sm font-semibold text-slate-700 mb-2">Our Process:</div>
                      <div className="flex flex-wrap gap-2">
                        {service.process.map((step, stepIndex) => (
                          <span key={stepIndex} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-medium mb-6">
              Case Studies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Success Stories That Inspire
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore how we've helped industry leaders achieve remarkable results through 
              innovative digital solutions and strategic partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="text-sm text-gray-300 mb-1">{project.category}</div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center text-sm">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {project.results}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-sm text-slate-500 font-medium">{project.category}</div>
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  <p className="text-slate-600">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-slate-700 hover:text-slate-900 flex items-center text-sm font-medium">
                      View Case Study
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
              Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the executives and decision-makers 
              who have experienced transformational results with our solutions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-white/40 mr-4" />
                <div className="flex">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-slate-300">{testimonials[currentTestimonial].role}</div>
                  <div className="text-sm text-slate-400">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Company Values */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-medium mb-6">
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every solution we deliver, 
              ensuring exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-slate-50 rounded-2xl">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Innovation First</h3>
              <p className="text-slate-600">We embrace cutting-edge technologies and creative solutions to solve complex business challenges.</p>
            </div>
            
            <div className="text-center p-8 bg-slate-50 rounded-2xl">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Results Driven</h3>
              <p className="text-slate-600">Every strategy and solution is designed to deliver measurable business impact and sustainable growth.</p>
            </div>
            
            <div className="text-center p-8 bg-slate-50 rounded-2xl">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Partnership Approach</h3>
              <p className="text-slate-600">We work as an extension of your team, fostering collaboration and shared success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-medium mb-6">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your digital transformation goals. 
              Our team is ready to turn your vision into reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Email Us</h3>
                  <p className="text-slate-600 mb-2">Get in touch for project inquiries and partnerships</p>
                  <a href="mailto:hello@novacreations.in" className="text-slate-900 font-medium hover:underline">
                    info@novacreations.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Call Us</h3>
                  <p className="text-slate-600 mb-2">Speak directly with our team</p>
                  <a href="tel:+911234567890" className="text-slate-900 font-medium hover:underline">
                    +91 9574747010
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Visit Us</h3>
                  <p className="text-slate-600 mb-2">Our headquarters in India</p>
                  <p className="text-slate-900 font-medium">
                    Ahmedabad<br />
                    Gujarat, India 560001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Schedule a Meeting</h3>
                  <p className="text-slate-600 mb-2">Book a consultation with our experts</p>
                  <button className="text-slate-900 font-medium hover:underline">
                    Schedule Now
                  </button>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-6">
                <a href="#" className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white hover:bg-slate-800 transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white hover:bg-slate-800 transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white hover:bg-slate-800 transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200">
                    <option>Select a service</option>
                    <option>Brand Strategy & Identity</option>
                    <option>Digital Solutions</option>
                    <option>Mobile Innovation</option>
                    <option>Growth Marketing</option>
                    <option>Full Digital Transformation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project goals, timeline, and requirements..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-slate-900" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold">Nova</span>
                  <span className="text-2xl font-light text-gray-300">Creations</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Transforming businesses through innovative digital solutions. 
                We partner with companies to create exceptional experiences that drive growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Brand Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Nova Creations. All rights reserved. Crafted with precision and passion.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;