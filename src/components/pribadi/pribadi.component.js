import React, { Component } from 'react';
import TablePribadi from './TablePribadi';
import { Button } from 'react-bootstrap';

export default class Pribadi extends Component {

  constructor(props) {
      super(props);
      this.state = {pribadi: []};
    }
    componentDidMount(){
      fetch('https://4pilarsinergi.co.id/api-portfolio/public/pribadi/')
      .then(response => response.json())
      .then((data)=>{
          this.setState({pribadi: data});
      })
    }
    tambahData = () => this.props.history.push("/addpribadi");
    tabRow(){
      return this.state.pribadi.map(function(object, i){
          return <TablePribadi obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h5 style={{marginLeft: '18%'}}>DATA PRIBADI</h5>
          <hr style={{width: '70%', marginLeft: '18%'}}></hr>
          <Button variant="outline-primary" style={{marginLeft: '18%'}} onClick={this.tambahData}>Tambah Data</Button>
          <br></br><br></br>
          <table className="table table-striped" style={{width: '70%', marginLeft: '18%'}}>
            <thead className="thead-dark">
              <tr>
                <th className="text-center">Nama Lengkap</th>
                <th className="text-center">Jenis Kelamin</th>
                <th className="text-center">Agama</th>
                <th className="text-center">Status</th>
                <th className="text-center">Alamat</th>
                <th className="text-center">Tgl Lahir</th>
                <th className="text-center">Hp</th>
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