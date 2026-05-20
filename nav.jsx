/* global React */
/* eslint-disable no-undef */

// Pull from window (defined in app.jsx — loaded last so these are bound
// at call time, not at module load).

const NAV_ITEMS = [
  { id: "home",    label: "Home",              num: "01" },
  { id: "gallery", label: "The Collection",    num: "02" },
  { id: "shop",    label: "Shop",              num: "03" },
  { id: "about",   label: "The Studio",        num: "04" },
  { id: "vision",  label: "Vision",            num: "05" },
  { id: "process", label: "How It's Made",     num: "06" },
  { id: "contact", label: "Commission",        num: "07" },
];

const MENU_STATE = { open: false, listeners: new Set() };
function openMenu() { MENU_STATE.open = true; MENU_STATE.listeners.forEach((fn) => fn(true)); }
function closeMenu() { MENU_STATE.open = false; MENU_STATE.listeners.forEach((fn) => fn(false)); }
function useMenuState() {
  const [open, setOpen] = React.useState(MENU_STATE.open);
  React.useEffect(() => {
    MENU_STATE.listeners.add(setOpen);
    return () => MENU_STATE.listeners.delete(setOpen);
  }, []);
  React.useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);
  return [open, open ? closeMenu : openMenu];
}

function TopBar() {
  const { route, setRoute } = window.useRoute();
  const { count, setOpen: setCartOpen, pulse } = window.useCart();
  const [open, toggle] = useMenuState();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Home and Vision both open with a full-bleed forest-green hero.
  // Before the user scrolls past it, the default ink-on-transparent topbar
  // text is unreadable on green — force cream colors instead.
  const overDarkHero = !scrolled && !open && (route === "home" || route === "vision");

  return (
    <header className={
      "topbar "
      + (scrolled ? "is-scrolled " : "")
      + (open ? "on-menu " : "")
      + (overDarkHero ? "on-dark-page " : "")
    }>
      <a className="brand" onClick={(e) => { e.preventDefault(); setRoute("home"); }} href="#home" aria-label="Aura Rugs home">
        <span className="brand-mark">A</span>
        <span className="brand-word">AURA</span>
        <span className="brand-sub serif-italic">rugs</span>
      </a>

      <nav className="topbar-meta">
        <span className="topbar-loc">Studio · {currentLoc()}</span>
        <button className="cart-btn" onClick={() => setCartOpen(true)} aria-label="Open cart">
          <CartIcon />
          {count > 0 && <span key={pulse} className="cart-count">{count}</span>}
        </button>
        <button className={"menu-btn " + (open ? "is-open" : "")} onClick={toggle} aria-label="Menu" aria-expanded={open}>
          <span className="menu-lines"><i /><i /></span>
          <span className="menu-word">{open ? "Close" : "Menu"}</span>
        </button>
      </nav>
      <Style />
    </header>
  );
}

function currentLoc() {
  // Friendly time tag — purely cosmetic
  const d = new Date();
  return d.toLocaleString("en-US", { weekday: "short" }).toUpperCase() + " · BROOKLYN";
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5h2l2.2 11.2a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.5L21 9H7" />
      <circle cx="10" cy="20.5" r="1.2" />
      <circle cx="17" cy="20.5" r="1.2" />
    </svg>
  );
}

// ── Fullscreen menu ───────────────────────────────────────────────
function FullscreenMenu() {
  const { route, setRoute } = window.useRoute();
  const [open] = useMenuState();
  const [hovered, setHovered] = React.useState(null);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") closeMenu(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={"fs-menu " + (open ? "is-open" : "")} aria-hidden={!open}>
      <div className="fs-menu-bg" />
      <div className="fs-menu-grid">
        <div className="fs-menu-list" onMouseLeave={() => setHovered(null)}>
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.id}
              href={"#" + item.id}
              className={"fs-menu-item " + (route === item.id ? "is-current " : "") + (hovered && hovered !== item.id ? "is-dimmed " : "")}
              onMouseEnter={() => setHovered(item.id)}
              onClick={(e) => {
                e.preventDefault();
                setRoute(item.id);
                closeMenu();
              }}
              style={{ "--i": i }}
            >
              <span className="fs-menu-num">{item.num}</span>
              <span className="fs-menu-label">{item.label}</span>
              <span className="fs-menu-arrow">→</span>
            </a>
          ))}
        </div>

        <aside className="fs-menu-side">
          <div className="fs-menu-side-block">
            <div className="eyebrow" style={{ color: "rgba(244,239,230,0.55)" }}><span className="num">↳</span>Studio</div>
            <p className="serif-italic" style={{ fontSize: 22, lineHeight: 1.4, color: "var(--cream)", marginTop: 8 }}>
              A small Brooklyn rug studio. Fine art rugs, <span style={{ color: "var(--gold)" }}>hand-tufted</span>, made to order.
            </p>
          </div>

          <div className="fs-menu-side-block">
            <div className="eyebrow" style={{ color: "rgba(244,239,230,0.55)" }}><span className="num">↳</span>Follow</div>
            <ul className="fs-menu-socials">
              <li><a href="#" className="ulink">TikTok</a><span>@aurarugs</span></li>
              <li><a href="#" className="ulink">Instagram</a><span>@aura.rugs</span></li>
              <li><a href="#" className="ulink">Pinterest</a><span>/aurarugs</span></li>
              <li><a href="#" className="ulink">Are.na</a><span>/aura</span></li>
            </ul>
          </div>

          <div className="fs-menu-side-block">
            <div className="eyebrow" style={{ color: "rgba(244,239,230,0.55)" }}><span className="num">↳</span>Commissions</div>
            <a href="mailto:hello@aurarugs.studio" className="ulink" style={{ fontSize: 17 }}>hello@aurarugs.studio</a>
          </div>
        </aside>
      </div>

      <div className="fs-menu-footer">
        <span>© {new Date().getFullYear()} Aura Rugs Studio</span>
        <span className="serif-italic">handmade, with full attention</span>
        <span>Brooklyn · New York</span>
      </div>
    </div>
  );
}

// ── Inline styles for nav ─────────────────────────────────────────
function Style() {
  return (
    <style>{`
      .topbar {
        position: fixed; top: 0; left: 0; right: 0;
        z-index: 80;
        display: flex; align-items: center; justify-content: space-between;
        padding: 20px var(--gutter);
        transition: background .4s var(--ease), border-color .4s var(--ease), padding .3s var(--ease);
        border-bottom: 1px solid transparent;
      }
      .topbar.is-scrolled {
        background: rgba(237,227,207,0.86);
        backdrop-filter: blur(18px) saturate(160%);
        -webkit-backdrop-filter: blur(18px) saturate(160%);
        border-bottom-color: var(--rule);
        padding-block: 14px;
      }
      .topbar.on-menu {
        background: transparent;
        border-bottom-color: transparent;
        backdrop-filter: none;
      }
      /* Force cream colors when sitting over a dark hero (Home, Vision)
         before scroll — prevents ink text on forest green. */
      .topbar.on-dark-page .brand,
      .topbar.on-dark-page .topbar-loc,
      .topbar.on-dark-page .cart-btn,
      .topbar.on-dark-page .menu-btn { color: var(--cream); }
      .topbar.on-dark-page .cart-count { background: var(--gold); color: var(--ink); }
      .topbar.on-dark-page .brand-sub { color: rgba(244,239,230,0.7); }
      .topbar.on-menu .brand,
      .topbar.on-menu .topbar-loc,
      .topbar.on-menu .cart-btn,
      .topbar.on-menu .menu-btn { color: var(--cream); }
      .topbar.on-menu .cart-count { background: var(--gold); color: var(--ink); }

      .brand {
        display: flex; align-items: baseline; gap: 8px;
        font-family: var(--display);
        font-weight: 800;
        letter-spacing: -0.02em;
        font-size: 22px;
        color: var(--ink);
        transition: color .3s;
      }
      .brand-mark {
        display: inline-flex; align-items: center; justify-content: center;
        width: 32px; height: 32px;
        border-radius: 50%;
        background: var(--gold-metallic);
        color: var(--noir);
        font-weight: 900;
        font-size: 16px;
        margin-right: 4px;
        box-shadow: 0 1px 0 rgba(255,255,255,0.35) inset, 0 1px 2px rgba(0,0,0,0.18);
      }
      .brand-sub { font-size: 14px; color: var(--ink-soft); margin-left: 2px; transition: color .3s; }
      .topbar.on-menu .brand-sub { color: rgba(244,239,230,0.6); }

      .topbar-meta {
        display: flex; align-items: center; gap: 22px;
      }
      .topbar-loc {
        font-family: var(--display);
        font-size: 11px; font-weight: 600;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--ink-soft);
        transition: color .3s;
      }
      @media (max-width: 700px) { .topbar-loc { display: none; } }

      .cart-btn {
        position: relative;
        background: transparent; border: 0; cursor: pointer;
        color: var(--ink);
        padding: 8px;
        transition: color .3s;
      }
      .cart-btn:hover { color: var(--gold-deep); }
      .cart-count {
        position: absolute; top: 0; right: 0;
        background: var(--ink); color: var(--cream);
        font-family: var(--display); font-size: 10px; font-weight: 700;
        min-width: 18px; height: 18px;
        border-radius: 999px;
        display: inline-flex; align-items: center; justify-content: center;
        padding: 0 5px;
        animation: cartBump .45s var(--ease);
      }
      @keyframes cartBump {
        0% { transform: scale(.4); }
        60% { transform: scale(1.18); }
        100% { transform: scale(1); }
      }

      .menu-btn {
        display: inline-flex; align-items: center; gap: 12px;
        padding: 10px 16px 10px 12px;
        background: transparent; border: 0; cursor: pointer;
        color: var(--ink);
        font-family: var(--display);
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        border-radius: 999px;
        transition: background .25s, color .3s;
      }
      .menu-btn:hover { background: rgba(24,23,18,0.06); }
      .topbar.on-menu .menu-btn:hover { background: rgba(244,239,230,0.08); }
      .menu-lines {
        position: relative;
        width: 22px; height: 14px;
        display: inline-block;
      }
      .menu-lines i {
        position: absolute; left: 0; right: 0;
        height: 1.5px; background: currentColor;
        transition: transform .45s var(--ease), top .35s var(--ease), opacity .25s;
      }
      .menu-lines i:nth-child(1) { top: 3px; }
      .menu-lines i:nth-child(2) { top: 9px; }
      .menu-btn.is-open .menu-lines i:nth-child(1) { top: 6px; transform: rotate(45deg); }
      .menu-btn.is-open .menu-lines i:nth-child(2) { top: 6px; transform: rotate(-45deg); }
      .menu-word { display: inline-block; min-width: 38px; text-align: left; }

      /* Fullscreen menu */
      .fs-menu {
        position: fixed; inset: 0;
        z-index: 70;
        pointer-events: none;
        opacity: 0;
        transition: opacity .35s var(--ease);
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
      .fs-menu.is-open { pointer-events: auto; opacity: 1; }

      .fs-menu-bg {
        position: fixed; inset: 0;
        background: var(--stone-bg);
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        transition: clip-path .9s var(--ease);
        z-index: -1;
      }
      .fs-menu.is-open .fs-menu-bg {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }

      .fs-menu-grid {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 360px;
        gap: 80px;
        padding: 130px var(--gutter) 40px;
        color: var(--cream);
        max-width: var(--max-w);
        margin: 0 auto;
        min-height: calc(100vh - 80px);
        align-content: center;
      }
      @media (max-width: 900px) {
        .fs-menu-grid { grid-template-columns: 1fr; gap: 24px; padding-top: 110px; align-content: start; }
      }

      .fs-menu-list {
        display: flex; flex-direction: column;
      }
      .fs-menu-item {
        display: grid;
        grid-template-columns: 56px 1fr auto;
        align-items: center;
        gap: 20px;
        padding: 10px 0;
        border-bottom: 1px solid var(--rule-on-dark);
        font-family: var(--display);
        font-weight: 700;
        font-size: clamp(28px, 4.6vw, 58px);
        line-height: 1.05;
        letter-spacing: -0.02em;
        color: var(--cream);
        transition: opacity .35s var(--ease), color .25s, transform .5s var(--ease);
        cursor: pointer;
        opacity: 0;
        transform: translateY(40px);
      }
      /* Tighter on shorter viewports so all seven items + side blocks fit */
      @media (max-height: 800px) {
        .fs-menu-grid { padding-top: 100px; padding-bottom: 24px; min-height: calc(100vh - 70px); }
        .fs-menu-item { font-size: clamp(24px, 3.6vw, 44px); padding: 6px 0; gap: 16px; }
        .fs-menu-num { padding-top: 10px; font-size: 12px; }
      }
      .fs-menu.is-open .fs-menu-item {
        opacity: 1;
        transform: translateY(0);
        transition-delay: calc(0.2s + var(--i) * 0.05s);
      }
      .fs-menu-item.is-dimmed { opacity: 0.35; }
      .fs-menu-item:hover { color: var(--gold); }
      .fs-menu-item.is-current .fs-menu-label { font-style: italic; font-family: var(--serif); font-weight: 400; }
      .fs-menu-item.is-current { color: var(--gold); }
      .fs-menu-num {
        font-family: var(--display);
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.12em;
        color: rgba(244,239,230,0.45);
        align-self: start;
        padding-top: 18px;
      }
      .fs-menu-arrow {
        font-family: var(--display);
        font-size: 22px;
        color: rgba(244,239,230,0.4);
        transition: transform .4s var(--ease), color .25s;
      }
      .fs-menu-item:hover .fs-menu-arrow { color: var(--gold); transform: translateX(8px); }

      .fs-menu-side {
        display: flex; flex-direction: column; gap: 28px;
        align-self: center;
        opacity: 0;
        transition: opacity .6s var(--ease) .5s;
      }
      @media (max-width: 900px) { .fs-menu-side { align-self: start; } }
      .fs-menu.is-open .fs-menu-side { opacity: 1; }
      .fs-menu-side .eyebrow .num { color: var(--gold); }

      .fs-menu-socials {
        list-style: none; padding: 0; margin: 8px 0 0;
        display: grid; gap: 10px;
        font-family: var(--display);
        font-size: 14px;
      }
      .fs-menu-socials li {
        display: flex; justify-content: space-between; align-items: baseline;
        color: rgba(244,239,230,0.6);
      }
      .fs-menu-socials li a { color: var(--cream); }

      .fs-menu-footer {
        position: relative;
        max-width: var(--max-w);
        margin: 0 auto;
        padding: 16px var(--gutter) 28px;
        display: flex; justify-content: space-between;
        font-family: var(--display);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: rgba(244,239,230,0.55);
        opacity: 0;
        transition: opacity .6s var(--ease) .7s;
        gap: 16px;
        flex-wrap: wrap;
      }
      .fs-menu-footer .serif-italic { text-transform: none; letter-spacing: 0; font-size: 14px; color: var(--gold); }
      .fs-menu.is-open .fs-menu-footer { opacity: 1; }
      @media (max-width: 700px) { .fs-menu-footer { font-size: 9px; gap: 8px; } .fs-menu-footer .serif-italic { display: none; } }
    `}</style>
  );
}

Object.assign(window, { TopBar, FullscreenMenu, NAV_ITEMS, openMenu, closeMenu });
