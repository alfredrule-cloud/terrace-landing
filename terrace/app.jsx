/* ============================================================
   TERRACE LANDING — app shell + Tweaks
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "motion": "lively",
  "accent": "mustard",
  "headline": "back",
  "closer": "claret",
  "bands": "bold",
  "community": "manifesto"
}/*EDITMODE-END*/;

function Landing() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const {
    MotionContext, DensityContext,
    Nav, Hero, Features, MapMoment, ClubMarquee, Pricing, Testimonials, Community, Closer, Footer,
  } = window;

  const join = () => {
    const el = document.getElementById('membership');
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <MotionContext.Provider value={t.motion}>
      <DensityContext.Provider value={t.bands}>
        <div style={{ background: 'var(--paper)', fontFamily: 'var(--font-body)', color: 'var(--fg1)' }}>
          <Nav onJoin={join} />
          <Hero headline={t.headline} accent={t.accent} onJoin={join} />
          <Features accent={t.accent} />
          <MapMoment accent={t.accent} />
          <ClubMarquee accent={t.accent} />
          <div id="membership"><Pricing onJoin={join} /></div>
          <Testimonials />
          <Community variant={t.community} onJoin={join} />
          <Closer surface={t.closer} onJoin={join} />
          <Footer />
        </div>

        <TweaksPanel title="Tweaks">
          <TweakSection label="Motion & feel" />
          <TweakRadio label="Motion" value={t.motion}
            options={['off', 'subtle', 'lively']}
            onChange={(v) => setTweak('motion', v)} />
          <TweakRadio label="Scarf bands" value={t.bands}
            options={['subtle', 'bold']}
            onChange={(v) => setTweak('bands', v)} />

          <TweakSection label="Colour" />
          <TweakRadio label="Accent" value={t.accent}
            options={['mustard', 'green']}
            onChange={(v) => setTweak('accent', v)} />
          <TweakRadio label="Closer block" value={t.closer}
            options={['claret', 'green']}
            onChange={(v) => setTweak('closer', v)} />

          <TweakSection label="Community section" />
          <TweakSelect label="Authentic block" value={t.community}
            options={[
              { value: 'manifesto', label: 'The manifesto — "We never bought it."' },
              { value: 'pillars', label: 'What we stand for — five pillars' },
              { value: 'invite', label: 'Built by fans — founding invite' },
            ]}
            onChange={(v) => setTweak('community', v)} />

          <TweakSection label="Headline" />
          <TweakSelect label="Hero headline" value={t.headline}
            options={[
              { value: 'back', label: 'For the ones who stand at the back' },
              { value: 'glory', label: "Glory's overrated." },
              { value: 'roots', label: 'Football at the roots' },
            ]}
            onChange={(v) => setTweak('headline', v)} />
        </TweaksPanel>
      </DensityContext.Provider>
    </MotionContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<Landing />);
