exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const users = [
    {
      username: "John",
      password: "123password",
      role: 1,
    },
    {
      username: "admin",
      password: "admin123.",
      role: 1,
    },
    {
      username: "David",
      password: "123david",
      role: 2,
    },
    {
      username: "Luis",
      password: "teacher123",
    },
    {
      username: "lambda",
      password: "123321qwe",
    },
  ];

  return knex("users").insert(users);
};
