'use server';

import dbConnect from './dbConnect';
import Task from '@/models/task';
import { revalidatePath } from 'next/cache';

async function connDB() {
  await dbConnect()
    .then(() => {
      console.log('Conexão com o banco estabelecida!');
    })
    .catch((err) => {
      console.log('Erro ao estabelecer conexão com o banco!');
      console.log(err);
    });
}

export async function getTasks() {
  await connDB();
  return await Task.find({});
}

export async function createTask(task) {
  await connDB();
  const newTask = new Task(task);
  await newTask.save();
}

export async function deleteTask(id) {
  await connDB();
  await Task.findByIdAndDelete(id);
  revalidatePath('/');
}
