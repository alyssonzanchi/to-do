import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  difficulty: {
    type: String,
    enum: ['Baixa', 'Média', 'Alta'],
    default: 'Média'
  },
  priority: {
    type: String,
    enum: ['Baixa', 'Média', 'Alta'],
    default: 'Média'
  },
  status: {
    type: String,
    enum: ['A fazer', 'Em andamento', 'Completo'],
    default: 'A fazer'
  }
});

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

export default Task;
