import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaViber, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import contactBg from '../assets/contact-bg.png';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    honeypot: '' // Spam protection
  });

  const [errors, setErrors] = React.useState({});
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [sending, setSending] = React.useState(false);

  // EmailJS credentials
  const SERVICE_ID = "service_3xdm2jb";
  const TEMPLATE_ID = "template_3qjkbqg";
  const PUBLIC_KEY = "sTPSxxo7KuJ6Qf8BU";

  // Validation
  const validate = () => {
    let tempErrors = {};

    // Name: Only letters and space
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      tempErrors.name = "Name should only contain letters and spaces";
    }

    // Email: Standard valid email
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    // Phone: Exact 10 digits
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      tempErrors.phone = "Phone number must be between 10 to 15 digits";
    }

    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  // Form submit handler using EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🛡️ Honeypot Check (Spam protection)
    if (formData.honeypot) {
      console.log("Spam detected!");
      return; // Silently ignore bot submissions
    }

    if (!validate()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setSending(true);
    const loadingToast = toast.loading("Sending your message...");

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        message: formData.message,
        to_name: "Aakash",
        reply_to: formData.email, // 📩 Important for Auto-reply mapping in EmailJS
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        { publicKey: PUBLIC_KEY }
      );

      console.log("EmailJS Success:", result.status, result.text);

      toast.success("Message sent successfully!", { id: loadingToast });
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', address: '', message: '', honeypot: '' });

      setTimeout(() => setShowSuccess(false), 5000);

    } catch (error) {
      console.error("EmailJS Error details:", error);
      const errorMsg = error?.text || error?.message || (typeof error === 'string' ? error : "Failed to send message.");
      toast.error(`Error: ${errorMsg}`, { id: loadingToast });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-container contact-section">
      <div className="container contact-container">
        {/* Contact Info */}
        <div className="contact-text">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Let's Work Together</h2>
          <p>
            I'm currently available for freelance work or internship opportunities.
            If you have a project that needs some creative touch, or just want to say hi, my inbox is always open.
          </p>

          <div className="contact-info">
            <a href="mailto:aakashbc24@gmail.com" className="info-item" target="_blank" rel="noopener noreferrer">
              <div className="icon-box"><FaEnvelope /></div>
              <div><h3>Email</h3><p>aakashbc24@gmail.com</p></div>
            </a>
            <a href="tel:+9779864148519" className="info-item">
              <div className="icon-box"><FaPhoneAlt /></div>
              <div><h3>Phone</h3><p>9864148519</p></div>
            </a>
            <a href="viber://chat?number=%2B9779864148519" className="info-item">
              <div className="icon-box"><FaViber /></div>
              <div><h3>Viber</h3><p>9864148519</p></div>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Kathmandu,+Nepal" className="info-item" target="_blank" rel="noopener noreferrer">
              <div className="icon-box"><FaMapMarkerAlt /></div>
              <div><h3>Location</h3><p>Kathmandu, Nepal</p></div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <Toaster position="top-right" reverseOrder={false} />
          <h3 className="form-title">Let's get connected</h3>

          {/* 🛡️ Honeypot field (hidden from users) */}
          <div className="hp-field" style={{ display: 'none' }}>
            <input
              type="text"
              name="honeypot"
              tabIndex="-1"
              autocomplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          {showSuccess && (
            <div className="success-message">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name <span className="required">*</span></label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error-input' : ''}
              required
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error-input' : ''}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number <span className="required">*</span></label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="98XXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'error-input' : ''}
              required
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message <span className="required">*</span></label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error-input' : ''}
              required
            />
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Styles */}
      <style>{`
        .contact-section { background-image: url(${contactBg}); background-size: cover; background-position: center; background-attachment: fixed; position: relative; }
        .contact-section::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(5,5,5,0.85); z-index: 0; }
        .contact-container { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .contact-text p { color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.1rem; }
        .contact-info { display: grid; gap: 2rem; }
        .info-item { display: flex; align-items: center; gap: 1rem; padding: 0.8rem 1.2rem; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--border-radius-sm); transition: all 0.3s ease; }
        .info-item:hover { background: rgba(255,255,255,0.05); border-color: var(--accent-primary); transform: translateY(-3px); }
        .icon-box { font-size: 1.4rem; color: var(--accent-primary); display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: rgba(255,255,255,0.05); border-radius: 50%; transition: all 0.3s ease; flex-shrink: 0; }
        .info-item:hover .icon-box { background: var(--accent-primary); color: white; box-shadow: 0 0 20px var(--accent-glow); transform: scale(1.1); }
        .contact-form { background: var(--bg-card); padding: 2.5rem; border-radius: var(--border-radius-lg); border: 1px solid rgba(255,255,255,0.05); }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem; }
        .form-group input, .form-group textarea { width: 100%; padding: 0.8rem; background: var(--bg-primary); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--border-radius-sm); color: var(--text-primary); font-family: var(--font-sans); transition: 0.2s; }
        .form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--accent-primary); box-shadow: 0 0 0 2px var(--accent-glow); }
        .form-title { font-family: 'Dancing Script', cursive; font-size: 2.5rem; text-align: center; margin-bottom: 2rem; background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary)); -webkit-background-clip: text; color: transparent; text-shadow: 2px 2px 10px rgba(109, 40, 217, 0.3); }
        .form-group input.error-input, .form-group textarea.error-input { border-color: var(--error); }
        .error-text { color: var(--error); font-size: 0.8rem; margin-top: 0.3rem; display: block; }
        .required { color: var(--error); }
        .success-message { background: rgba(34,197,94,0.1); color: var(--success); padding: 1rem; border-radius: var(--border-radius-sm); border: 1px solid var(--success); margin-bottom: 2rem; text-align: center; font-weight: 600; }
        @media (max-width: 768px) { .contact-container { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
};

export default Contact;
