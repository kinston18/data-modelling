import mongoose from 'mongoose';

const todoScheme = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      }, //array of sub-todos
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoScheme);
