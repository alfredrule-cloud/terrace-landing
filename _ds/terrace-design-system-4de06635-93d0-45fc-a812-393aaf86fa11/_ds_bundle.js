/* @ds-bundle: {"format":3,"namespace":"TerraceDesignSystem_4de066","components":[],"sourceHashes":{"export/ui_kits/app/app-components.jsx":"6df5f7c42168","export/ui_kits/app/app-screens.jsx":"44629488b759","export/ui_kits/app/app-ui.jsx":"adcce9807582","export/ui_kits/app/ios-frame.jsx":"be3343be4b51","export/ui_kits/web/web-sections.jsx":"66c67c12c94f","export/ui_kits/web/web-ui.jsx":"0bbecc296cf5","ui_kits/app/app-components.jsx":"6df5f7c42168","ui_kits/app/app-screens.jsx":"44629488b759","ui_kits/app/app-ui.jsx":"adcce9807582","ui_kits/app/ios-frame.jsx":"be3343be4b51","ui_kits/web/web-sections.jsx":"66c67c12c94f","ui_kits/web/web-ui.jsx":"0bbecc296cf5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TerraceDesignSystem_4de066 = window.TerraceDesignSystem_4de066 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// export/ui_kits/app/app-components.jsx
try { (() => {
/* ============================================================
   Terrace App — composite components
   Exports: AppHeader, TabBar, GroundCard, Collectible, FeedPost, StatRow
   ============================================================ */

/* ---- App top bar ---- */
function AppHeader({
  title,
  onBack,
  right,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '56px 16px 12px',
      background: 'var(--paper)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: 4,
      marginLeft: -4,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 26,
    color: "var(--claret-700)"
  })) : /*#__PURE__*/React.createElement(Crest, {
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 30px/0.9 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--ink)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.2 var(--font-body)',
      color: 'var(--fg3)',
      marginTop: 2
    }
  }, sub)), right);
}

/* ---- Bottom tab bar ---- */
function TabBar({
  active,
  onChange
}) {
  const tabs = [['discover', 'MapPin', 'Discover'], ['collect', 'Medal', 'Collect'], ['plan', 'Route', 'Plan'], ['belong', 'Users', 'Belong'], ['read', 'BookOpen', 'Read']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px 8px 8px',
      background: 'var(--green-800)',
      borderTop: '1px solid rgba(243,235,221,0.12)'
    }
  }, tabs.map(([id, icon, label]) => {
    const on = active === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onChange(id),
      style: {
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: '2px 6px',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 22,
      stroke: on ? 2.4 : 2,
      color: on ? 'var(--mustard-500)' : 'rgba(243,235,221,0.62)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 10px/1 var(--font-body)',
        letterSpacing: '0.02em',
        color: on ? 'var(--cream)' : 'rgba(243,235,221,0.62)'
      }
    }, label));
  }));
}

/* ---- Ground / fixture card ---- */
function GroundCard({
  ground,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: 0,
      cursor: 'pointer',
      background: 'var(--bg-raised)',
      border: '1px solid var(--hairline)',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    h: 104,
    seed: ground.seed,
    label: ground.photo
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: ground.logged ? 'mustard' : 'cream'
  }, ground.tier)), ground.floodlit && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Zap",
    size: 16,
    color: "var(--mustard-400)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1 var(--font-mono)',
      color: 'var(--fg3)',
      letterSpacing: '0.02em'
    }
  }, ground.kick), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 25px/0.95 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--ink)',
      margin: '5px 0 4px'
    }
  }, ground.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.3 var(--font-body)',
      color: 'var(--fg2)'
    }
  }, ground.club, " \xB7 ", ground.distance), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 11
    }
  }, ground.logged ? /*#__PURE__*/React.createElement(StatusBadge, {
    tone: "logged"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 13,
    color: "var(--green-800)"
  }), " Logged") : /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-body)',
      color: 'var(--concrete-500)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Circle",
    size: 11,
    color: "var(--concrete-500)"
  }), " Not logged"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px/1 var(--font-body)',
      color: 'var(--claret-700)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3
    }
  }, "Plan day ", /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 15,
    color: "var(--claret-700)"
  })))));
}

/* ---- Collectible badge ---- */
function Collectible({
  badge
}) {
  const earned = badge.state === 'earned' || badge.state === 'complete';
  const bg = badge.state === 'complete' ? 'var(--claret-700)' : badge.state === 'earned' ? 'var(--bottle-green)' : 'var(--paper-200)';
  const fg = earned ? 'var(--mustard-500)' : 'var(--concrete-500)';
  const numCol = badge.state === 'complete' ? 'var(--cream)' : badge.state === 'earned' ? 'var(--mustard-500)' : 'var(--concrete-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      margin: '0 auto',
      display: 'grid',
      placeItems: 'center',
      position: 'relative',
      background: bg,
      color: fg,
      boxShadow: earned ? 'var(--shadow-md)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 5,
      borderRadius: '50%',
      border: '2px solid currentColor',
      opacity: 0.45
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 26px/0.9 var(--font-display)',
      color: numCol
    }
  }, badge.num)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1.2 var(--font-body)',
      color: earned ? 'var(--fg1)' : 'var(--concrete-500)',
      marginTop: 8
    }
  }, badge.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 9px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--fg3)',
      marginTop: 2
    }
  }, badge.state));
}

/* ---- Stat row (profile) ---- */
function StatRow({
  stats
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: 'var(--bg-raised)',
      border: '1px solid var(--hairline)',
      borderRadius: 14
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      textAlign: 'center',
      padding: '14px 6px',
      borderRight: i < stats.length - 1 ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 30px/0.9 var(--font-display)',
      color: 'var(--claret-700)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10px/1.2 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--fg3)',
      marginTop: 4
    }
  }, s.label))));
}

/* ---- Feed post ---- */
function FeedPost({
  post
}) {
  const [liked, setLiked] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-raised)',
      border: '1px solid var(--hairline)',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: post.avatar,
      display: 'grid',
      placeItems: 'center',
      color: 'var(--cream)',
      font: '400 18px/1 var(--font-display)'
    }
  }, post.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 var(--font-body)',
      color: 'var(--fg1)'
    }
  }, post.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1.2 var(--font-body)',
      color: 'var(--fg3)'
    }
  }, post.club, " \xB7 ", post.time)), /*#__PURE__*/React.createElement(Icon, {
    name: "MoreHorizontal",
    size: 20,
    color: "var(--fg3)"
  })), /*#__PURE__*/React.createElement(Photo, {
    h: 190,
    seed: post.seed,
    label: post.location
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked),
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Heart",
    size: 20,
    color: liked ? 'var(--claret-700)' : 'var(--fg2)',
    stroke: liked ? 0 : 2,
    style: liked ? {
      fill: 'var(--claret-700)'
    } : {}
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px/1 var(--font-body)',
      color: 'var(--fg2)'
    }
  }, post.likes + (liked ? 1 : 0))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MessageCircle",
    size: 20,
    color: "var(--fg2)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px/1 var(--font-body)',
      color: 'var(--fg2)'
    }
  }, post.comments)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Share2",
    size: 19,
    color: "var(--fg2)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.45 var(--font-body)',
      color: 'var(--fg1)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, post.name), " ", post.caption)));
}
Object.assign(window, {
  AppHeader,
  TabBar,
  GroundCard,
  Collectible,
  StatRow,
  FeedPost
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/ui_kits/app/app-components.jsx", error: String((e && e.message) || e) }); }

// export/ui_kits/app/app-screens.jsx
try { (() => {
/* ============================================================
   Terrace App — screens + shell
   Exports: TerraceApp
   ============================================================ */

const GROUNDS = [{
  id: 1,
  name: 'Champion Hill',
  club: 'Dulwich Hamlet',
  tier: 'Tier 7 · Away',
  distance: '4.2mi',
  kick: 'SAT · KO 15:00',
  logged: true,
  seed: 0,
  floodlit: false,
  photo: 'Champion Hill, the Rabble end'
}, {
  id: 2,
  name: 'The Rec',
  club: 'Local Town FC',
  tier: 'Tier 8',
  distance: '12mi',
  kick: 'TUE · KO 19:45',
  logged: false,
  seed: 1,
  floodlit: true,
  photo: 'Floodlights, a wet Tuesday'
}, {
  id: 3,
  name: 'Mill Field',
  club: 'Marsh Rovers',
  tier: 'Tier 6',
  distance: '21mi',
  kick: 'SAT · KO 15:00',
  logged: false,
  seed: 2,
  floodlit: false,
  photo: 'The away terrace'
}, {
  id: 4,
  name: 'The Den End',
  club: 'Harbour AFC',
  tier: 'Tier 8 · Away',
  distance: '34mi',
  kick: 'SAT · KO 12:30',
  logged: true,
  seed: 3,
  floodlit: false,
  photo: 'Scarves up, full house'
}];
const BADGES = [{
  num: '92',
  label: 'The 92',
  state: 'complete'
}, {
  num: '8',
  label: 'Tier 8 Club',
  state: 'earned'
}, {
  num: '0–0',
  label: 'First Goalless',
  state: 'earned'
}, {
  num: '⚡',
  label: 'Floodlit Away',
  state: 'earned'
}, {
  num: '12',
  label: 'Counties',
  state: 'earned'
}, {
  num: '?',
  label: 'Abandoned (fog)',
  state: 'locked'
}];
const POSTS = [{
  id: 1,
  name: 'Marcus Webb',
  initials: 'MW',
  club: 'Dulwich Hamlet',
  time: '2h',
  avatar: 'var(--claret-700)',
  seed: 0,
  location: 'Champion Hill',
  likes: 47,
  comments: 6,
  caption: 'Pink and blue and a pie at half time. Glory’s overrated — this is the good stuff.'
}, {
  id: 2,
  name: 'Priya Shah',
  initials: 'PS',
  club: 'Marsh Rovers',
  time: '5h',
  avatar: 'var(--bottle-green)',
  seed: 3,
  location: 'Mill Field',
  time2: '',
  likes: 83,
  comments: 14,
  caption: 'First floodlit away of the season. Forty of us, a flask, and a 0–0 we’ll never forget.'
}];

/* ---------- DISCOVER ---------- */
function DiscoverScreen({
  onOpen
}) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Tier 5–8', 'Within 25mi', 'Not logged', 'Floodlit'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "Discover",
    sub: "Every ground in the pyramid, mapped",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--paper-200)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Bell",
      size: 20,
      color: "var(--claret-700)"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--paper-50)',
      border: '1px solid var(--paper-300)',
      borderRadius: 10,
      padding: '11px 13px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 18,
    color: "var(--concrete-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 15px/1 var(--font-body)',
      color: 'var(--concrete-500)'
    }
  }, "Search grounds, clubs, the 92\u2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 16px 0',
      borderRadius: 16,
      overflow: 'hidden',
      border: '1px solid var(--hairline)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(MapBand, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '14px 16px',
      overflowX: 'auto'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    active: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '0 16px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--claret-700)'
    }
  }, "This weekend \xB7 near you"), GROUNDS.map(g => /*#__PURE__*/React.createElement(GroundCard, {
    key: g.id,
    ground: g,
    onOpen: () => onOpen(g)
  }))));
}
function MapBand() {
  const pins = [[26, 38], [54, 28], [42, 62], [70, 54], [82, 36], [18, 64]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 168,
      background: 'linear-gradient(160deg,#23402E,#1F3D2B 60%,#18301F)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.18,
      backgroundImage: 'linear-gradient(rgba(243,235,221,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(243,235,221,0.6) 1px,transparent 1px)',
      backgroundSize: '34px 30px'
    }
  }), pins.map(([x, y], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: x + '%',
      top: y + '%',
      transform: 'translate(-50%,-100%)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MapPin",
    size: i === 1 ? 30 : 22,
    color: i === 1 ? 'var(--mustard-500)' : 'var(--cream)',
    stroke: 2.2,
    style: i === 1 ? {
      filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.4))'
    } : {}
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 12,
      background: 'rgba(22,19,17,0.55)',
      backdropFilter: 'blur(6px)',
      borderRadius: 8,
      padding: '7px 11px',
      color: 'var(--cream)',
      font: '600 12px/1 var(--font-body)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Navigation",
    size: 14,
    color: "var(--mustard-500)"
  }), " 23 grounds within 25 miles"));
}

/* ---------- COLLECT ---------- */
function CollectScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "Collect",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--paper-200)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Settings",
      size: 19,
      color: "var(--claret-700)"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: 'var(--claret-700)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--cream)',
      font: '400 28px/1 var(--font-display)'
    }
  }, "JC"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 28px/0.9 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--ink)'
    }
  }, "Joe Calder"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px/1.2 var(--font-body)',
      color: 'var(--fg2)',
      marginTop: 3
    }
  }, "Groundhopper \xB7 joined 2023"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement(StatRow, {
    stats: [{
      value: '147',
      label: 'Grounds'
    }, {
      value: '12',
      label: 'Counties'
    }, {
      value: '5',
      label: 'Badges'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: 'hidden',
      border: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(MapBand, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1 var(--font-body)',
      color: 'var(--fg2)'
    }
  }, "The 92 \xB7 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--claret-700)'
    }
  }, "92 of 92")), /*#__PURE__*/React.createElement(StatusBadge, {
    tone: "logged"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 13,
    color: "var(--green-800)"
  }), " Complete")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 99,
      background: 'var(--paper-200)',
      marginTop: 8,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--mustard-500)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--claret-700)',
      marginBottom: 14
    }
  }, "Badges earned"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18
    }
  }, BADGES.map((b, i) => /*#__PURE__*/React.createElement(Collectible, {
    key: i,
    badge: b
  })))));
}

/* ---------- BELONG ---------- */
function BelongScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "Belong",
    sub: "The away day, as content",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--claret-700)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Plus",
      size: 22,
      color: "var(--cream)"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: '16px'
    }
  }, POSTS.map(p => /*#__PURE__*/React.createElement(FeedPost, {
    key: p.id,
    post: p
  }))));
}

/* ---------- GROUND DETAIL ---------- */
function GroundDetail({
  ground,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    h: 264,
    seed: ground.seed,
    style: {
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(22,19,17,0.72) 0%, rgba(22,19,17,0.1) 45%, transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: 'absolute',
      top: 52,
      left: 14,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'rgba(22,19,17,0.5)',
      backdropFilter: 'blur(6px)',
      border: 0,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 24,
    color: "var(--cream)"
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      position: 'absolute',
      top: 52,
      right: 14,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'rgba(22,19,17,0.5)',
      backdropFilter: 'blur(6px)',
      border: 0,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Bookmark",
    size: 20,
    color: "var(--cream)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14,
      right: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "mustard"
  }, ground.tier), ground.floodlit && /*#__PURE__*/React.createElement(Tag, {
    tone: "cream"
  }, "Floodlit")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 44px/0.88 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--cream)'
    }
  }, ground.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/1.2 var(--font-body)',
      color: 'rgba(243,235,221,0.85)',
      marginTop: 4
    }
  }, ground.club, " \xB7 ", ground.distance, " away"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--green-700)',
      borderRadius: 14,
      padding: '14px 16px',
      color: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "CalendarDays",
    size: 22,
    color: "var(--mustard-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 var(--font-body)'
    }
  }, "Next: ", ground.club, " vs Riverside"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1 var(--font-mono)',
      color: 'rgba(243,235,221,0.8)',
      marginTop: 3
    }
  }, ground.kick, " \xB7 Gate C \xB7 Terrace \xA314")), /*#__PURE__*/React.createElement(StatusBadge, {
    tone: "live"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Dot",
    size: 14,
    color: "var(--mustard-500)"
  }), "3d")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--claret-700)',
      margin: '20px 0 12px'
    }
  }, "The essentials"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, [['Train', 'TrainFront', '11 min walk from East Dulwich'], ['The pub', 'Beer', 'The Cherry Tree — get there by 1:30'], ['The pie', 'Pizza', 'Famous steak & ale, sells out by HT'], ['Away end', 'Users', 'The Rabble — singing, standing, covered']].map(([t, ic, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      padding: '12px 0',
      borderBottom: i < 3 ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      background: 'var(--paper-200)',
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 38px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19,
    color: "var(--claret-700)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 var(--font-body)',
      color: 'var(--fg1)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.3 var(--font-body)',
      color: 'var(--fg2)',
      marginTop: 2
    }
  }, d)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      display: 'flex',
      gap: 10,
      padding: '12px 16px',
      background: 'var(--paper)',
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(CTAButton, {
    tone: "outline",
    icon: "MapPin",
    onClick: () => {}
  }, "Directions"), /*#__PURE__*/React.createElement(CTAButton, {
    tone: "primary",
    icon: "CalendarPlus",
    full: true,
    onClick: () => {}
  }, "Plan the day")));
}

/* ---------- SHELL ---------- */
function TerraceApp() {
  const [tab, setTab] = useState('discover');
  const [ground, setGround] = useState(null);
  let screen;
  if (ground) screen = /*#__PURE__*/React.createElement(GroundDetail, {
    ground: ground,
    onBack: () => setGround(null)
  });else if (tab === 'discover') screen = /*#__PURE__*/React.createElement(DiscoverScreen, {
    onOpen: setGround
  });else if (tab === 'collect') screen = /*#__PURE__*/React.createElement(CollectScreen, null);else if (tab === 'belong') screen = /*#__PURE__*/React.createElement(BelongScreen, null);else screen = /*#__PURE__*/React.createElement(PlaceholderScreen, {
    tab: tab
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, screen), !ground && /*#__PURE__*/React.createElement(TabBar, {
    active: tab,
    onChange: setTab
  }));
}
function PlaceholderScreen({
  tab
}) {
  const copy = {
    plan: ['Route', 'Plan the away day', 'Train times, the right pub, a shareable itinerary so the group turns up in the same place.'],
    read: ['BookOpen', 'Read', 'Club histories, photo essays, ground reviews — the best lower-league stories.']
  }[tab];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppHeader, {
    title: copy[1]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      padding: '70px 36px',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--paper-200)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: copy[0],
    size: 28,
    color: "var(--claret-700)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 26px/0.95 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--ink)'
    }
  }, copy[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.5 var(--font-body)',
      color: 'var(--fg2)',
      maxWidth: 260
    }
  }, copy[2])));
}
Object.assign(window, {
  TerraceApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/ui_kits/app/app-screens.jsx", error: String((e && e.message) || e) }); }

// export/ui_kits/app/app-ui.jsx
try { (() => {
/* ============================================================
   Terrace App — shared UI primitives
   Exports to window: Icon, Crest, Chip, Tag, StatusBadge, Photo,
   AppHeader, TabBar, GroundCard, Collectible, FeedPost, CTAButton
   ============================================================ */
const {
  useState
} = React;

/* ---- Lucide icon wrapper (stroke 2, rounded) ---- */
function Icon({
  name,
  size = 22,
  stroke = 2,
  color = 'currentColor',
  style = {}
}) {
  const lib = window.lucide && window.lucide.icons;
  // lucide UMD keys are PascalCase
  const data = lib && (lib[name] || lib[name.charAt(0).toUpperCase() + name.slice(1)]);
  if (!data) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      ...style
    }
  });
  // lucide UMD shape: ["svg", attrs, [ [tag, attrs], ... ]]
  const children = Array.isArray(data[2]) ? data[2] : [];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, children.map((n, i) => React.createElement(n[0], {
    key: i,
    ...n[1]
  })));
}

/* ---- Crest mark (uses real asset) ---- */
function Crest({
  size = 28,
  variant = 'claret'
}) {
  const src = variant === 'cream' ? '../../assets/terrace-crest-cream.svg' : '../../assets/terrace-crest.svg';
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    width: size,
    height: size,
    alt: "Terrace",
    style: {
      display: 'block'
    }
  });
}

/* ---- Filter chip ---- */
function Chip({
  children,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      font: '600 13px/1 var(--font-body)',
      whiteSpace: 'nowrap',
      padding: '8px 14px',
      borderRadius: 999,
      cursor: 'pointer',
      border: '1px solid ' + (active ? 'var(--claret-700)' : 'var(--hairline)'),
      background: active ? 'var(--claret-700)' : 'var(--paper-50)',
      color: active ? 'var(--cream)' : 'var(--fg1)',
      transition: 'all .15s ease'
    }
  }, children);
}

/* ---- Overline tag ---- */
function Tag({
  children,
  tone = 'claret'
}) {
  const map = {
    claret: ['var(--claret-100)', 'var(--claret-800)'],
    green: ['var(--green-100)', 'var(--green-800)'],
    mustard: ['var(--mustard-200)', 'var(--mustard-700)'],
    cream: ['var(--cream)', 'var(--claret-800)']
  };
  const [bg, fg] = map[tone] || map.claret;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      padding: '5px 8px',
      borderRadius: 4,
      background: bg,
      color: fg
    }
  }, children);
}

/* ---- Matchday status badge ---- */
function StatusBadge({
  children,
  tone = 'live'
}) {
  const styles = {
    live: {
      background: 'var(--claret-700)',
      color: 'var(--cream)'
    },
    logged: {
      background: 'var(--green-100)',
      color: 'var(--green-800)'
    },
    off: {
      background: 'var(--paper-200)',
      color: 'var(--fg2)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: '600 11px/1 var(--font-body)',
      padding: '5px 10px',
      borderRadius: 999,
      ...styles[tone]
    }
  }, children);
}

/* ---- Documentary photo placeholder (warm, grainy stand-in) ---- */
function Photo({
  h = 120,
  seed = 0,
  label,
  children,
  style = {}
}) {
  const grads = ['linear-gradient(150deg,#5E1721,#7A1F2B 55%,#1F3D2B)', 'linear-gradient(150deg,#18301F,#1F3D2B 55%,#3C6B4C)', 'linear-gradient(150deg,#4A0F18,#7A1F2B 60%,#8E2A37)', 'linear-gradient(150deg,#1F3D2B,#2C5239 55%,#B27E1C)'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      background: grads[seed % grads.length],
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.16,
      backgroundImage: 'radial-gradient(rgba(243,235,221,0.9) 0.8px, transparent 0.9px)',
      backgroundSize: '5px 5px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -20,
      right: -10,
      width: 90,
      height: 90,
      borderRadius: '50%',
      background: 'radial-gradient(rgba(224,165,46,0.45), transparent 70%)'
    }
  }), children, label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 10,
      color: 'var(--cream)',
      font: '500 11px/1 var(--font-body)',
      opacity: 0.8,
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Camera",
    size: 13,
    color: "var(--cream)"
  }), " ", label));
}

/* ---- Primary / CTA button ---- */
function CTAButton({
  children,
  icon,
  tone = 'primary',
  full,
  onClick,
  style = {}
}) {
  const tones = {
    primary: {
      background: 'var(--claret-700)',
      color: 'var(--cream)'
    },
    accent: {
      background: 'var(--mustard-500)',
      color: 'var(--ink)'
    },
    deep: {
      background: 'var(--bottle-green)',
      color: 'var(--cream)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--claret-700)',
      border: '1.5px solid var(--claret-700)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      font: '600 15px/1 var(--font-body)',
      border: 0,
      cursor: 'pointer',
      borderRadius: 10,
      padding: '14px 20px',
      width: full ? '100%' : 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      ...tones[tone],
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: tones[tone].color
  }), children);
}
Object.assign(window, {
  Icon,
  Crest,
  Chip,
  Tag,
  StatusBadge,
  Photo,
  CTAButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/ui_kits/app/app-ui.jsx", error: String((e && e.message) || e) }); }

// export/ui_kits/app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/ui_kits/app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// export/ui_kits/web/web-sections.jsx
try { (() => {
/* ============================================================
   Terrace Web — sections
   Exports: WebNav, Hero, MapSection, EditorialSection,
            ShopSection, MembershipSection, WebFooter, TerraceSite
   ============================================================ */

/* ---------------- NAV ---------------- */
function WebNav() {
  const links = ['Discover', 'Collect', 'Read', 'Shop', 'Membership'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      padding: '16px 48px',
      background: 'rgba(122,31,43,0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(243,235,221,0.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(WCrest, {
    size: 34,
    variant: "cream"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 30px/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      color: 'var(--cream)'
    }
  }, "Terrace")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 20
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: '500 14px/1 var(--font-body)',
      color: 'rgba(243,235,221,0.82)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--mustard-400)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(243,235,221,0.82)'
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: '500 14px/1 var(--font-body)',
      color: 'var(--cream)',
      textDecoration: 'none'
    }
  }, "Log in"), /*#__PURE__*/React.createElement(WButton, {
    tone: "accent",
    size: "sm"
  }, "Join free")));
}

/* ---------------- HERO (manifesto) ---------------- */
function Hero() {
  return /*#__PURE__*/React.createElement(GrainPhoto, {
    seed: 0,
    glow: false,
    style: {
      minHeight: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -80,
      left: '12%',
      width: 320,
      height: 320,
      borderRadius: '50%',
      background: 'radial-gradient(rgba(224,165,46,0.28), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -60,
      right: '8%',
      width: 280,
      height: 280,
      borderRadius: '50%',
      background: 'radial-gradient(rgba(224,165,46,0.22), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, transparent 40%, rgba(20,36,24,0.55) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1080,
      margin: '0 auto',
      padding: '96px 48px 88px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(WTag, {
    tone: "cream",
    style: {
      marginBottom: 28
    }
  }, "The home of non-league"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '400 clamp(56px, 7.5vw, 108px)/0.9 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--cream)',
      margin: '0 0 8px'
    }
  }, "For the ones who", /*#__PURE__*/React.createElement("br", null), "stand at the back"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 18px/1.6 var(--font-body)',
      color: 'rgba(243,235,221,0.82)',
      maxWidth: 580,
      margin: '20px auto 0'
    }
  }, "Part away-day planner, part ground-collector, part matchday social club. Terrace is for the local side that's been there a hundred years \u2014 and everyone who stands with them."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(WButton, {
    tone: "accent",
    size: "lg",
    icon: "ArrowRight"
  }, "Join Terrace \u2014 it's free"), /*#__PURE__*/React.createElement(WButton, {
    tone: "outlineCream",
    size: "lg",
    icon: "Play"
  }, "Watch the film")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      justifyContent: 'center',
      marginTop: 56
    }
  }, [['1,400+', 'Grounds mapped'], ['92', 'The famous 92'], ['38k', 'Members'], ['Tier 1–10', 'The whole pyramid']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 44px/0.9 var(--font-display)',
      color: 'var(--mustard-500)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.3 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'rgba(243,235,221,0.6)',
      marginTop: 6
    }
  }, l))))));
}

/* ---------------- MANIFESTO STRIP ---------------- */
function ManifestoStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bottle-green)',
      padding: '72px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 clamp(26px,3.2vw,40px)/1.35 var(--font-body)',
      color: 'var(--cream)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "\u201CFootball told us the only thing that matters is the top. The trophies, the billionaires, the games you watch through a paywall. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mustard-400)'
    }
  }, "We never bought it."), "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 30px/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      color: 'var(--mustard-500)',
      marginTop: 28
    }
  }, "Show up.")));
}

/* ---------------- MAP / DISCOVER ---------------- */
function MapSection() {
  const pins = [[20, 30], [38, 52], [56, 24], [70, 46], [82, 64], [30, 70], [62, 72], [46, 38], [88, 30]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.15fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Discover \xB7 Collect"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '400 clamp(40px,4.5vw,64px)/1.0 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--ink)',
      margin: '0 0 24px',
      paddingBottom: 4
    }
  }, "Every ground in the pyramid, mapped"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 17px/1.6 var(--font-body)',
      color: 'var(--fg2)',
      maxWidth: 460,
      margin: '0 0 24px'
    }
  }, "Fixtures, kick-off times, how to get there, the legendary pie and the away-end notes. Log the grounds you've visited, watch your map fill in, and earn badges \u2014 the famous 92, regions, tiers and milestones."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 28
    }
  }, [['MapPin', 'The definitive guide to where to go'], ['Medal', 'Collect the 92 — and the badge of honour'], ['Route', 'Plan the away day end to end']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: 'var(--claret-100)',
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 38px'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: ic,
    size: 19,
    color: "var(--claret-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 16px/1.4 var(--font-body)',
      color: 'var(--fg1)'
    }
  }, t)))), /*#__PURE__*/React.createElement(WButton, {
    tone: "primary",
    icon: "ArrowRight"
  }, "Explore the map")), /*#__PURE__*/React.createElement(GrainPhoto, {
    seed: 1,
    glow: false,
    style: {
      borderRadius: 18,
      minHeight: 420,
      border: '1px solid var(--hairline)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.2,
      backgroundImage: 'linear-gradient(rgba(243,235,221,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(243,235,221,0.5) 1px,transparent 1px)',
      backgroundSize: '54px 48px'
    }
  }), pins.map(([x, y], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: x + '%',
      top: y + '%',
      transform: 'translate(-50%,-100%)'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "MapPin",
    size: i === 3 ? 40 : 26,
    color: i === 3 ? 'var(--mustard-500)' : 'var(--cream)',
    stroke: 2.2,
    style: i === 3 ? {
      filter: 'drop-shadow(0 3px 4px rgba(0,0,0,.45))'
    } : {
      opacity: 0.92
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      bottom: 18,
      background: 'rgba(22,19,17,0.62)',
      backdropFilter: 'blur(8px)',
      borderRadius: 12,
      padding: '14px 18px',
      color: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1 var(--font-mono)',
      color: 'var(--mustard-400)',
      letterSpacing: '0.05em'
    }
  }, "NOW VIEWING"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 26px/0.95 var(--font-display)',
      textTransform: 'uppercase',
      marginTop: 5
    }
  }, "Champion Hill"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px/1 var(--font-body)',
      color: 'rgba(243,235,221,0.75)',
      marginTop: 4
    }
  }, "Dulwich Hamlet \xB7 Tier 7 \xB7 Logged \u2713")))));
}

/* ---------------- EDITORIAL / READ ---------------- */
function EditorialSection() {
  const articles = [{
    seed: 4,
    tag: 'Photo essay',
    title: 'A wet Tuesday under the floodlights',
    read: '6 min',
    meta: 'Words & pictures · M. Webb'
  }, {
    seed: 2,
    tag: 'Ground review',
    title: 'The pie at Champion Hill, ranked',
    read: '4 min',
    meta: 'The Terrace Guide'
  }, {
    seed: 3,
    tag: 'Club history',
    title: 'A hundred years at the back',
    read: '9 min',
    meta: 'Non-league stories'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper-100)',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Read"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '400 clamp(36px,4vw,56px)/0.95 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--ink)',
      margin: 0
    }
  }, "Football, the way it was meant to feel")), /*#__PURE__*/React.createElement(WButton, {
    tone: "outline",
    icon: "ArrowRight"
  }, "All stories")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 26
    }
  }, articles.map((a, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      background: 'var(--bg-raised)',
      border: '1px solid var(--hairline)',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.boxShadow = 'var(--shadow-lg)',
    onMouseLeave: e => e.currentTarget.style.boxShadow = 'var(--shadow-card)'
  }, /*#__PURE__*/React.createElement(GrainPhoto, {
    seed: a.seed,
    style: {
      height: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(WTag, {
    tone: "mustard"
  }, a.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 21px/1.25 var(--font-body)',
      color: 'var(--fg1)',
      margin: '0 0 14px'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1 var(--font-body)',
      color: 'var(--fg3)'
    }
  }, a.meta), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-mono)',
      color: 'var(--claret-700)'
    }
  }, a.read))))))));
}

/* ---------------- SHOP / WEAR ---------------- */
function ShopSection() {
  const products = [{
    seed: 0,
    name: 'Claret & Cream Scarf',
    price: '£24',
    tag: 'Bestseller',
    knit: true
  }, {
    seed: 1,
    name: 'Show Up Tee',
    price: '£28',
    tag: 'New'
  }, {
    seed: 4,
    name: 'Crest Enamel Pin',
    price: '£8',
    tag: ''
  }, {
    seed: 2,
    name: 'Programme No.1',
    price: '£12',
    tag: 'Limited'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--claret-800)',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "var(--mustard-400)"
  }, "Wear"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '400 clamp(36px,4vw,56px)/0.95 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--cream)',
      margin: 0
    }
  }, "The brand you can wear to the game")), /*#__PURE__*/React.createElement(WButton, {
    tone: "cream",
    icon: "ArrowRight"
  }, "Shop all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 22
    }
  }, products.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--cream)',
      borderRadius: 16,
      overflow: 'hidden',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      position: 'relative',
      background: 'var(--paper-200)'
    }
  }, p.knit ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, ['#7A1F2B', '#F3EBDD', '#7A1F2B', '#E0A52E', '#7A1F2B', '#F3EBDD', '#7A1F2B'].map((c, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      flex: 1,
      background: c
    }
  }))) : /*#__PURE__*/React.createElement(GrainPhoto, {
    seed: p.seed,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), p.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(WTag, {
    tone: "ink"
  }, p.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1.3 var(--font-body)',
      color: 'var(--ink)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 24px/1 var(--font-display)',
      color: 'var(--claret-700)'
    }
  }, p.price), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 9,
      background: 'var(--claret-700)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "Plus",
    size: 18,
    color: "var(--cream)"
  })))))))));
}

/* ---------------- MEMBERSHIP ---------------- */
function MembershipSection() {
  const tiers = [{
    name: 'Matchday',
    price: 'Free',
    tone: 'cream',
    features: ['The map & fixtures', 'Log grounds & basic badges', 'The feed & club groups', 'Read free editorial'],
    cta: 'Join free',
    ctaTone: 'outline'
  }, {
    name: 'Season Ticket',
    price: '£6',
    per: '/mo',
    tone: 'deep',
    featured: true,
    features: ['Everything in Matchday', 'Full ground guides & away-day notes', 'Trip planner & shareable itineraries', 'All badges + members\u2019 editorial', 'Ad-free · 10% off the shop'],
    cta: 'Get Season Ticket',
    ctaTone: 'accent'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "var(--claret-700)"
  }, "Membership"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '400 clamp(38px,4.4vw,60px)/0.95 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--ink)',
      margin: '0 auto 14px',
      display: 'inline-block'
    }
  }, "Stand with us"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 17px/1.6 var(--font-body)',
      color: 'var(--fg2)',
      maxWidth: 560,
      margin: '0 auto 44px'
    }
  }, "Every membership helps get more people through more turnstiles, at more grounds. That's the whole point."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      textAlign: 'left'
    }
  }, tiers.map((t, i) => {
    const deep = t.tone === 'deep';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: deep ? 'var(--bottle-green)' : 'var(--bg-raised)',
        border: '1px solid ' + (deep ? 'var(--green-600)' : 'var(--hairline)'),
        borderRadius: 20,
        padding: '32px 30px',
        position: 'relative',
        boxShadow: deep ? 'var(--shadow-lg)' : 'var(--shadow-card)'
      }
    }, t.featured && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 24,
        right: 24
      }
    }, /*#__PURE__*/React.createElement(WTag, {
      tone: "mustard"
    }, "Most popular")), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 32px/1 var(--font-display)',
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        color: deep ? 'var(--cream)' : 'var(--ink)'
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 4,
        margin: '14px 0 22px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 56px/0.9 var(--font-display)',
        color: deep ? 'var(--mustard-500)' : 'var(--claret-700)'
      }
    }, t.price), t.per && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 16px/1 var(--font-body)',
        color: deep ? 'rgba(243,235,221,0.7)' : 'var(--fg3)'
      }
    }, t.per)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 13,
        marginBottom: 28
      }
    }, t.features.map((f, j) => /*#__PURE__*/React.createElement("div", {
      key: j,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(WIcon, {
      name: "Check",
      size: 18,
      color: deep ? 'var(--mustard-500)' : 'var(--claret-700)',
      stroke: 2.6,
      style: {
        marginTop: 1,
        flex: '0 0 18px'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 15px/1.4 var(--font-body)',
        color: deep ? 'rgba(243,235,221,0.9)' : 'var(--fg1)'
      }
    }, f)))), /*#__PURE__*/React.createElement(WButton, {
      tone: t.ctaTone,
      size: "md",
      style: {
        width: '100%'
      }
    }, t.cta));
  }))));
}

/* ---------------- FOOTER ---------------- */
function WebFooter() {
  const cols = [['Product', ['Discover', 'Collect', 'Plan', 'The feed', 'Membership']], ['Culture', ['Read', 'The shop', 'Club partnerships', 'Meet-ups']], ['Terrace', ['About', 'The manifesto', 'Careers', 'Press']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      padding: '64px 48px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(WCrest, {
    size: 32,
    variant: "cream"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 28px/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      color: 'var(--cream)'
    }
  }, "Terrace")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.6 var(--font-body)',
      color: 'rgba(243,235,221,0.6)',
      maxWidth: 280,
      margin: '0 0 18px'
    }
  }, "For the ones who stand at the back. The home of non-league football culture."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, ['Instagram', 'Twitter', 'Youtube'].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: 'rgba(243,235,221,0.08)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: s,
    size: 18,
    color: "var(--cream)"
  }))))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--mustard-400)',
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      font: '400 14px/1 var(--font-body)',
      color: 'rgba(243,235,221,0.72)',
      textDecoration: 'none'
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '40px auto 0',
      paddingTop: 24,
      borderTop: '1px solid rgba(243,235,221,0.12)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1 var(--font-body)',
      color: 'rgba(243,235,221,0.5)'
    }
  }, "\xA9 2026 Terrace. Glory's overrated."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1 var(--font-body)',
      color: 'rgba(243,235,221,0.5)'
    }
  }, "Privacy \xB7 Terms")));
}

/* ---------------- PAGE ---------------- */
function TerraceSite() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement(WebNav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(ManifestoStrip, null), /*#__PURE__*/React.createElement(MapSection, null), /*#__PURE__*/React.createElement(EditorialSection, null), /*#__PURE__*/React.createElement(ShopSection, null), /*#__PURE__*/React.createElement(MembershipSection, null), /*#__PURE__*/React.createElement(WebFooter, null));
}
Object.assign(window, {
  WebNav,
  Hero,
  ManifestoStrip,
  MapSection,
  EditorialSection,
  ShopSection,
  MembershipSection,
  WebFooter,
  TerraceSite
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/ui_kits/web/web-sections.jsx", error: String((e && e.message) || e) }); }

// export/ui_kits/web/web-ui.jsx
try { (() => {
/* ============================================================
   Terrace Web — shared UI primitives
   Exports: WIcon, WCrest, WButton, WTag, SectionLabel, GrainPhoto
   ============================================================ */
const {
  useState: useStateW
} = React;
function WIcon({
  name,
  size = 22,
  stroke = 2,
  color = 'currentColor',
  style = {}
}) {
  const lib = window.lucide && window.lucide.icons;
  const data = lib && lib[name];
  if (!data) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      ...style
    }
  });
  const children = Array.isArray(data[2]) ? data[2] : [];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, children.map((n, i) => React.createElement(n[0], {
    key: i,
    ...n[1]
  })));
}
function WCrest({
  size = 36,
  variant = 'cream'
}) {
  const src = variant === 'cream' ? '../../assets/terrace-crest-cream.svg' : variant === 'claret' ? '../../assets/terrace-crest.svg' : '../../assets/terrace-crest.svg';
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    width: size,
    height: size,
    alt: "Terrace",
    style: {
      display: 'block'
    }
  });
}
function WButton({
  children,
  icon,
  tone = 'primary',
  size = 'md',
  onClick,
  style = {}
}) {
  const tones = {
    primary: {
      background: 'var(--claret-700)',
      color: 'var(--cream)'
    },
    accent: {
      background: 'var(--mustard-500)',
      color: 'var(--ink)'
    },
    cream: {
      background: 'var(--cream)',
      color: 'var(--claret-800)'
    },
    deep: {
      background: 'var(--bottle-green)',
      color: 'var(--cream)'
    },
    outlineCream: {
      background: 'transparent',
      color: 'var(--cream)',
      border: '1.5px solid rgba(243,235,221,0.5)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--claret-700)',
      border: '1.5px solid var(--claret-700)'
    }
  };
  const sizes = {
    sm: '10px 16px',
    md: '14px 24px',
    lg: '17px 32px'
  };
  const fs = {
    sm: 14,
    md: 15,
    lg: 17
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      font: `600 ${fs[size]}px/1 var(--font-body)`,
      border: 0,
      cursor: 'pointer',
      borderRadius: 10,
      padding: sizes[size],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 9,
      transition: 'transform .12s ease, filter .15s ease',
      ...tones[tone],
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = 'translateY(1px)',
    onMouseUp: e => e.currentTarget.style.transform = 'translateY(0)',
    onMouseLeave: e => e.currentTarget.style.transform = 'translateY(0)'
  }, children, icon && /*#__PURE__*/React.createElement(WIcon, {
    name: icon,
    size: fs[size] + 3,
    color: tones[tone].color
  }));
}
function WTag({
  children,
  tone = 'mustard',
  style = {}
}) {
  const map = {
    claret: ['var(--claret-100)', 'var(--claret-800)'],
    green: ['var(--green-100)', 'var(--green-800)'],
    mustard: ['var(--mustard-200)', 'var(--mustard-700)'],
    cream: ['rgba(243,235,221,0.16)', 'var(--cream)'],
    ink: ['var(--paper-200)', 'var(--ink)']
  };
  const [bg, fg] = map[tone] || map.mustard;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 11px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      padding: '6px 10px',
      borderRadius: 5,
      background: bg,
      color: fg,
      display: 'inline-block',
      ...style
    }
  }, children);
}
function SectionLabel({
  children,
  color = 'var(--claret-700)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 2,
      background: color,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      color
    }
  }, children));
}

/* Warm grainy documentary photo stand-in */
function GrainPhoto({
  seed = 0,
  children,
  style = {},
  glow = true
}) {
  const grads = ['linear-gradient(155deg,#4A0F18 0%,#7A1F2B 50%,#1F3D2B 100%)', 'linear-gradient(155deg,#142418 0%,#1F3D2B 50%,#3C6B4C 100%)', 'linear-gradient(155deg,#5E1721 0%,#8E2A37 55%,#B27E1C 100%)', 'linear-gradient(155deg,#1F3D2B 0%,#2C5239 45%,#7A1F2B 100%)', 'linear-gradient(155deg,#18301F 0%,#23402E 60%,#161311 100%)'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: grads[seed % grads.length],
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.18,
      backgroundImage: 'radial-gradient(rgba(243,235,221,0.85) 0.7px, transparent 0.8px)',
      backgroundSize: '4px 4px'
    }
  }), glow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-12%',
      right: '-6%',
      width: '40%',
      paddingBottom: '40%',
      borderRadius: '50%',
      background: 'radial-gradient(rgba(224,165,46,0.4), transparent 68%)'
    }
  }), children);
}
Object.assign(window, {
  WIcon,
  WCrest,
  WButton,
  WTag,
  SectionLabel,
  GrainPhoto
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/ui_kits/web/web-ui.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app-components.jsx
try { (() => {
/* ============================================================
   Terrace App — composite components
   Exports: AppHeader, TabBar, GroundCard, Collectible, FeedPost, StatRow
   ============================================================ */

/* ---- App top bar ---- */
function AppHeader({
  title,
  onBack,
  right,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '56px 16px 12px',
      background: 'var(--paper)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: 4,
      marginLeft: -4,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 26,
    color: "var(--claret-700)"
  })) : /*#__PURE__*/React.createElement(Crest, {
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 30px/0.9 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--ink)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.2 var(--font-body)',
      color: 'var(--fg3)',
      marginTop: 2
    }
  }, sub)), right);
}

/* ---- Bottom tab bar ---- */
function TabBar({
  active,
  onChange
}) {
  const tabs = [['discover', 'MapPin', 'Discover'], ['collect', 'Medal', 'Collect'], ['plan', 'Route', 'Plan'], ['belong', 'Users', 'Belong'], ['read', 'BookOpen', 'Read']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px 8px 8px',
      background: 'var(--green-800)',
      borderTop: '1px solid rgba(243,235,221,0.12)'
    }
  }, tabs.map(([id, icon, label]) => {
    const on = active === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onChange(id),
      style: {
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: '2px 6px',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 22,
      stroke: on ? 2.4 : 2,
      color: on ? 'var(--mustard-500)' : 'rgba(243,235,221,0.62)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 10px/1 var(--font-body)',
        letterSpacing: '0.02em',
        color: on ? 'var(--cream)' : 'rgba(243,235,221,0.62)'
      }
    }, label));
  }));
}

/* ---- Ground / fixture card ---- */
function GroundCard({
  ground,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: 0,
      cursor: 'pointer',
      background: 'var(--bg-raised)',
      border: '1px solid var(--hairline)',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    h: 104,
    seed: ground.seed,
    label: ground.photo
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: ground.logged ? 'mustard' : 'cream'
  }, ground.tier)), ground.floodlit && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Zap",
    size: 16,
    color: "var(--mustard-400)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1 var(--font-mono)',
      color: 'var(--fg3)',
      letterSpacing: '0.02em'
    }
  }, ground.kick), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 25px/0.95 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--ink)',
      margin: '5px 0 4px'
    }
  }, ground.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.3 var(--font-body)',
      color: 'var(--fg2)'
    }
  }, ground.club, " \xB7 ", ground.distance), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 11
    }
  }, ground.logged ? /*#__PURE__*/React.createElement(StatusBadge, {
    tone: "logged"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 13,
    color: "var(--green-800)"
  }), " Logged") : /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-body)',
      color: 'var(--concrete-500)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Circle",
    size: 11,
    color: "var(--concrete-500)"
  }), " Not logged"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px/1 var(--font-body)',
      color: 'var(--claret-700)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3
    }
  }, "Plan day ", /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 15,
    color: "var(--claret-700)"
  })))));
}

/* ---- Collectible badge ---- */
function Collectible({
  badge
}) {
  const earned = badge.state === 'earned' || badge.state === 'complete';
  const bg = badge.state === 'complete' ? 'var(--claret-700)' : badge.state === 'earned' ? 'var(--bottle-green)' : 'var(--paper-200)';
  const fg = earned ? 'var(--mustard-500)' : 'var(--concrete-500)';
  const numCol = badge.state === 'complete' ? 'var(--cream)' : badge.state === 'earned' ? 'var(--mustard-500)' : 'var(--concrete-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      margin: '0 auto',
      display: 'grid',
      placeItems: 'center',
      position: 'relative',
      background: bg,
      color: fg,
      boxShadow: earned ? 'var(--shadow-md)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 5,
      borderRadius: '50%',
      border: '2px solid currentColor',
      opacity: 0.45
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 26px/0.9 var(--font-display)',
      color: numCol
    }
  }, badge.num)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1.2 var(--font-body)',
      color: earned ? 'var(--fg1)' : 'var(--concrete-500)',
      marginTop: 8
    }
  }, badge.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 9px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--fg3)',
      marginTop: 2
    }
  }, badge.state));
}

/* ---- Stat row (profile) ---- */
function StatRow({
  stats
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: 'var(--bg-raised)',
      border: '1px solid var(--hairline)',
      borderRadius: 14
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      textAlign: 'center',
      padding: '14px 6px',
      borderRight: i < stats.length - 1 ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 30px/0.9 var(--font-display)',
      color: 'var(--claret-700)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10px/1.2 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--fg3)',
      marginTop: 4
    }
  }, s.label))));
}

/* ---- Feed post ---- */
function FeedPost({
  post
}) {
  const [liked, setLiked] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-raised)',
      border: '1px solid var(--hairline)',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: post.avatar,
      display: 'grid',
      placeItems: 'center',
      color: 'var(--cream)',
      font: '400 18px/1 var(--font-display)'
    }
  }, post.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 var(--font-body)',
      color: 'var(--fg1)'
    }
  }, post.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1.2 var(--font-body)',
      color: 'var(--fg3)'
    }
  }, post.club, " \xB7 ", post.time)), /*#__PURE__*/React.createElement(Icon, {
    name: "MoreHorizontal",
    size: 20,
    color: "var(--fg3)"
  })), /*#__PURE__*/React.createElement(Photo, {
    h: 190,
    seed: post.seed,
    label: post.location
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked),
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Heart",
    size: 20,
    color: liked ? 'var(--claret-700)' : 'var(--fg2)',
    stroke: liked ? 0 : 2,
    style: liked ? {
      fill: 'var(--claret-700)'
    } : {}
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px/1 var(--font-body)',
      color: 'var(--fg2)'
    }
  }, post.likes + (liked ? 1 : 0))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MessageCircle",
    size: 20,
    color: "var(--fg2)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px/1 var(--font-body)',
      color: 'var(--fg2)'
    }
  }, post.comments)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Share2",
    size: 19,
    color: "var(--fg2)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.45 var(--font-body)',
      color: 'var(--fg1)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, post.name), " ", post.caption)));
}
Object.assign(window, {
  AppHeader,
  TabBar,
  GroundCard,
  Collectible,
  StatRow,
  FeedPost
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app-components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app-screens.jsx
try { (() => {
/* ============================================================
   Terrace App — screens + shell
   Exports: TerraceApp
   ============================================================ */

const GROUNDS = [{
  id: 1,
  name: 'Champion Hill',
  club: 'Dulwich Hamlet',
  tier: 'Tier 7 · Away',
  distance: '4.2mi',
  kick: 'SAT · KO 15:00',
  logged: true,
  seed: 0,
  floodlit: false,
  photo: 'Champion Hill, the Rabble end'
}, {
  id: 2,
  name: 'The Rec',
  club: 'Local Town FC',
  tier: 'Tier 8',
  distance: '12mi',
  kick: 'TUE · KO 19:45',
  logged: false,
  seed: 1,
  floodlit: true,
  photo: 'Floodlights, a wet Tuesday'
}, {
  id: 3,
  name: 'Mill Field',
  club: 'Marsh Rovers',
  tier: 'Tier 6',
  distance: '21mi',
  kick: 'SAT · KO 15:00',
  logged: false,
  seed: 2,
  floodlit: false,
  photo: 'The away terrace'
}, {
  id: 4,
  name: 'The Den End',
  club: 'Harbour AFC',
  tier: 'Tier 8 · Away',
  distance: '34mi',
  kick: 'SAT · KO 12:30',
  logged: true,
  seed: 3,
  floodlit: false,
  photo: 'Scarves up, full house'
}];
const BADGES = [{
  num: '92',
  label: 'The 92',
  state: 'complete'
}, {
  num: '8',
  label: 'Tier 8 Club',
  state: 'earned'
}, {
  num: '0–0',
  label: 'First Goalless',
  state: 'earned'
}, {
  num: '⚡',
  label: 'Floodlit Away',
  state: 'earned'
}, {
  num: '12',
  label: 'Counties',
  state: 'earned'
}, {
  num: '?',
  label: 'Abandoned (fog)',
  state: 'locked'
}];
const POSTS = [{
  id: 1,
  name: 'Marcus Webb',
  initials: 'MW',
  club: 'Dulwich Hamlet',
  time: '2h',
  avatar: 'var(--claret-700)',
  seed: 0,
  location: 'Champion Hill',
  likes: 47,
  comments: 6,
  caption: 'Pink and blue and a pie at half time. Glory’s overrated — this is the good stuff.'
}, {
  id: 2,
  name: 'Priya Shah',
  initials: 'PS',
  club: 'Marsh Rovers',
  time: '5h',
  avatar: 'var(--bottle-green)',
  seed: 3,
  location: 'Mill Field',
  time2: '',
  likes: 83,
  comments: 14,
  caption: 'First floodlit away of the season. Forty of us, a flask, and a 0–0 we’ll never forget.'
}];

/* ---------- DISCOVER ---------- */
function DiscoverScreen({
  onOpen
}) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Tier 5–8', 'Within 25mi', 'Not logged', 'Floodlit'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "Discover",
    sub: "Every ground in the pyramid, mapped",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--paper-200)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Bell",
      size: 20,
      color: "var(--claret-700)"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--paper-50)',
      border: '1px solid var(--paper-300)',
      borderRadius: 10,
      padding: '11px 13px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 18,
    color: "var(--concrete-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 15px/1 var(--font-body)',
      color: 'var(--concrete-500)'
    }
  }, "Search grounds, clubs, the 92\u2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 16px 0',
      borderRadius: 16,
      overflow: 'hidden',
      border: '1px solid var(--hairline)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(MapBand, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '14px 16px',
      overflowX: 'auto'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    active: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '0 16px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--claret-700)'
    }
  }, "This weekend \xB7 near you"), GROUNDS.map(g => /*#__PURE__*/React.createElement(GroundCard, {
    key: g.id,
    ground: g,
    onOpen: () => onOpen(g)
  }))));
}
function MapBand() {
  const pins = [[26, 38], [54, 28], [42, 62], [70, 54], [82, 36], [18, 64]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 168,
      background: 'linear-gradient(160deg,#23402E,#1F3D2B 60%,#18301F)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.18,
      backgroundImage: 'linear-gradient(rgba(243,235,221,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(243,235,221,0.6) 1px,transparent 1px)',
      backgroundSize: '34px 30px'
    }
  }), pins.map(([x, y], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: x + '%',
      top: y + '%',
      transform: 'translate(-50%,-100%)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MapPin",
    size: i === 1 ? 30 : 22,
    color: i === 1 ? 'var(--mustard-500)' : 'var(--cream)',
    stroke: 2.2,
    style: i === 1 ? {
      filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.4))'
    } : {}
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 12,
      background: 'rgba(22,19,17,0.55)',
      backdropFilter: 'blur(6px)',
      borderRadius: 8,
      padding: '7px 11px',
      color: 'var(--cream)',
      font: '600 12px/1 var(--font-body)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Navigation",
    size: 14,
    color: "var(--mustard-500)"
  }), " 23 grounds within 25 miles"));
}

/* ---------- COLLECT ---------- */
function CollectScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "Collect",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--paper-200)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Settings",
      size: 19,
      color: "var(--claret-700)"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: 'var(--claret-700)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--cream)',
      font: '400 28px/1 var(--font-display)'
    }
  }, "JC"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 28px/0.9 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--ink)'
    }
  }, "Joe Calder"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px/1.2 var(--font-body)',
      color: 'var(--fg2)',
      marginTop: 3
    }
  }, "Groundhopper \xB7 joined 2023"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement(StatRow, {
    stats: [{
      value: '147',
      label: 'Grounds'
    }, {
      value: '12',
      label: 'Counties'
    }, {
      value: '5',
      label: 'Badges'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: 'hidden',
      border: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(MapBand, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1 var(--font-body)',
      color: 'var(--fg2)'
    }
  }, "The 92 \xB7 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--claret-700)'
    }
  }, "92 of 92")), /*#__PURE__*/React.createElement(StatusBadge, {
    tone: "logged"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 13,
    color: "var(--green-800)"
  }), " Complete")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 99,
      background: 'var(--paper-200)',
      marginTop: 8,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--mustard-500)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--claret-700)',
      marginBottom: 14
    }
  }, "Badges earned"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18
    }
  }, BADGES.map((b, i) => /*#__PURE__*/React.createElement(Collectible, {
    key: i,
    badge: b
  })))));
}

/* ---------- BELONG ---------- */
function BelongScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "Belong",
    sub: "The away day, as content",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--claret-700)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Plus",
      size: 22,
      color: "var(--cream)"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: '16px'
    }
  }, POSTS.map(p => /*#__PURE__*/React.createElement(FeedPost, {
    key: p.id,
    post: p
  }))));
}

/* ---------- GROUND DETAIL ---------- */
function GroundDetail({
  ground,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    h: 264,
    seed: ground.seed,
    style: {
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(22,19,17,0.72) 0%, rgba(22,19,17,0.1) 45%, transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: 'absolute',
      top: 52,
      left: 14,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'rgba(22,19,17,0.5)',
      backdropFilter: 'blur(6px)',
      border: 0,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 24,
    color: "var(--cream)"
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      position: 'absolute',
      top: 52,
      right: 14,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'rgba(22,19,17,0.5)',
      backdropFilter: 'blur(6px)',
      border: 0,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Bookmark",
    size: 20,
    color: "var(--cream)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14,
      right: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "mustard"
  }, ground.tier), ground.floodlit && /*#__PURE__*/React.createElement(Tag, {
    tone: "cream"
  }, "Floodlit")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 44px/0.88 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--cream)'
    }
  }, ground.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/1.2 var(--font-body)',
      color: 'rgba(243,235,221,0.85)',
      marginTop: 4
    }
  }, ground.club, " \xB7 ", ground.distance, " away"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--green-700)',
      borderRadius: 14,
      padding: '14px 16px',
      color: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "CalendarDays",
    size: 22,
    color: "var(--mustard-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 var(--font-body)'
    }
  }, "Next: ", ground.club, " vs Riverside"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1 var(--font-mono)',
      color: 'rgba(243,235,221,0.8)',
      marginTop: 3
    }
  }, ground.kick, " \xB7 Gate C \xB7 Terrace \xA314")), /*#__PURE__*/React.createElement(StatusBadge, {
    tone: "live"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Dot",
    size: 14,
    color: "var(--mustard-500)"
  }), "3d")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--claret-700)',
      margin: '20px 0 12px'
    }
  }, "The essentials"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, [['Train', 'TrainFront', '11 min walk from East Dulwich'], ['The pub', 'Beer', 'The Cherry Tree — get there by 1:30'], ['The pie', 'Pizza', 'Famous steak & ale, sells out by HT'], ['Away end', 'Users', 'The Rabble — singing, standing, covered']].map(([t, ic, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      padding: '12px 0',
      borderBottom: i < 3 ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      background: 'var(--paper-200)',
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 38px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19,
    color: "var(--claret-700)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 var(--font-body)',
      color: 'var(--fg1)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.3 var(--font-body)',
      color: 'var(--fg2)',
      marginTop: 2
    }
  }, d)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      display: 'flex',
      gap: 10,
      padding: '12px 16px',
      background: 'var(--paper)',
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(CTAButton, {
    tone: "outline",
    icon: "MapPin",
    onClick: () => {}
  }, "Directions"), /*#__PURE__*/React.createElement(CTAButton, {
    tone: "primary",
    icon: "CalendarPlus",
    full: true,
    onClick: () => {}
  }, "Plan the day")));
}

/* ---------- SHELL ---------- */
function TerraceApp() {
  const [tab, setTab] = useState('discover');
  const [ground, setGround] = useState(null);
  let screen;
  if (ground) screen = /*#__PURE__*/React.createElement(GroundDetail, {
    ground: ground,
    onBack: () => setGround(null)
  });else if (tab === 'discover') screen = /*#__PURE__*/React.createElement(DiscoverScreen, {
    onOpen: setGround
  });else if (tab === 'collect') screen = /*#__PURE__*/React.createElement(CollectScreen, null);else if (tab === 'belong') screen = /*#__PURE__*/React.createElement(BelongScreen, null);else screen = /*#__PURE__*/React.createElement(PlaceholderScreen, {
    tab: tab
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, screen), !ground && /*#__PURE__*/React.createElement(TabBar, {
    active: tab,
    onChange: setTab
  }));
}
function PlaceholderScreen({
  tab
}) {
  const copy = {
    plan: ['Route', 'Plan the away day', 'Train times, the right pub, a shareable itinerary so the group turns up in the same place.'],
    read: ['BookOpen', 'Read', 'Club histories, photo essays, ground reviews — the best lower-league stories.']
  }[tab];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppHeader, {
    title: copy[1]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      padding: '70px 36px',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--paper-200)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: copy[0],
    size: 28,
    color: "var(--claret-700)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 26px/0.95 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--ink)'
    }
  }, copy[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.5 var(--font-body)',
      color: 'var(--fg2)',
      maxWidth: 260
    }
  }, copy[2])));
}
Object.assign(window, {
  TerraceApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app-screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app-ui.jsx
try { (() => {
/* ============================================================
   Terrace App — shared UI primitives
   Exports to window: Icon, Crest, Chip, Tag, StatusBadge, Photo,
   AppHeader, TabBar, GroundCard, Collectible, FeedPost, CTAButton
   ============================================================ */
const {
  useState
} = React;

/* ---- Lucide icon wrapper (stroke 2, rounded) ---- */
function Icon({
  name,
  size = 22,
  stroke = 2,
  color = 'currentColor',
  style = {}
}) {
  const lib = window.lucide && window.lucide.icons;
  // lucide UMD keys are PascalCase
  const data = lib && (lib[name] || lib[name.charAt(0).toUpperCase() + name.slice(1)]);
  if (!data) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      ...style
    }
  });
  // lucide UMD shape: ["svg", attrs, [ [tag, attrs], ... ]]
  const children = Array.isArray(data[2]) ? data[2] : [];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, children.map((n, i) => React.createElement(n[0], {
    key: i,
    ...n[1]
  })));
}

/* ---- Crest mark (uses real asset) ---- */
function Crest({
  size = 28,
  variant = 'claret'
}) {
  const src = variant === 'cream' ? '../../assets/terrace-crest-cream.svg' : '../../assets/terrace-crest.svg';
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    width: size,
    height: size,
    alt: "Terrace",
    style: {
      display: 'block'
    }
  });
}

/* ---- Filter chip ---- */
function Chip({
  children,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      font: '600 13px/1 var(--font-body)',
      whiteSpace: 'nowrap',
      padding: '8px 14px',
      borderRadius: 999,
      cursor: 'pointer',
      border: '1px solid ' + (active ? 'var(--claret-700)' : 'var(--hairline)'),
      background: active ? 'var(--claret-700)' : 'var(--paper-50)',
      color: active ? 'var(--cream)' : 'var(--fg1)',
      transition: 'all .15s ease'
    }
  }, children);
}

/* ---- Overline tag ---- */
function Tag({
  children,
  tone = 'claret'
}) {
  const map = {
    claret: ['var(--claret-100)', 'var(--claret-800)'],
    green: ['var(--green-100)', 'var(--green-800)'],
    mustard: ['var(--mustard-200)', 'var(--mustard-700)'],
    cream: ['var(--cream)', 'var(--claret-800)']
  };
  const [bg, fg] = map[tone] || map.claret;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      padding: '5px 8px',
      borderRadius: 4,
      background: bg,
      color: fg
    }
  }, children);
}

/* ---- Matchday status badge ---- */
function StatusBadge({
  children,
  tone = 'live'
}) {
  const styles = {
    live: {
      background: 'var(--claret-700)',
      color: 'var(--cream)'
    },
    logged: {
      background: 'var(--green-100)',
      color: 'var(--green-800)'
    },
    off: {
      background: 'var(--paper-200)',
      color: 'var(--fg2)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: '600 11px/1 var(--font-body)',
      padding: '5px 10px',
      borderRadius: 999,
      ...styles[tone]
    }
  }, children);
}

/* ---- Documentary photo placeholder (warm, grainy stand-in) ---- */
function Photo({
  h = 120,
  seed = 0,
  label,
  children,
  style = {}
}) {
  const grads = ['linear-gradient(150deg,#5E1721,#7A1F2B 55%,#1F3D2B)', 'linear-gradient(150deg,#18301F,#1F3D2B 55%,#3C6B4C)', 'linear-gradient(150deg,#4A0F18,#7A1F2B 60%,#8E2A37)', 'linear-gradient(150deg,#1F3D2B,#2C5239 55%,#B27E1C)'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      background: grads[seed % grads.length],
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.16,
      backgroundImage: 'radial-gradient(rgba(243,235,221,0.9) 0.8px, transparent 0.9px)',
      backgroundSize: '5px 5px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -20,
      right: -10,
      width: 90,
      height: 90,
      borderRadius: '50%',
      background: 'radial-gradient(rgba(224,165,46,0.45), transparent 70%)'
    }
  }), children, label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 10,
      color: 'var(--cream)',
      font: '500 11px/1 var(--font-body)',
      opacity: 0.8,
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Camera",
    size: 13,
    color: "var(--cream)"
  }), " ", label));
}

/* ---- Primary / CTA button ---- */
function CTAButton({
  children,
  icon,
  tone = 'primary',
  full,
  onClick,
  style = {}
}) {
  const tones = {
    primary: {
      background: 'var(--claret-700)',
      color: 'var(--cream)'
    },
    accent: {
      background: 'var(--mustard-500)',
      color: 'var(--ink)'
    },
    deep: {
      background: 'var(--bottle-green)',
      color: 'var(--cream)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--claret-700)',
      border: '1.5px solid var(--claret-700)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      font: '600 15px/1 var(--font-body)',
      border: 0,
      cursor: 'pointer',
      borderRadius: 10,
      padding: '14px 20px',
      width: full ? '100%' : 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      ...tones[tone],
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: tones[tone].color
  }), children);
}
Object.assign(window, {
  Icon,
  Crest,
  Chip,
  Tag,
  StatusBadge,
  Photo,
  CTAButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app-ui.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/web-sections.jsx
try { (() => {
/* ============================================================
   Terrace Web — sections
   Exports: WebNav, Hero, MapSection, EditorialSection,
            ShopSection, MembershipSection, WebFooter, TerraceSite
   ============================================================ */

/* ---------------- NAV ---------------- */
function WebNav() {
  const links = ['Discover', 'Collect', 'Read', 'Shop', 'Membership'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      padding: '16px 48px',
      background: 'rgba(122,31,43,0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(243,235,221,0.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(WCrest, {
    size: 34,
    variant: "cream"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 30px/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      color: 'var(--cream)'
    }
  }, "Terrace")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 20
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: '500 14px/1 var(--font-body)',
      color: 'rgba(243,235,221,0.82)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--mustard-400)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(243,235,221,0.82)'
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: '500 14px/1 var(--font-body)',
      color: 'var(--cream)',
      textDecoration: 'none'
    }
  }, "Log in"), /*#__PURE__*/React.createElement(WButton, {
    tone: "accent",
    size: "sm"
  }, "Join free")));
}

/* ---------------- HERO (manifesto) ---------------- */
function Hero() {
  return /*#__PURE__*/React.createElement(GrainPhoto, {
    seed: 0,
    glow: false,
    style: {
      minHeight: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -80,
      left: '12%',
      width: 320,
      height: 320,
      borderRadius: '50%',
      background: 'radial-gradient(rgba(224,165,46,0.28), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -60,
      right: '8%',
      width: 280,
      height: 280,
      borderRadius: '50%',
      background: 'radial-gradient(rgba(224,165,46,0.22), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, transparent 40%, rgba(20,36,24,0.55) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1080,
      margin: '0 auto',
      padding: '96px 48px 88px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(WTag, {
    tone: "cream",
    style: {
      marginBottom: 28
    }
  }, "The home of non-league"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '400 clamp(56px, 7.5vw, 108px)/0.9 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--cream)',
      margin: '0 0 8px'
    }
  }, "For the ones who", /*#__PURE__*/React.createElement("br", null), "stand at the back"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 18px/1.6 var(--font-body)',
      color: 'rgba(243,235,221,0.82)',
      maxWidth: 580,
      margin: '20px auto 0'
    }
  }, "Part away-day planner, part ground-collector, part matchday social club. Terrace is for the local side that's been there a hundred years \u2014 and everyone who stands with them."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(WButton, {
    tone: "accent",
    size: "lg",
    icon: "ArrowRight"
  }, "Join Terrace \u2014 it's free"), /*#__PURE__*/React.createElement(WButton, {
    tone: "outlineCream",
    size: "lg",
    icon: "Play"
  }, "Watch the film")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      justifyContent: 'center',
      marginTop: 56
    }
  }, [['1,400+', 'Grounds mapped'], ['92', 'The famous 92'], ['38k', 'Members'], ['Tier 1–10', 'The whole pyramid']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 44px/0.9 var(--font-display)',
      color: 'var(--mustard-500)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.3 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'rgba(243,235,221,0.6)',
      marginTop: 6
    }
  }, l))))));
}

/* ---------------- MANIFESTO STRIP ---------------- */
function ManifestoStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bottle-green)',
      padding: '72px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 clamp(26px,3.2vw,40px)/1.35 var(--font-body)',
      color: 'var(--cream)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "\u201CFootball told us the only thing that matters is the top. The trophies, the billionaires, the games you watch through a paywall. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mustard-400)'
    }
  }, "We never bought it."), "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 30px/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      color: 'var(--mustard-500)',
      marginTop: 28
    }
  }, "Show up.")));
}

/* ---------------- MAP / DISCOVER ---------------- */
function MapSection() {
  const pins = [[20, 30], [38, 52], [56, 24], [70, 46], [82, 64], [30, 70], [62, 72], [46, 38], [88, 30]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.15fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Discover \xB7 Collect"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '400 clamp(40px,4.5vw,64px)/1.0 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--ink)',
      margin: '0 0 24px',
      paddingBottom: 4
    }
  }, "Every ground in the pyramid, mapped"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 17px/1.6 var(--font-body)',
      color: 'var(--fg2)',
      maxWidth: 460,
      margin: '0 0 24px'
    }
  }, "Fixtures, kick-off times, how to get there, the legendary pie and the away-end notes. Log the grounds you've visited, watch your map fill in, and earn badges \u2014 the famous 92, regions, tiers and milestones."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 28
    }
  }, [['MapPin', 'The definitive guide to where to go'], ['Medal', 'Collect the 92 — and the badge of honour'], ['Route', 'Plan the away day end to end']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: 'var(--claret-100)',
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 38px'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: ic,
    size: 19,
    color: "var(--claret-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 16px/1.4 var(--font-body)',
      color: 'var(--fg1)'
    }
  }, t)))), /*#__PURE__*/React.createElement(WButton, {
    tone: "primary",
    icon: "ArrowRight"
  }, "Explore the map")), /*#__PURE__*/React.createElement(GrainPhoto, {
    seed: 1,
    glow: false,
    style: {
      borderRadius: 18,
      minHeight: 420,
      border: '1px solid var(--hairline)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.2,
      backgroundImage: 'linear-gradient(rgba(243,235,221,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(243,235,221,0.5) 1px,transparent 1px)',
      backgroundSize: '54px 48px'
    }
  }), pins.map(([x, y], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: x + '%',
      top: y + '%',
      transform: 'translate(-50%,-100%)'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "MapPin",
    size: i === 3 ? 40 : 26,
    color: i === 3 ? 'var(--mustard-500)' : 'var(--cream)',
    stroke: 2.2,
    style: i === 3 ? {
      filter: 'drop-shadow(0 3px 4px rgba(0,0,0,.45))'
    } : {
      opacity: 0.92
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      bottom: 18,
      background: 'rgba(22,19,17,0.62)',
      backdropFilter: 'blur(8px)',
      borderRadius: 12,
      padding: '14px 18px',
      color: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1 var(--font-mono)',
      color: 'var(--mustard-400)',
      letterSpacing: '0.05em'
    }
  }, "NOW VIEWING"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 26px/0.95 var(--font-display)',
      textTransform: 'uppercase',
      marginTop: 5
    }
  }, "Champion Hill"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px/1 var(--font-body)',
      color: 'rgba(243,235,221,0.75)',
      marginTop: 4
    }
  }, "Dulwich Hamlet \xB7 Tier 7 \xB7 Logged \u2713")))));
}

/* ---------------- EDITORIAL / READ ---------------- */
function EditorialSection() {
  const articles = [{
    seed: 4,
    tag: 'Photo essay',
    title: 'A wet Tuesday under the floodlights',
    read: '6 min',
    meta: 'Words & pictures · M. Webb'
  }, {
    seed: 2,
    tag: 'Ground review',
    title: 'The pie at Champion Hill, ranked',
    read: '4 min',
    meta: 'The Terrace Guide'
  }, {
    seed: 3,
    tag: 'Club history',
    title: 'A hundred years at the back',
    read: '9 min',
    meta: 'Non-league stories'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper-100)',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Read"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '400 clamp(36px,4vw,56px)/0.95 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--ink)',
      margin: 0
    }
  }, "Football, the way it was meant to feel")), /*#__PURE__*/React.createElement(WButton, {
    tone: "outline",
    icon: "ArrowRight"
  }, "All stories")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 26
    }
  }, articles.map((a, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      background: 'var(--bg-raised)',
      border: '1px solid var(--hairline)',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.boxShadow = 'var(--shadow-lg)',
    onMouseLeave: e => e.currentTarget.style.boxShadow = 'var(--shadow-card)'
  }, /*#__PURE__*/React.createElement(GrainPhoto, {
    seed: a.seed,
    style: {
      height: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(WTag, {
    tone: "mustard"
  }, a.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 21px/1.25 var(--font-body)',
      color: 'var(--fg1)',
      margin: '0 0 14px'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1 var(--font-body)',
      color: 'var(--fg3)'
    }
  }, a.meta), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-mono)',
      color: 'var(--claret-700)'
    }
  }, a.read))))))));
}

/* ---------------- SHOP / WEAR ---------------- */
function ShopSection() {
  const products = [{
    seed: 0,
    name: 'Claret & Cream Scarf',
    price: '£24',
    tag: 'Bestseller',
    knit: true
  }, {
    seed: 1,
    name: 'Show Up Tee',
    price: '£28',
    tag: 'New'
  }, {
    seed: 4,
    name: 'Crest Enamel Pin',
    price: '£8',
    tag: ''
  }, {
    seed: 2,
    name: 'Programme No.1',
    price: '£12',
    tag: 'Limited'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--claret-800)',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "var(--mustard-400)"
  }, "Wear"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '400 clamp(36px,4vw,56px)/0.95 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--cream)',
      margin: 0
    }
  }, "The brand you can wear to the game")), /*#__PURE__*/React.createElement(WButton, {
    tone: "cream",
    icon: "ArrowRight"
  }, "Shop all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 22
    }
  }, products.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--cream)',
      borderRadius: 16,
      overflow: 'hidden',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      position: 'relative',
      background: 'var(--paper-200)'
    }
  }, p.knit ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, ['#7A1F2B', '#F3EBDD', '#7A1F2B', '#E0A52E', '#7A1F2B', '#F3EBDD', '#7A1F2B'].map((c, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      flex: 1,
      background: c
    }
  }))) : /*#__PURE__*/React.createElement(GrainPhoto, {
    seed: p.seed,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), p.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(WTag, {
    tone: "ink"
  }, p.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1.3 var(--font-body)',
      color: 'var(--ink)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 24px/1 var(--font-display)',
      color: 'var(--claret-700)'
    }
  }, p.price), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 9,
      background: 'var(--claret-700)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "Plus",
    size: 18,
    color: "var(--cream)"
  })))))))));
}

/* ---------------- MEMBERSHIP ---------------- */
function MembershipSection() {
  const tiers = [{
    name: 'Matchday',
    price: 'Free',
    tone: 'cream',
    features: ['The map & fixtures', 'Log grounds & basic badges', 'The feed & club groups', 'Read free editorial'],
    cta: 'Join free',
    ctaTone: 'outline'
  }, {
    name: 'Season Ticket',
    price: '£6',
    per: '/mo',
    tone: 'deep',
    featured: true,
    features: ['Everything in Matchday', 'Full ground guides & away-day notes', 'Trip planner & shareable itineraries', 'All badges + members\u2019 editorial', 'Ad-free · 10% off the shop'],
    cta: 'Get Season Ticket',
    ctaTone: 'accent'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "var(--claret-700)"
  }, "Membership"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '400 clamp(38px,4.4vw,60px)/0.95 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'var(--ink)',
      margin: '0 auto 14px',
      display: 'inline-block'
    }
  }, "Stand with us"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 17px/1.6 var(--font-body)',
      color: 'var(--fg2)',
      maxWidth: 560,
      margin: '0 auto 44px'
    }
  }, "Every membership helps get more people through more turnstiles, at more grounds. That's the whole point."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      textAlign: 'left'
    }
  }, tiers.map((t, i) => {
    const deep = t.tone === 'deep';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: deep ? 'var(--bottle-green)' : 'var(--bg-raised)',
        border: '1px solid ' + (deep ? 'var(--green-600)' : 'var(--hairline)'),
        borderRadius: 20,
        padding: '32px 30px',
        position: 'relative',
        boxShadow: deep ? 'var(--shadow-lg)' : 'var(--shadow-card)'
      }
    }, t.featured && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 24,
        right: 24
      }
    }, /*#__PURE__*/React.createElement(WTag, {
      tone: "mustard"
    }, "Most popular")), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 32px/1 var(--font-display)',
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        color: deep ? 'var(--cream)' : 'var(--ink)'
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 4,
        margin: '14px 0 22px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 56px/0.9 var(--font-display)',
        color: deep ? 'var(--mustard-500)' : 'var(--claret-700)'
      }
    }, t.price), t.per && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 16px/1 var(--font-body)',
        color: deep ? 'rgba(243,235,221,0.7)' : 'var(--fg3)'
      }
    }, t.per)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 13,
        marginBottom: 28
      }
    }, t.features.map((f, j) => /*#__PURE__*/React.createElement("div", {
      key: j,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(WIcon, {
      name: "Check",
      size: 18,
      color: deep ? 'var(--mustard-500)' : 'var(--claret-700)',
      stroke: 2.6,
      style: {
        marginTop: 1,
        flex: '0 0 18px'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 15px/1.4 var(--font-body)',
        color: deep ? 'rgba(243,235,221,0.9)' : 'var(--fg1)'
      }
    }, f)))), /*#__PURE__*/React.createElement(WButton, {
      tone: t.ctaTone,
      size: "md",
      style: {
        width: '100%'
      }
    }, t.cta));
  }))));
}

/* ---------------- FOOTER ---------------- */
function WebFooter() {
  const cols = [['Product', ['Discover', 'Collect', 'Plan', 'The feed', 'Membership']], ['Culture', ['Read', 'The shop', 'Club partnerships', 'Meet-ups']], ['Terrace', ['About', 'The manifesto', 'Careers', 'Press']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      padding: '64px 48px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(WCrest, {
    size: 32,
    variant: "cream"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 28px/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      color: 'var(--cream)'
    }
  }, "Terrace")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.6 var(--font-body)',
      color: 'rgba(243,235,221,0.6)',
      maxWidth: 280,
      margin: '0 0 18px'
    }
  }, "For the ones who stand at the back. The home of non-league football culture."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, ['Instagram', 'Twitter', 'Youtube'].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: 'rgba(243,235,221,0.08)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: s,
    size: 18,
    color: "var(--cream)"
  }))))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--mustard-400)',
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      font: '400 14px/1 var(--font-body)',
      color: 'rgba(243,235,221,0.72)',
      textDecoration: 'none'
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '40px auto 0',
      paddingTop: 24,
      borderTop: '1px solid rgba(243,235,221,0.12)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1 var(--font-body)',
      color: 'rgba(243,235,221,0.5)'
    }
  }, "\xA9 2026 Terrace. Glory's overrated."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1 var(--font-body)',
      color: 'rgba(243,235,221,0.5)'
    }
  }, "Privacy \xB7 Terms")));
}

/* ---------------- PAGE ---------------- */
function TerraceSite() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement(WebNav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(ManifestoStrip, null), /*#__PURE__*/React.createElement(MapSection, null), /*#__PURE__*/React.createElement(EditorialSection, null), /*#__PURE__*/React.createElement(ShopSection, null), /*#__PURE__*/React.createElement(MembershipSection, null), /*#__PURE__*/React.createElement(WebFooter, null));
}
Object.assign(window, {
  WebNav,
  Hero,
  ManifestoStrip,
  MapSection,
  EditorialSection,
  ShopSection,
  MembershipSection,
  WebFooter,
  TerraceSite
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/web-sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/web-ui.jsx
try { (() => {
/* ============================================================
   Terrace Web — shared UI primitives
   Exports: WIcon, WCrest, WButton, WTag, SectionLabel, GrainPhoto
   ============================================================ */
const {
  useState: useStateW
} = React;
function WIcon({
  name,
  size = 22,
  stroke = 2,
  color = 'currentColor',
  style = {}
}) {
  const lib = window.lucide && window.lucide.icons;
  const data = lib && lib[name];
  if (!data) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      ...style
    }
  });
  const children = Array.isArray(data[2]) ? data[2] : [];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, children.map((n, i) => React.createElement(n[0], {
    key: i,
    ...n[1]
  })));
}
function WCrest({
  size = 36,
  variant = 'cream'
}) {
  const src = variant === 'cream' ? '../../assets/terrace-crest-cream.svg' : variant === 'claret' ? '../../assets/terrace-crest.svg' : '../../assets/terrace-crest.svg';
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    width: size,
    height: size,
    alt: "Terrace",
    style: {
      display: 'block'
    }
  });
}
function WButton({
  children,
  icon,
  tone = 'primary',
  size = 'md',
  onClick,
  style = {}
}) {
  const tones = {
    primary: {
      background: 'var(--claret-700)',
      color: 'var(--cream)'
    },
    accent: {
      background: 'var(--mustard-500)',
      color: 'var(--ink)'
    },
    cream: {
      background: 'var(--cream)',
      color: 'var(--claret-800)'
    },
    deep: {
      background: 'var(--bottle-green)',
      color: 'var(--cream)'
    },
    outlineCream: {
      background: 'transparent',
      color: 'var(--cream)',
      border: '1.5px solid rgba(243,235,221,0.5)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--claret-700)',
      border: '1.5px solid var(--claret-700)'
    }
  };
  const sizes = {
    sm: '10px 16px',
    md: '14px 24px',
    lg: '17px 32px'
  };
  const fs = {
    sm: 14,
    md: 15,
    lg: 17
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      font: `600 ${fs[size]}px/1 var(--font-body)`,
      border: 0,
      cursor: 'pointer',
      borderRadius: 10,
      padding: sizes[size],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 9,
      transition: 'transform .12s ease, filter .15s ease',
      ...tones[tone],
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = 'translateY(1px)',
    onMouseUp: e => e.currentTarget.style.transform = 'translateY(0)',
    onMouseLeave: e => e.currentTarget.style.transform = 'translateY(0)'
  }, children, icon && /*#__PURE__*/React.createElement(WIcon, {
    name: icon,
    size: fs[size] + 3,
    color: tones[tone].color
  }));
}
function WTag({
  children,
  tone = 'mustard',
  style = {}
}) {
  const map = {
    claret: ['var(--claret-100)', 'var(--claret-800)'],
    green: ['var(--green-100)', 'var(--green-800)'],
    mustard: ['var(--mustard-200)', 'var(--mustard-700)'],
    cream: ['rgba(243,235,221,0.16)', 'var(--cream)'],
    ink: ['var(--paper-200)', 'var(--ink)']
  };
  const [bg, fg] = map[tone] || map.mustard;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 11px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      padding: '6px 10px',
      borderRadius: 5,
      background: bg,
      color: fg,
      display: 'inline-block',
      ...style
    }
  }, children);
}
function SectionLabel({
  children,
  color = 'var(--claret-700)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 2,
      background: color,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      color
    }
  }, children));
}

/* Warm grainy documentary photo stand-in */
function GrainPhoto({
  seed = 0,
  children,
  style = {},
  glow = true
}) {
  const grads = ['linear-gradient(155deg,#4A0F18 0%,#7A1F2B 50%,#1F3D2B 100%)', 'linear-gradient(155deg,#142418 0%,#1F3D2B 50%,#3C6B4C 100%)', 'linear-gradient(155deg,#5E1721 0%,#8E2A37 55%,#B27E1C 100%)', 'linear-gradient(155deg,#1F3D2B 0%,#2C5239 45%,#7A1F2B 100%)', 'linear-gradient(155deg,#18301F 0%,#23402E 60%,#161311 100%)'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: grads[seed % grads.length],
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.18,
      backgroundImage: 'radial-gradient(rgba(243,235,221,0.85) 0.7px, transparent 0.8px)',
      backgroundSize: '4px 4px'
    }
  }), glow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-12%',
      right: '-6%',
      width: '40%',
      paddingBottom: '40%',
      borderRadius: '50%',
      background: 'radial-gradient(rgba(224,165,46,0.4), transparent 68%)'
    }
  }), children);
}
Object.assign(window, {
  WIcon,
  WCrest,
  WButton,
  WTag,
  SectionLabel,
  GrainPhoto
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/web-ui.jsx", error: String((e && e.message) || e) }); }

})();
