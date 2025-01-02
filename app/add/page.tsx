"use client"

import React, { useState } from "react";

export default function AddPage() {
  // membuat hook ("use state")
  const [getNPM, setNPM]= useState("");
  const [getNAMA, setNAMA]= useState("");
  const [getJURUSAN, setJURUSAN]= useState("");

  // membuat fungsi untuk menyimpan data
  const setSave = () => {
    // alert(getNPM);
    //  jika seluruh data terisi
    // if (getNPM != "" && getNAMA != "" && getJURUSAN != "") {
    //   alert("Simpan")
    // }
    // jika ada data tidak terisi
    // else{
    //   alert("Lengkapi seluruh data!")
    // }

    // menambahkan tenary operator
    (getNPM != "" && getNAMA != "" && getJURUSAN != "") 
    ? alert("Simpan") 
    : [alert("Lengkapi seluruh data"), alert("Gagal menambahkan data")]
  };

  return (
    <div>
      <div className="grid grid-cols-10 gap-4 items-center">
        <div>NPM</div>
        <div className="col-span-3">
          <div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full"
              maxLength={8}
              onChange={(e) => {setNPM(e.target.value)}}
            />
          </div>
        </div>
        <div className="col-start-1">Nama Mahasiswa</div>
        <div className="col-span-3">
          <div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full"
              maxLength={50}
              onChange={(e) => {setNAMA(e.target.value)}}
            />
          </div>
        </div>
        <div className="col-start-1">Jurusan Mahasiswa</div>
        <div className="col-span-3">
          <select defaultValue={""} className="select select-info w-full" onChange={(e) => {setJURUSAN(e.target.value)}}>
            <option value={""} disabled>Pilih Jurusan Mahasiswa</option>
            <option value={"INFORMATIKA"}>Informatika</option>
            <option value={"SISTEM INFORMASI"}>Sistem Informasi</option>
            <option value={"TEKNOLOGI INFORMASI"}>Teknologi Informasi</option>
            <option value={"TEKNIK KOMPUTER"}>Teknik Komputer</option>
            <option value={"TEKNIK ELEKTRO"}>Teknik Elektro</option>
            <option value={"TEKNIK SIPIL"}>Teknik Sipil</option>
          </select>
        </div>
        <div className="col-start-2 col-span-2 ">
        <button className="btn btn-success mr-5px w-24" onClick={setSave}>Simpan</button>
        <button className="btn btn-error ml-5px w-24">Batal</button>
        </div>
        {/* <div>NPM</div> */}
        {/* <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div> */}
      </div>

      {/* <div className="grid grid-cols-6 gap-2">
        <div className=">Nama</div>
        <div className=">Isi Nama</div>
      </div>

      <div className="grid grid-cols-6 gap-2">
        <div className=">Jurusan</div>
        <div className=">Isi Jurusan</div>
      </div> */}
    </div>
  );
}
