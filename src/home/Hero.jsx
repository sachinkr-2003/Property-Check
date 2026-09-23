import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { settingsAPI } from '../services/apiService';

const Hero = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('+91 9693420595');
  
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const changingWords = [
    'Property Investment',
    'Dream Home Purchase',
    'Real Estate Asset',
    'Hard-Earned Money'
  ];

  useEffect(() => {
    let timer;
    const currentWord = changingWords[loopNum % changingWords.length];
    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      timer = setTimeout(() => { setIsDeleting(false); setLoopNum(loopNum + 1); }, 500);
    } else {
      const typeSpeed = isDeleting ? 50 : 100;
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, typeSpeed);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await settingsAPI.get();
        if (res.success) setPhone(res.data.contactPhone);
      } catch (err) {
        console.error('Failed to fetch settings:', err);
      }
    };
    fetchSettings();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-amber-50 dark:bg-brand-dark pt-32 pb-20">

      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Light mode gradient */}
        <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
        {/* Dark mode gradient */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/80 to-brand-dark"></div>
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[130px] bg-brand-accent opacity-10 dark:opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] bg-orange-300 dark:bg-blue-900 opacity-10 pointer-events-none"></div>
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '28px 28px'}}></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-16 lg:py-24 -mt-10 lg:-mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-left -mt-4 lg:-mt-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 bg-brand-accent/10 border border-brand-accent/30 text-brand-accent mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="font-semibold tracking-wide text-sm uppercase">#1 Property Verification in Gorakhpur</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-extrabold text-gray-900 dark:text-white leading-tight mb-3">
              Secure Your <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.5rem] inline-block pt-1 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-500 mt-1 whitespace-nowrap leading-none">
                {text || '\u00A0'}
              </span>
            </h1>

            <div className="mb-6 max-w-2xl mx-0 text-left">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-0 leading-relaxed font-medium">
                Professional property verification with 100% government record accuracy.
                Trusted by 500+ Bihar families for Gorakhpur property purchases.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 mb-10 w-full">
              <button
                onClick={() => navigate('/verify')}
                className="relative overflow-hidden group bg-gray-900 dark:bg-brand-accent text-white dark:text-gray-900 hover:text-white dark:hover:text-white transition-all duration-300 font-bold px-8 py-3 w-full sm:w-auto text-base shadow-lg dark:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:-translate-y-1 active:scale-95 rounded-sm"
              >
                {/* Blue liquid wave animation */}
                <div className="absolute -bottom-[200%] -left-[50%] w-[200%] h-[200%] bg-blue-500 rounded-[40%] transition-transform duration-1000 ease-in-out group-hover:-translate-y-[60%] group-hover:rotate-180 z-0 opacity-90"></div>
                <div className="absolute -bottom-[200%] -left-[50%] w-[200%] h-[200%] bg-blue-400 rounded-[45%] transition-transform duration-1000 ease-in-out group-hover:-translate-y-[65%] group-hover:rotate-90 z-0 opacity-60 mix-blend-screen delay-75"></div>
                
                <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300">
                  Start Verification
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </button>

              <button
                onClick={() => window.open(`tel:${phone.replace(/\s/g, '')}`, '_self')}
                className="relative overflow-hidden group w-full sm:w-auto px-8 py-3 border-2 border-gray-300 dark:border-blue-500 bg-white dark:!bg-transparent text-gray-900 dark:!text-white font-bold transition-all duration-300 hover:border-blue-500 hover:text-white dark:hover:!text-white text-base shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-1 active:scale-95 rounded-sm"
              >
                {/* Blue liquid wave animation */}
                <div className="absolute -bottom-[200%] -left-[50%] w-[200%] h-[200%] bg-blue-500 rounded-[40%] transition-transform duration-1000 ease-in-out group-hover:-translate-y-[60%] group-hover:rotate-180 z-0 opacity-90"></div>
                <div className="absolute -bottom-[200%] -left-[50%] w-[200%] h-[200%] bg-blue-400 rounded-[45%] transition-transform duration-1000 ease-in-out group-hover:-translate-y-[65%] group-hover:rotate-90 z-0 opacity-60 mix-blend-screen delay-75"></div>
                
                <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Call Expert
                </span>
              </button>
            </div>

            <div className="flex items-center justify-start gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white relative z-30" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                <img className="w-10 h-10 rounded-full border-2 border-white relative z-20" src="https://randomuser.me/api/portraits/women/2.jpg" alt="" />
                <img className="w-10 h-10 rounded-full border-2 border-white relative z-10" src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-accent flex items-center justify-center text-xs font-bold text-gray-900 relative z-0">
                  500+
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium text-left">
                Trusted by families<br className="sm:hidden" /> from Bihar
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-5/12 relative mt-12 lg:mt-0 px-4 sm:px-0">
            <div className="relative mx-auto w-full max-w-[350px] sm:max-w-lg lg:max-w-xl aspect-[1/1] px-4 sm:px-0">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Property Verification"
                className="w-full h-full object-cover shadow-2xl hover:brightness-105 transition-all duration-500 rounded-sm"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-5 shadow-xl max-w-[200px] sm:max-w-xs border-l-4 border-brand-accent">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base m-0 leading-tight">100% Verified</h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 m-0">Government Records</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;
