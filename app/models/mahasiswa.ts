"use server"

import { PrismaClient } from "@prisma/client";

// membuat variabel "prisma"
const prisma = new PrismaClient();

// membuat fungsi untuk tampil data
export async function getData()
{
    // membuat variabel untuk menampilkan data mahasiswa
  const mahasiswa = await prisma.tb_mahasiswa.findMany({
    where: {
      status: "Y",
      // // jurusan: "Informatika"
      // jurusan: {
      //   contains: "tem"
      // }
    },
  });

  return mahasiswa;
}

// membuat fungsi (arrow function) untuk update status
// export async function setUpdateStatus()
export const setUpdateStatus = async(npm: string) =>
{
  // membuat variabel untuk mengubah data mahasiswa dari "Y" ke "N"
  await prisma.tb_mahasiswa.updateMany({
    where: {
      npm: npm,
    },
    data: {
      status: "N",
    }
  });
}

// membuat fungsi cek data mahasiswa ("NPM")
export const CheckData = async(npm: string) => {
  const check = await prisma.tb_mahasiswa.findMany({
    select: {
      id: true,
    },
    where: {
      npm: npm,
    },
  });

  return check;
}