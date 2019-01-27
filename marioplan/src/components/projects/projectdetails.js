import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;  
  return (  
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis, numquam vel sint nostrum error nisi perspiciatis qui at. Ut, sunt nemo! Officia adipisci possimus dignissimos, eos atque qui id!</p>
            </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Tyler Sweeney</div>
                    <div>26th January, 1:15pm</div>
                </div>
        </div>
    </div>
  )
}

export default ProjectDetails
