import React from 'react';
import TechUsedList from '../TechUsedList';
import resumeData from '../../data/resume';

import './index.scss'

class Experiences extends React.Component {
	renderExperiences = () => {
		const experiences = resumeData.experiences.map(experience => {
			return (
				<ul>
					<li className="experience-item">
						<div className="company-name">{experience.company}</div>
						<div className="experience-title">{experience.title}</div>
						<div className="time-span">
							{experience.from} - {experience.to}
						</div>
						<div className="experience-description">{experience.description}</div>
						<div className="used-technologies-list">
							<TechUsedList techList={experience.technologies} />
						</div>
					</li>
				</ul>
			);
		});
		return experiences;
	};

	render() {
		return (
			<section className="experiences">
				<h2 className="section-title">Experiences</h2>
				{this.renderExperiences()}
			</section>
		);
	}
}

export default Experiences;
