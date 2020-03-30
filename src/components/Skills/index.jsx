import React from 'react'
import resumeData from '../../data/resume'
import TechUsedList from '../TechUsedList'
import './index.scss'

const Skills = () => {
    return (
        <section className="skills-section">
            <h2 className="section-title">Skills</h2>
            <TechUsedList techList={resumeData.skills} />
        </section>
        
    )
}

export default Skills 