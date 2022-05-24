// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const { response } = require("express");
const User = require("../models/user.model");
const axios = require("axios").default;

test("test get developers", () => {
  const num = 1;
  axios
    .get("http://localhost:5000/developers")
    .then(function (response) {
      expect(typeof response.data).toBe("object");
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
    });
});
test("test get testers", () => {
  const num = 1;
  axios
    .get("http://localhost:5000/testers")
    .then(function (response) {
      expect(typeof response.data).toBe("object");
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
    });
});

test("test login", () => {
  const num = 1;
  axios
    .post("http://localhost:5000/login", {
      email: "huzaifa@fast.com",
      password: "1234",
    })
    .then(function (response) {
      expect(response.data.message).toBe("Logged In");
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
    });
});
test("test register", () => {
  const num = 1;
  axios
    .post("http://localhost:5000/register", {
      name: "Huzaifa",
      email: "huzaifa@fast2.com",
      password: "1234",
      userType: "admin",
    })
    .then(function (response) {
      expect(response.data.message).toBe("New User Created");
    })
    .catch(function (error) {});
});

test("test update task", () => {
  axios
    .put("http://localhost:5000/updateTask", {
      id: "625c0ed4cb5e16c0fcd5ed98",
      code: "console.log('Hello World');",
      status: "Development",
    })
    .then((response) => {
      expect(response.data.message).toBe("Task Updated ");
    })
    .catch((err) => {
      // console.log(err);
    });
});
test("test assign task", () => {
  axios
    .post("http://localhost:5000/assignTask", {
      title: "Write Health App Test Cases",
      description: "Test Cases for health app to book an appointment",
      assignedDeveloper: "625c0d4d66680e702326fa9c",
      assignedTester: "625c0d3d66680e702326fa9a",
      code: "",
      status: "Development",
    })
    .then((response) => {
      expect(response.data.message).toBe("New Task Assigned");
    })
    .catch((err) => {
      // console.log(err);
    });
});

test("assign task developer", () => {
  axios
    .get(
      "http://localhost:5000/assignedTaskDeveloper/" +
        "625c0d4d66680e702326fa9c"
    )
    .then((response) => {
      expect(typeof response.data).toBe("object");
    });
});
