/* global React */
/* eslint-disable no-undef */

// ── Works data ───────────────────────────────────────────────────────
const GALLERY_WORKS = [
  // Editions — numbered ongoing series
  { id: "g01", title: "Aura № 01 · Sunday Floor",        year: "2026", category: "Editions",  medium: "Hand-tufted wool & viscose",  size: "5 × 8 ft",     aspect: 1.55, span: "wide"   },
  { id: "g02", title: "Aura № 02 · Cathedral",           year: "2026", category: "Editions",  medium: "Hand-tufted NZ wool",         size: "8 × 11 ft",    aspect: 1.40, span: "wide"   },
  { id: "g03", title: "Aura № 03 · Grandmother",         year: "2025", category: "Editions",  medium: "Hand-tufted wool & silk",     size: "ø 6 ft",       aspect: 1.00, span: "square" },
  { id: "g04", title: "Aura № 04 · Hymn Runner",         year: "2025", category: "Editions",  medium: "Hand-tufted NZ wool",         size: "2.5 × 9 ft",   aspect: 0.45, span: "tall"   },
  { id: "g05", title: "Aura № 05 · Vespers",             year: "2026", category: "Editions",  medium: "Hand-tufted wool",            size: "6 × 9 ft",     aspect: 1.50, span: "wide"   },
  { id: "g06", title: "Aura № 06 · Mother of the Hour",  year: "2026", category: "Editions",  medium: "Hand-tufted wool & gold",     size: "5 × 7 ft",     aspect: 1.40, span: "wide"   },
  { id: "g07", title: "Aura № 07 · The Long Quiet",      year: "2026", category: "Editions",  medium: "Hand-tufted NZ wool",         size: "9 × 12 ft",    aspect: 0.75, span: "tall"   },
  { id: "g08", title: "Aura № 08 · Cardinal Wax",        year: "2025", category: "Editions",  medium: "Hand-tufted wool",            size: "4 × 6 ft",     aspect: 1.50, span: "wide"   },

  // Bespoke — one-of-one client commissions
  { id: "g09", title: "Williams Residence",              year: "2026", category: "Bespoke",   medium: "Hand-tufted wool & silk",     size: "8 × 11 ft",    aspect: 1.40, span: "wide"   },
  { id: "g10", title: "Atlas Lobby",                     year: "2026", category: "Bespoke",   medium: "Hand-tufted wool & viscose",  size: "10 × 14 ft",   aspect: 1.40, span: "wide"   },
  { id: "g11", title: "Bedroom No. 14",                  year: "2025", category: "Bespoke",   medium: "Hand-tufted wool",            size: "6 × 8 ft",     aspect: 1.35, span: "wide"   },
  { id: "g12", title: "Sun Room, Tarrytown",             year: "2025", category: "Bespoke",   medium: "Hand-tufted wool & silk",     size: "ø 8 ft",       aspect: 1.00, span: "square" },

  // Limited — capsule drops
  { id: "g13", title: "Field Notes · A Study",           year: "2025", category: "Limited",   medium: "Hand-tufted wool (run of 12)",size: "2 × 3 ft",     aspect: 0.66, span: "tall"   },
  { id: "g14", title: "Saturday Devotional Runner",      year: "2024", category: "Limited",   medium: "Hand-tufted wool (run of 6)", size: "2 × 7 ft",     aspect: 0.30, span: "tall"   },

  // Archive — early studio pieces, no longer available
  { id: "g15", title: "House Cloth (the first)",         year: "2024", category: "Archive",   medium: "Hand-tufted wool, archived",  size: "4 × 6 ft",     aspect: 1.50, span: "wide"   },
  { id: "g16", title: "Sister Cloth · Study",            year: "2024", category: "Archive",   medium: "Hand-tufted wool & cotton",   size: "3 × 4 ft",     aspect: 0.75, span: "tall"   },
];

const CATEGORIES = ["All", "Editions", "Bespoke", "Limited", "Archive"];

function GalleryPage() {
  const { tweaks } = window.useTweakValues();
  const layout = tweaks.galleryLayout || "editorial";
  const Reveal = window.Reveal;

  const [cat, setCat] = React.useState("All");
  const [lightbox, setLightbox] = React.useState(null);

  const filtered = cat === "All" ? GALLERY_WORKS : GALLERY_WORKS.filter((w) => w.category === cat);

  return (
    <div className="gallery-root">
      {/* HEADER */}
      <header className="gallery-header wrap" data-screen-label="02 Collection — Header">
        <Reveal>
          <div className="eyebrow"><span className="num">02</span>The Collection</div>
          <h1 className="display italic-accent h-display-xl" style={{ marginTop: 18 }}>
            Every <em>rug,</em> in one room.
          </h1>
          <p className="serif-italic" style={{ fontSize: "clamp(20px, 2vw, 28px)", color: "var(--ink-soft)", marginTop: 24, maxWidth: 720 }}>
            Editions, bespoke commissions, and the archive. New pieces added on the first Friday of each month — most are <em>made-to-order;</em> a few are ready to ship.
          </p>
        </Reveal>
      </header>

      {/* CONTROLS */}
      <div className="gallery-controls wrap" data-screen-label="02 Gallery — Filters">
        <div className="gallery-filters">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={"chip " + (cat === c ? "is-active" : "")}
              onClick={() => setCat(c)}
            >
              {c}
              {c !== "All" && <span style={{ opacity: 0.5, marginLeft: 8, fontVariantNumeric: "tabular-nums" }}>
                {GALLERY_WORKS.filter((w) => w.category === c).length}
              </span>}
            </button>
          ))}
        </div>
        <div className="gallery-count">
          <span className="serif-italic" style={{ color: "var(--ink-soft)", fontSize: 18 }}>
            Showing
          </span>
          <span className="display" style={{ fontWeight: 700, fontSize: 22, fontVariantNumeric: "tabular-nums" }}>
            {String(filtered.length).padStart(2, "0")} / {String(GALLERY_WORKS.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* GRID */}
      <section className="wrap gallery-grid-wrap" data-screen-label={`02 Gallery — ${layout}`}>
        {layout === "masonry"   && <MasonryGrid   items={filtered} onOpen={setLightbox} />}
        {layout === "uniform"   && <UniformGrid   items={filtered} onOpen={setLightbox} />}
        {layout === "editorial" && <EditorialGrid items={filtered} onOpen={setLightbox} />}
      </section>

      {/* TAIL */}
      <section className="gallery-tail wrap">
        <Reveal>
          <p className="serif-italic" style={{ fontSize: "clamp(20px, 2.2vw, 30px)", color: "var(--ink-soft)", maxWidth: 720 }}>
            Don't see your room? Every Aura begins as a sketch — we'll design one for your floor.
          </p>
          <button className="btn btn--gold" style={{ marginTop: 24 }} onClick={() => window.location.hash = "contact"}>
            Commission a bespoke rug
            <GalleryArrow />
          </button>
        </Reveal>
      </section>

      {/* LIGHTBOX */}
      {lightbox && <Lightbox work={lightbox} list={filtered} onClose={() => setLightbox(null)} onNav={(w) => setLightbox(w)} />}

      <GalleryStyles />
    </div>
  );
}

// ── Grids ────────────────────────────────────────────────────────────

function WorkCard({ work, onOpen, className = "", forceAspect }) {
  return (
    <article className={"work-card " + className} onClick={() => onOpen(work)}>
      <div className="work-card-frame" style={{ aspectRatio: forceAspect || work.aspect }}>
        <image-slot id={"work-" + work.id} placeholder={work.title} shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
        <div className="work-card-hover">
          <span className="chip" style={{ background: "var(--cream)", borderColor: "transparent", color: "var(--ink)" }}>{work.category}</span>
          <span className="work-card-view">
            View <GalleryArrow small />
          </span>
        </div>
      </div>
      <div className="work-card-meta">
        <div>
          <div className="work-card-title">{work.title}</div>
          <div className="work-card-medium">{work.medium}</div>
        </div>
        <div className="work-card-year">{work.year}</div>
      </div>
    </article>
  );
}

function MasonryGrid({ items, onOpen }) {
  // CSS multi-column gives true masonry packing without dependencies.
  return (
    <div className="grid-masonry">
      {items.map((w, i) => (
        <window.Reveal key={w.id} delay={(i % 6) * 60}>
          <WorkCard work={w} onOpen={onOpen} />
        </window.Reveal>
      ))}
    </div>
  );
}

function UniformGrid({ items, onOpen }) {
  return (
    <div className="grid-uniform">
      {items.map((w, i) => (
        <window.Reveal key={w.id} delay={(i % 6) * 60}>
          <WorkCard work={w} onOpen={onOpen} forceAspect={1} />
        </window.Reveal>
      ))}
    </div>
  );
}

function EditorialGrid({ items, onOpen }) {
  // Editorial: mixed canvas. Repeats a row pattern across the items list.
  // Pattern row sizes (spans of 12-col grid): big-left + small-right column pair, then text, then wide, etc.
  const rows = [];
  let cursor = 0;
  let rowIdx = 0;
  const patterns = [
    // pattern A: [span7-tall, span5-(stack of 2 squares)]
    ["tall-7", "stack-5"],
    // pattern B: [span4, span4, span4]
    ["mid-4", "mid-4", "mid-4"],
    // pattern C: [span5, span7-wide]
    ["mid-5", "wide-7"],
    // pattern D: [span12-wide]
    ["full-12"],
  ];
  while (cursor < items.length) {
    const pat = patterns[rowIdx % patterns.length];
    const consumed = pat.reduce((s, p) => s + (p.startsWith("stack") ? 2 : 1), 0);
    const slice = items.slice(cursor, cursor + consumed);
    if (slice.length === 0) break;
    rows.push({ pat, slice });
    cursor += consumed;
    rowIdx++;
  }

  return (
    <div className="grid-editorial">
      {rows.map((row, ri) => (
        <div className="ed-row" key={ri}>
          {row.pat.map((cellType, ci) => {
            if (cellType === "stack-5") {
              const w1 = row.slice[indexBefore(row.pat, ci, "stack")];
              const w2 = row.slice[indexBefore(row.pat, ci, "stack") + 1];
              return (
                <div className="ed-cell ed-stack" style={{ gridColumn: "span 5" }} key={ci}>
                  {w1 && <window.Reveal><WorkCard work={w1} onOpen={onOpen} forceAspect={1.4} /></window.Reveal>}
                  {w2 && <window.Reveal delay={80}><WorkCard work={w2} onOpen={onOpen} forceAspect={1.4} /></window.Reveal>}
                </div>
              );
            }
            const w = row.slice[indexBefore(row.pat, ci, cellType)];
            if (!w) return null;
            const conf = ({
              "tall-7": { col: 7, ar: 0.78 },
              "mid-4":  { col: 4, ar: 1.0 },
              "mid-5":  { col: 5, ar: 0.85 },
              "wide-7": { col: 7, ar: 1.4 },
              "full-12":{ col: 12, ar: 2.1 },
            })[cellType];
            return (
              <div className="ed-cell" style={{ gridColumn: "span " + conf.col }} key={ci}>
                <window.Reveal delay={ci * 60}>
                  <WorkCard work={w} onOpen={onOpen} forceAspect={conf.ar} />
                </window.Reveal>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function indexBefore(pat, ci, kind) {
  let n = 0;
  for (let i = 0; i < ci; i++) {
    n += pat[i].startsWith("stack") ? 2 : 1;
  }
  return n;
}

// ── Lightbox ────────────────────────────────────────────────────────

function Lightbox({ work, list, onClose, onNav }) {
  React.useEffect(() => {
    document.body.classList.add("lightbox-open");
    return () => document.body.classList.remove("lightbox-open");
  }, []);

  const idx = list.findIndex((w) => w.id === work.id);
  const prev = idx > 0 ? list[idx - 1] : list[list.length - 1];
  const next = idx < list.length - 1 ? list[idx + 1] : list[0];

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(prev);
      if (e.key === "ArrowRight") onNav(next);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose, onNav]);

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close">
        <span className="menu-lines" style={{ width: 22, height: 14 }}><i style={{ position: "absolute", left: 0, right: 0, top: 6, height: "1.5px", background: "currentColor", transform: "rotate(45deg)" }} /><i style={{ position: "absolute", left: 0, right: 0, top: 6, height: "1.5px", background: "currentColor", transform: "rotate(-45deg)" }} /></span>
        Close
      </button>

      <div className="lb-frame" onClick={(e) => e.stopPropagation()}>
        <div className="lb-image">
          <image-slot id={"work-" + work.id} placeholder={work.title} shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
        </div>

        <aside className="lb-meta">
          <div>
            <div className="eyebrow" style={{ color: "var(--gold)" }}>
              <span className="num" style={{ color: "var(--gold)" }}>{String(idx + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}</span>
              {work.category}
            </div>
            <h2 className="display italic-accent" style={{ fontSize: 48, lineHeight: 1, marginTop: 16, fontWeight: 700, color: "var(--cream)" }}>
              {work.title}
            </h2>
            <p className="serif-italic" style={{ fontSize: 22, color: "var(--gold)", marginTop: 4 }}>{work.year}</p>
          </div>

          <dl className="lb-details">
            <div><dt>Construction</dt><dd>{work.medium}</dd></div>
            <div><dt>Dimensions</dt><dd>{work.size}</dd></div>
            <div><dt>Edition</dt><dd>{work.category === "Editions" ? "Numbered, signed" : work.category === "Bespoke" ? "One-of-one, signed" : work.category === "Limited" ? "Limited run" : "Archived"}</dd></div>
            <div><dt>Lead time</dt><dd style={{ color: "var(--gold)" }}>{work.category === "Archive" ? "Not available" : "10–14 weeks"}</dd></div>
          </dl>

          <p className="body-lg" style={{ color: "rgba(244,239,230,0.75)" }}>
            Hand-tufted in New Zealand wool over ten to fourteen weeks, sized to your room, washed and bound in studio. White-glove delivery anywhere in the contiguous US.
          </p>

          <div className="lb-actions">
            <button className="btn btn--gold" onClick={() => { onClose(); setTimeout(() => window.location.hash = "contact", 320); }}>
              {work.category === "Archive" ? "Commission similar" : "Inquire / order"} <GalleryArrow small />
            </button>
            <button className="btn btn--ghost" onClick={() => { onClose(); setTimeout(() => window.location.hash = "shop", 320); }} style={{ borderColor: "var(--cream)", color: "var(--cream)" }}>
              See pricing
            </button>
          </div>

          <div className="lb-nav">
            <button onClick={() => onNav(prev)} aria-label="Previous"><GalleryArrow small left />  Prev</button>
            <button onClick={() => onNav(next)} aria-label="Next">Next <GalleryArrow small /></button>
          </div>
        </aside>
      </div>
    </div>
  );
}

function GalleryArrow({ small, left }) {
  const sz = small ? 12 : 14;
  return (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: left ? "rotate(180deg)" : "none" }}>
      <path d="M7 17L17 7" /><path d="M9 7h8v8" />
    </svg>
  );
}

// ── styles ──────────────────────────────────────────────────────────
function GalleryStyles() {
  return (
    <style>{`
      .gallery-root { padding-top: 120px; }
      .gallery-header { padding-bottom: 56px; }

      .gallery-controls {
        display: flex; justify-content: space-between; align-items: center;
        gap: 24px; flex-wrap: wrap;
        padding-block: 24px;
        border-top: 1px solid var(--rule);
        border-bottom: 1px solid var(--rule);
        position: sticky; top: 60px;
        background: rgba(237,227,207,0.94);
        backdrop-filter: blur(14px);
        z-index: 40;
      }
      .gallery-filters { display: flex; gap: 8px; flex-wrap: wrap; }
      .gallery-count { display: flex; align-items: baseline; gap: 10px; }

      .gallery-grid-wrap {
        padding-block: 48px 80px;
      }

      /* MASONRY */
      .grid-masonry {
        column-count: 3; column-gap: 24px;
      }
      .grid-masonry > * {
        display: block;
        break-inside: avoid;
        margin-bottom: 32px;
      }
      @media (max-width: 900px) { .grid-masonry { column-count: 2; } }
      @media (max-width: 600px) { .grid-masonry { column-count: 1; } }

      /* UNIFORM */
      .grid-uniform {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }
      @media (max-width: 900px) { .grid-uniform { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 600px) { .grid-uniform { grid-template-columns: 1fr; } }

      /* EDITORIAL */
      .grid-editorial {
        display: grid; gap: 64px;
      }
      .ed-row {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 24px;
      }
      .ed-stack { display: grid; gap: 24px; }
      @media (max-width: 900px) {
        .ed-row { grid-template-columns: 1fr; }
        .ed-row .ed-cell { grid-column: 1 / -1 !important; }
      }

      /* CARD */
      .work-card {
        cursor: pointer;
        display: flex; flex-direction: column; gap: 12px;
      }
      .work-card-frame {
        position: relative;
        overflow: hidden;
        background: var(--cream-warm);
      }
      .work-card-frame image-slot {
        position: absolute; inset: 0;
        transition: transform 1.4s var(--ease);
      }
      .work-card:hover .work-card-frame image-slot { transform: scale(1.04); }
      .work-card-frame::after {
        content: ""; position: absolute; inset: 0;
        background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.35) 100%);
        opacity: 0; transition: opacity .35s var(--ease);
        pointer-events: none;
      }
      .work-card:hover .work-card-frame::after { opacity: 1; }
      .work-card-hover {
        position: absolute; inset: 16px;
        display: flex; flex-direction: column; justify-content: space-between;
        align-items: flex-start;
        opacity: 0;
        transform: translateY(8px);
        transition: opacity .35s var(--ease), transform .35s var(--ease);
        z-index: 2;
      }
      .work-card:hover .work-card-hover { opacity: 1; transform: none; }
      .work-card-view {
        align-self: flex-end;
        display: inline-flex; align-items: center; gap: 8px;
        color: var(--cream);
        font-family: var(--display);
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }
      .work-card-meta {
        display: flex; justify-content: space-between;
        align-items: baseline; gap: 16px;
      }
      .work-card-title {
        font-family: var(--serif);
        font-style: italic;
        font-size: 22px;
        line-height: 1.1;
      }
      .work-card-medium {
        font-family: var(--display);
        font-size: 12px;
        color: var(--ink-soft);
        letter-spacing: 0.08em;
        margin-top: 4px;
      }
      .work-card-year {
        font-family: var(--display);
        font-size: 12px;
        letter-spacing: 0.14em;
        color: var(--ink-soft);
      }

      .gallery-tail {
        padding-block: 80px 140px;
        border-top: 1px solid var(--rule);
      }

      /* LIGHTBOX */
      .lightbox {
        position: fixed; inset: 0;
        background: rgba(10,9,8,0.96);
        z-index: 200;
        display: flex; align-items: center; justify-content: center;
        padding: 48px;
        animation: lbIn .35s var(--ease);
        overflow-y: auto;
      }
      @keyframes lbIn { from { opacity: 0; } to { opacity: 1; } }
      .lb-close {
        position: fixed; top: 24px; right: 24px;
        display: inline-flex; align-items: center; gap: 14px;
        background: transparent; border: 0; cursor: pointer;
        color: var(--cream);
        font-family: var(--display);
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        z-index: 2;
      }
      .lb-frame {
        position: relative;
        display: grid;
        grid-template-columns: 1.4fr 1fr;
        gap: 48px;
        width: 100%; max-width: 1320px;
        align-items: stretch;
        animation: lbCard .5s var(--ease);
      }
      @keyframes lbCard {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: none; }
      }
      @media (max-width: 900px) {
        .lightbox { padding: 24px; }
        .lb-frame { grid-template-columns: 1fr; gap: 24px; }
      }
      .lb-image {
        position: relative;
        aspect-ratio: 4/5;
        background: rgba(0,0,0,0.15);
        overflow: hidden;
      }
      .lb-image image-slot { position: absolute; inset: 0; --slot-bg: rgba(244,239,230,0.05); }

      .lb-meta {
        color: var(--cream);
        display: flex; flex-direction: column; gap: 28px;
        padding-block: 16px;
      }
      .lb-details {
        display: grid;
        grid-template-columns: 130px 1fr;
        gap: 14px 24px;
        margin: 0;
        padding: 24px 0;
        border-top: 1px solid var(--rule-on-dark);
        border-bottom: 1px solid var(--rule-on-dark);
      }
      .lb-details > div { display: contents; }
      .lb-details dt {
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: rgba(244,239,230,0.55);
      }
      .lb-details dd {
        margin: 0;
        font-family: var(--display);
        font-size: 15px;
        color: var(--cream);
      }
      .lb-actions { display: flex; flex-wrap: wrap; gap: 12px; }
      .lb-nav {
        display: flex; justify-content: space-between;
        font-family: var(--display);
        font-size: 12px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: rgba(244,239,230,0.7);
        padding-top: 16px;
        border-top: 1px solid var(--rule-on-dark);
      }
      .lb-nav button {
        background: transparent; border: 0; cursor: pointer;
        color: inherit; font: inherit;
        display: inline-flex; align-items: center; gap: 8px;
        padding: 6px 0;
      }
      .lb-nav button:hover { color: var(--gold); }
    `}</style>
  );
}

Object.assign(window, { GalleryPage });
