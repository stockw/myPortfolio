import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2>Contact Me</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <hr />
            <h3>Follow Me</h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://github.com/stockw" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/courtney-wilkins-90874976" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;