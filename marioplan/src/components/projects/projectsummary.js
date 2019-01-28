// functional component
import React from 'react'


const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Post by Tyler Sweeney</p>
                <p className="grey-text">26th January, 1pm</p>
            </div>
        </div>
    )
}

export default ProjectSummary;