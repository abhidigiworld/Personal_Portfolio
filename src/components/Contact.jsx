import React, { useState, useEffect, useRef } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import Card3DTilt from './Card3DTilt';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Confetti Canvas references
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const triggerConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#818cf8', '#a78bfa', '#f472b6', '#34d399', '#fbbf24', '#f87171'];
    const particles = [];

    class Confetti {
      constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2 + 100;
        this.size = Math.random() * 8 + 5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 15 + 10;
        this.vx = Math.cos(angle) * velocity;
        this.vy = Math.sin(angle) * velocity - 5;
        this.gravity = 0.35;
        this.opacity = 1;
        this.decay = Math.random() * 0.015 + 0.01;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.vx *= 0.98;
        this.opacity -= this.decay;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
      }
    }

    for (let i = 0; i < 150; i++) {
      particles.push(new Confetti());
    }

    const run = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        if (p.opacity <= 0) {
          particles.splice(i, 1);
        } else {
          p.draw();
        }
      }

      if (particles.length > 0) {
        animationRef.current = requestAnimationFrame(run);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    run();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSendError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
          name: name,
          email: email,
          message: message,
          subject: `Portfolio Contact: Message from ${name}`,
          from_name: 'Portfolio Website',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        // Fallback: open mailto link directly
        const mailtoLink = `mailto:abhishekvishwakarma460@gmail.com?subject=${encodeURIComponent(`Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
        setSubmitted(true);
      }
    } catch (err) {
      // If Web3Forms fails, fall back to mailto
      const mailtoLink = `mailto:abhishekvishwakarma460@gmail.com?subject=${encodeURIComponent(`Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoLink;
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  // Launch confetti when submitted turns true
  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        triggerConfetti();
      }, 100);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [submitted]);

  return (
    <section id="contact" className="py-24 relative px-6 overflow-hidden">
      {/* Confetti overlay layer */}
      {submitted && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 w-full h-full pointer-events-none z-[110]"
        />
      )}

      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Get In Touch</h2>
          <p className="text-white/50 text-sm max-w-md mx-auto">
            Ready to build something amazing? Feel free to reach out using the form or direct networks.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Form Block (Takes 7 cols) */}
          <div className="lg:col-span-7">
            <Card3DTilt className="h-full p-8 border border-white/10" maxRotation={4}>
              {!submitted ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send a Message</h3>
                    <p className="text-xs sm:text-sm text-white/50">I reply to all inquiries within 24 business hours.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-semibold"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-semibold"
                        placeholder="Your Email Address"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-semibold resize-none"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>

                    {sendError && (
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold">
                        <FaExclamationTriangle />
                        {sendError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary hover:bg-primary/95 text-white font-bold transition-all shadow-[0_8px_25px_rgba(var(--color-primary)/0.25)] hover:shadow-[0_12px_30px_rgba(var(--color-primary)/0.4)] flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {sending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-xs" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                /* Success view */
                <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center animate-bounce">
                    <FaCheckCircle className="text-4xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Thank You, {name}!</h3>
                    <p className="text-sm text-white/50 mt-2 max-w-sm mx-auto">
                      Your message has been sent successfully. I'll get back to you soon.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                      setSendError('');
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 transition-colors text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </Card3DTilt>
          </div>

          {/* Social details (Takes 5 cols) */}
          <div className="lg:col-span-5">
            <Card3DTilt className="h-full p-8 border border-white/10 flex flex-col justify-between" maxRotation={4}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Connect Directly</h3>
                  <p className="text-xs sm:text-sm text-white/50">Prefer other communication channels?</p>
                </div>

                <ul className="space-y-4">
                  {/* Email */}
                  <li>
                    <a
                      href="mailto:abhishekvishwakarma460@gmail.com"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/20 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <FaEnvelope className="text-base" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-white/40 uppercase">Email</div>
                        <div className="text-xs sm:text-sm font-semibold text-white/95 truncate max-w-[200px] sm:max-w-none">
                          abhishekvishwakarma460@gmail.com
                        </div>
                      </div>
                    </a>
                  </li>

                  {/* Phone */}
                  <li>
                    <a
                      href="tel:+919915857465"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/20 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <FaPhoneAlt className="text-base" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-white/40 uppercase">Call / SMS</div>
                        <div className="text-xs sm:text-sm font-semibold text-white/95">+91 99158 57465</div>
                      </div>
                    </a>
                  </li>

                  {/* LinkedIn */}
                  <li>
                    <a
                      href="https://www.linkedin.com/in/abhiwebdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/20 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <FaLinkedin className="text-base" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-white/40 uppercase">LinkedIn</div>
                        <div className="text-xs sm:text-sm font-semibold text-white/95">linkedin.com/in/abhiwebdev</div>
                      </div>
                    </a>
                  </li>

                  {/* GitHub */}
                  <li>
                    <a
                      href="https://github.com/abhidigiworld"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/20 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <FaGithub className="text-base" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-white/40 uppercase">GitHub</div>
                        <div className="text-xs sm:text-sm font-semibold text-white/95">github.com/abhidigiworld</div>
                      </div>
                    </a>
                  </li>

                  {/* Twitter */}
                  <li>
                    <a
                      href="https://twitter.com/abhisharma0812"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/20 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <FaTwitter className="text-base" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-white/40 uppercase">Twitter</div>
                        <div className="text-xs sm:text-sm font-semibold text-white/95">@abhisharma0812</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/5 text-center text-xs text-white/30 font-semibold tracking-wide">
                Based in India · Currently at Cognizant Technology Solutions
              </div>
            </Card3DTilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
