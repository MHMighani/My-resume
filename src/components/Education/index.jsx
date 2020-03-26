import React from 'react';
import resumeData from '../../data/resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Education extends React.Component {
	renderEducation = () => {
		const educationList = resumeData.education.map(educationInfo => {
			return (
				<li className="education-details">
					<div className="degree">{educationInfo.field}</div>
					<div className="university-name">{educationInfo.university}</div>
					<div className="education-span">
						{educationInfo.span.from} - {educationInfo.span.to}
					</div>
				</li>
			);
		});

		return <ul className="education-list">{educationList}</ul>;
	};

	render() {
		return (
			<section className="education">
				<h2>
					<span className="education-icon">
						<FontAwesomeIcon icon="university" />
					</span>
					Education
				</h2>
				{this.renderEducation()}
			</section>
		);
	}
}

export default Education;
