'use client';

/* 1 ─ AC Services ───────────────────────────────────────────────────────────
   Layout: Perspective browser mockup fills ~80% of the space — the website
   IS the visual. Minimal single stat pill at bottom.                         */
export function ACServicesVisual() {
  const C = '#16a34a';
  return (
    <div style={{ position:'absolute', inset:0, background:'#0b0b0b', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 42% 52%, ${C}18 0%, transparent 55%)`, pointerEvents:'none' }} />
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.028) 1px, transparent 1px)', backgroundSize:'22px 22px', pointerEvents:'none' }} />

      {/* Big perspective browser */}
      <div style={{
        width:'83%', position:'relative', zIndex:10,
        transform:'perspective(1000px) rotateY(-6deg) rotateX(3deg)',
        borderRadius:14, overflow:'hidden',
        border:'1px solid rgba(255,255,255,0.08)',
        boxShadow:'0 40px 100px rgba(0,0,0,0.7)',
      }}>
        {/* Chrome */}
        <div style={{ background:'#1c1c1c', padding:'9px 12px', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display:'flex', gap:5 }}>
            {['#ff5f56','#ffbd2e','#27c93f'].map(c => <span key={c} style={{ width:8, height:8, borderRadius:'50%', background:c, display:'block' }} />)}
          </div>
          <div style={{ flex:1, background:'rgba(255,255,255,0.06)', borderRadius:20, padding:'4px 10px', display:'flex', alignItems:'center', gap:4 }}>
            <span style={{ fontSize:8.5, opacity:0.35 }}>🔒</span>
            <span style={{ fontFamily:'monospace', fontSize:9.5, color:'rgba(255,255,255,0.35)' }}>acservices.co.uk</span>
          </div>
          <div style={{ width:52, height:16, borderRadius:5, background:'rgba(255,255,255,0.05)' }} />
        </div>
        {/* Website body */}
        <div style={{ background:'#f9f8f6' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'9px 14px', borderBottom:'1px solid #ece9e5' }}>
            <div style={{ width:44, height:7, borderRadius:3, background:'#222' }} />
            <div style={{ display:'flex', gap:10, alignItems:'center' }}>
              {[28,28,28].map((w,i) => <div key={i} style={{ width:w, height:5, borderRadius:2, background:'#ddd' }} />)}
              <div style={{ width:56, height:20, borderRadius:8, background:C }} />
            </div>
          </div>
          <div style={{ background:'linear-gradient(135deg,#edfaf3,#e2f5ea)', padding:'20px 14px 16px' }}>
            <div style={{ width:28, height:3, borderRadius:2, background:C+'55', marginBottom:9 }} />
            <div style={{ width:'68%', height:12, borderRadius:5, background:'#1a1a1a', marginBottom:6 }} />
            <div style={{ width:'50%', height:12, borderRadius:5, background:'#2a2a2a', marginBottom:7 }} />
            <div style={{ width:'42%', height:7, borderRadius:3, background:'#aaa', marginBottom:13 }} />
            <div style={{ display:'flex', gap:7 }}>
              <div style={{ width:62, height:23, borderRadius:7, background:C }} />
              <div style={{ width:48, height:23, borderRadius:7, border:'1px solid #ccc' }} />
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:6, padding:'10px 14px' }}>
            {['🔧','⚡','🏗️'].map((icon, i) => (
              <div key={i} style={{ background:'white', border:'1px solid #e9e7e3', borderRadius:8, padding:'10px 8px' }}>
                <div style={{ fontSize:14, marginBottom:6 }}>{icon}</div>
                <div style={{ width:'80%', height:5, borderRadius:2, background:'#222', marginBottom:4 }} />
                <div style={{ width:'100%', height:3, borderRadius:2, background:'#e5e3de', marginBottom:2 }} />
                <div style={{ width:'65%', height:3, borderRadius:2, background:'#eeeceb' }} />
              </div>
            ))}
          </div>
          <div style={{ padding:'8px 14px', borderTop:'1px solid #ece9e5', display:'flex', alignItems:'center', gap:8, background:'white' }}>
            <div style={{ display:'flex' }}>
              {[0,1,2].map(i => <div key={i} style={{ width:20, height:20, borderRadius:'50%', background:`${C}${(50+i*20).toString(16)}`, border:'2px solid white', marginLeft:i>0?-5:0 }} />)}
            </div>
            <div>
              <div style={{ width:80, height:4, borderRadius:2, background:'#333', marginBottom:3 }} />
              <div style={{ fontFamily:'monospace', fontSize:8, color:C }}>★★★★★ 4.9 / 5</div>
            </div>
          </div>
        </div>
      </div>

      {/* Single stat pill */}
      <div style={{ position:'absolute', bottom:22, left:20, zIndex:20, background:'#181818', border:`1px solid ${C}30`, borderRadius:10, padding:'8px 13px', boxShadow:'0 6px 20px rgba(0,0,0,0.5)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:6 }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:C, display:'block' }} />
          <span style={{ fontFamily:'monospace', fontSize:9, color:C }}>Live · London, UK</span>
        </div>
      </div>

      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, transparent 65%, rgba(10,10,10,0.5) 100%)', pointerEvents:'none', zIndex:15 }} />
    </div>
  );
}

/* 2 ─ Superfanbase ──────────────────────────────────────────────────────────
   Layout: Three cards scattered at different rotations, like cards thrown
   on a surface. Each card at a unique angle and position.                    */
export function SuperfanbaseVisual() {
  const C = '#2563eb';
  const bars = [45, 62, 38, 78, 55, 70, 92];
  return (
    <div style={{ position:'absolute', inset:0, background:'#0b0b0b', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 52% 48%, ${C}18 0%, transparent 62%)`, pointerEvents:'none' }} />

      {/* Card 1 — back left, -8deg */}
      <div style={{
        position:'absolute',
        transform:'rotate(-8deg) translate(-85px, 35px)',
        width:182, zIndex:8,
        background:'#1a1a1a', border:'1px solid rgba(255,255,255,0.07)',
        borderRadius:14, padding:'14px 16px',
        boxShadow:'0 20px 50px rgba(0,0,0,0.5)',
      }}>
        <div style={{ fontFamily:'monospace', fontSize:8, color:'#555', marginBottom:6, letterSpacing:'0.08em' }}>MONTHLY FANS</div>
        <div style={{ fontSize:24, fontWeight:800, color:'#fff', lineHeight:1 }}>24,891</div>
        <div style={{ fontFamily:'monospace', fontSize:9, color:C, marginTop:4 }}>↑ 340% this month</div>
        <div style={{ display:'flex', alignItems:'flex-end', gap:3, height:38, marginTop:10 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex:1, borderRadius:'2px 2px 0 0', background:i===bars.length-1?C:C+'38', height:`${h}%` }} />
          ))}
        </div>
      </div>

      {/* Card 2 — front, slight +3deg, slight right */}
      <div style={{
        position:'absolute',
        transform:'rotate(3deg) translate(28px, -22px)',
        width:172, zIndex:14,
        background:'#1e1e1e', border:`1px solid ${C}28`,
        borderRadius:14, padding:'16px 16px',
        boxShadow:`0 28px 64px rgba(0,0,0,0.65), 0 0 0 1px ${C}18`,
      }}>
        <div style={{ fontSize:20, marginBottom:8 }}>🎤</div>
        <div style={{ fontFamily:'monospace', fontSize:8, color:'#555', marginBottom:5, letterSpacing:'0.08em' }}>ENGAGEMENT RATE</div>
        <div style={{ fontSize:30, fontWeight:900, color:C, lineHeight:1 }}>94.2%</div>
        <div style={{ height:3, borderRadius:2, background:'rgba(255,255,255,0.07)', marginTop:10 }}>
          <div style={{ height:'100%', borderRadius:2, background:C, width:'94%' }} />
        </div>
        <div style={{ fontFamily:'monospace', fontSize:8, color:'#555', marginTop:4 }}>industry avg: 42%</div>
      </div>

      {/* Card 3 — back right, +13deg */}
      <div style={{
        position:'absolute',
        transform:'rotate(13deg) translate(96px, 42px)',
        width:156, zIndex:8,
        background:'#181818', border:'1px solid rgba(255,255,255,0.05)',
        borderRadius:14, padding:'14px 16px',
        boxShadow:'0 16px 40px rgba(0,0,0,0.4)',
      }}>
        <div style={{ fontFamily:'monospace', fontSize:8, color:'#555', marginBottom:6, letterSpacing:'0.08em' }}>PLATFORM</div>
        <div style={{ fontFamily:'monospace', fontSize:11, color:'#e0e0e0', fontWeight:600 }}>superfanbase.com</div>
        <div style={{ marginTop:10, display:'flex', alignItems:'center', gap:6 }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:C, display:'block' }} />
          <span style={{ fontFamily:'monospace', fontSize:8.5, color:C }}>Live · Global</span>
        </div>
        <div style={{ display:'flex', marginTop:10 }}>
          {[C+'cc',C+'88',C+'55','#333'].map((bg, i) => (
            <div key={i} style={{ width:20, height:20, borderRadius:'50%', background:bg, border:'2px solid #181818', marginLeft:i>0?-5:0 }} />
          ))}
          <div style={{ fontFamily:'monospace', fontSize:8, color:'#666', marginLeft:7, alignSelf:'center' }}>+12K</div>
        </div>
      </div>

      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, transparent 60%, rgba(10,10,10,0.5) 100%)', pointerEvents:'none', zIndex:20 }} />
    </div>
  );
}

/* 3 ─ Togethr Social ────────────────────────────────────────────────────────
   Layout: SVG network graph fills the whole panel — nodes (users) connected
   by lines. Profile pills float at corners.                                  */
export function TogethrSocialVisual() {
  const C = '#7c3aed';
  const nodes = [
    { cx:148, cy:148, r:26, main:true },
    { cx:72,  cy:80,  r:16 },
    { cx:232, cy:78,  r:18 },
    { cx:58,  cy:198, r:14 },
    { cx:252, cy:192, r:20 },
    { cx:138, cy:248, r:15 },
    { cx:36,  cy:138, r:10 },
    { cx:278, cy:140, r:12 },
    { cx:182, cy:278, r:11 },
    { cx:110, cy:310, r:9  },
    { cx:210, cy:52,  r:10 },
  ];
  const edges = [
    [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],
    [1,2],[1,3],[2,4],[3,5],[4,7],[5,8],[8,9],
  ];
  return (
    <div style={{ position:'absolute', inset:0, background:'#0b0b0b', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 49% 46%, ${C}1c 0%, transparent 55%)`, pointerEvents:'none' }} />

      {/* Network SVG fills the entire panel */}
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} viewBox="0 0 310 370" preserveAspectRatio="xMidYMid slice">
        {edges.map(([a,b], i) => (
          <line key={i}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke={C} strokeWidth="0.8" strokeOpacity="0.28"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r={n.r + 7} fill={C} fillOpacity="0.07" />
            <circle cx={n.cx} cy={n.cy} r={n.r}     fill={n.main ? C : C+'52'} />
            {n.main && (
              <text x={n.cx} y={n.cy+5} textAnchor="middle" fill="white" fontSize="13" fontWeight="700">T</text>
            )}
          </g>
        ))}
      </svg>

      {/* Profile pill — top left */}
      <div style={{ position:'absolute', top:22, left:18, zIndex:20, background:'#181818', border:'1px solid rgba(255,255,255,0.07)', borderRadius:10, padding:'8px 12px', boxShadow:'0 8px 24px rgba(0,0,0,0.5)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:7 }}>
          <div style={{ width:24, height:24, borderRadius:'50%', background:C+'cc' }} />
          <div>
            <div style={{ fontSize:9.5, fontWeight:600, color:'#d0d0d0' }}>Sarah M.</div>
            <div style={{ fontFamily:'monospace', fontSize:8, color:'#555' }}>42 connections</div>
          </div>
        </div>
      </div>

      {/* Stat — bottom right */}
      <div style={{ position:'absolute', bottom:28, right:20, zIndex:20, background:'#181818', border:`1px solid ${C}28`, borderRadius:10, padding:'8px 13px', boxShadow:'0 8px 24px rgba(0,0,0,0.5)' }}>
        <div style={{ fontFamily:'monospace', fontSize:16, fontWeight:800, color:C, lineHeight:1 }}>2.1K</div>
        <div style={{ fontFamily:'monospace', fontSize:8, color:'#555', marginTop:2 }}>users on launch</div>
      </div>

      {/* MVP pill — bottom left */}
      <div style={{ position:'absolute', bottom:28, left:18, zIndex:20, background:'#181818', border:'1px solid rgba(255,255,255,0.06)', borderRadius:10, padding:'8px 12px', boxShadow:'0 8px 24px rgba(0,0,0,0.5)' }}>
        <div style={{ fontSize:9.5, fontWeight:700, color:'#e0e0e0' }}>MVP</div>
        <div style={{ fontFamily:'monospace', fontSize:8, color:'#555', marginTop:2 }}>Investor-ready</div>
      </div>

      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, transparent 60%, rgba(10,10,10,0.5) 100%)', pointerEvents:'none', zIndex:15 }} />
    </div>
  );
}

/* 4 ─ Jesus Antonio ─────────────────────────────────────────────────────────
   Layout: Two-column split. Left = weekly schedule grid. Right = two SVG
   progress rings + a zero-missed-sessions counter. Divider line between.    */
export function JesusAntonioVisual() {
  const C = '#d97706';
  const schedule = [
    { day:'Mon', slots:['09:00','11:30'] },
    { day:'Tue', slots:['10:00','14:00','16:30'] },
    { day:'Wed', slots:['09:30'] },
    { day:'Thu', slots:['11:00','15:00'] },
    { day:'Fri', slots:['10:00','12:00','17:00'] },
  ];
  const rings = [
    { label:'Avg progress', val:77 },
    { label:'Retention',    val:94 },
  ];
  return (
    <div style={{ position:'absolute', inset:0, background:'#0b0b0b', overflow:'hidden', display:'flex' }}>
      <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 50% 50%, ${C}14 0%, transparent 60%)`, pointerEvents:'none' }} />
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize:'20px 20px', pointerEvents:'none' }} />

      {/* Left — schedule */}
      <div style={{ flex:'0 0 54%', padding:'28px 16px 28px 24px', display:'flex', flexDirection:'column', justifyContent:'center', gap:10, position:'relative', zIndex:10 }}>
        <div style={{ fontFamily:'monospace', fontSize:8.5, color:'#555', marginBottom:4, letterSpacing:'0.1em' }}>WEEKLY SCHEDULE</div>
        {schedule.map((d, i) => (
          <div key={d.day} style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ fontFamily:'monospace', fontSize:9, color:'#666', width:26, flexShrink:0 }}>{d.day}</div>
            <div style={{ display:'flex', gap:4, flexWrap:'wrap' }}>
              {d.slots.map(slot => (
                <div key={slot} style={{
                  fontFamily:'monospace', fontSize:8.5,
                  padding:'3px 7px', borderRadius:4,
                  background: i===1 ? C+'22' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${i===1 ? C+'38' : 'rgba(255,255,255,0.06)'}`,
                  color: i===1 ? C : '#888',
                }}>{slot}</div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ marginTop:6, display:'flex', alignItems:'center', gap:6 }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:C, display:'block' }} />
          <span style={{ fontFamily:'monospace', fontSize:9, color:C }}>12 active clients</span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ width:1, background:'rgba(255,255,255,0.05)', flexShrink:0, position:'relative', zIndex:10 }} />

      {/* Right — rings */}
      <div style={{ flex:1, padding:'28px 16px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:18, position:'relative', zIndex:10 }}>
        {rings.map(r => {
          const radius = 32;
          const circ   = 2 * Math.PI * radius;
          const dash   = (r.val / 100) * circ;
          return (
            <div key={r.label} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:5 }}>
              <svg width="84" height="84" viewBox="0 0 84 84">
                <circle cx="42" cy="42" r={radius} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="6" />
                <circle cx="42" cy="42" r={radius} fill="none" stroke={C} strokeWidth="6"
                  strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
                  transform="rotate(-90 42 42)"
                />
                <text x="42" y="42" textAnchor="middle" dy="0.35em" fill="#fff" fontSize="13" fontWeight="800" fontFamily="monospace">{r.val}%</text>
              </svg>
              <div style={{ fontFamily:'monospace', fontSize:8.5, color:'#666', textAlign:'center' }}>{r.label}</div>
            </div>
          );
        })}
        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)', borderRadius:8, padding:'8px 12px', textAlign:'center', width:'78%' }}>
          <div style={{ fontFamily:'monospace', fontSize:18, fontWeight:900, color:C }}>0</div>
          <div style={{ fontFamily:'monospace', fontSize:8, color:'#555', marginTop:2 }}>missed sessions</div>
        </div>
      </div>

      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, transparent 65%, rgba(10,10,10,0.5) 100%)', pointerEvents:'none', zIndex:15 }} />
    </div>
  );
}

/* 5 ─ Tokunize ─────────────────────────────────────────────────────────────
   Layout: Full-bleed chart across the whole panel. Giant "$2.4M" overlaid
   top-left. Ticker strip at the very bottom. Finance-terminal aesthetic.    */
export function TokunizeVisual() {
  const C = '#db2777';
  const linePts = '0,95 32,84 64,72 96,78 128,58 160,66 192,44 224,54 256,30 288,42 320,14';
  const areaPts = `${linePts} 320,130 0,130`;
  const tickers = [
    ['RE', '+12.4%', true], ['PE', '+8.1%', true], ['ART', '+22.7%', true],
    ['GOLD', '+5.3%', true], ['BOND', '-1.2%', false],
  ];
  return (
    <div style={{ position:'absolute', inset:0, background:'#080808', overflow:'hidden' }}>
      {/* Full-bleed chart — covers bottom 60% */}
      <svg style={{ position:'absolute', bottom:38, left:0, width:'100%', height:'60%' }} viewBox="0 0 320 130" preserveAspectRatio="none">
        <defs>
          <linearGradient id="tok-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={C} stopOpacity="0.22" />
            <stop offset="100%" stopColor={C} stopOpacity="0"   />
          </linearGradient>
        </defs>
        {[80,160,240].map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="130" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        {[32,65,98].map(y => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
        ))}
        <polygon points={areaPts} fill="url(#tok-area)" />
        <polyline points={linePts} fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="320" cy="14" r="4" fill={C} />
        <circle cx="320" cy="14" r="8" fill={C} fillOpacity="0.2" />
      </svg>

      {/* Big number — top left */}
      <div style={{ position:'absolute', top:28, left:24, zIndex:10 }}>
        <div style={{ fontFamily:'monospace', fontSize:8.5, color:'#555', marginBottom:7, letterSpacing:'0.1em' }}>TOKENIZED ASSETS</div>
        <div style={{ fontSize:44, fontWeight:900, color:'#fff', lineHeight:1, letterSpacing:'-0.02em' }}>$2.4M</div>
        <div style={{ fontFamily:'monospace', fontSize:11, color:C, marginTop:7 }}>↑ 18.4% this quarter</div>
      </div>

      {/* AWS badge — top right */}
      <div style={{ position:'absolute', top:28, right:24, zIndex:10, background:'rgba(255,255,255,0.05)', border:`1px solid ${C}28`, borderRadius:8, padding:'7px 13px' }}>
        <div style={{ fontFamily:'monospace', fontSize:10, color:C, fontWeight:700 }}>AWS</div>
        <div style={{ fontFamily:'monospace', fontSize:7.5, color:'#555', marginTop:2 }}>Cloud deployed</div>
      </div>

      {/* Ticker strip */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, zIndex:10, background:'rgba(255,255,255,0.03)', borderTop:'1px solid rgba(255,255,255,0.06)', padding:'8px 16px', display:'flex', gap:20, overflow:'hidden' }}>
        {tickers.map(([name, change, up]) => (
          <span key={name} style={{ fontFamily:'monospace', fontSize:9, color:up?'#22c55e':'#ef4444', flexShrink:0 }}>
            {name} <span style={{ opacity:0.7 }}>{change}</span>
          </span>
        ))}
      </div>

      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, transparent 60%, rgba(6,6,6,0.55) 100%)', pointerEvents:'none', zIndex:8 }} />
    </div>
  );
}

/* 6 ─ VC Clinic ─────────────────────────────────────────────────────────────
   Layout: Inverted — light/cream card centered on dark. Feels clinical and
   clean, opposite of all other panels. The card itself is the focal point.  */
export function VCClinicVisual() {
  const C = '#0d9488';
  const slots = ['09:00','10:30','11:00','14:00','15:30'];
  return (
    <div style={{ position:'absolute', inset:0, background:'#0e0e0e', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 45% 50%, ${C}14 0%, transparent 55%)`, pointerEvents:'none' }} />

      {/* Light card — inverted feel */}
      <div style={{
        position:'relative', zIndex:10, width:'78%',
        background:'#f9f8f6',
        border:'1px solid #e8e6e2',
        borderRadius:16, overflow:'hidden',
        boxShadow:'0 40px 90px rgba(0,0,0,0.65)',
      }}>
        {/* Teal header */}
        <div style={{ background:C, padding:'13px 16px', display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ fontSize:20 }}>🏥</div>
          <div>
            <div style={{ fontSize:13, fontWeight:700, color:'white' }}>VC Clinic</div>
            <div style={{ fontFamily:'monospace', fontSize:8.5, color:'rgba(255,255,255,0.72)' }}>📍 United Kingdom</div>
          </div>
          <div style={{ marginLeft:'auto', background:'rgba(255,255,255,0.2)', borderRadius:6, padding:'4px 10px' }}>
            <div style={{ fontFamily:'monospace', fontSize:9, color:'white', fontWeight:600 }}>★ 4.8</div>
          </div>
        </div>

        {/* Doctor row */}
        <div style={{ padding:'12px 16px', borderBottom:'1px solid #ece9e5' }}>
          <div style={{ fontFamily:'monospace', fontSize:7.5, color:'#aaa', marginBottom:8, letterSpacing:'0.08em' }}>YOUR APPOINTMENT WITH</div>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:38, height:38, borderRadius:'50%', background:C+'22', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>👨‍⚕️</div>
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:'#111' }}>Dr. V. Chirila</div>
              <div style={{ fontFamily:'monospace', fontSize:8.5, color:'#888' }}>General Practitioner</div>
            </div>
          </div>
        </div>

        {/* Time slots */}
        <div style={{ padding:'12px 16px' }}>
          <div style={{ fontFamily:'monospace', fontSize:7.5, color:'#aaa', marginBottom:8, letterSpacing:'0.08em' }}>AVAILABLE TODAY</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:10 }}>
            {slots.map((slot, i) => (
              <div key={slot} style={{
                padding:'5px 10px', borderRadius:6,
                fontFamily:'monospace', fontSize:9.5,
                background: i===1 ? C : '#f0eeeb',
                color:  i===1 ? '#fff' : '#666',
                border: `1px solid ${i===1 ? C : '#e5e3de'}`,
                fontWeight: i===1 ? 600 : 400,
              }}>{slot}</div>
            ))}
          </div>
          <div style={{ width:'100%', padding:'9px', borderRadius:9, background:C, textAlign:'center', fontFamily:'monospace', fontSize:9.5, fontWeight:700, color:'#fff' }}>
            Confirm Booking →
          </div>
        </div>
      </div>

      {/* Small dark stat badge */}
      <div style={{ position:'absolute', bottom:22, left:20, zIndex:20, background:'#181818', border:`1px solid ${C}28`, borderRadius:10, padding:'8px 14px', boxShadow:'0 6px 20px rgba(0,0,0,0.5)' }}>
        <div style={{ fontSize:15, fontWeight:800, color:C, lineHeight:1 }}>50+</div>
        <div style={{ fontFamily:'monospace', fontSize:8, color:'#555', marginTop:2 }}>monthly bookings</div>
      </div>

      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, transparent 65%, rgba(10,10,10,0.5) 100%)', pointerEvents:'none', zIndex:15 }} />
    </div>
  );
}

/* Visual map ──────────────────────────────────────────────────────────────── */
export const PROJECT_VISUALS = {
  acservices:    ACServicesVisual,
  superfanbase:  SuperfanbaseVisual,
  togethrsocial: TogethrSocialVisual,
  jesusantonio:  JesusAntonioVisual,
  tokunize:      TokunizeVisual,
  vcclinic:      VCClinicVisual,
};
