//The server where everything is brought to

const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();
//actually executing express here

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
  //WONT NEED ANY CWD STUFF FOR MY APP

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


//boilerplate once the application is opened it will be listening
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on Port 3001`);
  });
});
