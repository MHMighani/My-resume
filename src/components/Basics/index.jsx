import React from 'react';
import resumeData from '../../data/resume.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

class Basics extends React.Component {
	render() {
		return (
			<div className="basics">
				<header>
					<div className="intro-title">
						<h1>
							<span className="first-name">{resumeData.name}</span> <span className="last-name">{resumeData.lastName}</span>
						</h1>
						<h3 className="job-title">{resumeData.jobTitle}</h3>
					</div>
					<ul className="profile-links">
						<li>
							<a
								href={`mailto: ${resumeData.contactLinks.email}`}
								rel="noopener noreferrer"
								target="_blank"
							>
								<span>
									<FontAwesomeIcon icon="envelope" />
								</span>
								{resumeData.contactLinks.email}
							</a>
						</li>
						<li>
							<a href={`tel: ${resumeData.contactLinks.phone}`} rel="noopener noreferrer" target="_blank">
								<span>
									<FontAwesomeIcon icon="phone" />
								</span>
								{resumeData.contactLinks.phone}
							</a>
						</li>
						<li>
							<a href={resumeData.links.github} rel="noopener noreferrer" target="_blank">
								<span>
									<FontAwesomeIcon icon={['fab', 'github']} />
								</span>
								{resumeData.links.github}
							</a>
						</li>
						<li>
							<a href={resumeData.links.linkedin} rel="noopener noreferrer" target="_blank">
								<span>
									<FontAwesomeIcon icon={['fab', 'linkedin']} />
								</span>
								{resumeData.links.linkedin}
							</a>
						</li>
					</ul>
				</header>
				<div className="summary">
					<h2 className="section-title">summary</h2>
					<p>{resumeData.summary}</p>
				</div>
			</div>
		);
	}
}

export default Basics;
