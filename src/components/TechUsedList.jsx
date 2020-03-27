import React from 'react';

const TechUsedList = ({techList}) => {
	const usedTechsItems = techList.map(tech => {
		return <li className="tech-list-item">{tech}</li>;
	});

	return <ul>{usedTechsItems}</ul>;
};

export default TechUsedList;
