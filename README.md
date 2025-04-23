# MVP2.0-dogdictionary
## SETUP

### Dependencies
- Run 'npm install' in the project directory.
- cd into the client folder.
- Run 'npm install
- If issues w/ server make sure nodemon -g is running.

### Database
- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called: `create database dog_dictionary
-  Add update the db.js file in the root folder with your information.
-npm 'run migrate'

### Database info
- The database is called dog_dictionary
- The table is called language
- THe columns are id (auto int), body_part, name, alt, meaning, URL, credit
- All the columns except for id take varchar.

 id         | int           | NO    | PRI | NULL    | auto_increment |
| body_part | varchar(255) | YES  |     | NULL    |                |
| name      | varchar(255) | YES  |     | NULL    |                |
| alt       | varchar(255) | YES  |     | NULL    |                |
| meaning   | varchar(800) | YES  |     | NULL    |                |
| URL       | varchar(255) | YES  |     | NULL    |                |
| credit    | varchar(255) | YES  |     | NULL    |        

### Development
- Run 'node app.js' to start the server in the main directory
- CD into the client folder
- Run 'npm run dev'

#### Additional Info
- This app only uses .get requests
- The db.js file is what helps the route and server connect which is different from what we did in class.
-if the server is not refreshing make sure nodemon -g is installed in the main directory, needs to be nodemon global, not just nodemon.# DogDictionary
