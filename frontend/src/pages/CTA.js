import React from 'react';
import { Link } from 'react-router-dom';

function CTA() {
	return (
		<section className="cta-section">
			<div className="container">
				<div className="cta-content">
					<h2>Ready to build something great?</h2>
					<p>Let’s turn your idea into a high-performing product your users will love.</p>
					<div className="cta-actions">
						<Link to="/contact" className="btn btn-yellow btn-strong">Start Your Project <span className="btn-icon">→</span></Link>
						<Link to="/plans" className="btn btn-yellow-outline btn-strong">View Pricing</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CTA;


