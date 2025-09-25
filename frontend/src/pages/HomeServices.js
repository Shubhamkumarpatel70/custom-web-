import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const defaultServices = [
	{ title: 'Website Development', desc: 'Custom websites with responsive, modern UI.', icon: '🌐', color: '#0d6efd', price: 'From ₹1999', features: ['Responsive', 'SEO', 'Fast', 'Mobile-first'] },
	{ title: 'E-commerce', desc: 'Online stores with secure payments.', icon: '🛒', color: '#ff8800', price: 'From ₹4999', features: ['Payments', 'Inventory', 'Orders', 'Admin'] },
	{ title: 'Web Apps', desc: 'Tailored applications for your business.', icon: '⚡', color: '#0d6efd', price: 'From ₹8999', features: ['Custom', 'Database', 'APIs', 'Users'] }
];

function HomeServices() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 50);
		return () => clearTimeout(timer);
	}, []);

	return (
		<section className="services-section">
			<div className="container">
				<div className="services-grid">
					{defaultServices.map((service, index) => (
						<div key={service.title} className={`service-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
							<div className="service-header">
								<div className="service-icon" style={{ background: `${service.color}20`, color: service.color }}>
									<span>{service.icon}</span>
								</div>
							</div>
							<div className="service-content">
								<h3 className="service-title" style={{ color: service.color }}>{service.title}</h3>
								<p className="service-description">{service.desc}</p>
								<div className="service-features">
									<ul>
										{service.features.map((feature, idx) => (
											<li key={idx}>
												<span className="feature-check" style={{ color: service.color }}>✓</span>
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="service-footer">
								<div className="service-price">{service.price}</div>
								<Link to="/contact" className="service-btn">
									Get Started <span className="btn-icon">→</span>
								</Link>
							</div>
							<div className="service-highlight" style={{ background: service.color }}></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default HomeServices;


