import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

class TablePendidikan extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('https://4pilarsinergi.co.id/api-portfolio/public/pendidikan/'+this.props.obj.kodependidikan)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
        window.location.reload()
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.level}
          </td>
          <td>
            {this.props.obj.namasekolah}
          </td>
          <td>
            {this.props.obj.jurusan}
          </td>
          <td>
            {this.props.obj.tahunlulus}
          </td>
          <td>
            {this.props.obj.kota}
          </td>
          <td className="text-center">
            <Link to={"/editpendidikan/"+this.props.obj.kodependidikan} className="btn btn-warning" title="UBAH DATA"><FaEdit /></Link>
          </td>
          <td className="text-center">
            <button onClick={this.delete} className="btn btn-danger" title="HAPUS DATA"><FaTrash /></button>
          </td>
        </tr>
    );
  }
}

export default TablePendidikan;