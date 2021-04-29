/**
 * This is a REST API created using Node js and Express.
 * 
 * A server is software that listens via the internet and responds to incoming requests over HTTP.  Generally speaking, servers reply to these requests with things like HTML, CSS, JavaScript, and even raw data encoded as JSON.
 * 
 * Express is a framework --> create and maintain robust servers.
 */
const Joi = require('joi'); // retuens class
const express = require('express');   // returns a fn
const app = express();  // returns object of type express

// express.json() will return middlewear
// later app.use(middlewear)
app.use(express.json())    // enable parsing of json obj

const courses = [
  {id: 1, name: 'course1'},
  {id: 2, name: 'course2'},
  {id: 3, name: 'course3'}
];

// app.get('/path', callback fn) --> this "call back function / route handler" is called when we have a http get request with this end point.
// as the appli grows, we can move these routes to different folder --> eg: can move all routes belonging to courses to another file called courses.js
app.get('/', (req, res) => {
  res.send("Hello World");
})

app.get('/api/courses', (req, res) => {
  res.send(courses);
})

//req.params.id retuens string
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(o => o.id === parseInt(req.params.id));
  if (!course) res.status(404).send(`the course with given id (${req.params.id}) is not found`);
  else res.send(course);
})

//POST --> test post end point using postman
app.post('/api/courses', (req, res) => {
  
  const {error} = validateCourse(req.body)  // returns object
  
  if(error){
    res.status(400).send(error.details[0].message);
    return;
  }
  const course = {
    id: courses.length +1,
    name: req.body.name
  }
  courses.push(course);
  res.send(course);
})

app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(o => o.id === parseInt(req.params.id));
  if (!course) return res.status(404).send(`the course with given id (${req.params.id}) is not found`);

  // const result = validateCourse(req.body);
  const { error } = validateCourse(req.body); // result.error

  if(error){
    res.status(400).send(error.details[0].message);
    return;
  }

   course.name = req.body.name;
   res.send(course);
})

app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(o => o.id === parseInt(req.params.id));
  if (!course) return res.status(404).send(`the course with given id (${req.params.id}) is not found`);

const index = courses.indexOf(course);
courses.splice(index, 1);

res.send(course);
})

function  validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  return schema.validate(course)  // returns object
}

// dont hardcord port number. instead use ENV variable
// process obj
// set  PORT = 5000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));




/**
 * RESOURSES
 * 
 * 1. https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs#guides
 * 2. https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps
 * 3. https://www.coursereport.com/blog/what-is-express#:~:text=The%20primary%20use%20of%20Express,used%20all%20over%20the%20place.
 * 
 * Videos
 * 1. https://www.youtube.com/watch?v=pKd0Rpw7O48&t=1198s
 * 2. https://www.youtube.com/watch?v=vJEO57B05Sg
 * 
 */