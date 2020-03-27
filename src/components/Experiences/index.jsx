import React from 'react';
import TechUsedList from '../TechUsedList'
import resumeData from '../../data/resume';

class Experiences extends React.Component {

	renderExperiences = () => {
		const experiences = resumeData.experiences.map(experience => {
			return (
				<li className="experience-item">
					<div className="experience-title">{experience.title}</div>
					<div className="experience-span">
						{experience.from} - {experience.to}
					</div>
					<div className="company-name">{experience.company}</div>
					<div className="experience-description">{experience.description}</div>
					<div className="used-technologies-list">
                        <h3>Technologies used</h3>
                        <TechUsedList techList={experience.technologies} />
                    </div>
				</li>
			);
		});
		return experiences;
	};

	render() {
		return (
			<section className="experiences">
				<h2>Experiences</h2>
				{this.renderExperiences()}
			</section>
		);
	}
}

export default Experiences;
