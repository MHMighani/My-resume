import React from 'react';
import resumeData from '../../data/resume';

import './index.scss'

class Education extends React.Component {
	renderEducation = () => {
		const educationList = resumeData.education.map(educationInfo => {
			return (
				<li className="education-details">
					<div className="degree">{educationInfo.field}</div>
					<div className="university-name">{educationInfo.university}</div>
					<div className="time-span">
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
				<h2 className="section-title">
					Education
				</h2>
				{this.renderEducation()}
			</section>
		);
	}
}

export default Education;
