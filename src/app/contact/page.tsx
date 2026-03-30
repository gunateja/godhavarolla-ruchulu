import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-secondary-50 min-h-screen py-12 md:py-20 section-padding">
      <div className="section-container max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-800 font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
            We'd Love to Hear <span className="text-primary-800">From You</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Have a question about bulk orders? Need help with delivery? We're just a message away.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info Sidebar */}
          <div className="w-full lg:w-1/3 bg-primary-900 text-white p-8 md:p-12 relative overflow-hidden">
            {/* Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-800 rounded-full blur-2xl opacity-50 transform translate-x-10 -translate-y-10"></div>
            
            <h2 className="text-2xl font-heading font-bold mb-8 relative z-10">Contact Details</h2>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-secondary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary-200 mb-1">Phone Number</h3>
                  <a href="tel:+919876543210" className="text-lg font-semibold hover:text-white transition-colors">+91 98765 43210</a>
                  <p className="text-sm text-primary-300 mt-1">Mon-Sun, 9am - 9pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-secondary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary-200 mb-1">Email</h3>
                  <a href="mailto:hello@godhavarolla.com" className="hover:text-white transition-colors">hello@godhavarolla.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-secondary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary-200 mb-1">Kitchen Location</h3>
                  <p className="leading-relaxed text-sm">
                    Plot No 14, Godavari Foods Hub,<br/>
                    Kukatpally,<br/>
                    Hyderabad, Telangana 500072
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/20 relative z-10">
              <p className="text-sm font-medium mb-4">Follow our journey</p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">📸</div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">📘</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 p-8 md:p-12">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">What can we help you with?</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-gray-700 appearance-none">
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Bulk/Party Order</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all resize-none" placeholder="Write your message here..."></textarea>
              </div>

              <button type="button" className="btn-primary w-full md:w-auto mt-4 gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
