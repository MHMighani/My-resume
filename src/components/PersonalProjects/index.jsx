import React from 'react';
import TechUsedList from '../TechUsedList'
import resumeData from '../../data/resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss'

class PersonalProjects extends React.Component {
	renderPersonalProjects = () => {
		const personalProjects = resumeData['Personal Projects'].map(project => {
			return (
				<li className="personal-projects-item">
					<h3 className="project-title">{project.title}</h3>
					<p className="project-description">{project.description}</p>
					<a href={project.githubAddress} rel="noopener noreferrer" target="_blank" className="project-link">
						<span><FontAwesomeIcon className="github-icon" icon={['fab','github']} /></span>
						<span className="project-address">{project.githubAddress}</span>
					</a>
                        <TechUsedList techList={project.technologies} />
				</li>
			);
		});

		return <ul className="personal-technologies-list">{personalProjects}</ul>;
	};

	render() {
		return (
			<section className="personal-projects-section">
				<h2 className="section-title">Personal projects</h2>
				{this.renderPersonalProjects()}
			</section>
		);
	}
}

export default PersonalProjects;
