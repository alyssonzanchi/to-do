'use server';

import dbConnect from './dbConnect';
import Task from '@/models/task';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import xss from 'xss';

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

  const title = xss(task.get('title'));
  const difficulty = xss(task.get('difficulty'));
  const priority = xss(task.get('priority'));

  const newTask = new Task({
    title,
    difficulty,
    priority
  });

  await newTask.save();

  redirect('/tasks');
}

export async function editTask(id, updatedTask) {
  await connDB();
  await Task.findByIdAndUpdate(id, updatedTask, { new: true });
  revalidatePath('/');
}

export async function deleteTask(id) {
  await connDB();
  await Task.findByIdAndDelete(id);
  revalidatePath('/');
}
