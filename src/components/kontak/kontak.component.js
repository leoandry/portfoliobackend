import React, { Component } from 'react';
import TableKontak from './TableKontak';
import { Button } from 'react-bootstrap';

export default class Kontak extends Component {

  constructor(props) {
      super(props);
      this.state = {kontak: []};
    }
    componentDidMount(){
      fetch('https://4pilarsinergi.co.id/api-portfolio/public/kontak/')
      .then(response => response.json())
      .then((data)=>{
          this.setState({kontak: data});
      })
    }
    tambahData = () => this.props.history.push("/addkontak");
    tabRow(){
      return this.state.kontak.map(function(object, i){
          return <TableKontak obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h5 style={{marginLeft: '18%'}}>DATA KONTAK</h5>
          <hr style={{width: '70%', marginLeft: '18%'}}></hr>
          <Button variant="outline-primary" style={{marginLeft: '18%'}} onClick={this.tambahData}>Tambah Data</Button>
          <br></br><br></br>
          <table className="table table-striped" style={{width: '70%', marginLeft: '18%'}}>
            <thead className="thead-dark">
              <tr>
                <th className="text-center">Nama Kontak</th>
                <th className="text-center">Email</th>
                <th className="text-center">Note</th>
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