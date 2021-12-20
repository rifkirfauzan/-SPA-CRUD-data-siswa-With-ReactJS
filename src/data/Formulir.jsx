import React from "react";
import {Row, Col, Form, Button} from "react-bootstrap";

const Formulir = ({nama,alamat,kelas,jurusan,notelp,handleChange,handleSubmit,id}) => {
  return (
   <div className="mt-5">
       <Row>
           <Col>
                <h4>{id ? 'Edit Data' : 'Tambah Data'}</h4>
           </Col>
       </Row>
       <Row>
           <Col>
           <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
                <Form.Label>Nama siswa</Form.Label>
                <Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="alamat">
                <Form.Label>Alamat siswa</Form.Label>
                <Form.Control as="textarea" name="alamat" value={alamat} onChange={(event) => handleChange(event)} rows={3} />
            </Form.Group>
            <Form.Label>Pilih kelas</Form.Label>
            <Form.Select name="kelas" controlId="kelas" value={kelas} onChange={(event) => handleChange(event)}>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </Form.Select>
            <Form.Label>Pilih jurusan</Form.Label>
            <Form.Select name="jurusan" controlId="jurusan" value={jurusan} onChange={(event) => handleChange(event)}>
                <option value="RPL">RPL</option>
                <option value="Tata-boga">Tata Boga</option>
                <option value="Perhotelan">Perhotelan</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="notelp">
                <Form.Label>No telp siswa</Form.Label>
                <Form.Control type="text" name="notelp" value={notelp} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Tambah data
            </Button>
            </Form>
           </Col>
       </Row>
   </div>
  );
};

export default Formulir;
