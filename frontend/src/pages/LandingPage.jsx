import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, text }) => (
  <div className="clean-card feature-card" style={{width:260, textAlign:'left'}}>
    <div style={{fontSize:28, marginBottom:8}}>{icon}</div>
    <h4 style={{margin:'6px 0', fontWeight:700}}>{title}</h4>
    <p style={{color:'var(--muted)'}}>{text}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div>
      <section className="clean-hero">
        <div className="app-container" style={{display:'flex',alignItems:'center',gap:'2rem',flexWrap:'wrap'}}>
          <div style={{flex:'1 1 420px',minWidth:300}}>
            <div className="hero-kicker">Farmer-first tools</div>
            <h1 className="hero-headline">Empowering Farmers with Smart Digital Solutions</h1>
            <p className="hero-sub">Raithu Buddy provides crop recommendations, weather forecasts, market prices, and step-by-step agricultural guidance to help farmers make timely, informed decisions.</p>
            <div style={{display:'flex',gap:12,marginTop:16}}>
              <Link to="/login"><button className="clean-btn">Login</button></Link>
              <Link to="/signup"><button className="accent-warm">Sign Up</button></Link>
            </div>
          </div>

          <div style={{flex:'1 1 380px',minWidth:280}}>
            {/* Simple illustration */}
            <div className="clean-card" style={{display:'flex',alignItems:'center',justifyContent:'center',height:300}}>
              <svg width="240" height="220" viewBox="0 0 240 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="220" rx="16" fill="url(#g)" />
                <g transform="translate(20,30)">
                  <ellipse cx="80" cy="120" rx="70" ry="18" fill="#ffffff" opacity="0.25" />
                  <rect x="20" y="40" width="120" height="70" rx="10" fill="#fff" opacity="0.9" />
                  <path d="M10 110 Q80 30 150 110" stroke="#10b981" strokeWidth="6" fill="none" strokeLinecap="round" />
                </g>
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#f0fff4" />
                    <stop offset="1" stopColor="#ecfbef" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="hero-decor" aria-hidden>
          <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="130" cy="130" r="100" fill="url(#grad)" />
            <defs>
              <linearGradient id="grad" x1="0" x2="1"><stop offset="0" stopColor="#e6fff3" /><stop offset="1" stopColor="#f0fff7" /></linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <section id="auth" style={{padding:'2.25rem 0'}}>
        <div className="app-container" style={{display:'flex',justifyContent:'center',gap:18,flexWrap:'wrap'}}>
          <Link to="/login" style={{textDecoration:'none'}}>
            <div className="clean-card" style={{width:320,textAlign:'center'}}>
              <h3 style={{marginBottom:8}}>Login to your account</h3>
              <p className="muted">Access personalized farm insights and tools.</p>
            </div>
          </Link>
          <Link to="/signup" style={{textDecoration:'none'}}>
            <div className="clean-card" style={{width:320,textAlign:'center'}}>
              <h3 style={{marginBottom:8}}>Create a new account</h3>
              <p className="muted">Join our community and start optimizing your crops.</p>
            </div>
          </Link>
        </div>
      </section>

      <section id="features" style={{padding:'2rem 0'}}>
        <div className="app-container">
          <h2 style={{fontSize:22,fontWeight:800,marginBottom:12}}>Features</h2>
          <p className="muted" style={{maxWidth:700}}>Powerful tools to support farmers at every step — from planting to market.</p>
          <div style={{display:'flex',gap:16,marginTop:18,flexWrap:'wrap'}}>
            <FeatureCard icon={'🌱'} title={'Crop Recommendations'} text={'Personalized crop guidance based on soil and weather.'} />
            <FeatureCard icon={'☁️'} title={'Weather Forecasts'} text={'Accurate local forecasts and alerts for your fields.'} />
            <FeatureCard icon={'📈'} title={'Market Prices'} text={'Real-time crop prices to help you choose when to sell.'} />
            <FeatureCard icon={'🏛️'} title={'Government Schemes'} text={'Easily find schemes and subsidies you qualify for.'} />
            <FeatureCard icon={'🤖'} title={'Smart Farming'} text={'Assistance with irrigation, fertilization and best practices.'} />
            <FeatureCard icon={'📚'} title={'Knowledge Hub'} text={'Practical articles and guides for common farm problems.'} />
          </div>
        </div>
      </section>

      <section id="about" style={{padding:'2rem 0',background:'transparent'}}>
        <div className="app-container">
          <h2 style={{fontSize:22,fontWeight:800,marginBottom:12}}>About Raithu Buddy</h2>
          <p className="muted" style={{maxWidth:900}}>Raithu Buddy was created to bring simple, actionable digital tools to farmers. We combine weather data, market insights and agronomy knowledge to help you reduce risk and increase returns.</p>
          <div style={{display:'flex',gap:12,marginTop:18,flexWrap:'wrap'}}>
            <div className="clean-card" style={{flex:'1 1 220px'}}> <h4>10k+</h4><p className="muted">Farmers supported</p></div>
            <div className="clean-card" style={{flex:'1 1 220px'}}> <h4>200+</h4><p className="muted">Tons of data processed</p></div>
            <div className="clean-card" style={{flex:'1 1 220px'}}> <h4>99%</h4><p className="muted">User satisfaction</p></div>
          </div>
        </div>
      </section>

      <section id="contact" style={{padding:'2rem 0'}}>
        <div className="app-container">
          <h3 style={{fontWeight:800}}>Get in touch</h3>
          <p className="muted">Email: support@raithubuddy.example | Phone: +91 98765 43210</p>
        </div>
      </section>

      <footer style={{padding:'2rem 0',borderTop:'1px solid rgba(4,67,41,0.04)'}}>
        <div className="app-container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
          <div>
            <div style={{fontWeight:800,color:'var(--accent)'}}>RaithuBuddy</div>
            <div className="muted">Helping farmers since 2024</div>
          </div>
          <div className="muted">© {new Date().getFullYear()} RaithuBuddy · All rights reserved</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
