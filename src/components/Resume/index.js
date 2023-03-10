import React from "react";
import './index.css'


const Resume = () => {
  console.log("my resume");  
  
  return (
    <>
    <head>
    <title>Courtney Wilkins - Resume</title>
   
<body>
  <div class="container">
    <div class="header">
      <h1>Courtney Wilkins</h1>
      <h3>Entry LevelSoftware Engineer</h3>
    </div>
    <div class="contact-info">
      <ul>
        <li>Email: courtney.wilkins05@gmail.com</li>
        <li>Phone: (555) 555-5555</li>
        <li>Address: Reynoldsburg, OH</li>
      </ul>
    </div>
    <div class="experience">
      <h2>Experience</h2>
      <ul>
        <li>
          <h3>Software Engineer</h3>
          <p>XYZ Company, Anytown USA</p>
          <p>June 2018 - Present</p>
          <ul>
            <li>Developed and maintained software applications using Java and Spring framework</li>
            <li>Collaborated with team members on software design and development</li>
            <li>Managed project timelines and delivered software releases on schedule</li>
          </ul>
        </li>
        <li>
          <h3>Software Engineer Intern</h3>
          <p>ABC Company, Anytown USA</p>
          <p>June 2017 - August 2017</p>
          <ul>
            <li>Assisted in the development of a web-based application using PHP and Laravel framework</li>
            <li>Learned and applied new technologies, including Git and Agile methodologies</li>
            <li>Participated in code reviews and contributed to software design discussions</li>
          </ul>
        </li>
      </ul>
    </div>
   </div>
 </body>
</head>
    </>
 
  )}

export default Resume;