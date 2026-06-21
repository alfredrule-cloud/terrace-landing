/* ============================================================
   TERRACE LANDING — sections
   Composes DS bundle primitives (WButton, WTag, SectionLabel)
   with the bespoke scarf motifs from primitives.jsx.
   ============================================================ */

const {
  Icon: TIcon, Crest: TCrest, ScarfBand: TScarfBand, ScarfKnit: TScarfKnit,
  BarrierRail: TBarrierRail, Reveal: TReveal, Counter: TCounter,
  STATS: TSTATS, FEATURES: TFEATURES, PRICING: TPRICING,
  TESTIMONIALS: TTESTI, NAV_LINKS: TNAV, CLUBS: TCLUBS, HEADLINES: THEADS,
} = window;

const WBtn = window.WButton;
const WTagC = window.WTag;
const SectionLabelC = window.SectionLabel;

const MAXW = 1180;
const accentVar = (accent) => (accent === 'green' ? 'var(--green-600)' : 'var(--mustard-500)');
const accentOn = (accent) => (accent === 'green' ? 'var(--cream)' : 'var(--ink)');

/* ---------------- NAV ---------------- */
function Nav({ onJoin }) {
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: 28, padding: '16px 48px',
      background: 'rgba(243,235,221,0.86)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--hairline)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
        <TCrest size={44} variant="claret" />
        <span style={{ font: '400 40px/1 var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--ink)' }}>Terrace</span>
      </div>
      <nav style={{ display: 'flex', gap: 24, marginLeft: 'auto' }} className="tc-navlinks">
        {TNAV.map(l => <a key={l} href="#" style={{ font: '500 14px/1 var(--font-body)', color: 'var(--fg2)', textDecoration: 'none' }}>{l}</a>)}
      </nav>
      <div style={{ marginLeft: 28, display: 'flex', gap: 14, alignItems: 'center' }}>
        <a href="#" style={{ font: '500 14px/1 var(--font-body)', color: 'var(--fg1)', textDecoration: 'none' }}>Log in</a>
        <WBtn tone="primary" size="sm" onClick={onJoin}>Join free</WBtn>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ headline, accent, onJoin }) {
  const motion = React.useContext(window.MotionContext);
  const sway = motion === 'lively' && !window.prefersReduced();
  const lines = (THEADS[headline] || THEADS.back).split('\n');
  return (
    <section style={{ padding: '60px 24px 68px', textAlign: 'center', maxWidth: 1000, margin: '0 auto' }}>
      <TReveal><WTagC tone="claret" style={{ marginBottom: 26, letterSpacing: '0.16em', padding: '7px 13px' }}>The home of non-league</WTagC></TReveal>

      <TReveal delay={60}>
        <div className={sway ? 'scarf-hero scarf-sway' : 'scarf-hero'}
          style={{ borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', margin: '0 auto', maxWidth: 900 }}>
          <TScarfBand height={22} unit={50} />
          <div style={{ background: 'var(--claret-700)', padding: '46px 32px 50px', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.10,
              backgroundImage: 'radial-gradient(rgba(243,235,221,0.9) 0.7px, transparent 0.8px)', backgroundSize: '5px 5px' }} />
            <h1 style={{ font: '400 clamp(54px,7.2vw,116px)/0.84 var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.015em', color: 'var(--cream)', margin: 0, position: 'relative' }}>
              {lines.map((ln, i) => <React.Fragment key={i}>{ln}{i < lines.length - 1 && <br />}</React.Fragment>)}
            </h1>
          </div>
          <TScarfBand height={22} unit={50} reverse />
        </div>
      </TReveal>

      <TReveal delay={120}>
        <p style={{ font: '400 18px/1.6 var(--font-body)', color: 'var(--fg2)', maxWidth: 580, margin: '34px auto 0' }}>
          Part away-day planner, part ground-collector, part matchday social club — with a kit you’ll actually want to wear. Terrace is the fan club for the other 95% of the game.
        </p>
      </TReveal>

      <TReveal delay={180}>
        <div className="tc-hero-cta" style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 30, flexWrap: 'wrap' }}>
          <WBtn tone="primary" size="lg" icon="arrow-right" onClick={onJoin}>Join Terrace — it’s free</WBtn>
          <WBtn tone="outline" size="lg" icon="shopping-bag">Visit the shop</WBtn>
        </div>
      </TReveal>

      <TReveal delay={120}>
        <div className="tc-stats" style={{ display: 'flex', gap: 48, justifyContent: 'center', marginTop: 50, flexWrap: 'wrap' }}>
          {TSTATS.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ font: '400 46px/0.9 var(--font-display)', color: 'var(--claret-700)' }}>
                {s.static ? s.static : <TCounter value={s.value} suffix={s.suffix || ''} comma={!!s.comma} />}
              </div>
              <div style={{ font: '500 11px/1.3 var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--fg3)', marginTop: 7 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </TReveal>
    </section>
  );
}

/* ---------------- FEATURES — "Knit into one club" ---------------- */
function Features({ accent }) {
  return (
    <section style={{ background: 'var(--paper-100)', padding: '78px 24px' }}>
      <div style={{ maxWidth: MAXW, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 46 }}>
          <TReveal style={{ display: 'flex', justifyContent: 'center' }}><SectionLabelC>What you get</SectionLabelC></TReveal>
          <TReveal delay={60}><h2 style={{ font: '400 clamp(38px,4.6vw,64px)/0.92 var(--font-display)', textTransform: 'uppercase', color: 'var(--ink)', margin: '4px 0 0' }}>Knit into one club</h2></TReveal>
        </div>
        <div className="tc-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {TFEATURES.map((f, i) => (
            <TReveal key={f.name} delay={(i % 3) * 70}>
              <div className="tc-card" style={{ background: 'var(--bg-raised)', border: '1px solid var(--hairline)', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-card)', height: '100%' }}>
                <TScarfBand height={9} unit={26} />
                <div style={{ padding: '24px 24px 26px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 11, background: 'var(--claret-100)', display: 'grid', placeItems: 'center', flex: '0 0 44px' }}>
                      <TIcon name={f.icon} size={21} color="var(--claret-700)" />
                    </div>
                    <span style={{ font: '400 32px/0.95 var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.01em', color: 'var(--ink)' }}>{f.name}</span>
                  </div>
                  <p style={{ font: '600 16px/1.4 var(--font-body)', color: 'var(--fg1)', margin: '0 0 6px' }}>{f.line}</p>
                  <p style={{ font: '400 14px/1.55 var(--font-body)', color: 'var(--fg2)', margin: 0 }}>{f.body}</p>
                </div>
              </div>
            </TReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- THE 92 — live map fill-in ---------------- */
/* fixed pseudo-random scatter for the map field */
const PIN_POSITIONS = (() => {
  const pts = [];
  let seed = 7;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  for (let i = 0; i < 52; i++) pts.push([8 + rnd() * 84, 10 + rnd() * 78]);
  return pts;
})();

function MapField({ accent }) {
  const motion = React.useContext(window.MotionContext);
  const enabled = motion !== 'off' && !window.prefersReduced();
  const ref = React.useRef(null);
  const [go, setGo] = React.useState(!enabled);
  React.useEffect(() => {
    if (!enabled) { setGo(true); return; }
    const el = ref.current; if (!el) return;
    return window.registerReveal(el, () => setGo(true), 0.85);
  }, [enabled]);
  const ring = accent === 'green' ? 'var(--green-500)' : 'var(--mustard-500)';
  return (
    <div ref={ref} style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 16, overflow: 'hidden',
      background: 'linear-gradient(160deg,#18301F 0%,#1F3D2B 55%,#142418 100%)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(243,235,221,0.10)' }}>
      {/* grain + map grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.16, backgroundImage: 'radial-gradient(rgba(243,235,221,0.8) 0.6px, transparent 0.7px)', backgroundSize: '4px 4px' }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.13, backgroundImage: 'linear-gradient(rgba(243,235,221,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(243,235,221,0.6) 1px,transparent 1px)', backgroundSize: '54px 48px' }} />
      <div style={{ position: 'absolute', top: 16, left: 18, font: '600 11px/1 var(--font-mono)', letterSpacing: '0.12em', color: 'rgba(243,235,221,0.55)', textTransform: 'uppercase' }}>The pyramid · live</div>
      {/* pins */}
      {PIN_POSITIONS.map(([x, y], i) => (
        <span key={i} style={{
          position: 'absolute', left: `${x}%`, top: `${y}%`, width: 13, height: 13, borderRadius: 999,
          background: 'var(--claret-600)', border: `2px solid ${ring}`, boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
          transform: go ? 'translate(-50%,-50%) scale(1)' : 'translate(-50%,-50%) scale(0)',
          opacity: go ? 1 : 0,
          transition: enabled ? 'transform .42s cubic-bezier(.2,1.3,.4,1), opacity .3s ease' : 'none',
          transitionDelay: `${(i * 38)}ms`,
        }} />
      ))}
      {/* counter chip */}
      <div style={{ position: 'absolute', right: 16, bottom: 16, background: 'rgba(22,19,17,0.55)', backdropFilter: 'blur(4px)', borderRadius: 12, padding: '12px 16px', textAlign: 'right' }}>
        <div style={{ font: '400 52px/0.85 var(--font-display)', color: ring }}>
          <TCounter value={52} duration={2000} /><span style={{ color: 'rgba(243,235,221,0.55)', fontSize: 26 }}> / 92</span>
        </div>
        <div style={{ font: '500 10px/1.2 var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(243,235,221,0.7)', marginTop: 4 }}>Grounds you’ve stood at</div>
      </div>
    </div>
  );
}

function MapMoment({ accent }) {
  const tiers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  return (
    <section style={{ background: 'var(--paper)', padding: '78px 24px' }}>
      <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 56, alignItems: 'center' }} className="tc-map-grid">
        <div>
          <TReveal><SectionLabelC>Collect</SectionLabelC></TReveal>
          <TReveal delay={50}><h2 style={{ font: '400 clamp(38px,4.6vw,66px)/0.92 var(--font-display)', textTransform: 'uppercase', color: 'var(--ink)', margin: '4px 0 16px' }}>Watch your<br />map fill in</h2></TReveal>
          <TReveal delay={100}><p style={{ font: '400 17px/1.6 var(--font-body)', color: 'var(--fg2)', maxWidth: 460, margin: '0 0 22px' }}>
            Log every ground you stand at and watch the pyramid light up. The famous 92, the regions, the tiers — and the badges that say you were there. Glory’s overrated. The away day in the rain is the badge of honour.
          </p></TReveal>
          <TReveal delay={140}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 26 }}>
              {tiers.map(t => (
                <span key={t} style={{ font: '600 12px/1 var(--font-body)', letterSpacing: '0.04em', color: 'var(--fg2)', background: 'var(--bg-raised)', border: '1px solid var(--hairline)', borderRadius: 999, padding: '8px 12px' }}>Tier {t}</span>
              ))}
            </div>
          </TReveal>
          <TReveal delay={180}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
              <span style={{ font: '400 64px/0.85 var(--font-display)', color: 'var(--claret-700)' }}><TCounter value={1400} suffix="+" comma duration={1700} /></span>
              <span style={{ font: '500 14px/1.3 var(--font-body)', color: 'var(--fg3)', textTransform: 'uppercase', letterSpacing: '0.1em', maxWidth: 150 }}>grounds mapped, and counting</span>
            </div>
          </TReveal>
        </div>
        <TReveal delay={80}><MapField accent={accent} /></TReveal>
      </div>
    </section>
  );
}

/* ---------------- CLUB MARQUEE (scrolling scarf) ---------------- */
function MarqueeRow({ items, reverse, accent }) {
  const motion = React.useContext(window.MotionContext);
  const animate = motion === 'lively' && !window.prefersReduced();
  const dot = accent === 'green' ? 'var(--green-500)' : 'var(--mustard-500)';
  const nameStyle = { font: '400 30px/1 var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--cream)', whiteSpace: 'nowrap' };

  if (!animate) {
    return (
      <div style={{ textAlign: 'center', padding: '8px 24px', maxWidth: 1080, margin: '0 auto', lineHeight: 1.8 }}>
        {items.map((c, i) => (
          <span key={i} style={{ whiteSpace: 'nowrap' }}>
            <span style={nameStyle}>{c}</span>
            <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 999, background: dot, margin: '0 20px', verticalAlign: 'middle' }} />
          </span>
        ))}
      </div>
    );
  }

  const doubled = items.concat(items);
  return (
    <div style={{ overflow: 'hidden', display: 'flex', maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)' }}>
      <div className={reverse ? 'tc-marquee tc-marquee-rev' : 'tc-marquee'}
        style={{ display: 'flex', alignItems: 'center', gap: 28, padding: '14px 14px', whiteSpace: 'nowrap', flexShrink: 0 }}>
        {doubled.map((c, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 28, flex: '0 0 auto' }}>
            <span style={nameStyle}>{c}</span>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: dot, flex: '0 0 8px' }} />
          </span>
        ))}
      </div>
    </div>
  );
}

function ClubMarquee({ accent }) {
  const motion = React.useContext(window.MotionContext);
  const animate = motion === 'lively' && !window.prefersReduced();
  const half = Math.ceil(TCLUBS.length / 2);
  return (
    <section style={{ background: 'var(--claret-800)', padding: '22px 0 24px', position: 'relative' }}>
      <div style={{ maxWidth: 720, margin: '0 auto 14px', textAlign: 'center', padding: '0 24px' }}>
        <span style={{ font: '600 12px/1.4 var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(243,235,221,0.62)' }}>Every club below the EFL · and proud of it</span>
      </div>
      {animate ? (
        <React.Fragment>
          <MarqueeRow items={TCLUBS.slice(0, half)} accent={accent} />
          <MarqueeRow items={TCLUBS.slice(half)} accent={accent} reverse />
        </React.Fragment>
      ) : (
        <MarqueeRow items={TCLUBS} accent={accent} />
      )}
    </section>
  );
}

/* ---------------- PRICING — "Stand with us" ---------------- */
function Pricing({ onJoin }) {
  return (
    <section style={{ background: 'var(--paper)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 42 }}>
          <TReveal style={{ display: 'flex', justifyContent: 'center' }}><SectionLabelC>Membership</SectionLabelC></TReveal>
          <TReveal delay={50}><h2 style={{ font: '400 clamp(38px,4.4vw,60px)/0.95 var(--font-display)', textTransform: 'uppercase', color: 'var(--ink)', margin: '4px 0 12px' }}>Stand with us</h2></TReveal>
          <TReveal delay={90}><p style={{ font: '400 16px/1.6 var(--font-body)', color: 'var(--fg2)', maxWidth: 480, margin: '0 auto' }}>
            Every membership helps get more people through more turnstiles, at more grounds. Members get 10% off every scarf, too.
          </p></TReveal>
        </div>
        <div className="tc-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {TPRICING.map((tier, idx) => {
            const deep = tier.featured;
            return (
              <TReveal key={tier.name} delay={idx * 80}>
                <div style={{ borderRadius: 18, overflow: 'hidden', boxShadow: deep ? 'var(--shadow-lg)' : 'var(--shadow-card)', border: '1px solid ' + (deep ? 'var(--claret-600)' : 'var(--hairline)'), height: '100%' }}>
                  {deep && <TScarfBand height={14} unit={34} />}
                  <div style={{ background: deep ? 'var(--claret-800)' : 'var(--bg-raised)', padding: '30px 28px', position: 'relative' }}>
                    {deep && <div style={{ position: 'absolute', top: 26, right: 26 }}><WTagC tone="mustard">Most popular</WTagC></div>}
                    <div style={{ font: '400 32px/1 var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.02em', color: deep ? 'var(--cream)' : 'var(--ink)' }}>{tier.name}</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, margin: '12px 0 6px' }}>
                      <span style={{ font: '400 56px/0.88 var(--font-display)', color: deep ? 'var(--mustard-500)' : 'var(--claret-700)' }}>{tier.price}</span>
                      {tier.per && <span style={{ font: '500 15px/1 var(--font-body)', color: deep ? 'rgba(243,235,221,0.7)' : 'var(--fg3)' }}>{tier.per}</span>}
                    </div>
                    <p style={{ font: '400 14px/1.5 var(--font-body)', color: deep ? 'rgba(243,235,221,0.72)' : 'var(--fg3)', margin: '0 0 20px' }}>{tier.blurb}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 24 }}>
                      {tier.features.map(f => (
                        <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <TIcon name="check" size={17} stroke={2.6} color={deep ? 'var(--mustard-500)' : 'var(--claret-700)'} style={{ marginTop: 2, flex: '0 0 17px' }} />
                          <span style={{ font: '400 15px/1.4 var(--font-body)', color: deep ? 'rgba(243,235,221,0.92)' : 'var(--fg1)' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <WBtn tone={deep ? 'accent' : 'outline'} size="md" style={{ width: '100%' }} onClick={onJoin}>{tier.cta}</WBtn>
                  </div>
                  {deep && <TScarfBand height={14} unit={34} reverse />}
                </div>
              </TReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS — "Worn with pride" ---------------- */
function Testimonials() {
  return (
    <section style={{ background: 'var(--paper-100)', padding: '80px 24px' }}>
      <div style={{ maxWidth: MAXW, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <TReveal style={{ display: 'flex', justifyContent: 'center' }}><SectionLabelC>From the terrace</SectionLabelC></TReveal>
          <TReveal delay={50}><h2 style={{ font: '400 clamp(38px,4.4vw,60px)/0.92 var(--font-display)', textTransform: 'uppercase', color: 'var(--ink)', margin: '4px 0 0' }}>Worn with pride</h2></TReveal>
        </div>
        <div className="tc-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {TTESTI.map((t, i) => (
            <TReveal key={i} delay={(i % 3) * 70}>
              <div className="tc-card" style={{ background: 'var(--bg-raised)', border: '1px solid var(--hairline)', borderRadius: 16, padding: '26px 24px 24px', boxShadow: 'var(--shadow-card)', height: '100%' }}>
                <WTagC tone={t.kind === 'Club' ? 'green' : t.kind === 'Press' ? 'ink' : 'mustard'}>{t.kind}</WTagC>
                <p style={{ font: '400 17px/1.5 var(--font-body)', color: 'var(--fg1)', margin: '16px 0 18px' }}>“{t.quote}”</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 999, overflow: 'hidden', flex: '0 0 38px', display: 'flex', flexDirection: 'column' }}>
                    {['#7A1F2B', '#F3EBDD', '#E0A52E', '#1F3D2B'].map((c, j) => <div key={j} style={{ flex: 1, background: c }} />)}
                  </div>
                  <div>
                    <div style={{ font: '700 14px/1.2 var(--font-body)', color: 'var(--ink)' }}>{t.name}</div>
                    <div style={{ font: '400 12px/1.3 var(--font-body)', color: 'var(--fg3)' }}>{t.meta}</div>
                  </div>
                </div>
              </div>
            </TReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMMUNITY (authentic — replaces fake testimonials) ----------------
   Three honest, fan-first treatments, switchable via the `variant` tweak:
   'manifesto' · 'pillars' · 'invite'. No fabricated people or quotes. */

const PILLARS = [
  ['01', 'Roots over riches', 'The grassroots game is the real thing. We start at the bottom of the pyramid, not the top.'],
  ['02', 'Show up', 'Presence beats opinion. Be there, on the terrace — not on the sofa.'],
  ['03', 'Belong', 'Football is community. Everyone’s welcome at the back.'],
  ['04', 'Earn it', 'No glory-hunting. The away day in the rain is the badge of honour.'],
  ['05', 'No gloss', 'Anti-plastic, anti-corporate. Authentic, characterful, and ours.'],
];

const INVOLVE = [
  { icon: 'map-pin', title: 'Add a ground', body: 'Know one we’ve missed? Put it on the map for everyone.' },
  { icon: 'users', title: 'Start your club’s corner', body: 'Be the first voice for your club and bring your people in.' },
  { icon: 'camera', title: 'Share the away day', body: 'Your photos, your scarves, your story — the away day as content.' },
  { icon: 'compass', title: 'Shape the roadmap', body: 'Founding members help decide what we build next.' },
];

function ManifestoBlock() {
  return (
    <section style={{ background: 'var(--green-800)', position: 'relative' }}>
      <TScarfBand height={16} unit={40} />
      <div style={{ maxWidth: 940, margin: '0 auto', padding: '78px 24px 84px', textAlign: 'center' }}>
        <TReveal style={{ display: 'flex', justifyContent: 'center' }}><SectionLabelC color="var(--mustard-400)">The manifesto</SectionLabelC></TReveal>
        <TReveal delay={50}>
          <h2 style={{ font: '400 clamp(48px,6.4vw,104px)/0.9 var(--font-display)', textTransform: 'uppercase', color: 'var(--cream)', margin: '8px 0 26px' }}>We never bought it.</h2>
        </TReveal>
        <TReveal delay={100}>
          <p style={{ font: '400 19px/1.65 var(--font-body)', color: 'rgba(243,235,221,0.86)', maxWidth: 680, margin: '0 auto 20px' }}>
            Football told us the only thing that matters is the top — the trophies, the billionaires, the games behind a paywall. The real game is somewhere else. Down the pyramid. Under the floodlights. A Tuesday night with a flask and forty other believers.
          </p>
        </TReveal>
        <TReveal delay={140}>
          <p style={{ font: '400 19px/1.65 var(--font-body)', color: 'rgba(243,235,221,0.86)', maxWidth: 680, margin: '0 auto 34px' }}>
            Terrace is for them. For the ones who never went looking for glory — just somewhere to stand, and someone to stand with.
          </p>
        </TReveal>
        <TReveal delay={180}>
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <TCrest size={40} variant="cream" />
            <span style={{ font: '600 12px/1.4 var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--mustard-400)' }}>For the ones who stand at the back</span>
          </div>
        </TReveal>
      </div>
      <TScarfBand height={16} unit={40} reverse />
    </section>
  );
}

function PillarsBlock() {
  return (
    <section style={{ background: 'var(--paper-100)', padding: '82px 24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <TReveal style={{ display: 'flex', justifyContent: 'center' }}><SectionLabelC>What we stand for</SectionLabelC></TReveal>
          <TReveal delay={50}><h2 style={{ font: '400 clamp(38px,4.6vw,64px)/0.92 var(--font-display)', textTransform: 'uppercase', color: 'var(--ink)', margin: '4px 0 0' }}>Five things we’ll never sell</h2></TReveal>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PILLARS.map(([num, name, body], i) => (
            <TReveal key={num} delay={i * 50}>
              <div className="tc-pillar" style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 24, alignItems: 'start', padding: '26px 8px', borderTop: i === 0 ? 'none' : '1px solid var(--hairline)' }}>
                <span style={{ font: '400 56px/0.8 var(--font-display)', color: 'var(--claret-300)' }}>{num}</span>
                <div>
                  <h3 style={{ font: '400 34px/0.95 var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.01em', color: 'var(--claret-700)', margin: '4px 0 8px' }}>{name}</h3>
                  <p style={{ font: '400 17px/1.55 var(--font-body)', color: 'var(--fg2)', margin: 0, maxWidth: 620 }}>{body}</p>
                </div>
              </div>
            </TReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InviteBlock({ onJoin }) {
  return (
    <section style={{ background: 'var(--paper-100)', padding: '82px 24px' }}>
      <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }} className="tc-map-grid">
        <div>
          <TReveal><SectionLabelC>Built with fans</SectionLabelC></TReveal>
          <TReveal delay={50}><h2 style={{ font: '400 clamp(38px,4.8vw,68px)/0.9 var(--font-display)', textTransform: 'uppercase', color: 'var(--ink)', margin: '4px 0 16px' }}>Built by fans,<br />not for them</h2></TReveal>
          <TReveal delay={100}><p style={{ font: '400 17px/1.6 var(--font-body)', color: 'var(--fg2)', maxWidth: 480, margin: '0 0 28px' }}>
            Terrace isn’t finished — and that’s the point. We’re building it in the open, with the people who actually stand on the terraces. Here’s how you get stuck in from day one.
          </p></TReveal>
          <div className="tc-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            {INVOLVE.map((w, i) => (
              <TReveal key={w.title} delay={120 + i * 50}>
                <div style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--claret-100)', display: 'grid', placeItems: 'center', flex: '0 0 40px' }}>
                    <TIcon name={w.icon} size={19} color="var(--claret-700)" />
                  </div>
                  <div>
                    <div style={{ font: '700 15px/1.25 var(--font-body)', color: 'var(--ink)', marginBottom: 3 }}>{w.title}</div>
                    <div style={{ font: '400 13.5px/1.45 var(--font-body)', color: 'var(--fg2)' }}>{w.body}</div>
                  </div>
                </div>
              </TReveal>
            ))}
          </div>
        </div>
        <TReveal delay={120}>
          <div style={{ borderRadius: 18, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--claret-600)' }}>
            <TScarfBand height={14} unit={34} />
            <div style={{ background: 'var(--claret-800)', padding: '32px 30px 34px' }}>
              <WTagC tone="mustard">Founding members</WTagC>
              <div style={{ font: '400 clamp(40px,4.4vw,60px)/0.92 var(--font-display)', textTransform: 'uppercase', color: 'var(--cream)', margin: '16px 0 10px' }}>Be one of the first</div>
              <p style={{ font: '400 15px/1.55 var(--font-body)', color: 'rgba(243,235,221,0.78)', margin: '0 0 22px' }}>
                Join before launch and help set the standard for the whole platform.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 26 }}>
                {['A founder’s badge, for life', 'A real say in the roadmap', 'First dibs on every scarf drop'].map(p => (
                  <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <TIcon name="check" size={17} stroke={2.6} color="var(--mustard-500)" style={{ marginTop: 2, flex: '0 0 17px' }} />
                    <span style={{ font: '400 15px/1.4 var(--font-body)', color: 'rgba(243,235,221,0.92)' }}>{p}</span>
                  </div>
                ))}
              </div>
              <WBtn tone="accent" size="md" icon="arrow-right" style={{ width: '100%' }} onClick={onJoin}>Become a founding member</WBtn>
            </div>
            <TScarfBand height={14} unit={34} reverse />
          </div>
        </TReveal>
      </div>
    </section>
  );
}

function Community({ variant, onJoin }) {
  if (variant === 'pillars') return <PillarsBlock />;
  if (variant === 'invite') return <InviteBlock onJoin={onJoin} />;
  return <ManifestoBlock />;
}

/* ---------------- CLOSER — "Show your colours." ---------------- */
function Closer({ surface, onJoin }) {
  const bg = surface === 'green' ? 'var(--green-800)' : 'var(--claret-800)';
  return (
    <section style={{ background: bg }}>
      <TScarfBand height={18} unit={44} />
      <div style={{ padding: '66px 24px 70px', textAlign: 'center' }}>
        <TReveal><h2 style={{ font: '400 clamp(44px,5.6vw,88px)/0.9 var(--font-display)', textTransform: 'uppercase', color: 'var(--cream)', margin: '0 0 10px' }}>Show your colours.</h2></TReveal>
        <TReveal delay={60}><p style={{ font: '400 17px/1.5 var(--font-body)', color: 'rgba(243,235,221,0.82)', margin: '0 0 28px' }}>Join free, then wear it to the game.</p></TReveal>
        <TReveal delay={120}><WBtn tone="accent" size="lg" icon="arrow-right" onClick={onJoin}>Join Terrace — it’s free</WBtn></TReveal>
      </div>
      <TScarfBand height={18} unit={44} reverse />
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const cols = [
    ['Product', ['Discover', 'Collect', 'Plan', 'The feed', 'Membership']],
    ['Culture', ['Read', 'The shop', 'Club partnerships', 'Meet-ups']],
    ['Terrace', ['About', 'The manifesto', 'Careers', 'Press']],
  ];
  return (
    <footer style={{ background: 'var(--green-900)', color: 'var(--cream)', padding: '56px 24px 30px' }}>
      <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 36 }} className="tc-foot-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 14 }}>
            <TCrest size={30} variant="cream" />
            <span style={{ font: '400 28px/1 var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Terrace</span>
          </div>
          <p style={{ font: '400 14px/1.6 var(--font-body)', color: 'rgba(243,235,221,0.66)', maxWidth: 280, margin: '0 0 16px' }}>The home of non-league football culture. For the ones who stand at the back.</p>
          <div style={{ display: 'flex', gap: 12 }}>
            {['instagram', 'twitter', 'youtube'].map(s => (
              <a key={s} href="#" aria-label={s} style={{ width: 36, height: 36, borderRadius: 999, border: '1px solid rgba(243,235,221,0.22)', display: 'grid', placeItems: 'center', color: 'var(--cream)' }}>
                <TIcon name={s} size={17} />
              </a>
            ))}
          </div>
        </div>
        {cols.map(([h, links]) => (
          <div key={h}>
            <div style={{ font: '600 12px/1 var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--mustard-400)', marginBottom: 16 }}>{h}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {links.map(l => <a key={l} href="#" style={{ font: '400 14px/1 var(--font-body)', color: 'rgba(243,235,221,0.78)', textDecoration: 'none' }}>{l}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: MAXW, margin: '40px auto 0', paddingTop: 22, borderTop: '1px solid rgba(243,235,221,0.16)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ font: '400 13px/1 var(--font-body)', color: 'rgba(243,235,221,0.55)' }}>© 2026 Terrace. Glory’s overrated.</span>
        <span style={{ font: '400 13px/1 var(--font-body)', color: 'rgba(243,235,221,0.55)' }}>Show up.</span>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Nav, Hero, Features, MapMoment, ClubMarquee, Pricing, Testimonials, Community, Closer, Footer,
});
