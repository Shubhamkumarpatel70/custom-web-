import React, { useEffect, useMemo, useRef, useState } from 'react';

const defaultStats = [
	{ number: '50+', label: 'Projects Completed', icon: '🎯' },
	{ number: '100%', label: 'Client Satisfaction', icon: '⭐' },
	{ number: '24/7', label: 'Support Available', icon: '🛠️' },
	{ number: '2-4', label: 'Weeks Delivery', icon: '⚡' }
];

// Respect user motion preferences
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(!!m.matches);
    onChange();
    m.addEventListener?.('change', onChange);
    return () => m.removeEventListener?.('change', onChange);
  }, []);
  return reduced;
}

// Lightweight count-up for simple numeric values like "50+", "100%"
function CountUpNumber({ value }) {
  const prefersReduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(String(value));
  const rafRef = useRef(0);

  const config = useMemo(() => {
    const str = String(value);
    // Skip complex values like ranges "2-4" or formats with slashes
    if ((/[\/\-]/).test(str)) return { animate: false, str };
    const match = str.match(/^(\d+)(.*)$/);
    if (!match) return { animate: false, str };
    const target = parseInt(match[1], 10);
    const suffix = match[2] || '';
    return { animate: true, target, suffix };
  }, [value]);

  useEffect(() => {
    if (!config.animate || prefersReduced) {
      setDisplay(String(value));
      return;
    }
    const duration = 1200;
    const start = performance.now();
    const from = 0;
    const to = config.target;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(from + (to - from) * eased);
      setDisplay(`${current}${config.suffix}`);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [config, prefersReduced, value]);

  return (
    <span className="stat-number" aria-live="polite" aria-atomic="true">{display}</span>
  );
}

function Stats() {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 50);
		return () => clearTimeout(timer);
	}, []);

		return (
			<section className="stats-section" aria-labelledby="stats-title" aria-describedby="stats-subtitle">
				<div className="container">
					<header className="section-header">
						<h2 id="stats-title" className="section-title">Our Impact in Numbers</h2>
						<p id="stats-subtitle" className="section-subtitle">Trusted delivery, measurable results, and customer-first support.</p>
					</header>

					<ul className="stats-grid" role="list">
						{defaultStats.map((s, idx) => (
							<li
								key={s.label}
								className={`stat-card ${isVisible ? 'animate-in' : ''}`}
								style={{ animationDelay: `${idx * 0.1}s` }}
								role="listitem"
							>
								<div className="stat-icon" aria-hidden="true">{s.icon}</div>
								{/^(\d+)([^\/\-]*)$/.test(s.number) ? (
									<CountUpNumber value={s.number} />
								) : (
									<span className="stat-number" aria-live="polite" aria-atomic="true">{s.number}</span>
								)}
								<div className="stat-label">{s.label}</div>
							</li>
						))}
					</ul>
				</div>
			</section>
		);
	}

export default Stats;
