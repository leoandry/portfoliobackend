import React, { Component } from 'react';
import TablePendidikan from './TablePendidikan';
import { Button } from 'react-bootstrap';

export default class Pendidikan extends Component {

  constructor(props) {
      super(props);
      this.state = {pendidikan: []};
    }
    componentDidMount(){
      fetch('https://4pilarsinergi.co.id/api-portfolio/public/pendidikan/')
      .then(response => response.json())
      .then((data)=>{
          this.setState({pendidikan: data});
      })
    }
    tambahData = () => this.props.history.push("/addpendidikan");
    tabRow(){
      return this.state.pendidikan.map(function(object, i){
          return <TablePendidikan obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h5 style={{marginLeft: '18%'}}>DATA PENDIDIKAN</h5>
          <hr style={{width: '70%', marginLeft: '18%'}}></hr>
          <Button variant="outline-primary" style={{marginLeft: '18%'}} onClick={this.tambahData}>Tambah Data</Button>
          <br></br><br></br>
          <table className="table table-striped" style={{width: '70%', marginLeft: '18%'}}>
            <thead className="thead-dark">
              <tr>
                <th className="text-center">Nama Sekolah</th>
                <th className="text-center">Tingkat</th>
                <th className="text-center">Jurusan</th>
                <th className="text-center">Tahun Lulus</th>
                <th className="text-center">Kota</th>
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