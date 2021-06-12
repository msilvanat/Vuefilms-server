# Disney API

## Table of Contents
Description -
Technologies and resources -
Requirements -
Instructions - Installing -
Testing


## Description

This is an API api to explore the world of movies. You can add a new movie, as well as edit or delete it.
You can also change or delete the image of the film.


##  Technologies and resources

- Node.js
- Nodemon
- Express
- Express-validator
- Express-fileupload
- Body-parser
- Cloudinary
- Uuid
- Cors
- Dotenv
- MySQL
- Sequelize (ORM)
- Postman for testing 


### Requirements

You need to have (installed):
- [NodeJS](https://nodejs.org/)
- [XAMPP](https://www.apachefriends.org/es/index.html)
- [HeidiSQL](https://www.heidisql.com/download.php) installed for Windows users or [MySQLWorkbench](https://dev.mysql.com/downloads/workbench/) for macOS users to handle the host of MySQL local database.

## Instructions - Installing

A step by step series of examples that tell you how to get a development env running.

1.- Clone the repository


$ git clone https://github.com/msilvanat/Vuefilms-server.git


2.- Install the following dependencies

```
npm i express express-validator express-fileupload body-parser cloudinary cors dotenv mysql2 sequelize uuid


```

3.- Now, you have to start sql server on XAMPP and create a new session on HeidiSQL or MySQL Workbench called "films". Run on them the sql file for database creation: //`./database/db-vuefilms.sql`.

```

    database: 'films', 
    username: 'root',
    password: '',
    dialect: 'mysql',
    port: 3306,
    host: 'localhost'
    
```

4.- To run the api, run this on the terminal
```
node index.js or nodemon index.js
```


##  Testing 

In order to test all the requests available of the app, there's a **Postman** Collection that you can find [here]

https://documenter.getpostman.com/view/11943629/TzeTJpc2


🔐 You have to use your cloudinary URL



##  Author 
- [@msilvanat](https://github.com/msilvanat)

