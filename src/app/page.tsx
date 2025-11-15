'use client';
import NavBar from "@/components/navbar";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import FeatureCard from "@/components/FeatureCard";
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';

const COLORS = {
  lime: '#CCFF00',
  darkBg: '#0A0A0A',
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0B0',
  borderMedium: 'rgba(204, 255, 0, 0.12)',
  accentGlow: 'rgba(204, 255, 0, 0.08)',
  textTertiary: '#808080',
};

const features = [
    {
        title: "Quantify how your body is feeling",
        imageSrc: "https://images.ctfassets.net/h7cd7om3mauo/6v4X89d1pX8O6g5p3l2xK8/7f8fbf532d3d3a7d9f7c3e5d5e2c1b48/v1.1.jpg",
    },
    {
        title: "Extend your prime for years to come",
        imageSrc: "https://images.ctfassets.net/h7cd7om3mauo/5J2s3f5t8C3m7g6A9e9p0Y/2f4d8e5b8c3a2f8c8d7e6f5c8d7f5c2b/v1.2.jpg",
    },
    {
        title: "Optimize your sleep",
        imageSrc: "https://images.ctfassets.net/h7cd7om3mauo/4z3J3e2d1B3c4e0O4o2W4o/1d3e2c1b4c3a2f8c8d7e6f5c8d7f5c2b/v1.3.jpg",
    },
    {
        title: "Track Your Strain & Recovery",
        imageSrc: "https://images.ctfassets.net/h7cd7om3mauo/6v4X89d1pX8O6g5p3l2xK8/7f8fbf532d3d3a7d9f7c3e5d5e2c1b48/v1.1.jpg",
    },
    {
        title: "Personalized Health Insights",
        imageSrc: "https://images.ctfassets.net/h7cd7om3mauo/5J2s3f5t8C3m7g6A9e9p0Y/2f4d8e5b8c3a2f8c8d7e6f5c8d7f5c2b/v1.2.jpg",
    },
    {
        title: "Join a Community of Achievers",
        imageSrc: "https://images.ctfassets.net/h7cd7om3mauo/4z3J3e2d1B3c4e0O4o2W4o/1d3e2c1b4c3a2f8c8d7e6f5c8d7f5c2b/v1.3.jpg",
    },
    {
        title: "A New Goal to Conquer",
        imageSrc: "https://images.ctfassets.net/h7cd7om3mauo/6v4X89d1pX8O6g5p3l2xK8/7f8fbf532d3d3a7d9f7c3e5d5e2c1b48/v1.1.jpg",
    },
];

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'center', 
    loop: true,
    containScroll: 'trimSnaps' 
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleCanPlayThrough = () => {
    setTimeout(() => setIsVideoLoaded(true), 100);
  };

  return (
    <>
      <NavBar />

      {/* Fixed Hero Section */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <div
          className={`absolute inset-0 z-30 transition-opacity duration-700 ease-in ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          } bg-black pointer-events-none`}
        ></div>

        <video
          className="absolute w-full h-full object-cover will-change-opacity"
          style={{ opacity: isVideoLoaded ? 1 : 0, transition: 'opacity 700ms ease' }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlayThrough={handleCanPlayThrough}
        >
          <source
            src="https://videos.ctfassets.net/h7cd7om3mauo/1r73ZD3152IYlxVaThkzTL/3025deb93461e8fd7753a79e27763826/bg.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute w-full h-full bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

        <div className="relative z-40 flex flex-col items-start justify-center h-full min-h-screen pt-[120px] px-6 md:px-12 lg:px-20 text-left">
           <div className="max-w-4xl">
            <h1
              className="text-white mb-8 w-full"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 6rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
                maxWidth: 'min(1400px, 92vw)',
                overflowWrap: 'break-word',
                wordBreak: 'normal',
                fontWeight: 300,
              }}
            >
              Understand your health from the <br />
              <span style={{ color: COLORS.lime, fontWeight: 400 }}>inside out</span>
            </h1>
            <p
              className="text-base md:text-lg lg:text-xl max-w-3xl mb-10 md:mb-14 leading-relaxed"
              style={{ fontWeight: 400, color: COLORS.textSecondary, lineHeight: '1.8' }}
            >
              From recovery to what&apos;s happening inside your body, VitaLink brings it all together — make smarter choices today that add more years to your life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-gradient-to-r from-[#CCFF00] to-[#A0FF00] text-black font-bold rounded-xl px-8 py-4 text-lg shadow-lg hover:shadow-[0_0_30px_rgba(204,255,0,0.8)] hover:scale-105 transition-all duration-300 transform-gpu tracking-widest"
              >
                EXPLORE ADVANCED LABS
              </button>
              <Link
                href="/signup"
                className="border-2 border-[#CCFF00] text-[#CCFF00] font-bold rounded-xl px-8 py-4 text-lg hover:bg-[#CCFF00]/10 hover:shadow-[0_0_20px_rgba(204,255,0,0.5)] transition-all duration-300 transform-gpu tracking-widest text-center"
              >
                START FREE TRIAL
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex flex-col items-center space-y-2">
              <p className="text-xs font-semibold tracking-widest" style={{ color: COLORS.lime }}>SCROLL</p>
              <svg className="w-5 h-5" style={{ color: COLORS.lime }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[90vh]"></div>

      {/* Scrollable content with Embla Carousel */}
      <div className="relative z-10 bg-white">
        <section className="text-black py-20 md:py-24">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-left mb-20 max-w-4xl mx-auto px-6 md:px-12">
              <h2 className="text-5xl md:text-[5.5rem] font-light tracking-tighter leading-none mb-8">
                Wear WHOOP daily, <br /> improve your health
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl">
                Daily WHOOP wear is linked to 91 more minutes of weekly activity, 2.3 more hours of sleep per week, and over 10% higher HRV. Members see faster gains, stronger habits, and better outcomes across their goals.*
              </p>
            </div>

            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="embla__slide"
                  >
                    <FeatureCard title={feature.title} imageSrc={feature.imageSrc} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${activeIndex === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'}`}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </section>

         <section className="bg-black text-white py-20 md:py-32 border-t relative overflow-hidden" style={{ borderColor: COLORS.borderMedium }}>
          <div className="absolute inset-0 opacity-10">
             <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(0deg, transparent 24%, ${COLORS.lime} 25%, ${COLORS.lime} 26%, transparent 27%, transparent 74%, ${COLORS.lime} 75%, ${COLORS.lime} 76%, transparent 77%, transparent),
                  linear-gradient(90deg, transparent 24%, ${COLORS.lime} 25%, ${COLORS.lime} 26%, transparent 27%, transparent 74%, ${COLORS.lime} 75%, ${COLORS.lime} 76%, transparent 77%, transparent)
                `,
                backgroundSize: '60px 60px',
                animation: 'drift 30s linear infinite',
              }}
            ></div>
          </div>

          <div className="max-w-4xl mx-auto text-center px-6 md:px-12 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight" style={{ color: COLORS.textPrimary }}>Ready to Elevate Your Performance?</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-12" style={{ color: COLORS.textSecondary }}>Join thousands of athletes and coaches who are transforming their training with VitaLink. Start your journey to peak performance today with our comprehensive analytics platform.</p>
            <Link
              href="/signup"
              className="inline-block bg-gradient-to-r from-[#CCFF00] to-[#A0FF00] text-black font-bold rounded-xl px-12 py-6 text-2xl shadow-lg hover:shadow-[0_0_40px_rgba(204,255,0,0.9)] hover:scale-110 transition-all duration-300 transform-gpu tracking-widest"
            >
              START YOUR FREE TRIAL
            </Link>
          </div>
        </section>

        <footer className="bg-black text-white py-12 border-t relative" style={{ borderColor: COLORS.borderMedium }}>
           <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.lime }}>VitaLink</h4>
                <p style={{ color: COLORS.textTertiary }}>Transforming athletic performance through real-time biometric insights.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.lime }}>Product</h4>
                <ul className="space-y-2" style={{ color: COLORS.textSecondary }}>
                  <li><Link href="/features" className="hover:text-[#CCFF00] transition-colors">Features</Link></li>
                  <li><Link href="/pricing" className="hover:text-[#CCFF00] transition-colors">Pricing</Link></li>
                  <li><Link href="/dashboard" className="hover:text-[#CCFF00] transition-colors">Dashboard</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.lime }}>Company</h4>
                <ul className="space-y-2" style={{ color: COLORS.textSecondary }}>
                  <li><Link href="/about" className="hover:text-[#CCFF00] transition-colors">About</Link></li>
                  <li><Link href="/blog" className="hover:text-[#CCFF00] transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-[#CCFF00] transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.lime }}>Legal</h4>
                <ul className="space-y-2" style={{ color: COLORS.textSecondary }}>
                  <li><Link href="/privacy" className="hover:text-[#CCFF00] transition-colors">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-[#CCFF00] transition-colors">Terms</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t pt-8 text-center" style={{ borderColor: COLORS.borderMedium, color: COLORS.textTertiary }}>
              <p>&copy; {new Date().getFullYear()} VitaLink. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
