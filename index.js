// Import essential libraries 
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

// Setup essential routes 





router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder. 
});



//add the router 
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');






app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
