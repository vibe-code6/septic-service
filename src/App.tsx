import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Truck, 
  FileText,
  ChevronDown,
  ChevronUp,
  Users
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- CONFIGURATION ---
const BUSINESS_NAME = "[Insert Business Name Here]";
const PHONE_NUMBER = "1800 000 000";
const WHATSAPP_LINK = "https://wa.me/61400000000";
const RATING = "4.7/5 Star Rated";
const SUBURBS = ["Penrith", "Blue Mountains", "Hawkesbury", "Wollondilly", "Central Coast", "Hunter Valley"];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you provide council compliance reports?",
      answer: "Yes, absolutely. We provide mandatory Pump-out Receipts and Servicing Reports required by local Australian councils. These are sent digitally to your inbox instantly after the job is completed."
    },
    {
      question: "Can you service AWTS units?",
      answer: "Yes, we are fully accredited for all major Aerated Wastewater Treatment Systems (AWTS). We provide the required quarterly servicing and maintenance reports to keep your system compliant and healthy."
    },
    {
      question: "How fast can you get here for a blockage?",
      answer: "We offer priority emergency dispatch for blockages and overflows. In most cases, we can have a truck on-site within 2-4 hours to prevent environmental damage and restore your services."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-24 md:pb-0">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-1.5 rounded-lg">
              <Truck className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">{BUSINESS_NAME}</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-orange-500 transition-colors">Services</a>
            <a href="#compliance" className="text-sm font-medium hover:text-orange-500 transition-colors">Compliance</a>
            <a href="#faq" className="text-sm font-medium hover:text-orange-500 transition-colors">FAQ</a>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="bg-orange-500 text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-orange-600 transition-all shadow-md"
            >
              <Phone size={18} /> {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Wastewater Treatment System" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 px-3 py-1 rounded-full text-sm font-bold mb-6">
              <Star size={14} fill="currentColor" /> {RATING}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Professional Septic Pumping & <span className="text-orange-500 text-nowrap">AWTS Servicing</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Fast, reliable, and council-compliant liquid waste removal. Local family owned and operated, serving our community with pride.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="bg-orange-500 hover:bg-orange-600 text-white text-center px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone /> CALL NOW
              </a>
              <a 
                href={WHATSAPP_LINK}
                className="bg-white hover:bg-slate-100 text-slate-900 text-center px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 border-2 border-transparent"
              >
                <MessageCircle className="text-green-500" /> WHATSAPP US
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-orange-500" size={20} />
                <span className="text-sm font-medium">Council Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-orange-500" size={20} />
                <span className="text-sm font-medium">EPA Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-orange-500" size={20} />
                <span className="text-sm font-medium">Local Family Owned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals & Stats */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">15+</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years Exp.</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Emergency</div>
          </div>
          <div className="text-center border-x border-slate-200">
            <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Compliant</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">4.7★</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Google Rated</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialist Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Complete liquid waste management for residential and commercial properties.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-orange-500/30 transition-all group">
            <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
              <Truck className="text-orange-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Septic Tank Cleaning</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Full <strong>Desludging</strong> and cleaning of septic tanks. We ensure your system is emptied safely and efficiently.
            </p>
            <ul className="space-y-2 text-sm font-medium text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Full Desludging</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Sullage Removal</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Grease Trap Cleaning</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-orange-500/30 transition-all group">
            <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
              <ShieldCheck className="text-orange-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">AWTS Servicing</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Specialist <strong>Aerated Wastewater Treatment System</strong> quarterly servicing. Accredited for all major brands.
            </p>
            <ul className="space-y-2 text-sm font-medium text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Quarterly Maintenance</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Water Quality Testing</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Pump & Blower Checks</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-orange-500/30 transition-all group">
            <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
              <Clock className="text-orange-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Emergency Pump-outs</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Blocked drains? Overflows? Our <strong>Priority Emergency Dispatch</strong> team is ready 24/7 to help.
            </p>
            <ul className="space-y-2 text-sm font-medium text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Rapid Response</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Blockage Clearance</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Overflow Prevention</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Council & EPA Compliance Ready</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Operating a septic system in Australia comes with strict legal requirements. We handle the paperwork so you don't have to.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-orange-500/20 p-3 rounded-lg h-fit">
                    <FileText className="text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Instant Digital Reports</h4>
                    <p className="text-slate-400">Mandatory Pump-out Receipts and Servicing Reports sent directly to your council and email.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-orange-500/20 p-3 rounded-lg h-fit">
                    <ShieldCheck className="text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Fully Accredited</h4>
                    <p className="text-slate-400">EPA licensed and council approved for all residential and commercial liquid waste removal.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-auto text-xs font-mono text-slate-500 uppercase tracking-widest">Compliance Certificate</span>
                </div>
                <div className="space-y-4 font-mono text-sm text-slate-400">
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>Service Type:</span>
                    <span className="text-orange-500">AWTS Quarterly</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>Council Status:</span>
                    <span className="text-green-500">COMPLIANT</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>EPA Tracking:</span>
                    <span className="text-slate-200">#NSW-8829-X</span>
                  </div>
                  <div className="pt-4 text-xs italic">
                    "Reports are automatically filed with your local council within 24 hours of service."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
          <p className="text-slate-600">Everything you need to know about your septic system.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm"
            >
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openFaq === index ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-orange-500 font-bold mb-4 uppercase tracking-widest text-sm">
                  <MapPin size={18} /> Service Areas
                </div>
                <h2 className="text-3xl font-bold mb-6">Where We Operate</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We are proud to be a local family-owned business. Our fleet operates across major regions, providing fast response times to all local suburbs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {SUBURBS.map((suburb, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {suburb}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full h-64 bg-slate-200 rounded-2xl relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Service Fleet" 
                  className="w-full h-full object-cover opacity-60 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full shadow-2xl animate-bounce">
                    <MapPin className="text-orange-500 w-8 h-8" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-orange-500 p-1.5 rounded-lg">
                  <Truck className="text-white w-6 h-6" />
                </div>
                <span className="font-bold text-2xl tracking-tight">{BUSINESS_NAME}</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Australia's trusted name in liquid waste management. Local, reliable, and 100% council compliant.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
                <li><a href="#compliance" className="hover:text-orange-500 transition-colors">Compliance</a></li>
                <li><a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-500" />
                  {PHONE_NUMBER}
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-orange-500" />
                  Available 24/7
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
            <p>© 2026 {BUSINESS_NAME}. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-slate-200 p-3 md:hidden flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="flex-1 bg-orange-500 text-white py-4 rounded-xl font-black text-center flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
        >
          <Phone size={20} /> CALL NOW
        </a>
        <a 
          href={WHATSAPP_LINK}
          className="flex-1 bg-slate-900 text-white py-4 rounded-xl font-black text-center flex items-center justify-center gap-2 shadow-lg"
        >
          <MessageCircle size={20} className="text-green-500" /> WHATSAPP
        </a>
      </div>
    </div>
  );
}
