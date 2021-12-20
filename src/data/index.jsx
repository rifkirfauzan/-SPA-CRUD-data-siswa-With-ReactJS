import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";
import Formulir from "./Formulir";

export default class index extends Component {
 constructor(props) {
   super(props)

   this.state = {
     siswa: [],
     nama: "",
     alamat: "",
     kelas: "",
     jurusan: "",
     notelp:"",
     id:"",
   }
 }

 handleChange = (event) =>{
   this.setState({
     [event.target.name] : event.target.value
   })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.id === ""){
      this.setState({
        siswa:[
          ...this.state.siswa,
          {
            id: this.state.siswa.length+1,
            nama: this.state.nama,
            alamat: this.state.alamat,
            kelas: this.state.kelas,
            jurusan: this.state.jurusan,
            notelp: this.state.notelp,
          }
        ]
      })
    }else{
      const getNotSiswa = this.state.siswa
      .filter((siswa) => siswa.id !== this.state.id)
      .map((filterSiswa) => {
        return filterSiswa
      });
      
      this.setState({
        siswa: [
          ...getNotSiswa,
          {
            id: this.state.siswa.length+1,
            nama: this.state.nama,
            alamat: this.state.alamat,
            kelas: this.state.kelas,
            jurusan: this.state.jurusan,
            notelp: this.state.notelp,
          }
        ]
      })
    }

    this.setState({
      nama: "",
      alamat: "",
      kelas: "",
      jurusan: "",
      notelp: "",
      id: "",
    })
  }

  editData = (id) => {
    const getSiswa = this.state.siswa
    .filter((siswa) => siswa.id === id)
    .map((filterSiswa) => {
      return filterSiswa
    })
    this.setState({
      nama: getSiswa[0].nama,
      alamat: getSiswa[0].alamat,
      kelas: getSiswa[0].kelas,
      jurusan: getSiswa[0].jurusan,
      notelp: getSiswa[0].notelp,
      id: getSiswa[0].id,
    })
  }
  
  hapusData = (id) => {
    const getDeleteSiswa = this.state.siswa
    .filter((siswa) => siswa.id !== id)
    .map((filterSiswa) => {
      return filterSiswa
    });
    this.setState({
      siswa: getDeleteSiswa
    })
  }

  render() {
    console.log(this.state.siswa);
    return (
      <div>
        <NavbarComponent />
        <div className="conatiner mt-4">
            <h2>Daftar data siswa</h2>
            <Tabel siswa={this.state.siswa} editData={this.editData} hapusData={this.hapusData} />
            <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}
