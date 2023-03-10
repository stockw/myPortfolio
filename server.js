const express = require('express');
const path = require('path');
// logs the different requests to our server
// const logger = require('morgan');
// cross origin access
const cors = require('cors');
// const fs = require('fs');
// const { About } = require('./components/About');




const app = express()
// const htmlFilePath = path.join(__dirname, 'components', 'about', 'index.html');
// const aboutPageContent = fs.readFileSync(htmlFilePath, 'utf8');

// access
app.use(cors({
    origin: "*"
}));

 //logs different requests to our server automatically
//  app.use(logger('dev'))

// parse stringified objects (JSON)
app.use(express.json())
// server build folder
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));


// app.get('test_route', (req, res) =>{
//     res.send("good route");
// })


app.get("/", (req, res) => (
    res.sendFile(path.join(__dirname, 'src', 'components', 'Header', 'index.js'))
));

app.get("/about", (req, res) => {
    console.log("about me page");
    res.sendFile(path.join(__dirname, 'src', 'components', 'About', 'index.html'));
  });

  app.get('/resume', (req, res) => {
    console.log("this is resume page");
    res.sendFile(__dirname, 'src', 'components', 'Resume', 'resume.js')
  });
  
  app.get('/contact', (req, res) => {
    console.log("copntact page");
    res.sendFile(path.join(__dirname, 'src', 'components', 'Contact', 'index.js'));
  });

// have has very last route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

 

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})