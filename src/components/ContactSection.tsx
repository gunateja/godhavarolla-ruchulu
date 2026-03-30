'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Camera, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-saffron-600/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-saffron-400 font-medium text-sm uppercase tracking-[0.2em] mb-3 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Have a question, feedback, or want to partner with us? We&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Phone className="text-saffron-400" size={22} />,
                label: 'Call Us',
                value: '+91 98765 43210',
                href: 'tel:+919876543210',
              },
              {
                icon: <Mail className="text-saffron-400" size={22} />,
                label: 'Email Us',
                value: 'hello@godhavarolla.com',
                href: 'mailto:hello@godhavarolla.com',
              },
              {
                icon: <Camera className="text-saffron-400" size={22} />,
                label: 'Instagram',
                value: '@godhavarolla_ruchulu',
                href: 'https://instagram.com/godhavarolla_ruchulu',
              },
              {
                icon: <MessageCircle className="text-saffron-400" size={22} />,
                label: 'WhatsApp',
                value: '+91 98765 43210',
                href: 'https://wa.me/919876543210',
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-xl group"
                whileHover={{ x: 6 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-saffron-500/30 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <span className="text-xs text-white/40 uppercase tracking-wider">{item.label}</span>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div className="flex gap-3 pt-4">
              {['Facebook', 'Twitter', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-5 py-2.5 rounded-xl glass text-sm text-white/50 hover:text-saffron-400 hover:border-saffron-500/30 transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 space-y-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="text-xs font-medium text-white/40 block mb-2">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:border-saffron-500/50 focus:outline-none transition-colors"
                id="contact-name"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-white/40 block mb-2">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:border-saffron-500/50 focus:outline-none transition-colors"
                id="contact-email"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-white/40 block mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us what's on your mind..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:border-saffron-500/50 focus:outline-none transition-colors resize-none"
                id="contact-message"
              />
            </div>
            <button
              type="submit"
              className="w-full btn-primary !py-3.5 !rounded-xl flex items-center justify-center gap-2"
              id="contact-submit"
            >
              <span className="flex items-center gap-2">
                {submitted ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
