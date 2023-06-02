"# QuadB_internship_task" 

The application uses Express.js as the web framework and Mongoose as the ODM (Object Data Modeling) library for MongoDB.

The main server file, server.js, sets up the Express application, connects to the MongoDB database, and defines a route for the root URL ("/") that renders the index.ejs template.

The index.ejs template is an HTML file with embedded JavaScript code using EJS syntax. It defines the structure and styling of the web page, including a table to display the cryptocurrency data.

The db.js file contains the Mongoose model definition for the topResults collection, which represents the cryptocurrency data. It also includes a function, Data(), that fetches data from the WazirX API and inserts it into the database if no data exists yet.

Tech Stack
The application is built using the following technologies:

Node.js: a JavaScript runtime environment
Express.js: a web framework for Node.js
MongoDB: a NoSQL database
Mongoose: an ODM (Object Data Modeling) library for MongoDB
EJS (Embedded JavaScript): a templating language for generating HTML markup
Axios: a library for making HTTP requests