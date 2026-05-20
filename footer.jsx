/* global React */
/* eslint-disable no-undef */

function SiteFooter() {
  const { route, setRoute } = window.useRoute();
  const toast = window.useToast();
  const [email, setEmail] = React.useState("");
  const [signedUp, setSignedUp] = React.useState(false);
  const Reveal = window.Reveal;

  const submit = (e) => {
    e.preventDefault();
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      toast("Please enter a real email address", "err");
      return;
    }
    setSignedUp(true);
    toast("Subscribed — thank you", "ok");
    setEmail("");
  };

  return (
    <footer className="site-footer on-dark" data-screen-label="Footer">
      {/* Newsletter slab */}
      <section className="footer-newsletter">
        <div className="wrap footer-newsletter-grid">
          <Reveal>
            <div className="eyebrow" style={{ color: "var(--gold)" }}><span className="num" style={{ color: "var(--gold)" }}>↳</span>Newsletter</div>
            <h2 className="display italic-accent" style={{ fontSize: "clamp(40px, 6vw, 86px)", lineHeight: 1, marginTop: 14, color: "var(--cream)", fontWeight: 700 }}>
              A <em>quiet letter,</em><br/>
              once a month.
            </h2>
          </Reveal>
          <Reveal delay={120} className="footer-newsletter-right">
            <p className="serif-italic" style={{ fontSize: 21, color: "rgba(244,239,230,0.78)", maxWidth: 460, lineHeight: 1.4 }}>
              One letter, no marketing. New editions, studio films, and first access to bespoke openings. Unsubscribe in one click.
            </p>
            {signedUp ? (
              <p className="display" style={{ marginTop: 28, color: "var(--gold)", fontWeight: 600, letterSpacing: "0.06em" }}>
                ✓  You're in. Look for the first letter on the next Friday morning.
              </p>
            ) : (
              <form onSubmit={submit} className="newsletter-form">
                <input
                  className="field"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn btn--gold" type="submit">
                  Subscribe <FooterArrow />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <hr className="rule on-dark" />

      {/* Sitemap / contact */}
      <section className="footer-meta">
        <div className="wrap footer-meta-grid">
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span className="brand-mark" style={{ width: 38, height: 38, fontSize: 18, background: "var(--gold-metallic)", boxShadow: "0 1px 0 rgba(255,255,255,0.35) inset, 0 1px 2px rgba(0,0,0,0.2)" }}>A</span>
              <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 26, color: "var(--cream)", letterSpacing: "-0.02em" }}>AURA</span>
              <span className="serif-italic metallic-gold" style={{ fontSize: 18 }}>rugs</span>
            </div>
            <p className="serif-italic" style={{ color: "rgba(244,239,230,0.7)", fontSize: 17, marginTop: 14, maxWidth: 280 }}>
              A small Brooklyn rug atelier. Fine art rugs, hand-tufted, made to order. Founded by Nemo Davis, 2024.
            </p>
            <p style={{ marginTop: 18, fontFamily: "var(--display)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(244,239,230,0.55)" }}>
              Studio · Brooklyn, NY<br/>
              By appointment only
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-head">Site</h4>
            <ul>
              <li><a onClick={(e) => { e.preventDefault(); setRoute("home"); }} href="#home">Home</a></li>
              <li><a onClick={(e) => { e.preventDefault(); setRoute("gallery"); }} href="#gallery">The Collection</a></li>
              <li><a onClick={(e) => { e.preventDefault(); setRoute("shop"); }} href="#shop">Shop</a></li>
              <li><a onClick={(e) => { e.preventDefault(); setRoute("about"); }} href="#about">The Studio</a></li>
              <li><a onClick={(e) => { e.preventDefault(); setRoute("vision"); }} href="#vision">Vision</a></li>
              <li><a onClick={(e) => { e.preventDefault(); setRoute("process"); }} href="#process">How It's Made</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-head">Studio</h4>
            <ul>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>Commission</a></li>
              <li><a href="mailto:hello@aurarugs.studio">hello@aurarugs.studio</a></li>
              <li><a href="mailto:press@aurarugs.studio">Press inquiries</a></li>
              <li><a href="mailto:trade@aurarugs.studio">Trade program</a></li>
              <li><a href="#">Delivery &amp; care</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-head">Follow</h4>
            <ul>
              <li><a href="#"><span style={{ color: "var(--gold)" }}>●</span>  TikTok &nbsp;<em className="serif-italic" style={{ color: "rgba(244,239,230,0.5)" }}>@aurarugs</em></a></li>
              <li><a href="#">Instagram &nbsp;<em className="serif-italic" style={{ color: "rgba(244,239,230,0.5)" }}>@aura.rugs</em></a></li>
              <li><a href="#">Pinterest &nbsp;<em className="serif-italic" style={{ color: "rgba(244,239,230,0.5)" }}>/aurarugs</em></a></li>
              <li><a href="#">Are.na &nbsp;<em className="serif-italic" style={{ color: "rgba(244,239,230,0.5)" }}>/aura</em></a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Big wordmark */}
      <section className="footer-wordmark">
        <div className="wrap">
          <div className="big-mark display text-ombre">
            AURA <span className="serif-italic">rugs</span>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="footer-bottom">
        <div className="wrap footer-bottom-inner">
          <span>© {new Date().getFullYear()} Aura Rugs Studio. Hand-tufted in Brooklyn.</span>
          <span className="serif-italic" style={{ color: "var(--gold)" }}>Made slowly, by hand.</span>
          <span>v.2026.05 · <a href="#" className="ulink">colophon</a></span>
        </div>
      </section>

      <FooterStyles />
    </footer>
  );
}

// ── Contact page (sits in the router too) ───────────────────────────

function ContactPage() {
  const Reveal = window.Reveal;
  const toast = window.useToast();
  const [form, setForm] = React.useState({
    name: "", email: "", subject: "bespoke", message: "", budget: "",
  });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Tell us your name";
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) errs.email = "A real email please";
    if (form.message.trim().length < 8) errs.message = "A few more words?";
    setErrors(errs);
    if (Object.keys(errs).length) {
      toast("Please fill in the highlighted fields", "err");
      return;
    }
    setSent(true);
    toast("Note sent — we'll reply within five working days", "ok");
  };

  return (
    <div className="contact-root">
      {/* Header */}
      <header className="contact-header wrap" data-screen-label="07 Commission — Header">
        <Reveal>
          <div className="eyebrow"><span className="num">07</span>Commission</div>
          <h1 className="display italic-accent h-display-xl" style={{ marginTop: 18 }}>
            Let's make a <em>rug for your floor.</em>
          </h1>
          <p className="serif-italic" style={{ fontSize: "clamp(20px, 2vw, 28px)", color: "var(--ink-soft)", marginTop: 24, maxWidth: 680 }}>
            All inquiries are read personally by the studio manager. We reply within five working days. Bespoke commissions are scheduled with a phone call and a sketch.
          </p>
        </Reveal>
      </header>

      {/* Form + sidebar */}
      <section className="section wrap contact-body">
        <div className="contact-grid">
          {sent ? (
            <Reveal className="contact-sent">
              <div className="cart-done-mark" style={{ background: "var(--forest)", color: "var(--gold)" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m4 12 5 5L20 6" /></svg>
              </div>
              <h2 className="display italic-accent" style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.05, margin: "24px 0 12px" }}>Your note is <em>on its way</em></h2>
              <p className="body-lg" style={{ color: "var(--ink-soft)", maxWidth: 480 }}>
                Thank you for the note. The studio manager will write back to <strong>{form.email}</strong> within five working days. For bespoke pieces we'll suggest a fifteen-minute call to walk through the room.
              </p>
              <button className="btn" style={{ marginTop: 32 }} onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "bespoke", message: "", budget: "" }); }}>
                Write another
              </button>
            </Reveal>
          ) : (
            <Reveal as="form" className="contact-form" onSubmit={submit}>
              <div className="cf-section">
                <div className="eyebrow" style={{ marginBottom: 18 }}>01 · You</div>
                <div className="cf-row">
                  <label className="cf-field">
                    <span className="field-label">Name {errors.name && <em className="cf-err">· {errors.name}</em>}</span>
                    <input className="field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </label>
                  <label className="cf-field">
                    <span className="field-label">Email {errors.email && <em className="cf-err">· {errors.email}</em>}</span>
                    <input className="field" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </label>
                </div>
              </div>

              <div className="cf-section">
                <div className="eyebrow" style={{ marginBottom: 18 }}>02 · The reason</div>
                <div className="cf-subjects">
                  {[
                    { id: "bespoke",   label: "Bespoke commission"   },
                    { id: "edition",   label: "Order an edition"     },
                    { id: "trade",     label: "Trade / interior pro" },
                    { id: "press",     label: "Press / editorial"    },
                    { id: "studio",    label: "Studio visit"         },
                    { id: "general",   label: "General hello"        },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className={"chip " + (form.subject === s.id ? "is-active" : "")}
                      onClick={() => setForm({ ...form, subject: s.id })}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {(form.subject === "bespoke" || form.subject === "trade") && (
                  <label className="cf-field" style={{ marginTop: 18 }}>
                    <span className="field-label">Approx. room size &amp; indicative budget (USD)</span>
                    <input className="field" placeholder="e.g. 8×10 ft · $3,500–7,500" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} />
                  </label>
                )}
              </div>

              <div className="cf-section">
                <div className="eyebrow" style={{ marginBottom: 18 }}>03 · The note</div>
                <label className="cf-field">
                  <span className="field-label">Message {errors.message && <em className="cf-err">· {errors.message}</em>}</span>
                  <textarea
                    className="field"
                    rows={6}
                    value={form.message}
                    placeholder="A few words about the room — size, light, the floor it will sit on. A piece in the collection you keep coming back to. Anything else you'd like the studio to know."
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </label>
              </div>

              <button className="btn btn--gold" type="submit" style={{ alignSelf: "flex-start" }}>
                Send to the studio <FooterArrow />
              </button>
            </Reveal>
          )}

          <aside className="contact-aside">
            <Reveal>
              <div className="eyebrow"><span className="num">↳</span>Direct</div>
              <ul className="ca-direct">
                <li>
                  <span className="ca-label">General</span>
                  <a href="mailto:hello@aurarugs.studio" className="ulink">hello@aurarugs.studio</a>
                </li>
                <li>
                  <span className="ca-label">Press</span>
                  <a href="mailto:press@aurarugs.studio" className="ulink">press@aurarugs.studio</a>
                </li>
                <li>
                  <span className="ca-label">Trade</span>
                  <a href="mailto:trade@aurarugs.studio" className="ulink">trade@aurarugs.studio</a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="eyebrow" style={{ marginTop: 32 }}><span className="num">↳</span>Studio</div>
              <p className="ca-studio">
                <span style={{ fontFamily: "var(--display)", fontWeight: 700, display: "block", fontSize: 18 }}>Aura Rugs Studio</span>
                <span className="serif-italic" style={{ color: "var(--ink-soft)", fontSize: 17 }}>
                  214 Bergen Street, Floor 3<br/>
                  Brooklyn, NY · 11217<br/>
                  By appointment only
                </span>
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="eyebrow" style={{ marginTop: 32 }}><span className="num">↳</span>Reply time</div>
              <p style={{ color: "var(--ink-soft)", fontSize: 16, margin: "10px 0 0" }}>
                We reply within five working days. Bespoke inquiries with a budget are prioritized.
              </p>
            </Reveal>
          </aside>
        </div>
      </section>

      <FooterStyles />
    </div>
  );
}

function FooterArrow() {
  return (
    <svg className="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7" /><path d="M9 7h8v8" />
    </svg>
  );
}

function FooterStyles() {
  return (
    <style>{`
      .site-footer {
        background: var(--stone-bg);
        color: var(--cream);
        margin-top: 0;
      }
      .footer-newsletter {
        padding: clamp(80px, 10vw, 140px) 0 60px;
        background:
          radial-gradient(60% 50% at 0% 0%, rgba(157,134,199,0.20) 0%, transparent 60%),
          radial-gradient(50% 50% at 100% 0%, rgba(107,77,156,0.18) 0%, transparent 60%);
      }
      .footer-newsletter-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px;
        align-items: end;
      }
      .footer-newsletter-right { padding-bottom: 6px; }
      .newsletter-form {
        display: flex; gap: 14px; align-items: center;
        margin-top: 24px;
        flex-wrap: wrap;
      }
      .newsletter-form .field {
        flex: 1; min-width: 240px;
        border-color: var(--cream);
        color: var(--cream);
        font-size: 18px;
      }
      .newsletter-form .field::placeholder { color: rgba(244,239,230,0.5); }
      @media (max-width: 800px) { .footer-newsletter-grid { grid-template-columns: 1fr; gap: 24px; } }

      .footer-meta { padding: 80px 0; }
      .footer-meta-grid {
        display: grid;
        grid-template-columns: 1.4fr 1fr 1fr 1fr;
        gap: 48px;
      }
      .footer-brand { padding-right: 24px; }
      .footer-col-head {
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--gold);
        margin: 0 0 18px;
      }
      .footer-col ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
      .footer-col a {
        font-family: var(--display);
        font-size: 15px;
        color: rgba(244,239,230,0.85);
        transition: color .2s;
        display: inline-flex; align-items: baseline; gap: 6px;
      }
      .footer-col a:hover { color: var(--gold); }
      @media (max-width: 900px) {
        .footer-meta-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
      }
      @media (max-width: 500px) {
        .footer-meta-grid { grid-template-columns: 1fr; }
      }

      .footer-wordmark {
        padding: 24px 0 48px;
        overflow: hidden;
      }
      .big-mark {
        font-size: clamp(80px, 22vw, 360px);
        font-weight: 900;
        letter-spacing: -0.05em;
        line-height: 0.85;
        color: var(--cream);
        white-space: nowrap;
      }

      .footer-bottom {
        padding: 20px 0;
        border-top: 1px solid var(--rule-on-dark);
      }
      .footer-bottom-inner {
        display: flex; justify-content: space-between;
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: rgba(244,239,230,0.55);
        gap: 16px; flex-wrap: wrap;
      }
      .footer-bottom-inner .serif-italic { text-transform: none; letter-spacing: 0; font-size: 14px; }

      /* CONTACT PAGE */
      .contact-root { padding-top: 120px; }
      .contact-header { padding-bottom: 64px; border-bottom: 1px solid var(--rule); }
      .contact-grid {
        display: grid;
        grid-template-columns: 1.4fr 1fr;
        gap: 80px;
        align-items: start;
      }
      .contact-form {
        display: flex; flex-direction: column; gap: 36px;
      }
      .cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
      .cf-field { display: flex; flex-direction: column; }
      .cf-err { color: #b65555; font-style: normal; margin-left: 6px; letter-spacing: 0; text-transform: none; }
      .cf-subjects { display: flex; flex-wrap: wrap; gap: 8px; }

      .contact-aside {
        padding-top: 12px;
        padding-left: 32px;
        border-left: 1px solid var(--rule);
      }
      .ca-direct {
        list-style: none; padding: 0; margin: 18px 0 0;
        display: grid; gap: 14px;
      }
      .ca-direct li { display: flex; flex-direction: column; gap: 4px; }
      .ca-label {
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--ink-soft);
      }
      .ca-studio { margin: 10px 0 0; line-height: 1.55; }

      .contact-sent { padding-top: 24px; }

      @media (max-width: 900px) {
        .contact-grid { grid-template-columns: 1fr; gap: 48px; }
        .contact-aside { padding-left: 0; border-left: 0; border-top: 1px solid var(--rule); padding-top: 28px; }
        .cf-row { grid-template-columns: 1fr; }
      }
    `}</style>
  );
}

Object.assign(window, { SiteFooter, ContactPage });
