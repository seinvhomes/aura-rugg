/* global React */
/* eslint-disable no-undef */

const TIMELINE = [
  { year: "2014", title: "Pratt Institute",            body: "Founder Nehemiah \"Nemo\" Davis studies painting and textile design. First experiments with hand-tufted wool in a sophomore studio." },
  { year: "2018", title: "First solo painting show",    body: "“Quiet Houses” opens at a small Tribeca gallery — twelve oils, sold out on the second day." },
  { year: "2020", title: "Brooklyn studio opens",       body: "A small Bergen Street loft. Painting practice expands to include textile and dye work." },
  { year: "2022", title: "First tufting frame",         body: "The studio's first hand-tufting frame is built. Six experimental rugs follow over the next eighteen months." },
  { year: "2024", title: "Aura Rugs launches",          body: "Aura № 01 — Sunday Floor ships to its first home. The studio commits to rugs as its primary practice." },
  { year: "2025", title: "Bespoke program opens",       body: "First commissioned residential rugs. Sister studio in Lagos joins on yarn sourcing." },
  { year: "2026", title: "Today",                       body: "Two frames running. Twelve rugs in the editions catalog, ten bespoke commissions completed, six in progress." },
];

const PRESS_MENTIONS = [
  { pub: "Dwell",                title: "“The Brooklyn rug atelier reframing soft craft.”",                date: "APR 2026" },
  { pub: "NY Times T Mag",       title: "“Rugs as paintings you live with.”",                             date: "MAR 2026" },
  { pub: "Architectural Digest", title: "“Six rug studios to know.”",                                       date: "FEB 2026" },
  { pub: "Nowness",              title: "“Aura Rugs and the slow gesture.”",                                date: "NOV 2025" },
  { pub: "Hypebeast",            title: "“Inside a Brooklyn rug studio with Nemo Davis.”",                  date: "SEP 2025" },
];

function AboutPage() {
  const Reveal = window.Reveal;

  return (
    <div className="about-root">
      {/* HEADER */}
      <header className="about-header wrap" data-screen-label="04 Studio — Header">
        <Reveal className="about-header-grid">
          <div>
            <div className="eyebrow"><span className="num">04</span>The Studio</div>
            <h1 className="display italic-accent h-display-xl" style={{ marginTop: 18 }}>
              A small <em>rug studio,</em><br/>
              one room at a time.
            </h1>
          </div>
          <p className="serif-italic about-header-copy">
            Aura Rugs is a Brooklyn rug atelier founded in 2024 by painter Nehemiah "Nemo" Davis. Two tufting frames. New Zealand wool. No inventory.
          </p>
        </Reveal>
      </header>

      {/* STUDIO PHOTO + LEAD */}
      <section className="section wrap about-portrait" data-screen-label="04 Studio — Photograph">
        <div className="about-portrait-grid">
          <Reveal className="about-portrait-img">
            <image-slot id="about-portrait" placeholder="The studio · Bergen Street" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            <span className="about-portrait-tag serif-italic">the studio · Brooklyn · 2026</span>
          </Reveal>
          <Reveal className="about-portrait-text" delay={140}>
            <p className="kicker">A note from the studio &mdash;</p>
            <div className="about-lead">
              <p>
                Aura began as a painter's question: <span className="serif-italic" style={{ color: "var(--gold-deep)" }}>what does it look like when a painting is large enough to stand on?</span> We don't think of rugs as floor coverings. We think of them as art objects that happen to live underfoot.
              </p>
              <p>
                Each Aura is hand-tufted on a frame in our Brooklyn studio, from a sketch on tracing paper, in New Zealand wool. We don't carry inventory. Every rug is made for a specific room, a specific light, a specific life.
              </p>
              <p>
                The studio is small and intentionally so. Two frames, two pairs of hands, ten to fourteen weeks per piece. We don't try to scale. We try to build rugs that outlast their decade.
              </p>
            </div>
            <p className="serif-italic about-sign">— Nemo, founder &amp; designer</p>
          </Reveal>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="about-quote">
        <div className="wrap">
          <Reveal>
            <p className="display italic-accent" style={{ fontSize: "clamp(36px, 5vw, 76px)", lineHeight: 1.05, fontWeight: 700, textAlign: "center", maxWidth: 1100, margin: "0 auto" }}>
              “A rug should hold up to ten years of <em>furniture</em>, ten years of <em>feet</em>, and ten years of <em>looking</em>.”
            </p>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section wrap about-timeline" data-screen-label="04 Studio — Timeline">
        <Reveal className="about-timeline-head">
          <div className="eyebrow"><span className="num">02</span>Milestones</div>
          <h2 className="display italic-accent h-display-lg" style={{ marginTop: 12 }}>
            How we got <em>here.</em>
          </h2>
        </Reveal>

        <ol className="timeline">
          {TIMELINE.map((t, i) => (
            <Reveal as="li" className="timeline-item" key={t.year} delay={i * 40}>
              <span className="timeline-year">{t.year}</span>
              <span className="timeline-dot" />
              <div className="timeline-body">
                <h3 className="display" style={{ fontWeight: 700, fontSize: 24, letterSpacing: "-0.01em" }}>{t.title}</h3>
                <p style={{ color: "var(--ink-soft)", maxWidth: 540, marginTop: 8 }}>{t.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* THE TEAM (light) */}
      <section className="section wrap about-team">
        <Reveal className="about-team-head">
          <div className="eyebrow"><span className="num">03</span>The Studio Hands</div>
          <h2 className="display italic-accent h-display-lg" style={{ marginTop: 12 }}>
            Two frames, <em>three pairs of hands.</em>
          </h2>
        </Reveal>

        <div className="team-grid">
          <Reveal className="team-card">
            <div className="team-card-img">
              <image-slot id="team-1" placeholder="Founder portrait" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            </div>
            <div>
              <h3 className="team-card-name">Nehemiah "Nemo" Davis</h3>
              <p className="team-card-role">Founder · Designer</p>
              <p className="team-card-bio">Painter (Pratt '14). Designs every Aura on tracing paper, signs every finished piece. Mostly at the front of the frame.</p>
            </div>
          </Reveal>
          <Reveal className="team-card" delay={80}>
            <div className="team-card-img">
              <image-slot id="team-2" placeholder="Master tufter" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            </div>
            <div>
              <h3 className="team-card-name">Amaka Okafor</h3>
              <p className="team-card-role">Master Tufter</p>
              <p className="team-card-bio">Eight years on the frame in Lagos before Brooklyn. Leads the bespoke commission queue and trains every new tufter.</p>
            </div>
          </Reveal>
          <Reveal className="team-card" delay={160}>
            <div className="team-card-img">
              <image-slot id="team-3" placeholder="Studio manager" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            </div>
            <div>
              <h3 className="team-card-name">Lila Reyes</h3>
              <p className="team-card-role">Studio Manager</p>
              <p className="team-card-bio">Color, finishing, and the calendar. Answers your commission email, books your studio visit, signs your delivery.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRESS */}
      <section className="section on-dark about-press">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow" style={{ color: "var(--gold)" }}><span className="num" style={{ color: "var(--gold)" }}>04</span>Press &amp; recognition</div>
            <h2 className="display italic-accent h-display-lg" style={{ marginTop: 12, color: "var(--cream)" }}>
              Selected <em>features.</em>
            </h2>
          </Reveal>

          <ul className="press-list">
            {PRESS_MENTIONS.map((p, i) => (
              <Reveal as="li" key={p.pub + i} className="press-list-item">
                <span className="press-list-pub">{p.pub}</span>
                <span className="press-list-title">{p.title}</span>
                <span className="press-list-date">{p.date}</span>
                <span className="press-list-arrow">→</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <AboutStyles />
    </div>
  );
}

function AboutStyles() {
  return (
    <style>{`
      .about-root { padding-top: 120px; }
      .about-header { padding-bottom: 56px; border-bottom: 1px solid var(--rule); }
      .about-header-grid {
        display: grid;
        grid-template-columns: 1.3fr 1fr;
        gap: 48px; align-items: end;
      }
      .about-header-copy {
        font-size: clamp(20px, 1.8vw, 26px);
        color: var(--ink-soft);
        max-width: 440px;
      }
      @media (max-width: 800px) { .about-header-grid { grid-template-columns: 1fr; } }

      .about-portrait-grid {
        display: grid;
        grid-template-columns: 0.9fr 1fr;
        gap: 64px;
        align-items: start;
      }
      .about-portrait-img {
        position: relative;
        aspect-ratio: 4/5;
        overflow: hidden;
        background: var(--cream-warm);
      }
      .about-portrait-img image-slot { position: absolute; inset: 0; }
      .about-portrait-tag {
        position: absolute; bottom: 16px; left: 16px;
        background: rgba(244,239,230,0.92);
        backdrop-filter: blur(8px);
        padding: 6px 14px;
        border-radius: 999px;
        font-size: 15px;
      }
      .about-portrait-text { padding-top: 8px; }
      .about-lead {
        margin-top: 28px;
        display: grid; gap: 20px;
        font-size: clamp(17px, 1.4vw, 21px);
        line-height: 1.55;
        color: var(--ink);
        max-width: 540px;
      }
      .about-sign {
        margin-top: 28px;
        font-size: 26px;
        color: var(--gold-deep);
      }
      @media (max-width: 900px) {
        .about-portrait-grid { grid-template-columns: 1fr; gap: 32px; }
      }

      .about-quote {
        padding: clamp(80px, 9vw, 140px) 0;
        background:
          linear-gradient(135deg, var(--beige-soft) 0%, var(--beige-warm) 55%, color-mix(in srgb, var(--lavender-soft) 35%, var(--beige-warm) 65%) 100%);
        border-block: 1px solid var(--rule);
      }
      .about-quote em { color: var(--blood); }

      .about-timeline-head { margin-bottom: 48px; }
      .timeline {
        list-style: none; padding: 0; margin: 0;
        display: grid; gap: 32px;
      }
      .timeline-item {
        display: grid;
        grid-template-columns: 100px 24px 1fr;
        gap: 24px;
        padding-left: 40px;
        position: relative;
      }
      .timeline-year {
        font-family: var(--display);
        font-weight: 700;
        font-size: 18px;
        color: var(--gold-deep);
        letter-spacing: 0.04em;
        padding-top: 4px;
      }
      .timeline-dot {
        position: absolute;
        left: -5px;
        top: 12px;
        width: 9px; height: 9px;
        border-radius: 50%;
        background: var(--ink);
        outline: 4px solid var(--cream);
      }
      @media (max-width: 700px) {
        .timeline-item { grid-template-columns: 80px 1fr; }
        .timeline-item .timeline-dot { display: none; }
        .timeline-item { padding-left: 24px; }
      }

      /* TEAM */
      .about-team-head { margin-bottom: 48px; }
      .team-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 36px;
      }
      .team-card { display: flex; flex-direction: column; gap: 18px; }
      .team-card-img {
        position: relative;
        aspect-ratio: 4/5;
        overflow: hidden;
        background: var(--cream-warm);
      }
      .team-card-img image-slot { position: absolute; inset: 0; }
      .team-card-name {
        font-family: var(--display);
        font-weight: 700;
        font-size: 22px;
        letter-spacing: -0.01em;
        margin: 0;
      }
      .team-card-role {
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--gold-deep);
        margin: 4px 0 12px;
      }
      .team-card-bio {
        font-size: 15px;
        color: var(--ink-soft);
        margin: 0;
        line-height: 1.55;
      }
      @media (max-width: 800px) { .team-grid { grid-template-columns: 1fr; } }

      .about-press { background: var(--stone-bg); color: var(--cream); }
      .press-list {
        list-style: none; padding: 0; margin: 48px 0 0;
      }
      .press-list-item {
        display: grid;
        grid-template-columns: 200px 1fr 120px 30px;
        gap: 32px;
        align-items: baseline;
        padding: 26px 0;
        border-top: 1px solid var(--rule-on-dark);
        cursor: pointer;
        transition: padding-left .35s var(--ease), color .25s;
      }
      .press-list-item:hover { padding-left: 18px; color: var(--gold); }
      .press-list-item:last-child { border-bottom: 1px solid var(--rule-on-dark); }
      .press-list-pub {
        font-family: var(--display);
        font-weight: 700;
        font-size: 22px;
        letter-spacing: -0.01em;
      }
      .press-list-title {
        font-family: var(--serif);
        font-style: italic;
        font-size: clamp(20px, 2vw, 28px);
        color: var(--cream);
        line-height: 1.2;
      }
      .press-list-date {
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.14em;
        color: rgba(244,239,230,0.55);
      }
      .press-list-arrow {
        text-align: right;
        font-size: 20px;
        color: rgba(244,239,230,0.4);
        transition: transform .35s var(--ease);
      }
      .press-list-item:hover .press-list-arrow {
        color: var(--gold);
        transform: translateX(6px);
      }
      @media (max-width: 800px) {
        .press-list-item { grid-template-columns: 1fr; gap: 4px; padding-block: 18px; }
        .press-list-date, .press-list-arrow { font-size: 11px; }
      }
    `}</style>
  );
}

Object.assign(window, { AboutPage });
