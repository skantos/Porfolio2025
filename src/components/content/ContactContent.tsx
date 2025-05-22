import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const ContactContent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        status: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({
      status: 'loading',
      message: 'Sending message...'
    });
    
    // Mock API call
    setTimeout(() => {
      setFormStatus({
        status: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <h1 className="text-3xl font-mono">
              <span className="text-purple-400">import</span>{" "}
              <span className="text-yellow-300">{"{ Contact }"}</span>{" "}
              <span className="text-purple-400">from</span>{" "}
              <span className="text-green-400">'@developer/portfolio'</span>
              <span className="text-white">;</span>
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 mb-6">
                <h2 className="text-xl font-semibold mb-4 text-blue-400">
                  {`<Contact.Info />`}
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-900 bg-opacity-30 p-2 rounded-md mr-4">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-300 mb-1">Email</h3>
                      <a href="mailto:developer@example.com" className="text-yellow-300 hover:underline">
                        developer@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-900 bg-opacity-30 p-2 rounded-md mr-4">
                      <Github className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-300 mb-1">GitHub</h3>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">
                        github.com/developer
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-900 bg-opacity-30 p-2 rounded-md mr-4">
                      <Linkedin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-300 mb-1">LinkedIn</h3>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">
                        linkedin.com/in/developer
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-900 bg-opacity-30 p-2 rounded-md mr-4">
                      <Twitter className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-300 mb-1">Twitter</h3>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">
                        @developer
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                <h2 className="text-xl font-semibold mb-4 text-blue-400">
                  {`<Contact.Schedule />`}
                </h2>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-yellow-300">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-yellow-300">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-yellow-300">Closed</span>
                  </div>
                </div>
                
                <div className="mt-4 text-xs text-gray-400">
                  All times are in Pacific Standard Time (PST)
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-blue-400">
                {`<Contact.Form />`}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="name">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="message">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                    placeholder="Hello, I would like to discuss a project..."
                  ></textarea>
                </div>
                
                {formStatus.status !== 'idle' && (
                  <div className={`px-4 py-3 rounded-md ${formStatus.status === 'error' ? 'bg-red-900 bg-opacity-50 text-red-200' : formStatus.status === 'success' ? 'bg-green-900 bg-opacity-50 text-green-200' : 'bg-blue-900 bg-opacity-50 text-blue-200'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={formStatus.status === 'loading'}
                  >
                    {formStatus.status === 'loading' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactContent;