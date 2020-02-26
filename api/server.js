const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');
// const authRouter = require('../auth/auth-router');
// const usersRouter = require('../users/users-router');
// const profilesRouter = require('../profiles/profiles-router');
// const tripsRouter = require('../trips/trips-router');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// server.use('/api/auth', authRouter);
// server.use('/api/users', usersRouter);
// server.use('/api/profiles', profilesRouter);
// server.use('/api/trips', tripsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ server: "Is running" })
});

module.exports = server;