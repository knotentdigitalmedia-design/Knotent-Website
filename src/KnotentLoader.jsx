import React, { useEffect, useState } from "react";

/**
 * KnotentLoader
 * ------------------------------------------------------------------
 * Site-load animation for Knotent.com.
 *
 * Story beats (matches the tagline "tying brand to the spotlights"):
 *   1. A rope draws itself into a figure-eight knot (an actual knot —
 *      literal nod to "Knot-ent").
 *   2. The knot cinches once, tight.
 *   3. It releases: the rope becomes a beam of light, a spotlight
 *      blooms behind the wordmark, and "KNOTENT" + tagline reveal.
 *   4. The whole stage fades, handing off to your real page.
 *
 * USAGE
 *   import KnotentLoader from "./KnotentLoader";
 *
 *   function App() {
 *     const [loading, setLoading] = useState(true);
 *     return (
 *       <>
 *         {loading && <KnotentLoader onComplete={() => setLoading(false)} />}
 *         <YourSite />
 *       </>
 *     );
 *   }
 *
 * PROPS
 *   onComplete : () => void   called once the exit fade finishes (~4.2s)
 *   totalMs    : number       override total duration (default 4200)
 * ------------------------------------------------------------------
 */

const BRAND = {
  red: "#F50615",
  white: "#FFFFFF",
  black: "#000000",
};

export default function KnotentLoader({ onComplete, totalMs = 4200 }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), totalMs - 600);
    const doneTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, totalMs);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [totalMs, onComplete]);

  return (
    <div
      className={`knt-stage${exiting ? " knt-stage--exit" : ""}`}
      role="status"
      aria-label="Knotent is loading"
    >
      <div className="knt-glow" aria-hidden="true" />

      <div className="knt-knotwrap" aria-hidden="true">
        <svg
          className="knt-knot"
          viewBox="0 0 220 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="knt-knot-path"
            d="M110,50 C80,10 30,10 30,50 C30,90 80,90 110,50
               C140,10 190,10 190,50 C190,90 140,90 110,50 Z"
            stroke={BRAND.red}
            strokeWidth="5"
            strokeLinecap="round"
            pathLength="1"
          />
        </svg>
      </div>

      <div className="knt-mark">
        <h1 className="knt-wordmark">
          <span className="knt-wordmark-white">KNOT</span>
          <span className="knt-wordmark-red">ENT</span>
        </h1>
        <span className="knt-beam" aria-hidden="true" />
        <p className="knt-tagline">tying brand to the spotlights</p>
      </div>

      <style>{`
        .knt-stage {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${BRAND.black};
          overflow: hidden;
          transition: opacity 0.6s ease;
        }
        .knt-stage--exit {
          opacity: 0;
          pointer-events: none;
        }

        /* Spotlight bloom behind the wordmark */
        .knt-glow {
          position: absolute;
          width: 640px;
          height: 640px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.35) 0%,
            rgba(255, 255, 255, 0.08) 40%,
            rgba(255, 255, 255, 0) 70%
          );
          filter: blur(10px);
          opacity: 0;
          transform: scale(0.3);
          animation: knt-glow-bloom 1.6s ease-out forwards;
          animation-delay: 1.45s;
        }

        /* Knot */
        .knt-knotwrap {
          position: absolute;
          animation: knt-cinch 0.5s ease-in-out forwards,
                     knt-knot-fade 0.4s ease-in forwards;
          animation-delay: 1.05s, 1.5s;
        }
        .knt-knot {
          width: 160px;
          height: auto;
          overflow: visible;
        }
        .knt-knot-path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: knt-draw 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        /* Wordmark + tagline */
        .knt-mark {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .knt-wordmark {
          margin: 0;
          font-family: -apple-system, "Helvetica Neue", Arial, sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 6vw, 4rem);
          letter-spacing: 0.06em;
          line-height: 1;
          opacity: 0;
          transform: translateY(16px);
          animation: knt-fade-up 0.7s ease-out forwards;
          animation-delay: 1.75s;
        }
        .knt-wordmark-white { color: ${BRAND.white}; }
        .knt-wordmark-red { color: ${BRAND.red}; }

        .knt-beam {
          display: block;
          height: 3px;
          width: 0%;
          margin-top: 14px;
          background: linear-gradient(
            90deg,
            transparent,
            ${BRAND.red} 20%,
            ${BRAND.white} 50%,
            ${BRAND.red} 80%,
            transparent
          );
          animation: knt-beam-draw 0.7s ease-out forwards;
          animation-delay: 2.05s;
        }

        .knt-tagline {
          margin: 18px 0 0;
          font-family: -apple-system, "Helvetica Neue", Arial, sans-serif;
          font-weight: 400;
          font-style: italic;
          font-size: clamp(0.75rem, 1.6vw, 0.95rem);
          color: ${BRAND.white};
          opacity: 0;
          letter-spacing: 0.3em;
          animation: knt-tagline-in 0.9s ease-out forwards;
          animation-delay: 2.5s;
        }

        @keyframes knt-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes knt-cinch {
          0%   { transform: scale(1) rotate(0deg); }
          50%  { transform: scale(0.86) rotate(-5deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes knt-knot-fade {
          to { opacity: 0; }
        }
        @keyframes knt-glow-bloom {
          0%   { opacity: 0;    transform: scale(0.3); }
          55%  { opacity: 0.55; }
          100% { opacity: 0.25; transform: scale(1); }
        }
        @keyframes knt-fade-up {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes knt-beam-draw {
          to { width: 220px; }
        }
        @keyframes knt-tagline-in {
          to { opacity: 0.65; letter-spacing: 0.18em; }
        }

        /* Respect reduced-motion: skip the choreography, just present it */
        @media (prefers-reduced-motion: reduce) {
          .knt-knotwrap { display: none; }
          .knt-glow, .knt-wordmark, .knt-beam, .knt-tagline {
            animation: none !important;
            opacity: 1;
            transform: none;
          }
          .knt-beam { width: 220px; }
          .knt-tagline { letter-spacing: 0.18em; }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------
 * Demo harness — preview only. Delete this when you drop
 * KnotentLoader.jsx into your real app; use the component above
 * with your own loading state instead.
 * ------------------------------------------------------------------ */
export function KnotentLoaderDemo() {
  const [playKey, setPlayKey] = useState(0);
  const [done, setDone] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", background: BRAND.black }}>
      <KnotentLoader key={playKey} onComplete={() => setDone(true)} />
      <button
        onClick={() => {
          setDone(false);
          setPlayKey((k) => k + 1);
        }}
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10000,
          padding: "10px 20px",
          background: "transparent",
          color: BRAND.white,
          border: `1px solid ${BRAND.red}`,
          borderRadius: 999,
          fontFamily: "-apple-system, sans-serif",
          fontSize: 13,
          letterSpacing: "0.05em",
          cursor: "pointer",
        }}
      >
        {done ? "Replay animation" : "Replaying…"}
      </button>
    </div>
  );
}
