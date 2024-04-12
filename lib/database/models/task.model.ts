import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
  
  name: { type: String, required: true},
  userDetails: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Task = models.User || model('Task', TaskSchema);

export default Task;