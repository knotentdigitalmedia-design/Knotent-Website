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

export default function KnotentLoader({ onComplete, totalMs = 2000 }) {
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



      <div className="knt-mark">
        <h1 className="knt-wordmark">
          <span className="knt-wordmark-red">KNOT</span>
          <span className="knt-wordmark-white">ENT</span>
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
          animation-delay: 0s;
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
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(2.2rem, 6vw, 4rem);
          letter-spacing: 0.06em;
          line-height: 1;
          opacity: 0;
          animation: knt-bounce 0.8s ease-out forwards;
          animation-delay: 0s;
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
          animation-delay: 0.2s;
        }

        .knt-tagline {
          margin: 18px 0 0;
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          font-style: italic;
          font-size: clamp(0.75rem, 1.6vw, 0.95rem);
          color: ${BRAND.white};
          opacity: 0;
          letter-spacing: 0.3em;
          animation: knt-bounce-tagline 0.8s ease-out forwards;
          animation-delay: 0.3s;
        }

        @keyframes knt-bounce {
          0% { opacity: 0; transform: translateY(-30px); }
          50% { opacity: 1; transform: translateY(10px); }
          75% { opacity: 1; transform: translateY(-5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes knt-bounce-tagline {
          0% { opacity: 0; transform: translateY(-20px); letter-spacing: 0.3em; }
          50% { opacity: 0.65; transform: translateY(8px); letter-spacing: 0.18em; }
          75% { opacity: 0.65; transform: translateY(-4px); letter-spacing: 0.18em; }
          100% { opacity: 0.65; transform: translateY(0); letter-spacing: 0.18em; }
        }
        @keyframes knt-glow-bloom {
          0%   { opacity: 0;    transform: scale(0.3); }
          55%  { opacity: 0.55; }
          100% { opacity: 0.25; transform: scale(1); }
        }
        @keyframes knt-beam-draw {
          to { width: 220px; }
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
