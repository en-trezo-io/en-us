import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Wallet, ChevronRight, Gift, Settings, Smartphone, Globe, Clock, Check, AlertTriangle, Download, Upload, Key, RefreshCw, Zap, Heart, Users, Award, Star } from 'lucide-react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CryptoTicker from './components/CryptoTicker';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <CryptoTicker />
        
        <header className="bg-primary text-white py-6 sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <img src="https://i.ibb.co/jvzP0nkv/t-logo.png" alt="Trezor Logo" className="h-12" />
              <nav className="hidden md:flex space-x-6">
                <a href="#features" className="hover:text-green-200 transition">Features</a>
                <a href="#setup" className="hover:text-green-200 transition">Setup Guide</a>
                <a href="#security" className="hover:text-green-200 transition">Security</a>
                <a href="#benefits" className="hover:text-green-200 transition">Benefits</a>
                <a href="#faq" className="hover:text-green-200 transition">FAQ</a>
                <a href="#support" className="hover:text-green-200 transition">Support</a>
              </nav>
            </div>
          </div>
        </header>

        <main>
          <section className="py-20 bg-gradient-to-b from-primary to-secondary text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=2000"
                alt="Cryptocurrency Background"
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            <div className="container mx-auto px-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-5xl font-bold mb-6">Begin Your Secure Crypto Journey at Trezor.io/start</h1>
                <p className="text-xl mb-8 max-w-3xl mx-auto">Experience unparalleled security and control over your cryptocurrency assets with Trezor's cutting-edge hardware wallet. Visit Trezor.io/start today to embark on your journey to complete financial sovereignty and peace of mind.</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://trezor.io/start" 
                    className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition inline-flex items-center"
                  >
                    Get Started Now <ChevronRight className="ml-2" />
                  </a>
                  <a 
                    href="#learn-more" 
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition inline-flex items-center"
                  >
                    Learn More <Download className="ml-2" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="features" className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4">Why Choose Trezor.io/start?</h2>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                At Trezor.io/start, we provide industry-leading security features and an intuitive user experience to help you safeguard your digital assets.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-8 rounded-lg shadow-lg bg-white border border-gray-100"
                >
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Military-Grade Security</h3>
                  <p className="text-gray-600">Begin your journey at Trezor.io/start with confidence, knowing your assets are protected by the most advanced security protocols in the industry.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center space-x-2">
                      <Check className="text-green-500 w-5 h-5" />
                      <span>Secure element chip</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="text-green-500 w-5 h-5" />
                      <span>Encrypted storage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="text-green-500 w-5 h-5" />
                      <span>PIN protection</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-8 rounded-lg shadow-lg bg-white border border-gray-100"
                >
                  <Settings className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Intuitive Setup Process</h3>
                  <p className="text-gray-600">Experience a seamless setup process at Trezor.io/start with our step-by-step guidance and user-friendly interface.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center space-x-2">
                      <Check className="text-green-500 w-5 h-5" />
                      <span>Quick installation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="text-green-500 w-5 h-5" />
                      <span>Visual guides</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="text-green-500 w-5 h-5" />
                      <span>24/7 support</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-8 rounded-lg shadow-lg bg-white border border-gray-100"
                >
                  <Globe className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Universal Compatibility</h3>
                  <p className="text-gray-600">Access your Trezor wallet from anywhere, supporting multiple cryptocurrencies and platforms.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center space-x-2">
                      <Check className="text-green-500 w-5 h-5" />
                      <span>Cross-platform support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="text-green-500 w-5 h-5" />
                      <span>Multiple currencies</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="text-green-500 w-5 h-5" />
                      <span>Regular updates</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="security" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4">Advanced Security Features at Trezor.io/start</h2>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Your security is our top priority. Discover why thousands of users trust Trezor.io/start for their cryptocurrency security needs.
              </p>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <img 
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800"
                    alt="Trezor Security Features"
                    className="rounded-lg shadow-xl mb-6"
                  />
                  <h3 className="text-2xl font-semibold">Uncompromising Security Standards</h3>
                  <p className="text-lg text-gray-600">When you begin at Trezor.io/start, you're choosing the highest level of security available in the cryptocurrency industry. Our hardware wallets are designed with multiple layers of protection to ensure your assets remain safe.</p>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <Shield className="text-primary w-6 h-6 mt-1" />
                      <div>
                        <h4 className="font-semibold">Secure Element Chip</h4>
                        <p className="text-gray-600">Military-grade encryption protecting your private keys</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Lock className="text-primary w-6 h-6 mt-1" />
                      <div>
                        <h4 className="font-semibold">PIN Protection</h4>
                        <p className="text-gray-600">Multiple security layers with customizable PIN codes</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Key className="text-primary w-6 h-6 mt-1" />
                      <div>
                        <h4 className="font-semibold">Recovery Seed Backup</h4>
                        <p className="text-gray-600">Full control over your assets with secure backup options</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <img 
                    src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&w=800"
                    alt="Trezor Device Security"
                    className="rounded-lg shadow-xl mb-6"
                  />
                  <h3 className="text-2xl font-semibold">Continuous Protection</h3>
                  <p className="text-lg text-gray-600">At Trezor.io/start, we ensure your assets remain secure through constant vigilance and regular security updates. Our team works tirelessly to maintain the highest security standards in the industry.</p>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <RefreshCw className="text-primary w-6 h-6 mt-1" />
                      <div>
                        <h4 className="font-semibold">Regular Firmware Updates</h4>
                        <p className="text-gray-600">Continuous security improvements and feature enhancements</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="text-primary w-6 h-6 mt-1" />
                      <div>
                        <h4 className="font-semibold">Threat Detection</h4>
                        <p className="text-gray-600">Advanced systems to identify and prevent security threats</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Users className="text-primary w-6 h-6 mt-1" />
                      <div>
                        <h4 className="font-semibold">Community Verified</h4>
                        <p className="text-gray-600">Open-source software reviewed by security experts</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="setup" className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4">Getting Started at Trezor.io/start</h2>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Begin your journey to secure cryptocurrency management with our simple setup process at Trezor.io/start.
              </p>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1625806786037-2af608423424?auto=format&fit=crop&w=800"
                      alt="Trezor Setup Process"
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-primary text-white p-3 rounded-full">
                        <Check className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">1. Visit Trezor.io/start</h3>
                        <p className="text-gray-600">Begin your journey by accessing our official setup page at Trezor.io/start. Here you'll find everything needed to get started with your Trezor device.</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-primary text-white p-3 rounded-full">
                        <Download className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">2. Install Trezor Suite</h3>
                        <p className="text-gray-600">Download and install Trezor Suite from Trezor.io/start for a seamless management experience of your digital assets.</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-primary text-white p-3 rounded-full">
                        <Smartphone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">3. Connect Your Device</h3>
                        <p className="text-gray-600">Follow our simple connection guide to set up your Trezor hardware wallet and ensure it's properly recognized.</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-primary text-white p-3 rounded-full">
                        <Lock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">4. Secure Your Assets</h3>
                        <p className="text-gray-600">Create and verify your recovery seed to ensure maximum security and complete control over your assets.</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="benefits" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4">Benefits of Starting with Trezor.io/start</h2>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Discover why Trezor.io/start is the preferred choice for cryptocurrency security and management.
              </p>
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800"
                    alt="Trezor Security Features"
                    className="rounded-lg shadow-xl mb-6"
                  />
                  <h3 className="text-2xl font-semibold">Complete Asset Control</h3>
                  <p className="text-lg text-gray-600">When you begin at Trezor.io/start, you gain full control over your cryptocurrency assets. Our hardware wallet ensures that your private keys never leave your device, providing the highest level of security in the crypto industry.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Check className="text-primary" />
                      <span>Offline storage for maximum security</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-primary" />
                      <span>Support for 1000+ cryptocurrencies</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-primary" />
                      <span>Regular firmware updates</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-primary" />
                      <span>Backup and recovery options</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=800"
                    alt="Trezor Wallet Interface"
                    className="rounded-lg shadow-xl mb-6"
                  />
                  <h3 className="text-2xl font-semibold">User-Friendly Experience</h3>
                  <p className="text-lg text-gray-600">The Trezor.io/start platform offers an intuitive interface that makes managing your cryptocurrencies simple and secure. Our step-by-step guide ensures a smooth setup process for both beginners and experienced users.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Check className="text-primary" />
                      <span>Interactive setup wizard</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-primary" />
                      <span>24/7 customer support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-primary" />
                      <span>Comprehensive documentation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-primary" />
                      <span>Regular feature updates</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="faq" className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Find answers to common questions about getting started with Trezor.io/start.
              </p>
              <div className="max-w-4xl mx-auto grid gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-3">Why should I choose Trezor.io/start?</h3>
                  <p className="text-gray-600">Trezor.io/start provides the most secure and user-friendly way to manage your cryptocurrency assets. With military-grade security features and an intuitive interface, you can trust Trezor to keep your digital assets safe.</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-3">How long does the setup process take?</h3>
                  <p className="text-gray-600">The initial setup at Trezor.io/start typically takes 10-15 minutes. Our step-by-step guide ensures a smooth and efficient process, getting you started with your secure wallet quickly.</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-3">What cryptocurrencies are supported?</h3>
                  <p className="text-gray-600">When you begin at Trezor.io/start, you'll have access to over 1,000 cryptocurrencies. Our regular updates ensure support for the latest tokens and coins in the market.</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-3">Is customer support available?</h3>
                  <p className="text-gray-600">Yes, Trezor.io/start provides 24/7 customer support through multiple channels. Our dedicated team is always ready to assist you with any questions or concerns.</p>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Hear from satisfied users who started their journey at Trezor.io/start.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                  </div>
                  <p className="text-gray-600 mb-4">"Setting up my Trezor wallet at Trezor.io/start was incredibly easy. The step-by-step guide made the process simple and straightforward."</p>
                  <p className="font-semibold">- Sarah M.</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                  </div>
                  <p className="text-gray-600 mb-4">"The security features available through Trezor.io/start give me complete peace of mind about my cryptocurrency investments."</p>
                  <p className="font-semibold">- Michael R.</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                  </div>
                  <p className="text-gray-600 mb-4">"The customer support at Trezor.io/start is exceptional. They helped me through every step of the setup process."</p>
                  <p className="font-semibold">- David L.</p>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8">Ready to Secure Your Digital Assets?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join thousands of satisfied users who have already chosen Trezor.io/start as their trusted platform for cryptocurrency security. Start your journey today and experience the peace of mind that comes with complete control over your digital assets.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <a 
                  href="https://trezor.io/start" 
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-green-100 transition inline-flex items-center text-lg"
                >
                  Visit Trezor.io/start Now <ChevronRight className="ml-2" />
                </a>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <img src="https://i.ibb.co/jvzP0nkv/t-logo.png" alt="Trezor Logo" className="h-12 mb-4" />
                <p className="text-gray-400">Your trusted partner in cryptocurrency security. Visit Trezor.io/start to begin your journey.</p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <Globe className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <Users className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <Heart className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
                  <li><a href="#setup" className="text-gray-400 hover:text-white transition">Setup Guide</a></li>
                  <li><a href="#security" className="text-gray-400 hover:text-white transition">Security</a></li>
                  <li><a href="#benefits" className="text-gray-400 hover:text-white transition">Benefits</a></li>
                  <li><a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="https://trezor.io/start" className="text-gray-400 hover:text-white transition">Help Center</a></li>
                  <li><a href="https://trezor.io/start" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                 <li><a href="https://trezor.io/start" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
                  <li><a href="https://trezor.io/start" className="text-gray-400 hover:text-white transition">Community</a></li>
                  <li><a href="https://trezor.io/start" className="text-gray-400 hover:text-white transition">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="https://trezor.io/start" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                  <li><a href="https://trezor.io/start" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
                  <li><a href="https://trezor.io/start" className="text-gray-400 hover:text-white transition">Compliance</a></li>
                  <li><a href="https://trezor.io/start" className="text-gray-400 hover:text-white transition">Security</a></li>
                  <li><a href="https://trezor.io/start" className="text-gray-400 hover:text-white transition">Licenses</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8">
              <div className="grid md:grid-cols-2 gap-4">
                <p className="text-gray-400 text-center md:text-left">© 2024 Trezor. All rights reserved. Visit <a href="https://trezor.io/start" className="text-white hover:text-green-200">Trezor.io/start</a> to begin your journey to secure cryptocurrency management.</p>
                <div className="flex justify-center md:justify-end space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition">Sitemap</a>
                  <a href="#" className="text-gray-400 hover:text-white transition">Accessibility</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;