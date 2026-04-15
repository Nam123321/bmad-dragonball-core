import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-6 py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-bg-navy)' }}
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        
        {/* Headline Group */}
        <h1 className="flex flex-col gap-4 mb-8">
          <span 
            className="block text-white"
            style={{ 
              fontSize: 'min(72px, 12vw)', 
              fontWeight: 300, 
              lineHeight: 1, 
              letterSpacing: '-0.4px' 
            }}
          >
            “Gnôthi Seautón”
          </span>
          <span 
            className="block text-white"
            style={{ 
              fontSize: 'min(36px, 8vw)', 
              fontWeight: 500, 
              lineHeight: 1.1, 
              letterSpacing: '-0.4px' 
            }}
          >
            Know Thyself.
          </span>
        </h1>
        
        {/* Lead Paragraph */}
        <p 
          className="max-w-2xl mx-auto mb-12"
          style={{ 
            fontSize: 'var(--text-xl, 20px)', 
            fontWeight: 400, 
            lineHeight: '32.5px', 
            color: 'var(--color-text-muted, rgb(115, 135, 174))' 
          }}
        >
          OpenGnothia is an AI-powered psychotherapy support application designed strictly for your eyes only.
        </p>

        {/* Action Group */}
        <div className="flex flex-col items-center gap-4">
          <button 
            className="transition-all hover:scale-105 active:scale-95"
            style={{
              padding: '16px 32px',
              borderRadius: '9999px',
              backgroundColor: 'var(--color-text-pure, rgb(255, 255, 255))',
              color: 'var(--color-text-dark, rgb(0, 0, 0))',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '28px',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            Download Free
          </button>
          
          {/* OS Labels */}
          <p 
            style={{
              fontSize: '14px',
              color: 'var(--color-text-muted, rgb(115, 135, 174))',
              marginTop: '16px'
            }}
          >
            Open source · macOS, Windows, Linux
          </p>
        </div>
        
      </div>

      {/* Background Decorative Blur (Optional fallback since we don't have the exact image asset) */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, var(--color-brand-cyan), transparent 60%)'
        }}
        aria-hidden="true"
      />
    </section>
  );
}
