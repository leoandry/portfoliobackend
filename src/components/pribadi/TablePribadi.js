import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

class TablePribadi extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('https://4pilarsinergi.co.id/api-portfolio/public/pribadi/'+this.props.obj.kodepribadi)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
        window.location.reload()
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.namalengkap}
          </td>
          <td>
            {this.props.obj.jeniskelamin}
          </td>
          <td>
            {this.props.obj.agama}
          </td>
          <td>
            {this.props.obj.status}
          </td>
          <td>
            {this.props.obj.alamat}
          </td>
          <td>
            {this.props.obj.tgllahir}
          </td>
          <td>
            {this.props.obj.hp}
          </td>
          <td className="text-center">
            <Link to={"/editpribadi/"+this.props.obj.kodepribadi} className="btn btn-warning" title="UBAH DATA"><FaEdit /></Link>
          </td>
          <td className="text-center">
            <button onClick={this.delete} className="btn btn-danger" title="HAPUS DATA"><FaTrash /></button>
          </td>
        </tr>
    );
  }
}

export default TablePribadi;