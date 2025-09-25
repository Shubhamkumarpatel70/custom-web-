import React from 'react';
const projects = [
	{ title: 'E-commerce Platform', desc: 'Scalable online store with secure payments and admin dashboard.', category: 'E-commerce', tech: ['React', 'Node', 'Stripe'] },
	{ title: 'SaaS Analytics', desc: 'Real-time analytics dashboard with multi-tenant support.', category: 'SaaS', tech: ['React', 'Express', 'MongoDB'] },
	{ title: 'Portfolio CMS', desc: 'Headless CMS powered portfolio with blazing fast performance.', category: 'Web App', tech: ['React', 'Next.js', 'Tailwind'] },
];

function Projects() {
	return (
		<section className="projects-section">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title">Latest Projects</h2>
					<p className="section-subtitle">A snapshot of our recent work</p>
				</div>
				<div className="projects-grid">
					{projects.map(p => (
						<div key={p.title} className="project-card">
							<div className="project-image">
								<div className="project-overlay">
									<span className="project-category">{p.category}</span>
								</div>
								<span aria-hidden="true">🧩</span>
							</div>
							<div className="project-content">
								<h3>{p.title}</h3>
								<p>{p.desc}</p>
								<div className="project-tech">
									{p.tech.map(t => (<span key={t}>{t}</span>))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
