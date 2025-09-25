import React from 'react';

const stack = [
	{ title: 'Frontend', items: ['React', 'Vite/CRA', 'Tailwind CSS', 'Redux Toolkit'] },
	{ title: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
	{ title: 'DevOps', items: ['Vercel/Netlify', 'Docker', 'CI/CD', 'NGINX'] },
	{ title: 'Quality', items: ['Jest', 'ESLint', 'Prettier', 'Cypress'] },
];

function TechStack() {
	return (
		<section className="tech-stack-section">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title">Technology Stack</h2>
					<p className="section-subtitle">Modern, proven technologies for reliable products</p>
				</div>
				<div className="tech-grid">
					{stack.map(category => (
						<div key={category.title} className="tech-category hover-border-yellow">
							<h3>{category.title}</h3>
							<div className="tech-items">
								{category.items.map(item => (
									<span key={item} className="tech-item">{item}</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default TechStack;


