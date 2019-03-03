import React from 'react';

const ProjectItem = (props) =>{
    return(
        <div>
            <h2>{props.project.name}</h2>
            <ul>
                <li>{props.project.stacks}</li>
                <li>{props.project.description}</li>
                <li>{props.project.duration}</li>
                <li>{props.project.categories}</li>
                <li>{props.project.vacancies}</li>
                <li>{props.project.author}</li>
                <li>{props.project.contacts}</li>
                
            </ul>
        </div>
    );
};

export default ProjectItem;