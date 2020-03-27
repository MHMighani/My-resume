import React from 'react';
import TechUsedList from '../TechUsedList'
import resumeData from '../../data/resume';

class PersonalProjects extends React.Component {
	renderPersonalProjects = () => {
		const personalProjects = resumeData['Personal Projects'].map(project => {
			return (
				<li className="personal-projects-item">
					<div className="project-title">{project.title}</div>
					<div className="project-description"></div>
					<a href={project.githubAddress} rel="noopener noreferrer" target="_blank" className="project-link">
						project link
					</a>
                    <div className="used-technologies-list">
                        <h3>technologies used</h3>
                        <TechUsedList techList={project.technologies} />
                    </div>
				</li>
			);
		});

		return <ul className="personal-technologies-list">{personalProjects}</ul>;
	};

	render() {
		return (
			<section className="personal-projects-section">
				<h2>Personal projects</h2>
				{this.renderPersonalProjects()}
			</section>
		);
	}
}

export default PersonalProjects;
