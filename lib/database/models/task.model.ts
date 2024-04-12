import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
  
  name: { type: String, required: true},
  isCompleted: { type: Boolean, default: false},
  userDetails: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Task = models.Task || model('Task', TaskSchema);

export default Task;