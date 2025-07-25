// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { Bike, Wrench, Users, Star, User, MapPin, Phone, Mail, Clock, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

const getServiceCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['service-card-0', 'service-card-1', 'service-card-2', 'service-card-3'];
  return ids[index] || 'noID';
};

const getBikeTypeId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['bike-type-0', 'bike-type-1', 'bike-type-2', 'bike-type-3', 'bike-type-4', 'bike-type-5'];
  return ids[index] || 'noID';
};

const getBikeTypeBadgeId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['bike-badge-0', 'bike-badge-1', 'bike-badge-2', 'bike-badge-3', 'bike-badge-4', 'bike-badge-5'];
  return ids[index] || 'noID';
};

const getTestimonialCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['testimonial-card-0', 'testimonial-card-1', 'testimonial-card-2'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: <Bike className="w-8 h-8 text-orange-500" />,
      title: "Bike Sales",
      description: "Wide selection of mountain bikes, road bikes, electric bikes, and accessories from top brands"
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-500" />,
      title: "Repair & Service",
      description: "Professional bike maintenance, tune-ups, and repairs by certified mechanics"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Bike Rentals",
      description: "Daily and weekly bike rentals for tourists and locals exploring the city"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Custom Builds",
      description: "Build your dream bike with our custom assembly service and expert consultation"
    }
  ];

  const stats = [
    { label: "Bikes Sold", value: "2,500+" },
    { label: "Happy Clients", value: "1,800+" },
    { label: "Years Experience", value: "15+" },
    { label: "Expert Staff", value: "8" }
  ];

  const bikeTypes = [
    { name: "Mountain", color: "from-green-400 to-green-600" },
    { name: "Road", color: "from-blue-400 to-blue-600" },
    { name: "Electric", color: "from-yellow-400 to-orange-500" },
    { name: "Hybrid", color: "from-purple-400 to-purple-600" },
    { name: "BMX", color: "from-red-400 to-red-600" },
    { name: "Kids", color: "from-pink-400 to-pink-600" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Amazing service! They helped me find the perfect mountain bike and the staff was incredibly knowledgeable.",
      rating: 5
    },
    {
      name: "Mike Chen",
      text: "Quick and professional bike repair. My road bike runs like new after their tune-up service.",
      rating: 5
    },
    {
      name: "Emily Davis",
      text: "Great rental experience! Clean bikes and fair prices. Perfect for exploring the city.",
      rating: 5
    }
  ];

  return (
    <Container componentId="landing-page-root">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with bike shop gradient background"
        className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900"
      >
      {/* Header */}
      <Header 
        devId="main-header" 
        devName="Main Header" 
        devDescription="Bike shop header with navigation"
        className="container mx-auto px-4 py-6"
      >
        <Nav 
          devId="main-nav" 
          devName="Main Navigation" 
          devDescription="Primary navigation bar"
          className="flex items-center justify-between"
        >
          <Div 
            devId="logo-section" 
            devName="Logo Section" 
            devDescription="Bike shop logo and brand name"
            className="flex items-center space-x-2"
          >
            <Div devId="noID" className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Bike className="w-5 h-5 text-white" />
            </Div>
            <Span 
              devId="brand-name" 
              devName="Brand Name" 
              devDescription="Velocity Bikes brand name"
              className="text-xl font-bold text-white"
            >
              Velocity Bikes
            </Span>
          </Div>
          <Div 
            devId="nav-actions" 
            devName="Navigation Actions" 
            devDescription="Navigation buttons and user menu"
            className="flex items-center space-x-4"
          >
            <Button 
              devId="services-button" 
              devName="Services Button" 
              devDescription="Link to services section"
              variant="ghost" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </Button>
            <Button 
              devId="contact-button" 
              devName="Contact Button" 
              devDescription="Link to contact section"
              variant="ghost" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Button>
            {isAuthenticated ? (
              <Div 
                devId="user-section" 
                devName="User Section" 
                devDescription="Authenticated user welcome area"
                className="flex items-center space-x-4"
              >
                <Span 
                  devId="welcome-message" 
                  devName="Welcome Message" 
                  devDescription="Welcome message for authenticated user"
                  className="text-gray-300"
                >
                  Welcome, {user?.name?.split(' ')[0]}!
                </Span>
                <Link to="/dashboard">
                  <Button 
                    devId="nav-dashboard-button"
                    devName="Navigation Dashboard Button"
                    devDescription="Dashboard button in navigation header for authenticated users"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </Div>
            ) : (
              <Div 
                devId="auth-buttons" 
                devName="Authentication Buttons" 
                devDescription="Login and register buttons for unauthenticated users"
                className="flex items-center space-x-2"
              >
                <Link to="/login">
                  <Button 
                    devId="nav-login-button"
                    devName="Navigation Login Button"
                    devDescription="Login button in navigation header"
                    variant="ghost" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    devId="nav-register-button"
                    devName="Navigation Register Button"
                    devDescription="Get started button in navigation header"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Get Started
                  </Button>
                </Link>
              </Div>
            )}
          </Div>
        </Nav>
      </Header>

      {/* Hero Section */}
      <Container componentId="hero-section">
        <Section 
          devId="hero-content" 
          devName="Hero Content" 
          devDescription="Main hero section with bike shop title and call-to-action"
          className="container mx-auto px-4 py-20 text-center"
        >
          <Div 
            devId="hero-content-wrapper" 
            devName="Hero Content Wrapper" 
            devDescription="Animated wrapper for hero content"
            className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <H1 
              devId="hero-title" 
              devName="Hero Title" 
              devDescription="Main hero title showcasing the bike shop"
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Your Premier 
              <Span 
                devId="bike-shop-highlight" 
                devName="Bike Shop Highlight" 
                devDescription="Highlighted bike shop text in gradient"
                className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
              >
                {' '}Bike Shop
              </Span>
            </H1>
            <P 
              devId="hero-description" 
              devName="Hero Description" 
              devDescription="Hero section description explaining the bike shop services"
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              From mountain adventures to city commutes, we have the perfect bike for every rider. 
              Expert sales, professional repairs, and quality rentals all in one place.
            </P>
            <Div 
              devId="hero-cta-buttons" 
              devName="Hero CTA Buttons" 
              devDescription="Call-to-action buttons in hero section"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button 
                    devId="hero-start-shopping"
                    devName="Start Shopping Button"
                    devDescription="Primary call-to-action button for starting to shop"
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/register">
                  <Button 
                    devId="hero-start-shopping"
                    devName="Start Shopping Button"
                    devDescription="Primary call-to-action button for starting to shop"
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Start Shopping
                  </Button>
                </Link>
              )}
              <Button 
                devId="hero-browse-bikes"
                devName="Browse Bikes Button"
                devDescription="Secondary button to browse bike inventory"
                variant="outline"
                className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Browse Bikes
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Stats Section */}
      <Container componentId="stats-section">
        <Section 
          devId="stats-content" 
          devName="Stats Content" 
          devDescription="Statistics section showing bike shop metrics"
          className="container mx-auto px-4 py-12"
        >
          <Div 
            devId="stats-grid" 
            devName="Stats Grid" 
            devDescription="Grid container for statistics cards"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                devId={getStatCardId(index)}
                devName={`${stat.label} Stat Card`}
                devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
              >
                <CardContent devId="noID"  className="p-0">
                  <Div devId="noID" className="text-2xl font-bold text-white mb-2">{stat.value}</Div>
                  <Div devId="noID" className="text-gray-400">{stat.label}</Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Services Section */}
      <Container componentId="services-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Our Services</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Everything you need for your cycling journey, from sales to service
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                devId={getServiceCardId(index)}
                devName={`${service.title} Service Card`}
                devDescription={`Service card highlighting ${service.title}: ${service.description}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-all"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{service.icon}</Div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <P devId="noID" className="text-gray-400">{service.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Bike Types Section */}
      <Container componentId="bike-types-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Bike Categories</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Find the perfect bike for your riding style and adventure
            </P>
          </Div>
          <Div devId="noID" className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {bikeTypes.map((bikeType, index) => (
              <Div key={index} devId="noID" className="text-center">
                <Div devId={getBikeTypeId(index)} className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${bikeType.color} flex items-center justify-center`}>
                  <Bike className="text-white w-8 h-8" />
                </Div>
                <Badge 
                  devId={getBikeTypeBadgeId(index)}
                  devName={`${bikeType.name} Bike Badge`}
                  devDescription={`Bike category badge for ${bikeType.name}`}
                  className="text-gray-300 font-medium bg-transparent border-none"
                >
                  {bikeType.name}
                </Badge>
              </Div>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Testimonials Section */}
      <Container componentId="testimonials-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">What Our Customers Say</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                devId={getTestimonialCardId(index)}
                devName={`${testimonial.name} Testimonial Card`}
                devDescription={`Customer testimonial from ${testimonial.name}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </Div>
                  <P devId="noID" className="text-gray-300 mb-4">"{testimonial.text}"</P>
                  <P devId="noID" className="text-white font-semibold">- {testimonial.name}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Contact Section */}
      <Container componentId="contact-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-12 text-center border border-orange-500/30">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Visit Our Shop</H2>
            <P devId="noID" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Come see our bikes in person and get expert advice from our friendly staff
            </P>
            <Div devId="noID" className="grid md:grid-cols-3 gap-6 mb-8">
              <Div devId="noID" className="flex items-center justify-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>123 Bike Street, City, State 12345</span>
              </Div>
              <Div devId="noID" className="flex items-center justify-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>(555) 123-BIKE</span>
              </Div>
              <Div devId="noID" className="flex items-center justify-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-orange-400" />
                <span>Mon-Sat 9AM-7PM</span>
              </Div>
            </Div>
            <Div devId="noID" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                devId="contact-visit-button"
                devName="Visit Us Button"
                devDescription="Primary button to visit the shop"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Visit Us Today
                </span>
              </Button>
              <Button 
                devId="contact-call-button"
                devName="Call Us Button"
                devDescription="Secondary button to call the shop"
                variant="outline"
                className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </span>
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Footer */}
      <Footer 
        devId="main-footer" 
        devName="Main Footer" 
        devDescription="Site footer with links and copyright"
        className="container mx-auto px-4 py-8 border-t border-white/10"
      >
        <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
          <Div devId="noID" className="text-gray-400 mb-4 md:mb-0">
            © 2024 Velocity Bikes. Pedaling towards excellence since 2009.
          </Div>
          <Div devId="noID" className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </Div>
        </Div>
      </Footer>
      </Div>
    </Container>
  );
};