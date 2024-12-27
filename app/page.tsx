"use client";

import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { table } from "console";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getData, setUpdateStatus } from "./models/mahasiswa";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function RootPage() {
  // membuat hook dengan useState()
  const [getValue, setValue] = useState({});

  // membuat fetch data
  async function fetchData() {
    setValue(await getData());
  }

  // buat hook ("use effect")
  useEffect(() => {
    // memanggil fungsi fetch data
    fetchData();
  }, []);

  // membuat fungsi setDelete
  function setDelete(npm: string, nama: string) {
    // alert("Click Delete")
    if (
      confirm(`Data Mahasiswa : ${npm} - ${nama} \n ingin dihapus ?`) == true
    ) {
      setUpdateStatus(npm);
      alert(`Data Mahasiswa : ${npm} - ${nama} \n berhasil dihapus`);
      // menambahkan interaksi
      location.reload();
    }
    // else
    // {
    //   alert("Tombol Cancel");
    // }
  }

  // const mahasiswa = await prisma.tb_mahasiswa.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // })

  return (
    <>
      <title>View Data Mahasiswa</title>
      {/* tampilkan data mahasiswa */}

      {/* menu untuk tambah mahasiswa */}
      <nav className="mt-5 flex justify-end text-center">
        <button className="btn btn-outline btn-info">
          <Link href={"/add"}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            Tambah Data Mahasiswa
          </Link>
        </button>
      </nav>

      <table className="w-full mt-5">
        <thead>
          <tr className="bg-neutral-300 h-11">
            <th className="w-10% border border-blue-700">Aksi</th>
            <th className="w-10% border border-blue-700">NPM</th>
            <th className="w-10% border border-blue-700">Nama</th>
            <th className="w-10% border border-blue-700">Jurusan</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(getValue).map((data: any, index: number) => (
            // <div key={index}>
            //   <div>
            //   {data.id} - {data.npm} - {data.nama} - {data.jurusan}
            //   </div>
            // </div>

            <tr key={index}>
              <td className="text-center border border-blue-700 p-2.5">
                {/* icon edit*/}
                <Link
                  href={`/edit/${btoa(data.npm)}`}
                  className="bg-yellow-600 text-white px-2.5 py-5px rounded-md mr-5px text-sm"
                  title="Ubah Data"
                >
                  <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                </Link>

                {/* icon delete */}
                <Link
                  href={"/"}
                  className="bg-red-600 text-white px-2.5 py-5px rounded-md ml-5px text-sm"
                  title="Hapus Data"
                  onClick={() => {
                    setDelete(data.npm, data.nama);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Link>
              </td>
              <td className="text-center border border-blue-700">{data.npm}</td>
              <td className="text-justify border border-blue-700 px-2.5">
                {data.nama}
              </td>
              <td className="text-center border border-blue-700">
                {data.jurusan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {mahasiswa?.nama} */}
    </>
  );
}
