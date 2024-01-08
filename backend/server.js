const express = require('express');
const app = express();
const cors = require('cors');
const credentials = require('./middleware/credentials');
const corsOption = require('./config/corsOption');
const cookieParser = require('cookie-parser');
const verifyJWT = require('./middleware/verifyJWT');
const path = require('path');
const PORT = process.env.PORT || 3500;
const xlsx = require('xlsx');

// handle options credentials check - before CORS;
// and fetch cookies credentials requirement
app.use(credentials);

// cross origin resource sharing
app.use(cors(corsOption));

// build-in middleware to handle urlencoded form data
app.use(express.urlencoded({extended: false}));

// built-in middleware for json
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// User routes
app.use('/user/register', require('./routes/api/user/register'));
app.use('/user/auth', require('./routes/api/user/auth'));
app.use('/user/refresh', require('./routes/api/user/refreshToken'));
app.use('/user/logout', require('./routes/api/user/logout'));

//app.use(verifyJWT);
//Espace contribuable
app.use('/contribuable', require('./routes/api/contribuable/contribuable'));
app.use('/actionnaire', require('./routes/api/contribuable/actionnaire'));
app.use('/dirigeant', require('./routes/api/contribuable/dirigeant'));
app.use('/interlocuteur', require('./routes/api/contribuable/interlocuteur'));
app.use('/activite', require('./routes/api/contribuable/activite'));
app.use('/siege', require('./routes/api/contribuable/siege'));

//Espace Administrateur
app.use('/client', require('./routes/api/client/client'));
app.use('/assujetissement', require('./routes/api/client/assujetissement'));
app.use('/vehicle', require('./routes/api/client/vehicle'));
app.use('/impot', require('./routes/api/impot/impot'));
app.use('/etat', require('./routes/api/administrateur/etat'));

//consultation
app.use('/consultation', require('./routes/api/consultation/consultation'));


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));