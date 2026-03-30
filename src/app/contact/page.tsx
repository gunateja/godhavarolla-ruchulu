import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-secondary-50 min-h-[calc(100vh-80px)] section-padding relative overflow-hidden py-12 md:py-24">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-100 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-200 rounded-full blur-[120px] opacity-30 translate-y-1/2 -translate-x-1/4"></div>

      <div className="section-container max-w-6xl relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">★ We'd Love to Hear From You</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Have a question about our authentic Godavari pickles or sweets? Want to place a bulk order for an upcoming occasion? We're just a message away!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-white hover:-translate-y-1 transition-transform group">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-700 mb-6 group-hover:scale-110 group-hover:bg-primary-800 group-hover:text-white transition-all shadow-sm">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-heading font-extrabold text-gray-900 mb-2">WhatsApp or Call Us</h3>
              <p className="text-gray-500 mb-6 font-medium text-sm leading-relaxed">
                Connect with us directly for instant support or to place quick orders.
              </p>
              <a href="https://wa.me/919876543210" className="text-xl font-extrabold text-primary-800 hover:text-primary-600 transition-colors inline-block tracking-tight">
                +91 98765 43210
              </a>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-white hover:-translate-y-1 transition-transform group">
              <div className="w-14 h-14 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-600 mb-6 group-hover:scale-110 group-hover:bg-secondary-500 group-hover:text-white transition-all shadow-sm">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-heading font-extrabold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-500 mb-6 font-medium text-sm leading-relaxed">
                For corporate gifting, bulk orders, or partnership inquiries.
              </p>
              <a href="mailto:hello@godhavarolla.com" className="text-lg font-extrabold text-secondary-700 hover:text-secondary-600 transition-colors inline-block tracking-tight">
                hello@godhavarolla.com
              </a>
            </div>

          </div>

          {/* Contact Form / Info Right Column */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-gray-200/60 border border-white h-full relative overflow-hidden">
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-bl-[100px] z-0 opacity-50"></div>

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-heading font-extrabold text-gray-900 mb-8 border-b border-gray-100 pb-6">Our Location & Hours</h3>

                <div className="grid sm:grid-cols-2 gap-8 mb-auto">
                  
                  <div className="flex items-start gap-5 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group">
                    <div className="mt-1 w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl text-primary-700 group-hover:text-primary-500 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900 mb-2">Kitchen Address</h4>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium">
                        Plot No 14, Godavari Foods Hub, <br/>
                        Kukatpally, <br/>
                        Hyderabad, Telangana <br/>
                        500072
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 p-6 bg-secondary-50 rounded-3xl border border-secondary-100 hover:border-secondary-200 hover:shadow-sm transition-all group">
                    <div className="mt-1 w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl text-secondary-600 group-hover:text-secondary-500 shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900 mb-2">Operating Hours</h4>
                      <div className="space-y-1.5 text-sm text-gray-600 font-medium">
                        <p className="flex justify-between w-full gap-4 border-b border-secondary-200 pb-1.5">
                          <span>Monday - Saturday</span>
                          <span className="font-bold text-gray-900">9:00 AM - 9:00 PM</span>
                        </p>
                        <p className="flex justify-between w-full gap-4 pt-1">
                          <span>Sunday</span>
                          <span className="font-bold text-gray-900">10:00 AM - 6:00 PM</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-gradient-to-r from-primary-900 to-[#3b0909] rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-primary-900/20 text-center sm:text-left">
                  <div>
                    <h4 className="text-white text-xl font-heading font-extrabold mb-2">Ready to order?</h4>
                    <p className="text-primary-100 font-medium text-sm">Send us a direct message on WhatsApp for the fastest checkout!</p>
                  </div>
                  <a href="https://wa.me/919876543210" className="bg-white text-primary-900 font-extrabold px-8 py-4 rounded-xl flex items-center gap-3 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20 transition-all shrink-0">
                    <Send size={18} /> Chat Now
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
