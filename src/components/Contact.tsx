import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mqalvwqq"); // 👈 Replace with your Formspree form ID
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <MessageCircle className="w-6 h-6 text-blue-500 mr-2" />
            <span className="text-blue-600 font-medium">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto"
      >
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
              placeholder="Your name"
            />
            <ValidationError 
              prefix="Name" 
              field="name" 
              errors={state.errors} 
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
              placeholder="your.email@example.com"
            />
            <ValidationError 
              prefix="Email" 
              field="email" 
              errors={state.errors} 
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
              placeholder="How can I help you?"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
              placeholder="Tell me about your project..."
            />
            <ValidationError 
              prefix="Message" 
              field="message" 
              errors={state.errors} 
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-80 disabled:cursor-not-allowed"
            >
              {state.submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Success Message */}
            {state.succeeded && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center"
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              </motion.div>
            )}
          </div>
        </form>
      </motion.div>
    </div>
    </section>
  );
};

export default Contact;
