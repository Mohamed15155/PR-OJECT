import React, { useState } from 'react';
import { Shield, Camera, Bell, Cctv, Settings, ChevronRight, Menu, X, Globe, Phone, ArrowLeft } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWhereToBuy, setShowWhereToBuy] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('all');

  const continents = [
    { id: 'all', name: 'All Regions' },
    { id: 'europe', name: 'Europe' },
    { id: 'asia', name: 'Asia' },
    { id: 'africa', name: 'Africa' },
    { id: 'namerica', name: 'North America' },
    { id: 'samerica', name: 'South America' },
    { id: 'oceania', name: 'Oceania' }
  ];

  const countries = {
    europe: [
      { name: 'United Kingdom', flag: '🇬🇧' },
      { name: 'Germany', flag: '🇩🇪' },
      { name: 'France', flag: '🇫🇷' },
      { name: 'Italy', flag: '🇮🇹' },
      { name: 'Spain', flag: '🇪🇸' },
      { name: 'Netherlands', flag: '🇳🇱' },
      { name: 'Belgium', flag: '🇧🇪' },
      { name: 'Sweden', flag: '🇸🇪' },
      { name: 'Norway', flag: '🇳🇴' },
      { name: 'Denmark', flag: '🇩🇰' },
      { name: 'Finland', flag: '🇫🇮' },
      { name: 'Poland', flag: '🇵🇱' },
      { name: 'Austria', flag: '🇦🇹' },
      { name: 'Switzerland', flag: '🇨🇭' },
      { name: 'Greece', flag: '🇬🇷' }
    ],
    asia: [
      { name: 'Japan', flag: '🇯🇵' },
      { name: 'South Korea', flag: '🇰🇷' },
      { name: 'China', flag: '🇨🇳' },
      { name: 'India', flag: '🇮🇳' },
      { name: 'Singapore', flag: '🇸🇬' },
      { name: 'Malaysia', flag: '🇲🇾' },
      { name: 'Thailand', flag: '🇹🇭' },
      { name: 'Vietnam', flag: '🇻🇳' },
      { name: 'Indonesia', flag: '🇮🇩' },
      { name: 'Philippines', flag: '🇵🇭' },
      { name: 'UAE', flag: '🇦🇪' },
      { name: 'Saudi Arabia', flag: '🇸🇦' },
      { name: 'Israel', flag: '🇮🇱' },
      { name: 'Turkey', flag: '🇹🇷' },
      { name: 'Hong Kong', flag: '🇭🇰' }
    ],
    africa: [
      { name: 'South Africa', flag: '🇿🇦' },
      { name: 'Egypt', flag: '🇪🇬' },
      { name: 'Nigeria', flag: '🇳🇬' },
      { name: 'Kenya', flag: '🇰🇪' },
      { name: 'Morocco', flag: '🇲🇦' },
      { name: 'Ghana', flag: '🇬🇭' },
      { name: 'Ethiopia', flag: '🇪🇹' },
      { name: 'Tanzania', flag: '🇹🇿' },
      { name: 'Uganda', flag: '🇺🇬' },
      { name: 'Algeria', flag: '🇩🇿' }
    ],
    namerica: [
      { name: 'United States', flag: '🇺🇸' },
      { name: 'Canada', flag: '🇨🇦' },
      { name: 'Mexico', flag: '🇲🇽' }
    ],
    samerica: [
      { name: 'Brazil', flag: '🇧🇷' },
      { name: 'Argentina', flag: '🇦🇷' },
      { name: 'Chile', flag: '🇨🇱' },
      { name: 'Colombia', flag: '🇨🇴' },
      { name: 'Peru', flag: '🇵🇪' }
    ],
    oceania: [
      { name: 'Australia', flag: '🇦🇺' },
      { name: 'New Zealand', flag: '🇳🇿' }
    ]
  };

  const mainProducts = [
    {
      title: "Intrusion protection",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80",
      description: "Advanced motion detection with instant alerts"
    },
    {
      title: "Video surveillance",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Professional-grade security cameras"
    },
    {
      title: "Fire and life safety",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80",
      description: "Early warning detection systems"
    }
  ];

  const getAllCountries = () => {
    return Object.values(countries).flat();
  };

  const getFilteredCountries = () => {
    if (selectedContinent === 'all') {
      return getAllCountries();
    }
    return countries[selectedContinent] || [];
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      setShowWhereToBuy(false);
    }, 2000);
  };

  if (showWhereToBuy) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button 
            onClick={() => setShowWhereToBuy(false)}
            className="flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="mr-2" />
            Back to home
          </button>
          
          <h1 className="text-4xl font-bold mb-8">Select your Location</h1>
          <p className="text-gray-400 mb-12 text-xl">
            Select your country to find authorized dealers and installers
          </p>

          {/* Continent Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {continents.map((continent) => (
              <button
                key={continent.id}
                onClick={() => setSelectedContinent(continent.id)}
                className={`px-4 py-2 rounded-full border ${
                  selectedContinent === continent.id
                    ? 'border-green-400 text-green-400'
                    : 'border-gray-600 text-gray-400 hover:border-gray-400 hover:text-gray-300'
                } transition duration-300`}
              >
                {continent.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {getFilteredCountries().map((country) => (
              <button
                key={country.name}
                onClick={() => handleCountrySelect(country.name)}
                className="flex items-center space-x-4 p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="text-lg">{country.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-400 text-black px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>You've successfully changed website content based on your country.</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">Berimbolo</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="nav-link">Products</a>
              <a href="#solutions" className="nav-link">Solutions</a>
              <a href="#support" className="nav-link">Support</a>
              <a href="#company" className="nav-link">Company</a>
              <button className="green-button px-4 py-2 rounded-md font-medium">
                Assemble kit
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#products" className="block px-3 py-2 text-base">Products</a>
              <a href="#solutions" className="block px-3 py-2 text-base">Solutions</a>
              <a href="#support" className="block px-3 py-2 text-base">Support</a>
              <a href="#company" className="block px-3 py-2 text-base">Company</a>
              <div className="px-3 py-2">
                <button className="green-button w-full px-4 py-2 rounded-md font-medium">
                  Assemble kit
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="hero-text mb-8">
            RULE YOUR SPACE
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
            We cover intrusion protection, comfort and automation, fire and life safety, and video surveillance. All integrated in one system.
          </p>
          <button 
            onClick={() => setShowWhereToBuy(true)}
            className="green-button px-8 py-3 rounded-md font-medium text-lg"
          >
            Where to buy
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 mb-20">
        {mainProducts.map((product, index) => (
          <div
            key={index}
            className="product-card relative rounded-lg overflow-hidden aspect-[4/3] group cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-medium mb-2">{product.title}</h3>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <ChevronRight className="text-green-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Explore Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-medium mb-12">Explore us</h2>
        <div className="flex space-x-4 mb-8">
          <button className="green-button px-4 py-2 rounded-md">New releases</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            Solutions by facility type
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            Product groups
          </button>
        </div>
        
        {/* Product Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="product-card bg-gray-900 rounded-lg p-6">
              <div className="aspect-square bg-gray-800 rounded-lg mb-4"></div>
              <h3 className="text-lg font-medium mb-2">Product Name</h3>
              <p className="text-gray-400 text-sm">Product description goes here</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-medium mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Intrusion protection</a></li>
                <li><a href="#" className="hover:text-white">Video surveillance</a></li>
                <li><a href="#" className="hover:text-white">Fire and life safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">For homes</a></li>
                <li><a href="#" className="hover:text-white">For business</a></li>
                <li><a href="#" className="hover:text-white">For enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Contact us</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Subscribe</h4>
              <p className="text-gray-400 mb-4">Subscribe to our emails about secure life. No spam.</p>
              <button className="green-button px-4 py-2 rounded-md w-full">Subscribe</button>
            </div>
          </div>
          <div className="flex justify-between items-center pt-8 border-t border-gray-800">
            <div className="text-gray-400">
              © {new Date().getFullYear()} Berimbolo Security. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Globe className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <Phone className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;