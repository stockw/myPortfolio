import React from 'react';

const Projects = () => {
    console.log(Projects);
    return (
        <section id="projects">
          <div className="container">
            <h2>Projects</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4">
                  <img className="card-img-top" src="project1.jpg" alt="Project 1" />
                  <div className="card-body">
                    <h4 className="card-title">Project 1</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <img className="card-img-top" src="project2.jpg" alt="Project 2" />
                  <div className="card-body">
                    <h4 className="card-title">Project 2</h4>
                    <p className="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <img className="card-img-top" src="project3.jpg" alt="Project 3" />
                  <div className="card-body">
                    <h4 className="card-title">Project 3</h4>
                    <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}



export default Projects;