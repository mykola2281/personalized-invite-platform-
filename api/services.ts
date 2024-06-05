'use server'

import { Note,NoteData } from "@/interface";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();



export async function getAllNotes() {
  const notes = await prisma.note.findMany();
  return notes;
}

export async function getOneNote(id: string) {
  return await prisma.note.findUnique({
    where: {
      id
    }
  })
}

export async function createNote(data:NoteData) {
  console.log(data, '<-=-=-=-=DATA');
  
  const newNote = await prisma.note.create({ data });
;
  
  return newNote
}

export async function updateNote(id: string, data: object) {
  return await prisma.note.update({
    where: {
      id
    },
    data
  })
}

export async function deleteNote(id: string) {
  return await prisma.note.delete({
    where: {
      id
    }
  })
}