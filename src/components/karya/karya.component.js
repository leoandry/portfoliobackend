import React, { Component } from 'react';
import TableKarya from './TableKarya';
import { Button } from 'react-bootstrap';

export default class Karya extends Component {

  constructor(props) {
      super(props);
      this.state = {karya: []};
    }
    componentDidMount(){
      fetch('https://4pilarsinergi.co.id/api-portfolio/public/karya/')
      .then(response => response.json())
      .then((data)=>{
          this.setState({karya: data});
      })
    }
    tambahData = () => this.props.history.push("/addkarya");
    tabRow(){
      return this.state.karya.map(function(object, i){
          return <TableKarya obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h5 style={{marginLeft: '18%'}}>DATA KARYA</h5>
          <hr style={{width: '70%', marginLeft: '18%'}}></hr>
          <Button variant="outline-primary" style={{marginLeft: '18%'}} onClick={this.tambahData}>Tambah Data</Button>
          <br></br><br></br>
          <table className="table table-striped" style={{width: '70%', marginLeft: '18%'}}>
            <thead className="thead-dark">
              <tr>
                <th className="text-center">Nama Karya</th>
                <th className="text-center">Pengguna</th>
                <th className="text-center">Tahun Pembuatan</th>
                <th className="text-center">Keterangan</th>
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