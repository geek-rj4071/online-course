import { mongoose } from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, unique: true, require: true },
  noOfSubjects: { type: String },
  validity: { type: Number },
  price: { type: Number },
  subjects: [{ name: { type: String }, level: { type: String } }],
});

const Course = mongoose.model("course", courseSchema);

export { Course };
