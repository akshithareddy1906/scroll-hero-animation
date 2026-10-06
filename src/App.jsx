import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);
  const heroVisualRef = useRef(null);
  const heroTitleRef = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // =========================================
      // INITIAL LOAD ANIMATIONS
      // =========================================

      const titleWords = gsap.utils.toArray(".hero-word");

      gsap.from(titleWords, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(".intro-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });

      gsap.from(".stat", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        delay: 1,
      });

      gsap.from(".scroll-indicator", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.6,
      });

      // =========================================
      // HERO SCROLL ANIMATION
      // =========================================

      gsap.to(heroVisualRef.current, {
        x: 260,
        y: 180,
        scale: 0.55,
        rotation: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(heroTitleRef.current, {
        x: -180,
        opacity: 0.15,
        scale: 0.75,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-content", {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // =========================================
      // SECTION 2
      // =========================================

      gsap.from(".section2-label", {
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 75%",
          end: "top 35%",
          scrub: 1,
        },
      });

      gsap.from(".section2-title", {
        y: 120,
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      });

      gsap.from(".section2-description", {
        y: 70,
        opacity: 0,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 65%",
          end: "top 30%",
          scrub: 1,
        },
      });

      // =========================================
      // SECTION 3
      // =========================================

      gsap.from(".section3-title-filled", {
        x: -150,
        opacity: 0,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      });

      gsap.from(".section3-title-outline", {
        x: 150,
        opacity: 0,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 70%",
          end: "top 25%",
          scrub: 1,
        },
      });

      ScrollTrigger.refresh();
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={appRef}>
      {/* =========================================
          HERO
      ========================================= */}

      <section className="hero">
        <div className="grid-background"></div>

        <div className="hero-content">
          <div className="top-line">
            <span></span>
            <p>DIGITAL EXPERIENCE / 2026</p>
          </div>

          {/* IMPORTANT:
              Each word is separate so the spacing works correctly.
          */}
          <div className="hero-heading-wrapper" ref={heroTitleRef}>
            <h1 className="hero-heading">
              <span className="hero-word">WELCOME</span>
              <span className="hero-word">ITZ</span>
              <span className="hero-word">FIZZ</span>
            </h1>
          </div>

          <p className="intro-text">
            We create digital experiences designed to move, connect and leave
            an impression.
          </p>

          <div className="stats">
            <div className="stat">
              <strong>92%</strong>
              <span>CUSTOMER SATISFACTION</span>
            </div>

            <div className="stat">
              <strong>85%</strong>
              <span>FASTER EXPERIENCE</span>
            </div>

            <div className="stat">
              <strong>4.9</strong>
              <span>AVERAGE RATING</span>
            </div>
          </div>
        </div>

        {/* =========================================
            ANIMATED VISUAL
        ========================================= */}

        <div className="visual-wrapper" ref={heroVisualRef}>
          <div className="orb"></div>

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          <div className="glow-dot dot-one"></div>
          <div className="glow-dot dot-two"></div>
        </div>

        {/* =========================================
            HERO FOOTER
        ========================================= */}

        <div className="hero-footer">
          <div className="brand-box">F</div>

          <div className="scroll-indicator">
            <span className="scroll-dot"></span>
            SCROLL TO EXPLORE
          </div>

          <span>01 / 03</span>
        </div>
      </section>

      {/* =========================================
          SECTION 2
      ========================================= */}

      <section
        className="experience-section light"
        ref={section2Ref}
      >
        <div className="section-number">02 / 03</div>

        <div className="section-inner">
          <p className="section-label section2-label">
            THE EXPERIENCE
          </p>

          <h2 className="section2-title">
            <span className="filled">BUILT</span>
            <span className="outline">FOR MOTION.</span>
          </h2>

          <p className="section-description section2-description">
            Smooth interactions. Purposeful motion.
            <br />
            Experiences that feel alive.
          </p>
        </div>

        <div className="section-footer">
          <span>WELCOME ITZ FIZZ</span>
          <span>KEEP EXPLORING.</span>
        </div>
      </section>

      {/* =========================================
          SECTION 3
      ========================================= */}

      <section
        className="experience-section dark"
        ref={section3Ref}
      >
        <div className="section-number">03 / 03</div>

        <div className="section-inner">
          <p className="section-label">
            THE EXPERIENCE
          </p>

          <h2 className="section3-title">
            <span className="section3-title-filled">
              MADE
            </span>

            <span className="section3-title-outline">
              TO MOVE.
            </span>
          </h2>
        </div>

        <div className="section-footer">
          <span>WELCOME ITZ FIZZ</span>
          <span>KEEP EXPLORING.</span>
        </div>
      </section>
    </main>
  );
}

export default App;