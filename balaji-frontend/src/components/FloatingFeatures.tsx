"use client";

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, Phone, ArrowUp, X, Send } from 'lucide-react';

export default function FloatingFeatures() {
  const [showScroll, setShowScroll] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showLiveNotification, setShowLiveNotification] = useState(true);
  const [messages, setMessages] = useState<{sender: 'bot' | 'user', text: string}[]>([
    { sender: 'bot', text: 'Hey, I am Vishal 👋 How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !sessionStorage.getItem('exitPopupShown')) {
        setShowExitPopup(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseout', handleMouseLeave);
    
    // Hide live notification after 10 seconds
    const timer = setTimeout(() => setShowLiveNotification(false), 10000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseout', handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    const currentInput = input;
    setInput('');
    
    // Auto reply
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: `Thanks for your interest in "${currentInput}". Please leave your contact details or call us directly.` }]);
    }, 1000);
    
    // Save lead in background
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Chat User',
          phone: '',
          email: '',
          requirement: currentInput,
          source: 'Chatbot'
        })
      });
    } catch(e) {}
  };

  const handleQuickReply = (text: string) => {
    setInput(text);
  };

  return (
    <>
      <div style={{ position: 'fixed', bottom: '2rem', left: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 99 }}>
        <a href="https://wa.me/919919660760" target="_blank" rel="noreferrer" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#25D366', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', transition: 'transform 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.012 2C6.484 2 2 6.485 2 12.015c0 1.766.46 3.493 1.332 5.02L2 22l5.127-1.312A9.97 9.97 0 0 0 12.012 22c5.526 0 10.01-4.484 10.01-10.014C22.022 6.485 17.538 2 12.012 2zM12.012 20.32c-1.503 0-2.98-.403-4.275-1.168l-.305-.182-3.178.814.828-3.1-2.01-3.21c-.742-1.26-.11-2.716-.11-4.185 0-4.604 3.743-8.348 8.347-8.348 4.604 0 8.35 3.744 8.35 8.348 0 4.604-3.746 8.348-8.35 8.348z"/><path d="M16.51 13.916c-.227-.113-1.343-.663-1.55-.74-.21-.075-.36-.113-.513.113-.15.228-.588.74-.72.89-.133.153-.266.17-.493.057-.226-.113-.96-.353-1.828-1.127-.676-.603-1.13-1.347-1.263-1.573-.133-.227-.014-.35.1-.462.1-.1.226-.264.34-.396.113-.133.15-.227.227-.378.075-.15.038-.283-.018-.396-.057-.113-.513-1.238-.7-1.696-.183-.445-.37-.384-.512-.39-.134-.006-.285-.008-.435-.008-.15 0-.395.057-.6.284-.206.227-.788.77-.788 1.875s.808 2.17 1.218 2.716c.412.547 1.85 2.824 4.482 3.96.626.27 1.114.43 1.493.55.628.198 1.2.17 1.65.104.506-.076 1.55-.634 1.768-1.246.217-.613.217-1.138.152-1.246-.065-.108-.217-.17-.444-.283z"/></svg>
        </a>
      </div>

      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 99 }}>
        {showScroll && (
          <button onClick={scrollToTop} style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
            <ArrowUp />
          </button>
        )}
        
        <button onClick={() => setChatOpen(!chatOpen)} style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--secondary)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(244, 180, 0, 0.4)' }}>
          {chatOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </button>
      </div>

      {chatOpen && (
        <div style={{ position: 'fixed', bottom: '6rem', right: '2rem', width: '350px', height: '500px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', zIndex: 100, overflow: 'hidden' }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--primary)' }}>V</div>
            <div>
              <h4 style={{ margin: 0, color: 'white', fontSize: '1.1rem' }}>Vishal</h4>
              <p style={{ margin: 0, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: '#10B981', borderRadius: '50%' }}></span> Online</p>
            </div>
          </div>
          
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#F9FAFB' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%', backgroundColor: msg.sender === 'user' ? 'var(--primary)' : 'white', color: msg.sender === 'user' ? 'white' : 'var(--text-dark)', padding: '0.75rem 1rem', borderRadius: '12px', borderBottomRightRadius: msg.sender === 'user' ? '0' : '12px', borderBottomLeftRadius: msg.sender === 'bot' ? '0' : '12px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {messages.length === 1 && (
            <div style={{ padding: '0.5rem 1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', backgroundColor: '#F9FAFB' }}>
              <button onClick={() => handleQuickReply('Get Solar Price')} style={{ padding: '0.5rem 0.75rem', fontSize: '0.8rem', backgroundColor: 'white', border: '1px solid var(--secondary)', borderRadius: '20px', color: 'var(--primary)' }}>Get Solar Price</button>
              <button onClick={() => handleQuickReply('Subsidy Info')} style={{ padding: '0.5rem 0.75rem', fontSize: '0.8rem', backgroundColor: 'white', border: '1px solid var(--secondary)', borderRadius: '20px', color: 'var(--primary)' }}>Subsidy Info</button>
              <button onClick={() => handleQuickReply('Call Me')} style={{ padding: '0.5rem 0.75rem', fontSize: '0.8rem', backgroundColor: 'white', border: '1px solid var(--secondary)', borderRadius: '20px', color: 'var(--primary)' }}>Call Me</button>
              <button onClick={() => { window.open('https://wa.me/919919660760', '_blank'); setChatOpen(false); }} style={{ padding: '0.5rem 0.75rem', fontSize: '0.8rem', backgroundColor: 'white', border: '1px solid var(--secondary)', borderRadius: '20px', color: 'var(--primary)' }}>WhatsApp</button>
            </div>
          )}
          
          <div style={{ padding: '1rem', borderTop: '1px solid #E5E7EB', display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              value={input} 
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..." 
              style={{ flex: 1, padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '20px', outline: 'none' }} 
            />
            <button onClick={handleSend} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Sticky Mobile CTA */}
      <div className="mobile-cta" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: 'var(--primary)', color: 'white', padding: '0.75rem 1rem', display: 'none', justifyContent: 'space-between', alignItems: 'center', zIndex: 98, boxShadow: '0 -4px 10px rgba(0,0,0,0.1)' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>⚡ Free Solar Consultation</span>
        <a href="https://wa.me/919919660760" style={{ backgroundColor: 'var(--secondary)', color: 'black', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600 }}>WhatsApp Now</a>
      </div>
      
      {/* Live Notification */}
      {showLiveNotification && (
        <div style={{ position: 'fixed', bottom: '6rem', left: '2rem', backgroundColor: 'white', padding: '0.75rem 1rem', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', fontSize: '0.85rem', zIndex: 97, animation: 'fadeIn 0.5s ease' }}>
          🔥 Someone from Noida just installed 5KW solar
        </div>
      )}

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center', maxWidth: '400px', width: '100%', position: 'relative' }}>
            <button onClick={() => setShowExitPopup(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--text-muted)' }}>
              <X size={20} />
            </button>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>⚡ Wait! Get Free Solar Quote</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Save up to ₹75,000/year with solar. Take 1 minute to find out.</p>
            <a href="https://wa.me/919919660760" style={{ display: 'block', backgroundColor: 'var(--secondary)', color: 'black', padding: '0.75rem 1rem', borderRadius: '8px', fontWeight: 600, width: '100%' }}>Get Quote Now</a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-cta {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
