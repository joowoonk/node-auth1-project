const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const usersRouter = require("../users/users-router");
const authRouter = require("../auth/router");

const server = express();

const sessionConfig = {
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: process.env.SECURE_COOKIE || false,
    httpOnly: true,
  },
  resave: false,
  saveUnitialized: process.env.USER_ALLOWED_COOKIE || true,
  name: "monster",
  secret: process.env.COOKIE_SECRET || "keepitsecret",
};

server.use(session(sessionConfig));

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
