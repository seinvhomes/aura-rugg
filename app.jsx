/* global React, ReactDOM */
/* eslint-disable no-undef */

// ── Tweak defaults (persisted via host) ─────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "galleryLayout": "editorial"
}/*EDITMODE-END*/;

// ── Cart context ─────────────────────────────────────────────────────
const CartContext = React.createContext(null);
const useCart = () => React.useContext(CartContext);

function CartProvider({ children }) {
  const [items, setItems] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem("nemo.cart") || "[]"); } catch { return []; }
  });
  const [open, setOpen] = React.useState(false);
  const [pulse, setPulse] = React.useState(0);

  React.useEffect(() => {
    try { localStorage.setItem("nemo.cart", JSON.stringify(items)); } catch {}
  }, [items]);

  React.useEffect(() => {
    document.body.classList.toggle("cart-open", open);
  }, [open]);

  const add = React.useCallback((p, opts = {}) => {
    setItems((prev) => {
      const key = p.id + "::" + (opts.variant || "");
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) => i.key === key ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...p, key, variant: opts.variant || null, qty: 1 }];
    });
    setPulse((p) => p + 1);
  }, []);

  const remove = React.useCallback((key) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }, []);

  const setQty = React.useCallback((key, qty) => {
    if (qty <= 0) { remove(key); return; }
    setItems((prev) => prev.map((i) => i.key === key ? { ...i, qty } : i));
  }, [remove]);

  const clear = React.useCallback(() => setItems([]), []);

  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <CartContext.Provider value={{ items, count, subtotal, add, remove, setQty, clear, open, setOpen, pulse }}>
      {children}
    </CartContext.Provider>
  );
}

// ── Toast ────────────────────────────────────────────────────────────
const ToastContext = React.createContext(null);
const useToast = () => React.useContext(ToastContext);

function ToastProvider({ children }) {
  const [list, setList] = React.useState([]);
  const push = React.useCallback((msg, kind = "ok") => {
    const id = Date.now() + Math.random();
    setList((l) => [...l, { id, msg, kind }]);
    setTimeout(() => setList((l) => l.filter((t) => t.id !== id)), 3200);
  }, []);
  return (
    <ToastContext.Provider value={push}>
      {children}
      <div className="toast-stack" aria-live="polite">
        {list.map((t) => (
          <div key={t.id} className={"toast toast--" + t.kind}>{t.msg}</div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// ── Reveal-on-scroll wrapper ─────────────────────────────────────────
function Reveal({ as = "div", stagger = false, className = "", delay = 0, children, ...rest }) {
  const ref = React.useRef(null);
  const Tag = as;
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("in"), delay);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <Tag ref={ref} className={(stagger ? "reveal-stagger " : "reveal ") + className} {...rest}>
      {children}
    </Tag>
  );
}

// ── Router ───────────────────────────────────────────────────────────
const ROUTES = ["home", "gallery", "shop", "about", "vision", "process", "contact"];
const RouteContext = React.createContext(null);
const useRoute = () => React.useContext(RouteContext);

function RouterProvider({ children }) {
  const initial = () => {
    const h = (window.location.hash || "#home").replace("#", "");
    return ROUTES.includes(h) ? h : "home";
  };
  const [route, setRouteState] = React.useState(initial);
  const [transitioning, setTransitioning] = React.useState(false);

  const setRoute = React.useCallback((next) => {
    if (next === route) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setTransitioning(true);
    setTimeout(() => {
      setRouteState(next);
      window.location.hash = next;
      window.scrollTo({ top: 0, behavior: "auto" });
      setTransitioning(false);
    }, 280);
  }, [route]);

  React.useEffect(() => {
    const onHash = () => {
      const h = (window.location.hash || "#home").replace("#", "");
      if (ROUTES.includes(h)) setRouteState(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <RouteContext.Provider value={{ route, setRoute, transitioning }}>
      {children}
    </RouteContext.Provider>
  );
}

// ── Pages map ────────────────────────────────────────────────────────
function PageHost() {
  const { route, transitioning } = useRoute();
  const Page = {
    home: window.HomePage,
    gallery: window.GalleryPage,
    shop: window.ShopPage,
    about: window.AboutPage,
    vision: window.VisionPage,
    process: window.ProcessPage,
    contact: window.ContactPage,
  }[route] || window.HomePage;

  return (
    <main
      key={route}
      data-screen-label={`${pageLabel(route)}`}
      className={"page-host " + (transitioning ? "is-leaving" : "page-enter")}
    >
      <Page />
    </main>
  );
}

function pageLabel(r) {
  const i = ROUTES.indexOf(r);
  const map = { home: "Home", gallery: "Collection", shop: "Shop", about: "Studio", vision: "Vision", process: "How It's Made", contact: "Commission" };
  return `${String(i + 1).padStart(2, "0")} ${map[r] || r}`;
}

// ── App ──────────────────────────────────────────────────────────────
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Components are defined in other Babel files; each file exports to
  // window, so reference them through window so Babel doesn't fail on
  // bare identifiers at compile time.
  const TopBar         = window.TopBar;
  const FullscreenMenu = window.FullscreenMenu;
  const SiteFooter     = window.SiteFooter;
  const CartDrawer     = window.CartDrawer;

  return (
    <TweaksContext.Provider value={{ tweaks, setTweak }}>
      <RouterProvider>
        <ToastProvider>
          <CartProvider>
            <TopBar />
            <FullscreenMenu />
            <PageHost />
            <SiteFooter />
            <CartDrawer />
            <TweaksPanel title="Tweaks">
              <TweakSection label="Gallery layout">
                <TweakRadio
                  label="Style"
                  value={tweaks.galleryLayout}
                  options={[
                    { value: "masonry",   label: "Masonry" },
                    { value: "uniform",   label: "Uniform" },
                    { value: "editorial", label: "Editorial" },
                  ]}
                  onChange={(v) => setTweak("galleryLayout", v)}
                />
              </TweakSection>
            </TweaksPanel>
          </CartProvider>
        </ToastProvider>
      </RouterProvider>
    </TweaksContext.Provider>
  );
}

const TweaksContext = React.createContext({ tweaks: TWEAK_DEFAULTS, setTweak: () => {} });
const useTweakValues = () => React.useContext(TweaksContext);

// Export Reveal and contexts for other Babel files
Object.assign(window, {
  CartContext, useCart, CartProvider,
  ToastContext, useToast, ToastProvider,
  RouteContext, useRoute, RouterProvider,
  TweaksContext, useTweakValues,
  Reveal,
  ROUTES, pageLabel,
});

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
