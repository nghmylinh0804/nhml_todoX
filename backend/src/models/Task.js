import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,    // bắt buộc có title
      trim: true         // loại bỏ khoảng trắng thừa
    },
    status: {
      type: String,
      enum: ["active", "completed"],
      default: "active"
    },
    completeAt: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }   // tự động thêm createdAt, updatedAt
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
