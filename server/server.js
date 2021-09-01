const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;
const chalk = require("chalk");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//import route
const routeStudent = require("./route/studentRouting");
const routeCourse = require("./route/courseRouting");
const routeStaff = require("./route/staffRouting");
const routeForum = require("./route/forumRouting");
const routeLoginRegister = require("./route/loginRouting");
const classScheduleRouting = require("./route/classScheduleRouting");
const routeEvent = require("./route/eventsRouting");
const isToken = require("./controller/authorization/isToken");

//DB connection
const db = require("./DB");
db.on("error", () => {
  console.log(chalk.red("Connection error"));
});

// use route
app.use("/api/student", isToken, routeStudent);
app.use("/api/course", isToken, routeCourse);
app.use("/api/staff", isToken, routeStaff);
app.use("/api/forum", isToken, routeForum);
app.use("/api", routeLoginRegister);
app.use("/api/event", isToken, routeEvent);
app.use("/api/classSchedule", isToken, classScheduleRouting);

app.listen(PORT, () => {
  console.log(
    `${chalk.green("tech_career")} ${chalk.yellow(
      "live and up on port"
    )} ${chalk.blue(PORT)}`
  );
});
