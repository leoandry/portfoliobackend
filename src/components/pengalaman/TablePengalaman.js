import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

class TablePengalaman extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('https://4pilarsinergi.co.id/api-portfolio/public/pengalaman/'+this.props.obj.kodepengalaman)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
        window.location.reload()
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.namaperusahaan}
          </td>
          <td>
            {this.props.obj.jabatan}
          </td>
          <td>
            {this.props.obj.lamabekerja}
          </td>
          <td>
            {this.props.obj.tahunmasuk}
          </td>
          <td>
            {this.props.obj.tahunkeluar}
          </td>
          <td>
            {this.props.obj.jobdesk}
          </td>
          <td className="text-center">
            <Link to={"/editpengalaman/"+this.props.obj.kodepengalaman} className="btn btn-warning" title="UBAH DATA"><FaEdit /></Link>
          </td>
          <td className="text-center">
            <button onClick={this.delete} className="btn btn-danger" title="HAPUS DATA"><FaTrash /></button>
          </td>
        </tr>
    );
  }
}

export default TablePengalaman;