import React from 'react';

const features = [
	{ icon: '⚡', title: 'Fast Delivery', desc: 'Rapid development with quality and performance in mind.' },
	{ icon: '🎯', title: 'Results-Driven', desc: 'Solutions focused on your business goals and ROI.' },
	{ icon: '🔒', title: 'Secure by Design', desc: 'Best practices and modern security built-in.' },
	{ icon: '📈', title: 'Scalable', desc: 'Architecture that grows with your business.' },
];

function WhyChooseUs() {
	return (
		<section className="why-choose-section">
			<div className="container">
			<div className="section-header">
					<h2 className="section-title">Why choose us</h2>
					<p className="section-subtitle">Building reliable digital solutions with modern, proven technologies that scale with your business.</p>
				</div>
				<div className="features-grid">
					{features.map(f => (
						<div key={f.title} className="feature-card hover-border-yellow">
							<div className="feature-icon" aria-hidden="true">{f.icon}</div>
							<h3>{f.title}</h3>
							<p>{f.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default WhyChooseUs;


