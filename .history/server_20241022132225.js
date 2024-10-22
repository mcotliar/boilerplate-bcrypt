'use strict';
const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const app = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
    //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        console.log(res); //true
    });
});


bcrypt.hash(someOtherPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
    //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
    bcrypt.compare(someOtherPlaintextPassword, hash, (err, res) => {
        console.log(res); //true
    });
});

//END_ASYNC

//START_SYNC



//END_SYNC
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
const result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);

const hash2 = bcrypt.hashSync(someOtherPlaintextPassword, saltRounds);
console.log(hash2);
const result2 = bcrypt.compareSync(someOtherPlaintextPassword, hash);
console.log({ result2 });



























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});