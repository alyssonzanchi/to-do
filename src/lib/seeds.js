import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import Task from '../models/task.js';
import dbConnect from './dbConnect.js';
import data from './data.js';

async function Seeds() {
  await dbConnect();
  const existing = await Task.countDocuments();
  if (existing > 0) return;

  await Task.insertMany(data);
  console.log('Banco populado automaticamente!');
  process.exit(1);
}

Seeds().catch((err) => {
  console.error('Erro ao rodar seeds:', err);
  process.exit(1);
});
