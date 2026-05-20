/* global React */
/* eslint-disable no-undef */

const PRODUCTS = [
  // Editions — numbered hand-tufted rugs, made to order
  { id: "p01", title: "Aura № 01 — Sunday Floor",               price: 2400, type: "Edition",   variant: "5 × 8 ft · wool & viscose",  edition: "Made to order · 10 wk", cat: "Editions" },
  { id: "p02", title: "Aura № 02 — Cathedral",                  price: 4800, type: "Edition",   variant: "8 × 11 ft · NZ wool",        edition: "Made to order · 14 wk", cat: "Editions" },
  { id: "p03", title: "Aura № 03 — Grandmother (Round)",        price: 3200, type: "Edition",   variant: "ø 6 ft · wool & silk",       edition: "Made to order · 12 wk", cat: "Editions" },
  { id: "p04", title: "Aura № 04 — Hymn Runner",                price: 1900, type: "Edition",   variant: "2.5 × 9 ft · NZ wool",       edition: "Made to order · 10 wk", cat: "Editions" },
  { id: "p05", title: "Aura № 05 — Vespers",                    price: 3400, type: "Edition",   variant: "6 × 9 ft · NZ wool",         edition: "Made to order · 12 wk", cat: "Editions" },
  { id: "p06", title: "Aura № 06 — Mother of the Hour",         price: 4200, type: "Edition",   variant: "5 × 7 ft · wool & gold",     edition: "Made to order · 14 wk", cat: "Editions" },
  // Bespoke — design deposit, fully custom
  { id: "p07", title: "Bespoke commission — design deposit",    price: 850,  type: "Bespoke",   variant: "Sketch · sample · sizing",   edition: "Applied to final piece", cat: "Bespoke" },
  { id: "p08", title: "On-site visit — NYC area",               price: 200,  type: "Bespoke",   variant: "2 hr · measurement & light", edition: "Within 50 mi of Brooklyn",  cat: "Bespoke" },
  // Swatches & samples — discovery
  { id: "p09", title: "Wool swatch kit — Studio palette",       price: 48,   type: "Sample",    variant: "12 color swatches",          edition: "Ships in 3 days",       cat: "Samples" },
  { id: "p10", title: "Yarn fan deck — full library",           price: 95,   type: "Sample",    variant: "600+ NZ wool colors",        edition: "Returnable",             cat: "Samples" },
  { id: "p11", title: "Sample tuft — 8 × 8 in",                 price: 120,  type: "Sample",    variant: "Pile & color test",          edition: "From your sketch",       cat: "Samples" },
  // Care & objects
  { id: "p12", title: "Aura Care Kit — rug brush & cleaner",    price: 72,   type: "Care",      variant: "Brush, cleaner, instructions", edition: "Included with every rug", cat: "Care" },
  { id: "p13", title: "Tracing paper sketch — print",           price: 180,  type: "Print",     variant: "A2 · open edition",          edition: "Signed and numbered",    cat: "Care" },
  { id: "p14", title: "Aura monograph — Vol. 01",               price: 65,   type: "Book",      variant: "Hardcover · 120 pages",      edition: "Pre-order · ships 2027", cat: "Care" },
];

const SHOP_CATS = ["All", "Editions", "Bespoke", "Samples", "Care"];

function ShopPage() {
  const Reveal = window.Reveal;
  const { add } = window.useCart();
  const toast = window.useToast();
  const [cat, setCat] = React.useState("All");

  const list = cat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);
  const featured = PRODUCTS.find((p) => p.id === "p02");

  return (
    <div className="shop-root">
      {/* HEADER */}
      <header className="shop-header wrap" data-screen-label="03 Shop — Header">
        <Reveal className="shop-header-grid">
          <div>
            <div className="eyebrow"><span className="num">03</span>The Shop</div>
            <h1 className="display italic-accent h-display-xl" style={{ marginTop: 18 }}>
              Editions, bespoke, <em>&amp;</em> samples.
            </h1>
          </div>
          <p className="serif-italic shop-header-copy">
            Most pieces are made to order over ten to fourteen weeks. Swatch kits and samples ship in three days so you can sit with the color before you commit.
          </p>
        </Reveal>
      </header>

      {/* FEATURED */}
      <section className="shop-featured" data-screen-label="03 Shop — Featured Edition">
        <Reveal className="wrap shop-featured-grid">
          <div className="shop-featured-image">
            <image-slot id="shop-feature" placeholder="Featured rug — Aura № 02 Cathedral" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            <span className="shop-featured-badge serif-italic">Now tufting</span>
          </div>
          <div className="shop-featured-text">
            <div className="eyebrow" style={{ color: "var(--gold)" }}><span className="num" style={{ color: "var(--gold)" }}>★</span>The Featured Edition</div>
            <h2 className="display italic-accent" style={{ fontSize: "clamp(40px, 6vw, 84px)", marginTop: 16, fontWeight: 700, color: "var(--cream)" }}>
              Aura <em>№ 02</em> &mdash; Cathedral.
            </h2>
            <p className="body-lg" style={{ color: "rgba(244,239,230,0.7)", marginTop: 20, maxWidth: 480 }}>
              An 8 × 11 ft edition in deep forest, ochre, and bone. Inspired by light through a stained-glass window in late afternoon. Hand-tufted in NZ wool, 14-week lead time.
            </p>
            <div className="shop-featured-stats">
              <div><strong>8×11</strong><span>feet</span></div>
              <div><strong>14</strong><span>week lead</span></div>
              <div><strong>№ 04</strong><span>of edition 12</span></div>
            </div>
            <div className="shop-featured-actions">
              <button className="btn btn--gold" onClick={() => featured && (add(featured), toast("Added — Aura № 02 Cathedral", "ok"))}>
                Order Aura № 02 — $4,800
                <ShopArrow />
              </button>
              <button className="btn btn--ghost" style={{ color: "var(--cream)", borderColor: "var(--cream)" }} onClick={() => document.getElementById("shop-grid")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
                See all editions
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* BESPOKE COMMISSION band */}
      <section className="aura-band">
        <div className="wrap aura-grid">
          <Reveal className="aura-text">
            <div className="aura-mark">
              <span className="aura-mark-dot" />
              <span className="aura-mark-word">Bespoke</span>
              <span className="aura-mark-sub serif-italic">— one-of-one commissions</span>
            </div>
            <h2 className="display italic-accent aura-title">
              Don't see your <em>floor?</em> We'll design <em>one for it.</em>
            </h2>
            <p className="body-lg aura-body">
              Every Aura begins as a tracing-paper sketch. For bespoke clients we visit the room (or work from photographs), study the light, and design a rug that belongs to that floor and no other. From $850 design deposit, fully applied to the final piece.
            </p>

            <div className="aura-stats">
              <div><strong>10–14 wk</strong><span>build time</span></div>
              <div><strong>NZ wool</strong><span>+ viscose / silk</span></div>
              <div><strong>Up to 12×16</strong><span>feet</span></div>
            </div>

            <div className="aura-actions">
              <button className="btn btn--gold" onClick={() => window.location.hash = "contact"}>
                Start a commission <ShopArrow />
              </button>
              <button className="btn btn--ghost" onClick={() => { setCat("Bespoke"); document.getElementById("shop-grid")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
                See bespoke pricing
              </button>
            </div>
          </Reveal>

          <Reveal delay={140} className="aura-images">
            <div className="aura-img aura-img--main">
              <image-slot id="aura-hero" placeholder="Bespoke install — Williams Residence" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
              <span className="aura-img-tag serif-italic">Williams Residence · 8 × 11 ft · wool & silk</span>
            </div>
            <div className="aura-img aura-img--a">
              <image-slot id="aura-2" placeholder="Tracing-paper sketch" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            </div>
            <div className="aura-img aura-img--b">
              <image-slot id="aura-3" placeholder="Yarn selection" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
            </div>
          </Reveal>
        </div>
        <AuraStyles />
      </section>

      <div className="shop-filters-bar wrap" data-screen-label="03 Shop — Filters">
        <div className="shop-filters">
          {SHOP_CATS.map((c) => (
            <button key={c} className={"chip " + (cat === c ? "is-active" : "")} onClick={() => setCat(c)}>
              {c}
              {c !== "All" && <span style={{ marginLeft: 8, opacity: 0.5 }}>{PRODUCTS.filter((p) => p.cat === c).length}</span>}
            </button>
          ))}
        </div>
        <span className="serif-italic" style={{ color: "var(--ink-soft)", fontSize: 18 }}>
          {String(list.length).padStart(2, "0")} pieces · white-glove delivery
        </span>
      </div>

      {/* GRID */}
      <section id="shop-grid" className="wrap shop-grid">
        {list.map((p, i) => (
          <Reveal key={p.id} delay={(i % 4) * 60}>
            <ProductCard product={p} onAdd={(opts) => { add(p, opts); toast(`Added — ${p.title}`); }} />
          </Reveal>
        ))}
      </section>

      {/* CARE / SHIPPING strip */}
      <section className="shop-care">
        <div className="wrap shop-care-grid">
          <CareItem n="01" title="Made to order" body="Most rugs are tufted to order over ten to fourteen weeks. No warehouse, no surplus." />
          <CareItem n="02" title="White-glove delivery" body="Complimentary on rugs over $1,500 in the contiguous US. We bring it in and roll it out." />
          <CareItem n="03" title="30-day approval" body="Live with the rug for thirty days. If it isn't right, we'll remake or refund." />
          <CareItem n="04" title="Bespoke open" body="Custom commissions from $850 design deposit, applied to the final piece." />
        </div>
      </section>

      <ShopStyles />
    </div>
  );
}

// ── Product card ────────────────────────────────────────────────────

function ProductCard({ product, onAdd }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article className="prod-card" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="prod-card-frame">
        <image-slot id={"shop-" + product.id} placeholder={product.title} shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
        <span className={"prod-tag " + (product.type === "Aura Rugs" ? "prod-tag--aura" : "")}>{product.type}</span>
        <button
          className={"prod-add " + (hover ? "is-hovering" : "")}
          onClick={(e) => { e.stopPropagation(); onAdd(); }}
          aria-label={`Add ${product.title} to cart`}
        >
          <span className="prod-add-label">{hover ? "Add to cart" : "+"}</span>
        </button>
      </div>
      <div className="prod-card-meta">
        <div className="prod-card-text">
          <div className="prod-card-title">{product.title}</div>
          <div className="prod-card-variant">{product.variant}{product.edition && <span> · <em>{product.edition}</em></span>}</div>
        </div>
        <div className="prod-card-price">${product.price.toLocaleString()}</div>
      </div>
    </article>
  );
}

function CareItem({ n, title, body }) {
  return (
    <div className="care-item">
      <span className="care-num serif-italic">{n}</span>
      <h4 className="display" style={{ fontWeight: 700, fontSize: 20, margin: "8px 0 8px", letterSpacing: "-0.01em" }}>{title}</h4>
      <p style={{ color: "var(--ink-soft)", fontSize: 15, margin: 0 }}>{body}</p>
    </div>
  );
}

// ── Cart drawer ──────────────────────────────────────────────────────

function CartDrawer() {
  const cart = window.useCart();
  const toast = window.useToast();
  const [step, setStep] = React.useState("cart"); // cart | checkout | done
  const [form, setForm] = React.useState({ name: "", email: "", address: "", city: "", zip: "" });
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => { if (!cart.open) setTimeout(() => setStep("cart"), 320); }, [cart.open]);

  const ship = cart.subtotal > 0 ? (cart.subtotal >= 1500 ? 0 : 95) : 0;
  const total = cart.subtotal + ship;

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) errs.email = "Email looks off";
    if (!form.address.trim()) errs.address = "Required";
    if (!form.city.trim()) errs.city = "Required";
    if (!form.zip.trim()) errs.zip = "Required";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStep("done");
    setTimeout(() => {
      cart.clear();
    }, 400);
  };

  return (
    <>
      <div className={"cart-scrim " + (cart.open ? "is-open" : "")} onClick={() => cart.setOpen(false)} />
      <aside className={"cart-drawer " + (cart.open ? "is-open" : "")} aria-hidden={!cart.open}>
        <header className="cart-head">
          <div>
            <div className="eyebrow"><span className="num">↳</span>Your bag</div>
            <h3 className="display italic-accent" style={{ fontSize: 32, marginTop: 6, fontWeight: 700 }}>
              {step === "checkout" ? <>Check<em>out</em></> :
                step === "done"   ? <>Thank <em>you.</em></> :
                                    <>The <em>cart</em></>}
            </h3>
          </div>
          <button className="cart-close" onClick={() => cart.setOpen(false)} aria-label="Close cart">✕</button>
        </header>

        {step === "cart" && (
          <>
            <div className="cart-list">
              {cart.items.length === 0 && (
                <div className="cart-empty">
                  <p className="serif-italic" style={{ fontSize: 22, color: "var(--ink-soft)" }}>The bag is empty &mdash; a quiet beginning.</p>
                  <button className="btn btn--ghost btn--sm" style={{ marginTop: 20 }} onClick={() => { cart.setOpen(false); window.location.hash = "shop"; }}>
                    Browse the shop
                  </button>
                </div>
              )}
              {cart.items.map((i) => (
                <div className="cart-row" key={i.key}>
                  <div className="cart-row-img">
                    <image-slot id={"shop-" + i.id} placeholder="" shape="rect" style={{ width: "100%", height: "100%" }}></image-slot>
                  </div>
                  <div className="cart-row-body">
                    <div className="cart-row-title">{i.title}</div>
                    <div className="cart-row-variant">{i.variant}</div>
                    <div className="cart-row-controls">
                      <div className="qty">
                        <button onClick={() => cart.setQty(i.key, i.qty - 1)} aria-label="Decrease">−</button>
                        <span>{i.qty}</span>
                        <button onClick={() => cart.setQty(i.key, i.qty + 1)} aria-label="Increase">+</button>
                      </div>
                      <button className="cart-remove ulink" onClick={() => cart.remove(i.key)}>Remove</button>
                    </div>
                  </div>
                  <div className="cart-row-price">${(i.price * i.qty).toLocaleString()}</div>
                </div>
              ))}
            </div>

            {cart.items.length > 0 && (
              <footer className="cart-foot">
                <div className="cart-totals">
                  <div><span>Subtotal</span><span>${cart.subtotal.toLocaleString()}</span></div>
                  <div><span>Shipping</span><span>{ship === 0 ? "Free" : "$" + ship}</span></div>
                  <div className="cart-totals-grand"><span>Total</span><span>${total.toLocaleString()}</span></div>
                </div>
                {cart.subtotal < 1500 && (
                  <p className="serif-italic" style={{ color: "var(--gold-deep)", fontSize: 14, margin: "0 0 16px" }}>
                    ${(1500 - cart.subtotal).toLocaleString()} from complimentary white-glove delivery.
                  </p>
                )}
                <button className="btn btn--gold" style={{ width: "100%", justifyContent: "center" }} onClick={() => setStep("checkout")}>
                  Checkout <ShopArrow />
                </button>
              </footer>
            )}
          </>
        )}

        {step === "checkout" && (
          <form className="cart-checkout" onSubmit={submit}>
            <button type="button" className="ulink" style={{ alignSelf: "flex-start", fontSize: 13 }} onClick={() => setStep("cart")}>← Back to bag</button>

            <div className="co-section">
              <div className="eyebrow" style={{ marginBottom: 14 }}>01 · Contact</div>
              <div className="co-row">
                <ShopField label="Name" v={form.name} err={errors.name} onChange={(v) => setForm({ ...form, name: v })} />
                <ShopField label="Email" v={form.email} err={errors.email} onChange={(v) => setForm({ ...form, email: v })} />
              </div>
            </div>

            <div className="co-section">
              <div className="eyebrow" style={{ marginBottom: 14 }}>02 · Shipping</div>
              <ShopField label="Address" v={form.address} err={errors.address} onChange={(v) => setForm({ ...form, address: v })} />
              <div className="co-row">
                <ShopField label="City" v={form.city} err={errors.city} onChange={(v) => setForm({ ...form, city: v })} />
                <ShopField label="Postal code" v={form.zip} err={errors.zip} onChange={(v) => setForm({ ...form, zip: v })} />
              </div>
            </div>

            <div className="co-section">
              <div className="eyebrow" style={{ marginBottom: 14 }}>03 · Pay</div>
              <div className="co-pay">
                <div className="co-pay-method is-active">
                  <span>Card</span>
                  <span className="serif-italic" style={{ color: "var(--gold-deep)" }}>via Stripe</span>
                </div>
                <div className="co-pay-method">Apple Pay</div>
                <div className="co-pay-method">Shop Pay</div>
              </div>
            </div>

            <div className="cart-totals" style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--rule)" }}>
              <div><span>Subtotal</span><span>${cart.subtotal.toLocaleString()}</span></div>
              <div><span>Shipping</span><span>{ship === 0 ? "Free" : "$" + ship}</span></div>
              <div className="cart-totals-grand"><span>Total</span><span>${total.toLocaleString()}</span></div>
            </div>

            <button className="btn btn--gold" type="submit" style={{ width: "100%", justifyContent: "center" }}>
              Place order — ${total.toLocaleString()}
              <ShopArrow />
            </button>
          </form>
        )}

        {step === "done" && (
          <div className="cart-done">
            <div className="cart-done-mark">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m4 12 5 5L20 6" /></svg>
            </div>
            <h3 className="display italic-accent" style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.05, margin: "20px 0 8px" }}>Your order is <em>on its way</em></h3>
            <p className="body-lg" style={{ color: "var(--ink-soft)" }}>
              A confirmation is on the way to <strong style={{ color: "var(--ink)" }}>{form.email || "your inbox"}</strong>. Your pieces ship from the Brooklyn studio within five working days. Thank you for keeping the studio open.
            </p>
            <button className="btn" style={{ marginTop: 24 }} onClick={() => cart.setOpen(false)}>Close</button>
          </div>
        )}
      </aside>
    </>
  );
}

function ShopField({ label, v, err, onChange }) {
  return (
    <label className="co-field">
      <span className="field-label">{label} {err && <em style={{ color: "#b65555", fontStyle: "normal", marginLeft: 6, letterSpacing: 0, textTransform: "none" }}>· {err}</em>}</span>
      <input className="field" value={v} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}

function ShopArrow({ small }) {
  const sz = small ? 12 : 14;
  return (
    <svg className="arr" width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7" /><path d="M9 7h8v8" /></svg>
  );
}

function AuraStyles() {
  return (
    <style>{`
      .aura-band {
        background: var(--cream-warm);
        border-block: 1px solid var(--rule);
        padding: clamp(80px, 9vw, 130px) 0;
        position: relative;
        overflow: hidden;
      }
      .aura-band::before {
        content: "";
        position: absolute;
        right: -120px; bottom: -120px;
        width: 360px; height: 360px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(157,134,199,0.18) 0%, transparent 70%);
        pointer-events: none;
      }
      .aura-grid {
        display: grid;
        grid-template-columns: 1fr 1.05fr;
        gap: 72px;
        align-items: center;
        position: relative;
        z-index: 1;
      }
      @media (max-width: 900px) {
        .aura-grid { grid-template-columns: 1fr; gap: 36px; }
      }
      .aura-mark {
        display: inline-flex; align-items: baseline; gap: 10px;
        padding: 8px 16px 8px 14px;
        background: var(--forest);
        color: var(--cream);
        border-radius: 999px;
        font-family: var(--display);
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.04em;
      }
      .aura-mark-dot {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: var(--gold);
        align-self: center;
        animation: blink 1.6s ease-in-out infinite;
      }
      .aura-mark-word { color: var(--cream); }
      .aura-mark-sub { font-size: 13px; color: rgba(244,239,230,0.7); }

      .aura-title {
        font-size: clamp(40px, 5.6vw, 80px);
        line-height: 1;
        margin: 28px 0 20px;
        font-weight: 700;
        max-width: 700px;
      }
      .aura-title em { color: var(--blood); }
      .aura-body {
        color: var(--ink-soft);
        max-width: 540px;
        margin: 0 0 28px;
      }
      .aura-stats {
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 28px;
        margin: 0 0 32px;
        padding: 20px 0;
        border-top: 1px solid var(--rule);
        border-bottom: 1px solid var(--rule);
      }
      .aura-stats > div { display: flex; flex-direction: column; }
      .aura-stats strong {
        font-family: var(--display);
        font-size: 28px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: var(--ink);
      }
      .aura-stats span {
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--ink-soft);
      }
      @media (max-width: 500px) {
        .aura-stats { grid-template-columns: 1fr; gap: 14px; }
      }
      .aura-actions { display: flex; gap: 12px; flex-wrap: wrap; }

      .aura-images {
        display: grid;
        grid-template-columns: 1.6fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 14px;
        aspect-ratio: 4/3.4;
      }
      .aura-img {
        position: relative;
        overflow: hidden;
        background: var(--cream);
      }
      .aura-img image-slot { position: absolute; inset: 0; }
      .aura-img--main { grid-row: span 2; }
      .aura-img-tag {
        position: absolute; bottom: 14px; left: 14px;
        background: rgba(244,239,230,0.94);
        backdrop-filter: blur(8px);
        font-size: 15px;
        padding: 6px 14px;
        border-radius: 999px;
      }

      /* Aura badge on product cards */
      .prod-tag--aura {
        background: var(--forest);
        color: var(--gold);
      }
    `}</style>
  );
}

function ShopStyles() {
  return (
    <style>{`
      .shop-root { padding-top: 120px; }
      .shop-header { padding-bottom: 64px; border-bottom: 1px solid var(--rule); }
      .shop-header-grid {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 48px; align-items: end;
      }
      .shop-header-copy { font-size: clamp(20px, 1.8vw, 26px); color: var(--ink-soft); max-width: 460px; }
      @media (max-width: 800px) { .shop-header-grid { grid-template-columns: 1fr; } }

      .shop-featured {
        background:
          radial-gradient(70% 55% at 100% 0%, rgba(157,134,199,0.32) 0%, transparent 55%),
          radial-gradient(50% 45% at 0% 100%, rgba(107,77,156,0.20) 0%, transparent 55%),
          var(--black);
        color: var(--cream);
        padding-block: clamp(80px, 9vw, 130px);
      }
      .shop-featured-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px;
        align-items: center;
      }
      .shop-featured-image {
        position: relative;
        aspect-ratio: 4/5;
        overflow: hidden;
      }
      .shop-featured-image image-slot { position: absolute; inset: 0; --slot-bg: #2A2725; }
      .shop-featured-badge {
        position: absolute; top: 18px; left: 18px;
        background: var(--blood); color: var(--taupe);
        font-size: 16px;
        padding: 6px 14px;
        border-radius: 999px;
      }
      .shop-featured-stats {
        display: grid; grid-template-columns: repeat(3, auto);
        gap: 32px;
        margin: 32px 0;
        padding: 24px 0;
        border-top: 1px solid var(--rule-on-dark);
        border-bottom: 1px solid var(--rule-on-dark);
      }
      .shop-featured-stats > div { display: flex; flex-direction: column; }
      .shop-featured-stats strong {
        font-family: var(--display);
        font-size: 36px;
        font-weight: 800;
        color: var(--gold);
        letter-spacing: -0.02em;
      }
      .shop-featured-stats span {
        font-family: var(--display);
        font-size: 11px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: rgba(244,239,230,0.6);
      }
      .shop-featured-actions { display: flex; gap: 12px; flex-wrap: wrap; }
      @media (max-width: 900px) {
        .shop-featured-grid { grid-template-columns: 1fr; gap: 32px; }
      }

      .shop-filters-bar {
        position: sticky; top: 60px;
        background: rgba(237,227,207,0.94);
        backdrop-filter: blur(14px);
        z-index: 40;
        padding-block: 22px;
        display: flex; justify-content: space-between; align-items: center;
        flex-wrap: wrap; gap: 18px;
        border-bottom: 1px solid var(--rule);
      }
      .shop-filters { display: flex; gap: 8px; flex-wrap: wrap; }

      .shop-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px 24px;
        padding-block: 56px;
      }
      @media (max-width: 900px) { .shop-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 600px) { .shop-grid { grid-template-columns: 1fr; } }

      .prod-card { display: flex; flex-direction: column; gap: 14px; }
      .prod-card-frame {
        position: relative;
        aspect-ratio: 4/5;
        overflow: hidden;
        background: var(--cream-warm);
      }
      .prod-card-frame image-slot {
        position: absolute; inset: 0;
        transition: transform 1.4s var(--ease);
      }
      .prod-card:hover .prod-card-frame image-slot { transform: scale(1.04); }
      .prod-tag {
        position: absolute; top: 14px; left: 14px;
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        background: rgba(244,239,230,0.92);
        color: var(--ink);
        padding: 5px 10px;
        border-radius: 999px;
      }
      .prod-add {
        position: absolute; bottom: 14px; right: 14px;
        height: 40px;
        min-width: 40px;
        padding: 0 14px;
        border: 0;
        border-radius: 999px;
        background: var(--ink);
        color: var(--cream);
        font-family: var(--display);
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        cursor: pointer;
        display: inline-flex; align-items: center; justify-content: center;
        overflow: hidden;
        transition: background .25s var(--ease), padding .35s var(--ease);
      }
      .prod-add:hover, .prod-add.is-hovering { background: var(--gold); color: var(--ink); }
      .prod-add-label { white-space: nowrap; }

      .prod-card-meta {
        display: flex; justify-content: space-between; gap: 14px;
        align-items: baseline;
      }
      .prod-card-title { font-family: var(--serif); font-style: italic; font-size: 21px; line-height: 1.2; }
      .prod-card-variant {
        font-family: var(--display);
        font-size: 12px;
        color: var(--ink-soft);
        margin-top: 4px;
        letter-spacing: 0.04em;
      }
      .prod-card-variant em { font-style: normal; color: var(--gold-deep); }
      .prod-card-price {
        font-family: var(--display);
        font-weight: 700;
        font-size: 18px;
        white-space: nowrap;
      }

      .shop-care {
        background: var(--ink); color: var(--cream);
        padding-block: 80px;
      }
      .shop-care-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 32px;
      }
      .care-item { padding-top: 24px; border-top: 1px solid rgba(244,239,230,0.2); }
      .care-num { font-size: 36px; color: var(--gold); line-height: 1; }
      @media (max-width: 900px) { .shop-care-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 500px) { .shop-care-grid { grid-template-columns: 1fr; } }

      /* CART DRAWER */
      .cart-scrim {
        position: fixed; inset: 0;
        background: rgba(10,9,8,0.55);
        opacity: 0; pointer-events: none;
        transition: opacity .35s var(--ease);
        z-index: 100;
      }
      .cart-scrim.is-open { opacity: 1; pointer-events: auto; }
      .cart-drawer {
        position: fixed; top: 0; bottom: 0; right: 0;
        width: min(480px, 100%);
        background: var(--cream);
        z-index: 110;
        transform: translateX(100%);
        transition: transform .45s var(--ease);
        display: flex; flex-direction: column;
        box-shadow: -24px 0 60px rgba(0,0,0,0.18);
      }
      .cart-drawer.is-open { transform: none; }

      .cart-head {
        display: flex; justify-content: space-between;
        align-items: flex-start;
        padding: 28px 28px 20px;
        border-bottom: 1px solid var(--rule);
      }
      .cart-close {
        background: transparent; border: 0; cursor: pointer;
        width: 36px; height: 36px;
        font-size: 18px;
        border-radius: 50%;
        color: var(--ink);
        transition: background .2s;
      }
      .cart-close:hover { background: rgba(0,0,0,0.06); }

      .cart-list { padding: 20px 28px; flex: 1; overflow-y: auto; }
      .cart-empty { padding: 60px 0; text-align: center; }

      .cart-row {
        display: grid;
        grid-template-columns: 80px 1fr auto;
        gap: 16px;
        padding-block: 16px;
        border-bottom: 1px solid var(--rule);
      }
      .cart-row-img {
        position: relative;
        aspect-ratio: 4/5;
        overflow: hidden;
        background: var(--cream-warm);
      }
      .cart-row-img image-slot { position: absolute; inset: 0; }
      .cart-row-title {
        font-family: var(--serif);
        font-style: italic;
        font-size: 18px;
        line-height: 1.2;
      }
      .cart-row-variant {
        font-family: var(--display);
        font-size: 12px;
        color: var(--ink-soft);
        margin-top: 4px;
        letter-spacing: 0.04em;
      }
      .cart-row-controls {
        display: flex; gap: 16px; align-items: center;
        margin-top: 10px;
      }
      .qty {
        display: inline-flex; align-items: center;
        border: 1px solid var(--ink);
        border-radius: 999px;
        padding: 2px;
      }
      .qty button {
        appearance: none; border: 0; background: transparent;
        width: 24px; height: 24px;
        cursor: pointer;
        font-size: 14px;
        line-height: 1;
        border-radius: 50%;
      }
      .qty button:hover { background: rgba(0,0,0,0.06); }
      .qty span { padding: 0 10px; font-variant-numeric: tabular-nums; font-size: 13px; font-weight: 600; }
      .cart-remove { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-soft); cursor: pointer; }

      .cart-row-price { font-family: var(--display); font-weight: 700; font-variant-numeric: tabular-nums; }

      .cart-foot {
        padding: 24px 28px 32px;
        border-top: 1px solid var(--rule);
        background: var(--cream-soft);
      }
      .cart-totals {
        display: grid; gap: 8px;
        font-family: var(--display); font-size: 14px;
        margin-bottom: 18px;
      }
      .cart-totals > div { display: flex; justify-content: space-between; }
      .cart-totals-grand {
        padding-top: 10px;
        border-top: 1px solid var(--rule);
        font-size: 18px;
        font-weight: 700;
      }
      .cart-totals-grand > span:last-child { color: var(--gold-deep); }

      /* CHECKOUT */
      .cart-checkout {
        padding: 24px 28px 32px;
        display: flex; flex-direction: column; gap: 24px;
        overflow-y: auto;
        flex: 1;
      }
      .co-section {}
      .co-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
      .co-field { display: flex; flex-direction: column; }
      .co-pay { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
      .co-pay-method {
        padding: 14px;
        border: 1px solid var(--rule);
        border-radius: 10px;
        font-family: var(--display);
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        text-align: center;
        display: flex; flex-direction: column; gap: 4px;
        transition: border-color .2s, background .2s;
      }
      .co-pay-method.is-active { border-color: var(--ink); background: var(--cream-soft); }
      .co-pay-method span:last-child { font-size: 11px; font-weight: 400; color: var(--ink-soft); letter-spacing: 0; }

      .cart-done {
        padding: 40px 28px;
        text-align: center;
      }
      .cart-done-mark {
        width: 76px; height: 76px;
        border-radius: 50%;
        background: var(--forest);
        color: var(--gold);
        display: inline-flex; align-items: center; justify-content: center;
        animation: doneIn .6s var(--ease);
      }
      @keyframes doneIn {
        0% { transform: scale(0.6); opacity: 0; }
        60% { transform: scale(1.05); }
        100% { transform: scale(1); opacity: 1; }
      }

      /* TOAST */
      .toast-stack {
        position: fixed; bottom: 32px; left: 50%;
        transform: translateX(-50%);
        display: flex; flex-direction: column; gap: 8px;
        z-index: 2147483600;
        pointer-events: none;
      }
      .toast {
        background: var(--ink); color: var(--cream);
        padding: 14px 22px;
        border-radius: 999px;
        font-family: var(--display);
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.06em;
        animation: toastIn .35s var(--ease);
        box-shadow: 0 12px 40px rgba(0,0,0,0.25);
      }
      @keyframes toastIn {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: none; }
      }
    `}</style>
  );
}

Object.assign(window, { ShopPage, CartDrawer, PRODUCTS });
