import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

class TableSosmed extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('https://4pilarsinergi.co.id/api-portfolio/public/sosmed/'+this.props.obj.kodesosialmedia)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
        window.location.reload()
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.linkedin}
          </td>
          <td>
            {this.props.obj.facebook}
          </td>
          <td>
            {this.props.obj.instagram}
          </td>
          <td className="text-center">
            <Link to={"/editsosmed/"+this.props.obj.kodesosialmedia} className="btn btn-warning" title="UBAH DATA"><FaEdit /></Link>
          </td>
          <td className="text-center">
            <button onClick={this.delete} className="btn btn-danger" title="HAPUS DATA"><FaTrash /></button>
          </td>
        </tr>
    );
  }
}

export default TableSosmed;