import { Course } from "../models/classes.js";

async function handleGetAllCourses(req, res) {
  const allCourses = await Course.find({});
  res.status(200).json({
    success: true,
    message: "success recieved the courses",
    courses: allCourses,
  });
}

async function handleAddNewCourses(req, res) {
  const payload = req.body;
  const noOfSubjects = payload.subjects.length;
  const course = new Course({
    title: payload.title,
    noOfSubjects: noOfSubjects,
    price: payload.price,
    validity: payload.validity,
    subjects: payload.subjects,
  });
  await course.save();
  res.status(200).json({
    success: true,
    message: "new course is successfully added",
    course: course,
  });
}

async function handleDeleteCourse(req, res) {
  const id = req.body.id;
  console.log(id);
  try {
    const deletedCourse = await Course.deleteOne({ _id: id });
    const allCourses = await Course.find({});
    res.status(200).json({
      success: true,
      message: "course deleted successfully",
      course: allCourses,
    });
  } catch (err) {
    console.error("error deleting document ", err);
  }
}

async function handleGetSubjects(req, res) {
  const id = req.params.id;
  console.log("dfdsf", id);
  try {
    const course = await Course.findById(id);
    console.log(course);
    res.status(200).json({ success: true, data: course });
  } catch (err) {
    console.error("error returning subject", err);
  }
}

export {
  handleGetAllCourses,
  handleAddNewCourses,
  handleDeleteCourse,
  handleGetSubjects,
};
