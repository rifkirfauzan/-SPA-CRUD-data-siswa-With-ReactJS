import React from 'react'
import { Table } from 'react-bootstrap'
const Tabel = ({siswa, editData, hapusData}) => {
    return (
<Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>Nama siswa</th>
      <th>Alamat</th>
      <th>Kelas</th>
      <th>Jurusan</th>
      <th>No telepon</th>
    </tr>
  </thead>
  <tbody>
    {siswa.map((siswa, index) => {
  return (
    <tr key={index}>
      <td>{index+1}</td>
      <td>{siswa.nama}</td>
      <td>{siswa.alamat}</td>
      <td>{siswa.kelas}</td>
      <td>{siswa.jurusan}</td>
      <td>{siswa.notelp}</td>
      <td>
            <button className="btn btn-warning mr-2" onClick={() => editData(siswa.id) }>Edit</button>
            <button className='btn btn-danger' onClick={() => hapusData(siswa.id) }>Hapus</button>
      </td>
    </tr>
  );
    })}
  </tbody>
</Table>
    );
};
export default Tabel;
