import express from "express";
import {
  handleGetAllCourses,
  handleAddNewCourses,
  handleDeleteCourse,
  handleGetSubjects,
} from "../controllers/courses.js";
const courseRoutes = express.Router();

courseRoutes.route("/all-courses").get(handleGetAllCourses);

courseRoutes.route("/add-new").post(handleAddNewCourses);

courseRoutes.route("/delete-course").post(handleDeleteCourse);

courseRoutes.route("/:id").get(handleGetSubjects);

export default courseRoutes;
