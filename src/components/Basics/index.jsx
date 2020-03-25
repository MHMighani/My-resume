import React from 'react';
import resumeData from '../../data/resume.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Basics extends React.Component {
	renderProfileLinks = (iconType, listName) => {
		const linkNames = Object.keys(resumeData[`${listName}`]);
		const linkList = linkNames.map(link => (
			<li>
				<span>
					<FontAwesomeIcon icon={[`${iconType}`, `${link}`]} />
				</span>
				{resumeData[`${listName}`][link]}
			</li>
		));
		return <ul>{linkList}</ul>;
	};

	render() {
		return (
			<div className="basics">
				<header>
					<div className="intro-title">
						<h1>
							{resumeData.name} {resumeData.lastName}
						</h1>
						<h3>{resumeData.jobTitle}</h3>
					</div>
					<div className="profileLinks">{this.renderProfileLinks('fab', 'links')}</div>
					<div className="contactLinks">{this.renderProfileLinks('fa', 'contactLinks')}</div>
				</header>
				<div className="summary">{resumeData.summary}</div>
			</div>
		);
	}
}

export default Basics;
