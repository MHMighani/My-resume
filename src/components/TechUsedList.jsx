import React from 'react';

const TechUsedList = ({techList}) => {
	const usedTechsItems = techList.map(tech => {
		return <li className="tech-list-item"><span>{tech}</span></li>;
	});

	return (
		<div className="used-technologies-list">
			<h4>technologies used:</h4>
			<ul className="inline-list">{usedTechsItems}</ul>
		</div>
	)
};

export default TechUsedList;
