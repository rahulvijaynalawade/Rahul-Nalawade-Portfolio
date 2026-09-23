import React from "react";
import telent from '../assets/images/telent.png';
import partTime from '../assets/images/partTime.png';
import journal from '../assets/images/journal.png';
import library from '../assets/images/library.png';




import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/rahulvijaynalawade/workflex-web-app" target="_blank" rel="noreferrer"><img src={partTime} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rahulvijaynalawade/workflex-web-app" target="_blank" rel="noreferrer"><h2>Part Time India</h2></a>
                <p>Part Time India (WorkFlex) is a platform designed to connect employers who require temporary or short-term workers with individuals seeking flexible employment opportunities. Employers can create job postings with details such as the job title, location, required skills, payment, date, working hours, and number of workers required. Workers can create accounts, browse available jobs, and choose opportunities that match their skills and requirements. Employers can manage workers and monitor filled positions, while the platform securely manages different user roles and stores user and job information in a MySQL database. Overall, WorkFlex provides a simple and organized solution for finding and hiring workers for temporary and short-term work.</p>
            </div>
            
            <div className="project">
                <a href="https://github.com/rahulvijaynalawade/JobApplicationPortal" target="_blank" rel="noreferrer"><img src={telent} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rahulvijaynalawade/JobApplicationPortal" target="_blank" rel="noreferrer"><h2>Talent Acquisition Portal</h2></a>
                <p>Talent Acquisition Portal is a full-stack web application that provides a centralized platform for managing the job recruitment process, connecting job seekers, recruiters, and administrators. Job seekers can create profiles, manage skills, search for jobs, and submit applications with resumes and cover letters. Recruiters can post and manage job listings, review applications, and track their progress, while administrators manage users and system content. Built using Spring Boot, MySQL, React.js, HTML, CSS, and JavaScript, the system uses role-based authentication and REST APIs to support secure communication and streamline job discovery and application management.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rahulvijaynalawade/library_management_system" target="_blank" rel="noreferrer"><img src={library} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rahulvijaynalawade/library_management_system" target="_blank" rel="noreferrer"><h2>Library Management System</h2></a>
                <p>Library Management System is a full-stack Java application designed to streamline library operations, including book issuance, returns, and user record management. The system provides a 
                    user-friendly interface with backend support for authentication, data storage, and transaction processing, helping reduce manual effort and improve operational accuracy. It enables efficient
                     management of library resources while providing quick and organized access to essential book and user information.</p>
            </div>

            <div className="project">
                <a href="https://github.com/rahulvijaynalawade/journalEntryApp" target="_blank" rel="noreferrer"><img src={journal} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rahulvijaynalawade/journalEntryApp" rel="noreferrer"><h2>journal Entry Application</h2></a>
                <p>Journal Entry App is a Java-based backend application developed using Spring Boot and Maven, designed as a foundation for managing journal entries through a web-based backend. The project uses Spring Boot 
                    Web to support backend application and API development, with a structured Maven configuration for dependency and build management. It follows a lightweight backend architecture that can be extended with features such as journal entry management, persistence, authentication, and additional application services.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;