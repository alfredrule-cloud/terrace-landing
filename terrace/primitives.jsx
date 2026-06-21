/* ============================================================
   TERRACE LANDING — primitives, motion helpers + content data
   Scarf motifs are bespoke to this concept (not in the DS bundle).
   Buttons / tags / icons / section labels compose with the
   Terrace design-system bundle (window.WButton / WTag / WIcon /
   SectionLabel), which is loaded before this file.
   ============================================================ */

const { useState, useEffect, useRef, createContext, useContext } = React;

/* Motion level shared across the tree: 'off' | 'subtle' | 'lively' */
const MotionContext = createContext('lively');
/* Scarf-band density: 'subtle' | 'bold' */
const DensityContext = createContext('bold');
const DENSITY_FACTOR = { subtle: 0.55, bold: 1 };
const prefersReduced = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------- Shared reveal manager ----------------
   Polls layout on a timer + scroll. Works even when rAF /
   IntersectionObserver are throttled (offscreen iframes),
   so content is never left invisible. */
const _revealQueue = [];
let _revealTimer = null;
function _revealTick() {
  const vh = window.innerHeight || document.documentElement.clientHeight || 800;
  for (let i = _revealQueue.length - 1; i >= 0; i--) {
    const item = _revealQueue[i];
    const r = item.el.getBoundingClientRect();
    if (r.top < vh * (item.frac || 0.92) && r.bottom > 0) {
      _revealQueue.splice(i, 1);
      try { item.cb(); } catch (e) {}
    }
  }
  if (_revealQueue.length === 0 && _revealTimer) {
    clearInterval(_revealTimer); _revealTimer = null;
    window.removeEventListener('scroll', _revealTick);
    window.removeEventListener('resize', _revealTick);
  }
}
function registerReveal(el, cb, frac) {
  const item = { el, cb, frac };
  _revealQueue.push(item);
  if (!_revealTimer) {
    _revealTimer = setInterval(_revealTick, 140);
    window.addEventListener('scroll', _revealTick, { passive: true });
    window.addEventListener('resize', _revealTick, { passive: true });
  }
  setTimeout(_revealTick, 0);
  return () => {
    const idx = _revealQueue.indexOf(item);
    if (idx >= 0) _revealQueue.splice(idx, 1);
  };
}

/* ---------------- Lucide icon (defensive about node format) ---------------- */
function toPascal(s) {
  return String(s).replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
}
function Icon({ name, size = 22, stroke = 2, color = 'currentColor', style = {} }) {
  const lib = (window.lucide && window.lucide.icons) || window.lucide || {};
  const data = lib[name] || lib[toPascal(name)];
  let nodes = [];
  if (Array.isArray(data) && Array.isArray(data[0])) nodes = data;            // [[tag,attrs],...]
  else if (Array.isArray(data) && Array.isArray(data[2])) nodes = data[2];    // [tag,attrs,[children]]
  if (!nodes.length) {
    return <span style={{ display: 'inline-block', width: size, height: size, ...style }} />;
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
         strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style}>
      {nodes.map((n, i) => React.createElement(n[0], { key: i, ...n[1] }))}
    </svg>
  );
}

/* ---------------- Crest (real asset) ---------------- */
function Crest({ size = 36, variant = 'claret', style = {} }) {
  const src =
    variant === 'cream' ? 'assets/terrace-crest-cream.svg'
    : variant === 'app' ? 'assets/terrace-app-icon-green.svg'
    : 'assets/terrace-crest.svg';
  return <img src={src} width={size} height={size} alt="Terrace crest" style={{ display: 'block', ...style }} />;
}

/* ---------------- Scarf-knit band (the signature divider) ----------------
   Vertical claret/cream/mustard/green bars. Optionally drifts sideways. */
const SCARF_STRIPES = ['#7A1F2B', '#F3EBDD', '#7A1F2B', '#E0A52E', '#1F3D2B', '#E0A52E', '#7A1F2B', '#F3EBDD', '#7A1F2B'];

function scarfGradient(unit) {
  const stops = SCARF_STRIPES.map((c, i) => `${c} ${i * unit}px ${(i + 1) * unit}px`).join(',');
  return `repeating-linear-gradient(90deg, ${stops})`;
}

function ScarfBand({ height = 20, unit = 46, speed = 26, reverse = false, style = {} }) {
  const motion = useContext(MotionContext);
  const density = useContext(DensityContext);
  const f = DENSITY_FACTOR[density] != null ? DENSITY_FACTOR[density] : 1;
  height = Math.max(5, Math.round(height * f));
  const animate = motion === 'lively';
  const period = SCARF_STRIPES.length * unit;
  return (
    <div
      className={animate ? 'scarf-anim' : ''}
      aria-hidden="true"
      style={{
        height, width: '100%',
        backgroundImage: scarfGradient(unit),
        backgroundSize: `${period}px 100%`,
        backgroundRepeat: 'repeat',
        '--scarf-period': `${period}px`,
        '--scarf-dur': `${speed}s`,
        animationDirection: reverse ? 'reverse' : 'normal',
        ...style,
      }}
    />
  );
}

/* knit-texture block background (for merch-y panels) */
function ScarfKnit({ children, style = {} }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden',
      background: 'repeating-linear-gradient(135deg,#7A1F2B 0 14px,#8E2A37 14px 28px)', ...style }}>
      <div style={{ position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(45deg, rgba(243,235,221,0.05) 0 7px, transparent 7px 14px)' }} />
      {children}
    </div>
  );
}

/* ---------------- Crash-barrier rail with two mustard rivets ---------------- */
function BarrierRail({ color = 'var(--claret-700)', rivet = 'var(--mustard-500)', style = {} }) {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 14, ...style }} aria-hidden="true">
      <span style={{ width: 9, height: 9, borderRadius: 9, background: rivet, flex: '0 0 9px' }} />
      <span style={{ flex: 1, height: 3, background: color, display: 'block' }} />
      <span style={{ width: 9, height: 9, borderRadius: 9, background: rivet, flex: '0 0 9px' }} />
    </div>
  );
}

/* ---------------- Scroll reveal (fade + rise) ----------------
   Honours motion level + prefers-reduced-motion. */
function Reveal({ children, delay = 0, y = 10, as = 'div', style = {}, ...rest }) {
  const motion = useContext(MotionContext);
  const ref = useRef(null);
  const enabled = motion !== 'off' && !prefersReduced();
  const [shown, setShown] = useState(!enabled);

  useEffect(() => {
    if (!enabled) { setShown(true); return; }
    const el = ref.current;
    if (!el) return;
    return registerReveal(el, () => setShown(true), 0.94);
  }, [enabled]);

  const Tag = as;
  return (
    <Tag ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translateY(${y}px)`,
      transition: enabled ? `opacity .55s ease, transform .55s cubic-bezier(.2,.7,.3,1)` : 'none',
      transitionDelay: `${delay}ms`,
      ...style,
    }} {...rest}>{children}</Tag>
  );
}

/* ---------------- Count-up number ----------------
   Animates 0 → value when scrolled into view. */
function Counter({ value, suffix = '', prefix = '', comma = false, duration = 1300, style = {} }) {
  const motion = useContext(MotionContext);
  const enabled = motion !== 'off' && !prefersReduced();
  const ref = useRef(null);
  const [n, setN] = useState(enabled ? 0 : value);

  useEffect(() => {
    if (!enabled) { setN(value); return; }
    const el = ref.current;
    if (!el) return;
    let timer;
    const run = () => {
      const t0 = Date.now();
      timer = setInterval(() => {
        const p = Math.min(1, (Date.now() - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(eased * value));
        if (p >= 1) { clearInterval(timer); timer = null; }
      }, 32);
    };
    const unreg = registerReveal(el, run, 0.92);
    return () => { unreg(); if (timer) clearInterval(timer); };
  }, [enabled, value, duration]);

  const text = comma ? n.toLocaleString('en-GB') : String(n);
  return <span ref={ref} style={style}>{prefix}{text}{suffix}</span>;
}

/* ---------------- CONTENT DATA ---------------- */
const STATS = [
  { value: 1400, suffix: '+', comma: true, label: 'Grounds mapped' },
  { value: 92, label: 'The famous 92' },
  { value: 38, suffix: 'k', label: 'Members standing' },
  { static: 'Tier 1–10', label: 'The whole pyramid' },
];

const FEATURES = [
  { icon: 'map-pin', name: 'Discover', line: 'Every ground in the pyramid, mapped.',
    body: 'Fixtures, kick-off, how to get there, the legendary pie and the away-end notes. The definitive guide to where to go.' },
  { icon: 'medal', name: 'Collect', line: 'Log the grounds. Earn the badges.',
    body: 'Watch your map fill in as you tick them off — the famous 92, regions, tiers and milestones. The away day in the rain is the badge of honour.' },
  { icon: 'route', name: 'Plan', line: 'The away day, end to end.',
    body: 'Train times, the right pub, a shareable itinerary. Build the whole day in a couple of taps and send it to the group.' },
  { icon: 'users', name: 'Belong', line: 'Find your people at the back.',
    body: 'Fan profiles, club groups and matchday meet-ups, plus a feed where the away day becomes the content. Everyone’s welcome.' },
  { icon: 'book-open', name: 'Read', line: 'Football, the way it was meant to feel.',
    body: 'Curated editorial celebrating non-league culture — photo essays, ground reviews and a hundred years of club history.' },
  { icon: 'shirt', name: 'Wear', line: 'The brand you can wear to the game.',
    body: 'Retro scarves, tees, enamel badges, programmes and co-branded club drops. Turn up looking the part.' },
];

const PRICING = [
  { name: 'Matchday', price: 'Free', per: '', blurb: 'The hook. Everything you need to get standing.',
    features: ['The map & fixtures', 'Log grounds & basic badges', 'The feed & club groups', 'Read free editorial'],
    cta: 'Join free', featured: false },
  { name: 'Season Ticket', price: '£6', per: '/mo', blurb: 'For the ones who never miss. Billed yearly, cancel anytime.',
    features: ['Everything in Matchday', 'Full ground guides & away-day notes', 'Trip planner & shareable itineraries', 'All badges + members’ editorial', 'Ad-free · 10% off the shop'],
    cta: 'Get Season Ticket', featured: true },
];

const TESTIMONIALS = [
  { kind: 'Fan', quote: '147 grounds. Still counting. Terrace turned a Saturday habit into the best thing I do all week.',
    name: 'Danny Fairbrother', meta: 'Groundhopper · Stockport' },
  { kind: 'Club', quote: 'More away fans have found us this season than in the last five put together. They came because of Terrace.',
    name: 'Marsh Lane FC', meta: 'Tier 8 · est. 1903' },
  { kind: 'Press', quote: 'The first football app that actually gets what the bottom of the pyramid is about. Roots over riches, and they mean it.',
    name: 'When Saturday Comes', meta: 'Football culture, since 1986' },
  { kind: 'Fan', quote: 'Met my whole matchday crew in a club group. Now we do an away day a month, rain or shine. Bring a flask.',
    name: 'Priya Sandhu', meta: 'Member · Walthamstow' },
  { kind: 'Club', quote: 'Our co-branded scarf drop sold out in a weekend. Proper community, proper kit, proper money back into the club.',
    name: 'Sporting Vale', meta: 'Tier 6 · supporters’ trust' },
  { kind: 'Press', quote: 'Anti-plastic, anti-corporate, unmistakably for the fans. The away end finally has a home screen.',
    name: 'The Non-League Paper', meta: 'Every club below the EFL' },
];

const NAV_LINKS = ['Discover', 'Collect', 'Plan', 'Read', 'Shop'];

/* Evocative non-league club names for the scarf marquee */
const CLUBS = [
  'Marsh Lane FC', 'Sporting Vale', 'Old Road Athletic', 'Brackenfield Town',
  'Hollow Pit Rovers', 'Stanley United', 'Cawdor Heath', 'Riverside Albion',
  'Pennine Wanderers', 'Cobblers End', 'Tannery Park FC', 'North Wall Mariners',
  'Ferry Road FC', 'Kestrel Vale', 'Albion Mills', 'Greystones Town',
];

/* Headline variants (tweakable) */
const HEADLINES = {
  'back': 'For the ones who\nstand at the back',
  'glory': 'Glory’s\noverrated.',
  'roots': 'Football\nat the roots',
};

Object.assign(window, {
  MotionContext, DensityContext, prefersReduced, registerReveal,
  Icon, Crest, ScarfBand, ScarfKnit, BarrierRail, Reveal, Counter,
  STATS, FEATURES, PRICING, TESTIMONIALS, NAV_LINKS, CLUBS, HEADLINES,
});
