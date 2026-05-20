/* global React */
/* eslint-disable no-undef */

const VISION_PILLARS = [
  {
    n: "01",
    word: "Craft",
    title: "Make rugs slowly, by hand.",
    body: "Tufted by hand, washed by hand, bound by hand. Eighty to one hundred and twenty hours on the frame. We do not chase speed.",
  },
  {
    n: "02",
    word: "Story",
    title: "Every rug carries a name.",
    body: "Sunday Floor. Grandmother. Cathedral. Each Aura is rooted in a place, a person, or a quiet memory — not in a SKU number.",
  },
  {
    n: "03",
    word: "Belonging",
    title: "Made for the floor you live on.",
    body: "We measure your room. We study your light. The rug is sized, colored, and tufted for a specific home, not a market segment.",
  },
  {
    n: "04",
    word: "Permanence",
    title: "Built to outlast a decade.",
    body: "New Zealand wool, archival construction, repairable backing. An Aura should hold up to ten years of furniture, ten years of feet, ten years of looking.",
  },
];

const FUTURE_PROJECTS = [
  { tag: "2026 · LATE",  title: "The Sanctuary collection",   body: "Five rugs inspired by the floors of small Black church sanctuaries in the American South. Made-to-order, signed and editioned.",          status: "In progress" },
  { tag: "2026 · LATE",  title: "Open Studio Saturdays",      body: "A monthly open-door event for clients and collectors. Tea, conversation, one rug in progress on the frame.",                         status: "Planning"    },
  { tag: "2027 · EARLY", title: "Aura — Editions Vol. II",     body: "A second seasonal drop of six numbered rugs, including the studio's first wool-and-jute pile experiment.",                            status: "Designing"   },
  { tag: "2027",         title: "Aura monograph — Vol. 01",    body: "First printed book documenting the studio's first three years: sketches, sites, install photographs, and the rugs in their homes.",  status: "Drafting"    },
  { tag: "2027 · LATE",  title: "Lagos satellite studio",     body: "A second tufting space in Lagos, in partnership with our yarn-sourcing collective. Half of Vol. II will be tufted there.",            status: "In conversation" },
  { tag: "ONGOING",      title: "The Letters Project",        body: "A correspondence series — one handwritten letter, one swatch, to a different reader each month. Quiet, slow, no marketing.",          status: "Open subscription" },
];

function VisionPage() {
  const Reveal = window.Reveal;

  return (
    <div className="vision-root">
      {/* HEADER (dark) */}
      <header className="vision-hero on-dark" data-screen-label="05 Vision — Hero">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow" style={{ color: "var(--gold)" }}><span className="num" style={{ color: "var(--gold)" }}>05</span>The Vision</div>
            <h1 className="display italic-accent" style={{ fontSize: "clamp(60px, 11vw, 200px)", lineHeight: 0.9, marginTop: 28, color: "var(--cream)", maxWidth: 1300 }}>
              A rug is a <em>quiet</em> work of <em>fine art.</em>
            </h1>
          </Reveal>
          <Reveal delay={140} className="vision-hero-foot">
            <div className="vision-hero-foot-left">
              <p className="kicker" style={{ color: "var(--gold)" }}>Manifesto, in four parts &mdash;</p>
            </div>
            <div className="vision-hero-foot-right">
              <p className="body-lg" style={{ color: "rgba(244,239,230,0.78)", maxWidth: 520 }}>
                Aura Rugs is a small, slow practice. We are not a brand chasing scale. We are two frames and four commitments — trying to make rugs that hold up to time, to families, and to looking.
              </p>
            </div>
          </Reveal>
        </div>
      </header>

      {/* MISSION STATEMENT large */}
      <section className="section wrap vision-mission" data-screen-label="05 Vision — Mission">
        <Reveal>
          <div className="eyebrow"><span className="num">01</span>Mission</div>
          <p className="display italic-accent vision-mission-text">
            To make <em>rugs</em> that are <em>art objects</em> and also <em>daily life</em> — for the rooms people actually live in.
          </p>
        </Reveal>
      </section>

      {/* PILLARS */}
      <section className="section vision-pillars">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="num">02</span>Four commitments</div>
            <h2 className="display italic-accent h-display-lg" style={{ marginTop: 16, maxWidth: 1100 }}>
              What we <em>commit</em> to, on every rug.
            </h2>
          </Reveal>

          <div className="vp-grid">
            {VISION_PILLARS.map((p, i) => (
              <Reveal as="article" key={p.n} className="vp-card" delay={i * 70}>
                <div className="vp-card-top">
                  <span className="vp-card-num">{p.n}</span>
                  <span className="vp-card-word serif-italic">{p.word}</span>
                </div>
                <h3 className="display vp-card-title">{p.title}</h3>
                <p className="vp-card-body">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE PROJECTS */}
      <section className="section on-dark vision-future" data-screen-label="05 Vision — Future projects">
        <div className="wrap">
          <Reveal className="vf-head">
            <div>
              <div className="eyebrow" style={{ color: "var(--gold)" }}><span className="num" style={{ color: "var(--gold)" }}>03</span>Future projects</div>
              <h2 className="display italic-accent h-display-lg" style={{ marginTop: 16, color: "var(--cream)" }}>
                What is <em>next.</em>
              </h2>
            </div>
            <p className="serif-italic" style={{ color: "rgba(244,239,230,0.7)", fontSize: 22, maxWidth: 420, lineHeight: 1.3 }}>
              A short, honest preview of the next eighteen months. Subject to change, as all good plans are.
            </p>
          </Reveal>

          <ol className="vf-list">
            {FUTURE_PROJECTS.map((f, i) => (
              <Reveal as="li" key={f.title} className="vf-item" delay={i * 70}>
                <span className="vf-tag">{f.tag}</span>
                <div className="vf-body">
                  <h3 className="display vf-title">{f.title}</h3>
                  <p className="vf-text">{f.body}</p>
                </div>
                <span className="vf-status">
                  <span className="vf-status-dot" />
                  {f.status}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="vision-cta">
        <div className="wrap vision-cta-inner">
          <Reveal>
            <p className="display italic-accent" style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.05, fontWeight: 700, maxWidth: 900 }}>
              Want a rug made for <em>your</em> floor?
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn btn--gold" onClick={() => window.location.hash = "contact"}>
                Start a commission <VisionArrow />
              </button>
              <button className="btn btn--ghost" onClick={() => window.location.hash = "process"}>
                See how it's made
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <VisionStyles />
    </div>
  );
}

function VisionArrow() {
  return (
    <svg className="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7" /><path d="M9 7h8v8" />
    </svg>
  );
}

function VisionStyles() {
  return (
    <style>{`
      .vision-root { }

      /* HERO */
      .vision-hero {
        background:
          radial-gradient(70% 60% at 0% 0%, rgba(157,134,199,0.38) 0%, transparent 55%),
          radial-gradient(80% 60% at 100% 100%, rgba(107,77,156,0.28) 0%, transparent 55%),
          var(--black);
        color: var(--cream);
        padding: clamp(160px, 18vw, 240px) 0 clamp(60px, 8vw, 120px);
        position: relative;
        overflow: hidden;
      }
      .vision-hero::before {
        content: ""; position: absolute;
        right: -100px; top: 20%;
        width: 480px; height: 480px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(157,134,199,0.18) 0%, transparent 70%);
        pointer-events: none;
      }
      .vision-hero em { color: var(--gold); }
      .vision-hero-foot {
        margin-top: 64px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 48px;
      }
      @media (max-width: 800px) {
        .vision-hero-foot { grid-template-columns: 1fr; gap: 16px; }
      }

      /* MISSION */
      .vision-mission { text-align: left; padding-block: clamp(80px, 10vw, 160px); }
      .vision-mission-text {
        font-size: clamp(40px, 6vw, 92px);
        line-height: 1.05;
        margin-top: 28px;
        font-weight: 700;
        max-width: 1300px;
      }
      .vision-mission-text em { color: var(--blood); }

      /* PILLARS GRID */
      .vision-pillars { background: var(--cream-warm); border-block: 1px solid var(--rule); }
      .vp-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 48px;
        margin-top: 64px;
      }
      .vp-card {
        padding: 40px 0 0;
        border-top: 1px solid var(--rule);
      }
      .vp-card-top {
        display: flex; justify-content: space-between; align-items: baseline;
        margin-bottom: 24px;
      }
      .vp-card-num {
        font-family: var(--display);
        font-weight: 800;
        font-size: 64px;
        color: var(--gold-deep);
        line-height: 1;
        letter-spacing: -0.04em;
      }
      .vp-card-word {
        font-size: 28px;
        color: var(--ink);
      }
      .vp-card-title {
        font-weight: 700;
        font-size: clamp(28px, 3.4vw, 46px);
        line-height: 1.05;
        letter-spacing: -0.02em;
        margin: 0;
        max-width: 480px;
      }
      .vp-card-body {
        margin-top: 18px;
        font-size: clamp(16px, 1.4vw, 19px);
        color: var(--ink-soft);
        max-width: 480px;
        line-height: 1.55;
      }
      @media (max-width: 800px) { .vp-grid { grid-template-columns: 1fr; gap: 32px; } }

      /* FUTURE */
      .vision-future { background: var(--ink); color: var(--cream); }
      .vf-head {
        display: flex; justify-content: space-between; align-items: end;
        gap: 48px;
        margin-bottom: 56px;
        flex-wrap: wrap;
      }

      .vf-list { list-style: none; padding: 0; margin: 0; }
      .vf-item {
        display: grid;
        grid-template-columns: 140px 1fr 200px;
        gap: 40px;
        align-items: start;
        padding: 32px 0;
        border-top: 1px solid rgba(244,239,230,0.18);
        transition: background .25s;
      }
      .vf-item:hover { background: rgba(244,239,230,0.03); }
      .vf-item:last-child { border-bottom: 1px solid rgba(244,239,230,0.18); }
      .vf-tag {
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.14em;
        color: var(--gold);
        padding-top: 6px;
      }
      .vf-title {
        font-family: var(--display);
        font-weight: 700;
        font-size: clamp(24px, 2.6vw, 36px);
        letter-spacing: -0.01em;
        margin: 0;
        color: var(--cream);
      }
      .vf-text {
        margin: 10px 0 0;
        color: rgba(244,239,230,0.7);
        font-size: 16px;
        max-width: 620px;
        line-height: 1.55;
      }
      .vf-status {
        display: inline-flex; align-items: center; gap: 10px;
        font-family: var(--display);
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: rgba(244,239,230,0.85);
        padding-top: 10px;
        justify-self: end;
      }
      .vf-status-dot {
        display: inline-block;
        width: 8px; height: 8px;
        border-radius: 50%;
        background: var(--gold);
        box-shadow: 0 0 0 4px rgba(157,134,199,0.18);
        animation: vfBlink 2.4s ease-in-out infinite;
      }
      @keyframes vfBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.45; }
      }
      @media (max-width: 800px) {
        .vf-item { grid-template-columns: 1fr; gap: 12px; }
        .vf-status { justify-self: start; padding-top: 0; }
      }

      /* CTA */
      .vision-cta { background: var(--cream); padding: clamp(80px, 10vw, 140px) 0; }
      .vision-cta em { color: var(--blood); }
    `}</style>
  );
}

Object.assign(window, { VisionPage });
