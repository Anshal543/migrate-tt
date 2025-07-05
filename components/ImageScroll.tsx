'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MaskedImageScroll = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });

    // Text reveal animation
    tl.fromTo(
      textRef.current,
      { 
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        opacity: 0.8
      },
      { 
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        ease: "power2.out"
      }
    );

    // Image reveal through text
    tl.fromTo(
      imageRef.current,
      { 
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        filter: "brightness(0.4)"
      },
      { 
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        filter: "brightness(1)",
        ease: "power2.inOut"
      },
      0
    );

    // Add some parallax effect to the image
    tl.to(
      imageRef.current,
      {
        y: "-20%",
        scale: 1.1,
        ease: "none"
      },
      0
    );

    // Text scale down effect
    tl.to(
      textRef.current,
      {
        scale: 0.9,
        opacity: 0.7,
        ease: "power1.out"
      },
      0.5
    );
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Modern architecture"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div
        ref={textRef}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 mix-blend-screen pointer-events-none"
        style={{ 
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          backgroundColor: "rgba(255,255,255,0.9)"
        }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-center leading-tight p-8">
          <span className="block mb-4">MODERN</span>
          <span className="block">DESIGNS</span>
        </h1>
      </div>
    </section>
  );
};

export default MaskedImageScroll;