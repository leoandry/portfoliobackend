import React, { Component } from 'react';
import TableSosmed from './TableSosmed';
import { Button } from 'react-bootstrap';

export default class Sosmed extends Component {

  constructor(props) {
      super(props);
      this.state = {sosmed: []};
    }
    componentDidMount(){
      fetch('https://4pilarsinergi.co.id/api-portfolio/public/sosmed/')
      .then(response => response.json())
      .then((data)=>{
          this.setState({sosmed: data});
      })
    }
    tambahData = () => this.props.history.push("/addsosmed");
    tabRow(){
      return this.state.sosmed.map(function(object, i){
          return <TableSosmed obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h5 style={{marginLeft: '18%'}}>DATA SOSIAL MEDIA</h5>
          <hr style={{width: '70%', marginLeft: '18%'}}></hr>
          <Button variant="outline-primary" style={{marginLeft: '18%'}} onClick={this.tambahData}>Tambah Data</Button>
          <br></br><br></br>
          <table className="table table-striped" style={{width: '70%', marginLeft: '18%'}}>
            <thead className="thead-dark">
              <tr>
                <th className="text-center">Email</th>
                <th className="text-center">LinkedIn</th>
                <th className="text-center">Facebook</th>
                <th className="text-center">Instagram</th>
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