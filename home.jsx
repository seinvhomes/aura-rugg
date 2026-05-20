/* global React */
/* eslint-disable no-undef */

function HomePage() {
  const { setRoute } = window.useRoute();
  const Reveal = window.Reveal;

  return (
    <div className="home-root">
      {/* ───────────── HERO ───────────── */}
      <section className="hero" data-screen-label="01 Home — Hero">
        <div className="hero-image">
          <image-slot id="home-hero" placeholder="Hero rug — installed in a room" shape="rect" fit="cover" style={{ width: "100%", height: "100%" }}></image-slot>
        </div>
        <div className="hero-tint" />

        <div className="hero-meta-tl">
          <span className="eyebrow" style={{ color: "rgba(244,239,230,0.7)" }}><span className="num">AURA</span>est. MMXXIV · Brooklyn</span>
        </div>
        <div className="hero-meta-tr">
          <span className="eyebrow" style={{ color: "rgba(244,239,230,0.7)" }}>Edition № 06<span style={{ marginLeft: 14, color: "var(--gold)" }}>● now tufting</span></span>
        </div>

        <div className="hero-copy">
          <p className="hero-kicker serif-italic">A rug, hand-tufted &mdash;</p>
          <h1 className="display italic-accent hero-title text-ombre">
            <em>Fine art</em><br/>
            for the <em>floor.</em>
          </h1>
          <p className="hero-sub">
            Custom rugs, designed by hand on tracing paper and tufted to order in New&nbsp;Zealand wool. Numbered, signed, made for a specific room.
          </p>
          <div className="hero-actions">
            <button className="btn btn--gold" onClick={() => setRoute("gallery")}>
              Explore the Collection
              <HomeArrow />
            </button>
            <button className="btn btn--ghost" onClick={() => setRoute("contact")} style={{ color: "var(--cream)", borderColor: "var(--cream)" }}>
              Commission a rug
              <HomeArrow />
            </button>
            <a href="#" className="btn" style={{ background: "var(--cream)", color: "var(--ink)" }}>
              <HomeTikTokGlyph />
              Watch on TikTok
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          <span className="hero-scroll-line" />
          <span>Scroll · how a rug is made</span>
        </div>
      </section>

      {/* ───────────── MARQUEE ───────────── */}
      <div className="marquee" style={{ background: "var(--stone-bg)", color: "var(--cream)", padding: "26px 0", borderBlock: "1px solid var(--rule-on-dark)" }}>
        <div className="marquee-track">
          {Array(2).fill(0).map((_, k) => (
            <React.Fragment key={k}>
              <span className="marquee-item">Hand-<em>tufted</em></span>
              <span className="marquee-dot" />
              <span className="marquee-item">Made to <em>order</em></span>
              <span className="marquee-dot" />
              <span className="marquee-item">NZ <em>wool</em></span>
              <span className="marquee-dot" />
              <span className="marquee-item">Numbered <em>&amp;</em> signed</span>
              <span className="marquee-dot" />
              <span className="marquee-item">10–14 <em>weeks</em></span>
              <span className="marquee-dot" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ───────────── STATEMENT ───────────── */}
      <section className="section wrap statement" data-screen-label="01 Home — Statement">
        <Reveal className="statement-grid">
          <div className="statement-left">
            <div className="eyebrow"><span className="num">02</span>The Studio</div>
          </div>
          <div className="statement-mid">
            <p className="display italic-accent h-display-md" style={{ fontWeight: 700 }}>
              Aura is a small <em>rug studio</em> in Brooklyn. We make rugs the way other studios make <em>paintings</em> &mdash; one at a time, by hand, for a specific room and a specific <em>life.</em>
            </p>
          </div>
          <div className="statement-right">
            <p className="body-lg" style={{ color: "var(--ink-soft)" }}>
              No inventory, no warehouse. Every rug begins as a sketch and ends in your home, tufted in New Zealand wool over ten to fourteen weeks. Founded by painter Nehemiah <em>"Nemo"</em> Davis in 2024.
            </p>
            <a className="ulink" onClick={() => setRoute("about")} href="#about" style={{ display: "inline-block", marginTop: 18 }}>
              Inside the studio
            </a>
          </div>
        </Reveal>
      </section>

      {/* ───────────── FEATURED RUGS ───────────── */}
      <section className="section featured" data-screen-label="01 Home — Featured">
        <div className="wrap featured-head">
          <Reveal>
            <div className="eyebrow"><span className="num">03</span>From the Collection</div>
            <h2 className="display italic-accent h-display-lg" style={{ marginTop: 16 }}>
              Selected <em>rugs,</em> shipping this season.
            </h2>
          </Reveal>
          <Reveal delay={120} className="featured-head-right">
            <p className="serif-italic" style={{ fontSize: 19, color: "var(--ink-soft)", maxWidth: 360 }}>
              Four recent pieces from the editions and bespoke programs. Each linked through to the full piece.
            </p>
            <button className="btn btn--ghost btn--sm" onClick={() => setRoute("gallery")} style={{ marginTop: 16 }}>
              All rugs
              <HomeArrow />
            </button>
          </Reveal>
        </div>

        <div className="wrap featured-grid">
          <FeaturedCard slot="feat-1" tag="EDITION № 01" title="Sunday Floor" year="5 × 8 ft · 2026" big />
          <FeaturedCard slot="feat-2" tag="BESPOKE"      title="Williams Residence" year="8 × 11 ft · 2026" />
          <FeaturedCard slot="feat-3" tag="EDITION № 03" title="Grandmother (Round)" year="ø 6 ft · 2025" />
          <FeaturedCard slot="feat-4" tag="EDITION № 04" title="Hymn Runner" year="2.5 × 9 ft · 2025" wide />
        </div>
      </section>

      {/* ───────────── PILLARS ───────────── */}
      <section className="section pillars on-dark" data-screen-label="01 Home — Three hands">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow" style={{ color: "var(--gold)" }}><span className="num" style={{ color: "var(--gold)" }}>04</span>How It's Made</div>
            <h2 className="display italic-accent h-display-lg" style={{ marginTop: 16, maxWidth: 1000 }}>
              Three hands. <em>One rug.</em>
            </h2>
          </Reveal>
          <Reveal stagger className="pillar-grid">
            <PillarCard num="i"   title="Designed by hand"  body="Every Aura begins as a tracing-paper sketch — colors mixed in gouache, sized to a real room, refined over weeks." />
            <PillarCard num="ii"  title="Tufted by hand"    body="Built on a frame in Brooklyn, one row at a time. 80 to 120 hours of tufting per rug. New Zealand wool throughout." />
            <PillarCard num="iii" title="Finished by hand"  body="Washed, sheared for depth and shadow, bound, and signed by Nemo. Delivered white-glove anywhere in the contiguous US." />
          </Reveal>
        </div>
      </section>

      {/* ───────────── PROCESS PREVIEW ───────────── */}
      <section className="section wrap" data-screen-label="01 Home — Process preview">
        <div className="process-preview">
          <div className="process-preview-text">
            <Reveal>
              <div className="eyebrow"><span className="num">05</span>Inside the studio</div>
              <h2 className="display italic-accent h-display-lg" style={{ marginTop: 16 }}>
                Six steps. Ten to fourteen <em>weeks.</em>
              </h2>
              <p className="body-lg" style={{ color: "var(--ink-soft)", marginTop: 24, maxWidth: 480 }}>
                A rug begins on tracing paper and ends on your floor. In between: a site visit, six hundred wool colours, a tufting frame, hours of slow attention, and a final wash.
              </p>
              <button className="btn" onClick={() => setRoute("process")} style={{ marginTop: 28 }}>
                See how a rug is made
                <HomeArrow />
              </button>
            </Reveal>
          </div>
          <Reveal className="process-preview-images">
            <div className="pp-img pp-img--tall">
              <image-slot id="home-pp-1" placeholder="On the tufting frame" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            </div>
            <div className="pp-img pp-img--short">
              <image-slot id="home-pp-2" placeholder="Yarn cones" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            </div>
            <div className="pp-img pp-img--square">
              <image-slot id="home-pp-3" placeholder="Tracing paper" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── INSTALL TESTIMONIAL ───────────── */}
      <section className="install-band on-dark">
        <div className="wrap install-band-grid">
          <Reveal>
            <p className="serif-italic" style={{ color: "var(--gold)", fontSize: 22 }}>— A client, after install</p>
            <p className="display italic-accent" style={{ fontSize: "clamp(32px, 4.4vw, 64px)", lineHeight: 1.1, fontWeight: 700, color: "var(--cream)", marginTop: 18, maxWidth: 1100 }}>
              “It's the only thing in the room that I keep looking at. It feels like a <em>painting,</em> but one I'm allowed to <em>stand on.</em>”
            </p>
          </Reveal>
          <Reveal delay={140} className="install-band-attr">
            <div>
              <strong style={{ display: "block", fontFamily: "var(--display)", fontSize: 15 }}>Sarah W. &amp; Jordan W.</strong>
              <span style={{ color: "rgba(244,239,230,0.6)", fontSize: 13 }}>Aura № 02 · Cathedral · 8 × 11 ft</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── PRESS ROW ───────────── */}
      <section className="press-row">
        <div className="wrap press-row-inner">
          <span className="serif-italic" style={{ color: "var(--ink-soft)", fontSize: 18 }}>As seen in</span>
          <div className="press-logos">
            <span>DWELL</span>
            <span>NOWNESS</span>
            <span>NYT &nbsp;T MAG</span>
            <span>ARCHITECTURAL&nbsp;DIGEST</span>
            <span>HYPEBEAST</span>
            <span>SOMA</span>
          </div>
        </div>
      </section>

      <HomeStyles />
    </div>
  );
}

// ── Cards / glyphs ──────────────────────────────────────────────────

function FeaturedCard({ slot, tag, title, year, big, wide }) {
  return (
    <article className={"feat-card " + (big ? "feat-card--big " : "") + (wide ? "feat-card--wide " : "")}>
      <div className="feat-card-frame">
        <image-slot id={slot} placeholder={title} shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
        <div className="feat-card-overlay">
          <span className="chip" style={{ background: "rgba(244,239,230,0.92)", borderColor: "transparent", color: "var(--ink)" }}>{tag}</span>
        </div>
      </div>
      <div className="feat-card-foot">
        <span className="feat-card-title">{title}</span>
        <span className="feat-card-year">{year}</span>
      </div>
    </article>
  );
}

function PillarCard({ num, title, body }) {
  return (
    <div className="pillar">
      <span className="pillar-num serif-italic">{num}.</span>
      <h3 className="display h-display-sm" style={{ marginTop: 14, fontWeight: 700, letterSpacing: "-0.02em" }}>{title}</h3>
      <p className="body-lg" style={{ color: "rgba(244,239,230,0.7)", marginTop: 12 }}>{body}</p>
    </div>
  );
}

function HomeArrow() {
  return (
    <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7" /><path d="M9 7h8v8" />
    </svg>
  );
}

function HomeTikTokGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.78 20.1a6.34 6.34 0 0 0 10.86-4.43V9.86a8.16 8.16 0 0 0 4.77 1.52V8a4.85 4.85 0 0 1-1.82-1.31z" />
    </svg>
  );
}

// ── styles ──────────────────────────────────────────────────────────
function HomeStyles() {
  return (
    <style>{`
      .home-root { padding-top: 0; }

      /* HERO */
      .hero {
        position: relative;
        height: 100vh; min-height: 720px; max-height: 1080px;
        color: var(--cream);
        overflow: hidden;
      }
      .hero-image { position: absolute; inset: 0; }
      .hero-image image-slot { --slot-bg: #1a2a22; }
      .hero-image image-slot::part(frame) {
        background:
          radial-gradient(120% 80% at 30% 30%, #2A2725 0%, #0A0908 70%),
          #0A0908;
      }
      .hero-tint {
        position: absolute; inset: 0;
        background:
          linear-gradient(180deg, rgba(10,9,8,0.45) 0%, rgba(10,9,8,0.15) 35%, rgba(10,9,8,0.30) 65%, rgba(10,9,8,0.88) 100%),
          radial-gradient(70% 60% at 92% 6%, rgba(157,134,199,0.42) 0%, transparent 55%),
          radial-gradient(60% 50% at 10% 100%, rgba(157,134,199,0.18) 0%, transparent 55%);
        pointer-events: none;
      }
      .hero-meta-tl, .hero-meta-tr {
        position: absolute; top: 96px;
        z-index: 2;
      }
      .hero-meta-tl { left: var(--gutter); }
      .hero-meta-tr { right: var(--gutter); }
      .hero-meta-tl .num { color: var(--gold); letter-spacing: 0.16em; font-weight: 800; }
      @media (max-width: 700px) { .hero-meta-tr { display: none; } }

      .hero-copy {
        position: absolute;
        left: var(--gutter); right: var(--gutter);
        bottom: 100px;
        z-index: 2;
        max-width: var(--max-w);
        margin: 0 auto;
      }
      .hero-kicker {
        font-size: clamp(18px, 1.8vw, 26px);
        color: var(--gold);
        margin: 0 0 18px;
      }
      .hero-title {
        font-size: clamp(56px, 11vw, 168px);
        line-height: 0.92;
        margin: 0 0 24px;
        max-width: 1100px;
      }
      .hero-title em { color: var(--gold); }
      .hero-sub {
        font-family: var(--serif);
        font-style: italic;
        font-size: clamp(18px, 1.8vw, 26px);
        color: rgba(244,239,230,0.85);
        margin: 0 0 32px;
        max-width: 640px;
        line-height: 1.4;
      }
      .hero-actions {
        display: flex; flex-wrap: wrap; gap: 12px;
      }
      .hero-scroll {
        position: absolute;
        bottom: 36px;
        left: var(--gutter);
        display: flex; align-items: center; gap: 14px;
        font-family: var(--display);
        font-size: 11px; font-weight: 600;
        letter-spacing: 0.16em; text-transform: uppercase;
        color: rgba(244,239,230,0.7);
        z-index: 2;
      }
      .hero-scroll-line {
        display: inline-block;
        width: 40px; height: 1px;
        background: var(--gold);
        position: relative; overflow: hidden;
      }
      .hero-scroll-line::after {
        content: ""; position: absolute; inset: 0;
        background: var(--cream);
        animation: scrollLine 2.4s var(--ease) infinite;
      }
      @keyframes scrollLine {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      @media (max-width: 700px) {
        .hero { min-height: 640px; }
        .hero-copy { bottom: 80px; }
        .hero-actions .btn { padding: 12px 18px; font-size: 11px; }
      }

      /* STATEMENT */
      .statement-grid {
        display: grid;
        grid-template-columns: 80px 1fr 320px;
        gap: 48px;
        align-items: start;
      }
      .statement-mid { grid-column: 2; }
      .statement-right { grid-column: 3; }
      @media (max-width: 900px) {
        .statement-grid { grid-template-columns: 1fr; gap: 24px; }
      }

      /* FEATURED */
      .featured-head {
        display: flex; justify-content: space-between;
        align-items: flex-end; gap: 40px;
        margin-bottom: 56px;
        flex-wrap: wrap;
      }
      .featured-head-right { text-align: right; }
      @media (max-width: 700px) { .featured-head-right { text-align: left; } }

      .featured-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 24px;
      }
      .feat-card { grid-column: span 2; display: flex; flex-direction: column; gap: 14px; }
      .feat-card--big { grid-column: span 4; grid-row: span 2; }
      .feat-card--wide { grid-column: span 4; }
      @media (max-width: 900px) {
        .featured-grid { grid-template-columns: repeat(2, 1fr); }
        .feat-card, .feat-card--big, .feat-card--wide { grid-column: span 2; grid-row: auto; }
      }

      .feat-card-frame {
        position: relative;
        aspect-ratio: 4/5;
        overflow: hidden;
        background: var(--cream-warm);
      }
      .feat-card--big .feat-card-frame { aspect-ratio: 4/4.6; }
      .feat-card--wide .feat-card-frame { aspect-ratio: 8/5; }
      .feat-card-frame image-slot { position: absolute; inset: 0; }
      .feat-card-overlay {
        position: absolute; top: 16px; left: 16px;
        opacity: 0;
        transform: translateY(-6px);
        transition: opacity .4s var(--ease), transform .4s var(--ease);
      }
      .feat-card-frame:hover .feat-card-overlay,
      .feat-card-frame:focus-within .feat-card-overlay { opacity: 1; transform: none; }
      .feat-card-frame::after {
        content: "";
        position: absolute; inset: 0;
        background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.18) 100%);
        opacity: 0; transition: opacity .4s var(--ease);
        pointer-events: none;
      }
      .feat-card-frame:hover::after { opacity: 1; }
      .feat-card-frame image-slot { transition: transform 1.6s var(--ease); }
      .feat-card-frame:hover image-slot { transform: scale(1.04); }

      .feat-card-foot {
        display: flex; justify-content: space-between;
        font-family: var(--display);
        gap: 16px;
      }
      .feat-card-title {
        font-style: italic; font-family: var(--serif); font-weight: 400;
        font-size: 22px;
      }
      .feat-card-year { font-size: 12px; letter-spacing: 0.08em; color: var(--ink-soft); padding-top: 6px; white-space: nowrap; }

      /* PILLARS */
      .pillars {
        background:
          radial-gradient(60% 50% at 0% 0%, rgba(157,134,199,0.16) 0%, transparent 55%),
          var(--stone-bg);
        color: var(--cream);
      }
      .pillar-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
        margin-top: 64px;
      }
      .pillar {
        padding: 32px 0 0;
        border-top: 1px solid var(--rule-on-dark);
      }
      .pillar-num {
        font-size: 56px;
        color: var(--gold);
        line-height: 1;
      }
      @media (max-width: 800px) {
        .pillar-grid { grid-template-columns: 1fr; gap: 24px; }
      }

      /* PROCESS PREVIEW */
      .process-preview {
        display: grid;
        grid-template-columns: 0.9fr 1.1fr;
        gap: 64px;
        align-items: center;
      }
      .process-preview-images {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        grid-template-rows: 220px 220px;
        gap: 16px;
      }
      .pp-img { background: var(--cream-warm); overflow: hidden; }
      .pp-img--tall  { grid-row: span 2; }
      @media (max-width: 900px) {
        .process-preview { grid-template-columns: 1fr; gap: 32px; }
        .process-preview-images { grid-template-rows: 180px 180px; }
      }

      /* INSTALL TESTIMONIAL */
      .install-band { background: var(--ink); color: var(--cream); padding: clamp(80px, 9vw, 140px) 0; }
      .install-band-grid {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 48px;
        align-items: end;
      }
      .install-band-attr {
        display: flex; align-items: end;
        padding-bottom: 8px;
      }
      @media (max-width: 800px) { .install-band-grid { grid-template-columns: 1fr; } }

      /* PRESS */
      .press-row {
        border-top: 1px solid var(--rule);
        border-bottom: 1px solid var(--rule);
        padding: 28px 0;
      }
      .press-row-inner {
        display: flex; align-items: center; gap: 48px;
        flex-wrap: wrap;
      }
      .press-logos {
        display: flex; gap: 48px; flex-wrap: wrap;
        font-family: var(--display);
        font-weight: 700;
        font-size: 18px;
        letter-spacing: 0.12em;
        color: var(--ink-soft);
      }
      .press-logos span { transition: color .25s; cursor: default; }
      .press-logos span:hover { color: var(--ink); }
    `}</style>
  );
}

Object.assign(window, { HomePage });
