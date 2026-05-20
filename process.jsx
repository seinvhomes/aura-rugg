/* global React */
/* eslint-disable no-undef */

const PROCESS_STEPS = [
  { n: "01", title: "Sketch",      body: "Every Aura begins on tracing paper, in pencil and gouache. Colors are mixed by hand; the size is sketched against a real floor plan. Most sketches never become rugs — the ones that do, do so quietly." },
  { n: "02", title: "Consult",     body: "For bespoke pieces we visit the room, photograph the light at three times of day, and measure twice. For editions we work from a single representative installation." },
  { n: "03", title: "Color",       body: "From a library of six hundred New Zealand wool colors, we choose between eight and twenty. A 4 × 4 inch sample tuft is produced and shipped to the client for sign-off." },
  { n: "04", title: "Frame",       body: "The full-size sketch is transferred to a primary tufting cloth, stretched across the frame, and trued to the floor of the room it will live in. The frame becomes the rug's first home." },
  { n: "05", title: "Tuft",        body: "Eighty to one hundred and twenty hours on the frame. Wool is fed by hand through a tufting tool, row by row, one color at a time. The rug is built from the back forward." },
  { n: "06", title: "Finish",      body: "The piece is washed, dried slowly, sheared for depth and shadow, secondary-backed, bound, and signed. White-glove delivered and rolled out in the room it was made for." },
];

const FEED = [
  { id: 1, h: 580, type: "video", cap: "Aura № 02 — starting the cathedral window section, in late green.",    time: "2d", k: "tufting" },
  { id: 2, h: 480, type: "photo", cap: "Yarn cones for a commission, sorted by warmth.",                       time: "3d", k: "yarn"    },
  { id: 3, h: 520, type: "video", cap: "Wash day. Six rugs, one bath, four hours under the shower.",            time: "5d", k: "finish"  },
  { id: 4, h: 400, type: "photo", cap: "Studio playlist for tufting. Mostly slow gospel.",                      time: "1w", k: "studio"  },
  { id: 5, h: 540, type: "video", cap: "Trimming the pile on Aura № 04 — first depth pass.",                  time: "1w", k: "finish"  },
  { id: 6, h: 460, type: "photo", cap: "Tracing-paper sketch for the next bespoke piece.",                      time: "2w", k: "sketch"  },
  { id: 7, h: 600, type: "video", cap: "Backing the Williams Residence rug — last step before binding.",       time: "2w", k: "finish"  },
  { id: 8, h: 420, type: "photo", cap: "Color tests for the Sanctuary collection — five greens, two stay.",   time: "3w", k: "yarn"    },
  { id: 9, h: 500, type: "video", cap: "Installing Aura № 03 in a Tarrytown sun room.",                       time: "3w", k: "install" },
  { id: 10, h: 560, type: "video", cap: "Setting up the second frame. Two rugs in parallel now.",               time: "4d", k: "studio"  },
  { id: 11, h: 440, type: "photo", cap: "Back side, before binding. Most of the work is here.",                  time: "1w", k: "tufting" },
  { id: 12, h: 520, type: "video", cap: "Hand-stitched binding on Aura № 02. Twelve hours by hand.",            time: "2w", k: "finish"  },
];

function ProcessPage() {
  const Reveal = window.Reveal;
  const [filter, setFilter] = React.useState("all");

  const feed = filter === "all" ? FEED : FEED.filter((f) => f.k === filter);

  return (
    <div className="process-root">
      {/* HEADER */}
      <header className="process-header wrap" data-screen-label="06 Process — Header">
        <Reveal>
          <div className="eyebrow"><span className="num">06</span>How It's Made</div>
          <h1 className="display italic-accent h-display-xl" style={{ marginTop: 18 }}>
            One rug. <em>Ten to fourteen</em><br/>
            weeks. <em>By hand.</em>
          </h1>
        </Reveal>
        <Reveal delay={120} className="process-header-foot">
          <p className="serif-italic" style={{ fontSize: "clamp(20px, 2vw, 28px)", color: "var(--ink-soft)", maxWidth: 640 }}>
            From tracing paper to your floor in six steps. Studio clips, sketches in margin, and the long quiet hours on the tufting frame.
          </p>
        </Reveal>
      </header>

      {/* STUDIO STILLS GRID */}
      <section className="wrap process-stills">
        <Reveal stagger className="process-stills-grid">
          <div className="ps ps--a">
            <image-slot id="proc-still-1" placeholder="On the tufting frame" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            <span className="ps-tag">on the frame</span>
          </div>
          <div className="ps ps--b">
            <image-slot id="proc-still-2" placeholder="Tracing-paper sketch" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            <span className="ps-tag">studio · sketch</span>
          </div>
          <div className="ps ps--c">
            <image-slot id="proc-still-3" placeholder="Tufting timelapse" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            <span className="ps-tag"><span className="ps-rec" /> tufting film · 12:08</span>
          </div>
          <div className="ps ps--d">
            <image-slot id="proc-still-4" placeholder="Wash day" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            <span className="ps-tag">wash day</span>
          </div>
          <div className="ps ps--e">
            <image-slot id="proc-still-5" placeholder="Yarn library" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            <span className="ps-tag">600+ NZ wool</span>
          </div>
        </Reveal>
      </section>

      {/* SIX STEPS */}
      <section className="section process-steps">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow"><span className="num">02</span>The Process</div>
            <h2 className="display italic-accent h-display-lg" style={{ marginTop: 16 }}>
              Six steps. The same six, <em>every rug.</em>
            </h2>
          </Reveal>

          <ol className="steps-list">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} className="step-item" delay={i * 50}>
                <span className="step-num">{s.n}</span>
                <div className="step-body">
                  <h3 className="display step-title">{s.title}</h3>
                  <p className="step-text">{s.body}</p>
                </div>
                <span className="step-rule" />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* TIKTOK EMBED ROW (dark) */}
      <section className="section on-dark process-tiktok" data-screen-label="06 Process — TikTok">
        <div className="wrap">
          <Reveal className="pt-head">
            <div>
              <div className="eyebrow" style={{ color: "var(--gold)" }}><span className="num" style={{ color: "var(--gold)" }}>03</span>From the feed</div>
              <h2 className="display italic-accent h-display-lg" style={{ marginTop: 16, color: "var(--cream)" }}>
                On <em>TikTok.</em>
              </h2>
            </div>
            <a href="#" className="btn btn--gold">
              <ProcessTikTokGlyph />
              @aurarugs
            </a>
          </Reveal>

          <div className="tt-grid">
            <TikTokFrame slot="tt-1" cap="Tufting Aura № 02 — the cathedral window section"     plays="284K" likes="22.4K" />
            <TikTokFrame slot="tt-2" cap="Wash day. Six rugs, one bath, four hours."            plays="198K" likes="14.1K" />
            <TikTokFrame slot="tt-3" cap="How a tracing-paper sketch becomes a rug"             plays="412K" likes="31.8K" />
            <TikTokFrame slot="tt-4" cap="Installing Aura № 03 in a Tarrytown sun room"          plays="176K" likes="11.2K" />
          </div>
        </div>
      </section>

      {/* INSTAGRAM-style FEED */}
      <section className="section process-feed">
        <div className="wrap">
          <Reveal className="pf-head">
            <div>
              <div className="eyebrow"><span className="num">04</span>From Instagram</div>
              <h2 className="display italic-accent h-display-lg" style={{ marginTop: 16 }}>
                Studio <em>journal.</em>
              </h2>
            </div>
            <div className="pf-filters">
              {[
                { id: "all",     label: "All"      },
                { id: "tufting", label: "Tufting"  },
                { id: "yarn",    label: "Yarn"     },
                { id: "finish",  label: "Finishing"},
                { id: "install", label: "Install"  },
                { id: "sketch",  label: "Sketch"   },
                { id: "studio",  label: "Studio"   },
              ].map((c) => (
                <button key={c.id} className={"chip " + (filter === c.id ? "is-active" : "")} onClick={() => setFilter(c.id)}>
                  {c.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="pf-grid">
            {feed.map((p, i) => (
              <Reveal key={p.id} className="pf-card" delay={(i % 4) * 50} style={{ "--h": p.h + "px" }}>
                <div className="pf-card-frame">
                  <image-slot id={"feed-" + p.id} placeholder={p.cap} shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
                  {p.type === "video" && (
                    <span className="pf-play">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  )}
                </div>
                <div className="pf-card-meta">
                  <span className="pf-card-cap">{p.cap}</span>
                  <span className="pf-card-time">{p.time}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOLLOW STRIP */}
      <section className="follow-strip on-dark">
        <div className="wrap follow-strip-inner">
          <Reveal>
            <p className="serif-italic" style={{ color: "var(--gold)", fontSize: 24 }}>— Follow the journey</p>
            <h2 className="display italic-accent" style={{ fontSize: "clamp(40px, 6vw, 84px)", lineHeight: 1.05, fontWeight: 700, color: "var(--cream)", marginTop: 12, maxWidth: 1100 }}>
              The door is <em>always open</em> on the feed.
            </h2>
          </Reveal>
          <Reveal delay={140} className="follow-grid">
            <FollowCard platform="TikTok"    handle="@aurarugs"   followers="86.4K" />
            <FollowCard platform="Instagram" handle="@aura.rugs"  followers="54.1K" />
            <FollowCard platform="Pinterest" handle="/aurarugs"   followers="32.0K" />
            <FollowCard platform="Are.na"    handle="/aura"        followers="4.2K" />
          </Reveal>
        </div>
      </section>

      <ProcessStyles />
    </div>
  );
}

function TikTokFrame({ slot, cap, plays, likes }) {
  return (
    <article className="tt">
      <div className="tt-screen">
        <image-slot id={slot} placeholder="" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
        <span className="tt-bezel" />
        <span className="tt-play">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </span>
        <span className="tt-handle">@aurarugs</span>
        <div className="tt-side">
          <span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/></svg>{likes}</span>
          <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 12c0 4.4-4 8-9 8-1.5 0-2.9-.3-4.1-.9L3 21l1.3-4.4C3.5 15.3 3 13.7 3 12 3 7.6 7 4 12 4s9 3.6 9 8z" /></svg>312</span>
        </div>
      </div>
      <div className="tt-cap">
        <p>{cap}</p>
        <span className="tt-plays">{plays} plays</span>
      </div>
    </article>
  );
}

function FollowCard({ platform, handle, followers }) {
  return (
    <a href="#" className="follow-card">
      <div className="follow-card-top">
        <span className="follow-card-plat">{platform}</span>
        <span className="follow-card-arrow">→</span>
      </div>
      <div className="follow-card-bottom">
        <span className="follow-card-handle">{handle}</span>
        <span className="follow-card-followers">{followers}</span>
      </div>
    </a>
  );
}

function ProcessTikTokGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.78 20.1a6.34 6.34 0 0 0 10.86-4.43V9.86a8.16 8.16 0 0 0 4.77 1.52V8a4.85 4.85 0 0 1-1.82-1.31z" />
    </svg>
  );
}

function ProcessStyles() {
  return (
    <style>{`
      .process-root { padding-top: 120px; }
      .process-header { padding-bottom: 48px; }
      .process-header-foot { margin-top: 36px; max-width: 720px; }

      .process-stills { padding-block: 32px 80px; }
      .process-stills-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: 260px 200px;
        gap: 16px;
      }
      .ps {
        position: relative;
        overflow: hidden;
        background: var(--cream-warm);
      }
      .ps image-slot { position: absolute; inset: 0; }
      .ps--a { grid-column: span 3; grid-row: span 2; }
      .ps--b { grid-column: span 3; }
      .ps--c { grid-column: span 2; }
      .ps--d { grid-column: span 2; }
      .ps--e { grid-column: span 2; }
      .ps-tag {
        position: absolute; bottom: 12px; left: 12px;
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--cream);
        background: rgba(20,34,25,0.7);
        backdrop-filter: blur(8px);
        padding: 6px 12px;
        border-radius: 999px;
        display: inline-flex; align-items: center; gap: 8px;
      }
      .ps-rec {
        width: 7px; height: 7px;
        background: var(--gold);
        border-radius: 50%;
        animation: blink 1.6s ease-in-out infinite;
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }
      @media (max-width: 900px) {
        .process-stills-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 180px; }
        .ps--a, .ps--b, .ps--c, .ps--d, .ps--e { grid-column: span 1; grid-row: auto; }
        .ps--a { grid-column: span 2; }
      }

      /* STEPS */
      .process-steps { background: var(--cream-warm); border-block: 1px solid var(--rule); }
      .steps-list { list-style: none; padding: 0; margin: 64px 0 0; }
      .step-item {
        display: grid;
        grid-template-columns: 80px 1fr;
        gap: 32px;
        padding: 36px 0;
        position: relative;
        border-top: 1px solid var(--rule);
        align-items: start;
      }
      .step-item:last-child { border-bottom: 1px solid var(--rule); }
      .step-num {
        font-family: var(--display);
        font-weight: 800;
        font-size: 48px;
        color: var(--gold-deep);
        letter-spacing: -0.02em;
        line-height: 1;
      }
      .step-title {
        font-weight: 700;
        font-size: clamp(28px, 3vw, 44px);
        letter-spacing: -0.02em;
        margin: 0;
      }
      .step-text {
        margin: 14px 0 0;
        color: var(--ink-soft);
        font-size: clamp(16px, 1.3vw, 18px);
        max-width: 720px;
        line-height: 1.55;
      }
      @media (max-width: 700px) {
        .step-item { grid-template-columns: 1fr; gap: 8px; }
        .step-num { font-size: 36px; }
      }

      /* TIKTOK GRID */
      .process-tiktok { background: var(--stone-bg); }
      .pt-head {
        display: flex; justify-content: space-between;
        align-items: end; gap: 24px;
        margin-bottom: 48px;
        flex-wrap: wrap;
      }
      .tt-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
      }
      .tt { display: flex; flex-direction: column; gap: 14px; cursor: pointer; }
      .tt-screen {
        position: relative;
        aspect-ratio: 9/16;
        border-radius: 16px;
        overflow: hidden;
        background: #1a1a1a;
        transition: transform .5s var(--ease);
      }
      .tt-screen image-slot { position: absolute; inset: 0; --slot-bg: #1a1a1a; }
      .tt:hover .tt-screen { transform: translateY(-4px); }
      .tt-bezel {
        position: absolute; inset: 0;
        border-radius: 16px;
        background: linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.7) 100%);
        pointer-events: none;
      }
      .tt-play {
        position: absolute; top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        width: 52px; height: 52px;
        border-radius: 50%;
        background: rgba(255,255,255,0.18);
        backdrop-filter: blur(8px);
        display: flex; align-items: center; justify-content: center;
        color: var(--cream);
        transition: transform .35s var(--ease), background .25s;
      }
      .tt:hover .tt-play { transform: translate(-50%, -50%) scale(1.1); background: rgba(157,134,199,0.5); }
      .tt-handle {
        position: absolute; bottom: 14px; left: 14px;
        font-family: var(--display);
        font-size: 12px;
        font-weight: 600;
        color: var(--cream);
        z-index: 2;
      }
      .tt-side {
        position: absolute; right: 12px; bottom: 14px;
        display: flex; flex-direction: column; gap: 14px;
        color: var(--cream);
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
      }
      .tt-side span {
        display: flex; flex-direction: column; align-items: center; gap: 4px;
        text-align: center;
      }
      .tt-cap p {
        margin: 0;
        font-family: var(--serif);
        font-style: italic;
        font-size: 17px;
        line-height: 1.3;
        color: var(--cream);
      }
      .tt-plays {
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.14em;
        color: rgba(244,239,230,0.55);
        text-transform: uppercase;
        display: block;
        margin-top: 6px;
      }
      @media (max-width: 1000px) { .tt-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 500px) { .tt-grid { grid-template-columns: 1fr 1fr; gap: 16px; } }

      /* INSTAGRAM-LIKE GRID */
      .pf-head {
        display: flex; justify-content: space-between;
        align-items: end; gap: 24px;
        margin-bottom: 48px;
        flex-wrap: wrap;
      }
      .pf-filters { display: flex; gap: 6px; flex-wrap: wrap; }

      .pf-grid {
        column-count: 4;
        column-gap: 20px;
      }
      @media (max-width: 1100px) { .pf-grid { column-count: 3; } }
      @media (max-width: 800px)  { .pf-grid { column-count: 2; } }
      @media (max-width: 500px)  { .pf-grid { column-count: 1; } }

      .pf-card {
        display: block;
        break-inside: avoid;
        margin-bottom: 28px;
        cursor: pointer;
      }
      .pf-card-frame {
        position: relative;
        height: var(--h, 480px);
        background: var(--cream-warm);
        overflow: hidden;
        border-radius: 8px;
      }
      .pf-card-frame image-slot { position: absolute; inset: 0; }
      .pf-play {
        position: absolute; top: 12px; right: 12px;
        width: 28px; height: 28px;
        border-radius: 50%;
        background: rgba(0,0,0,0.6);
        backdrop-filter: blur(4px);
        color: var(--cream);
        display: flex; align-items: center; justify-content: center;
      }
      .pf-card-meta {
        margin-top: 12px;
        display: flex; justify-content: space-between;
        gap: 16px; align-items: baseline;
      }
      .pf-card-cap {
        font-family: var(--serif);
        font-style: italic;
        font-size: 16px;
        color: var(--ink);
        line-height: 1.4;
      }
      .pf-card-time {
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.1em;
        color: var(--ink-soft);
        text-transform: uppercase;
        white-space: nowrap;
      }

      /* FOLLOW STRIP */
      .follow-strip { background: var(--ink); color: var(--cream); padding-block: clamp(80px, 10vw, 140px); }
      .follow-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 18px;
        margin-top: 56px;
      }
      .follow-card {
        display: flex; flex-direction: column;
        justify-content: space-between;
        padding: 24px;
        height: 220px;
        background: rgba(244,239,230,0.05);
        border: 1px solid rgba(244,239,230,0.15);
        border-radius: 12px;
        color: var(--cream);
        transition: background .25s, transform .35s var(--ease);
      }
      .follow-card:hover { background: rgba(157,134,199,0.12); transform: translateY(-3px); border-color: var(--gold); }
      .follow-card-top { display: flex; justify-content: space-between; align-items: start; }
      .follow-card-plat {
        font-family: var(--display);
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--gold);
      }
      .follow-card-arrow {
        font-size: 22px;
        color: rgba(244,239,230,0.5);
        transition: transform .3s var(--ease), color .25s;
      }
      .follow-card:hover .follow-card-arrow { color: var(--gold); transform: translateX(6px) translateY(-2px); }
      .follow-card-handle {
        display: block;
        font-family: var(--serif);
        font-style: italic;
        font-size: 26px;
        color: var(--cream);
      }
      .follow-card-followers {
        display: block;
        font-family: var(--display);
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.14em;
        color: rgba(244,239,230,0.6);
        text-transform: uppercase;
        margin-top: 4px;
      }
      @media (max-width: 800px) { .follow-grid { grid-template-columns: repeat(2, 1fr); } }
    `}</style>
  );
}

Object.assign(window, { ProcessPage });
