import React, { Component } from 'react';
import TablePengalaman from './TablePengalaman';
import { Button } from 'react-bootstrap';

export default class Pengalaman extends Component {

  constructor(props) {
      super(props);
      this.state = {pengalaman: []};
    }
    componentDidMount(){
      fetch('https://4pilarsinergi.co.id/api-portfolio/public/pengalaman/')
      .then(response => response.json())
      .then((data)=>{
          this.setState({pengalaman: data});
      })
    }
    tambahData = () => this.props.history.push("/addpengalaman");
    tabRow(){
      return this.state.pengalaman.map(function(object, i){
          return <TablePengalaman obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h5 style={{marginLeft: '18%'}}>DATA PENGALAMAN</h5>
          <hr style={{width: '70%', marginLeft: '18%'}}></hr>
          <Button variant="outline-primary" style={{marginLeft: '18%'}} onClick={this.tambahData}>Tambah Data</Button>
          <br></br><br></br>
          <table className="table table-striped" style={{width: '70%', marginLeft: '18%'}}>
            <thead className="thead-dark">
              <tr>
                <th className="text-center">Nama Perusahaan</th>
                <th className="text-center">Jabatan</th>
                <th className="text-center">Masa Kerja</th>
                <th className="text-center">Tahun Masuk</th>
                <th className="text-center">Tahun Keluar</th>
                <th className="text-center">Job Desk</th>
                <th colSpan="2" className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }