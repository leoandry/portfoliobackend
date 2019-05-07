import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

class TableKarya extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('https://4pilarsinergi.co.id/api-portfolio/public/karya/'+this.props.obj.kodekarya)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
        window.location.reload()
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.namakarya}
          </td>
          <td>
            {this.props.obj.pengguna}
          </td>
          <td>
            {this.props.obj.tahunpembuatan}
          </td>
          <td>
            {this.props.obj.keterangan}
          </td>
          <td className="text-center">
            <Link to={"/editkarya/"+this.props.obj.kodekarya} className="btn btn-warning" title="UBAH DATA"><FaEdit /></Link>
          </td>
          <td className="text-center">
            <button onClick={this.delete} className="btn btn-danger" title="HAPUS DATA"><FaTrash /></button>
          </td>
        </tr>
    );
  }
}

export default TableKarya;