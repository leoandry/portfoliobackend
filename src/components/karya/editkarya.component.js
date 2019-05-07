import React, { Component } from 'react';
import axios from 'axios';

export default class Editkarya extends Component {
  constructor(props) {
    super(props);
    this.onChangenamakarya = this.onChangenamakarya.bind(this);
    this.onChangepengguna = this.onChangepengguna.bind(this);
    this.onChangetahunpembuatan = this.onChangetahunpembuatan.bind(this);
    this.onChangeketerangan = this.onChangeketerangan.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        namakarya: '',
        pengguna: '',
        tahunpembuatan: '',
        keterangan: ''
        }
    }

    componentDidMount() {
      axios.get('https://4pilarsinergi.co.id/api-portfolio/public/karya/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                namakarya: response.data.namakarya, 
                pengguna: response.data.pengguna,
                tahunpembuatan: response.data.tahunpembuatan,
                keterangan: response.data.keterangan
            });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangenamakarya(e) {
        this.setState({
            namakarya: e.target.value
        });
    }
    onChangepengguna(e) {
        this.setState({
            pengguna: e.target.value
        })  
    }
    onChangetahunpembuatan(e) {
        this.setState({
            tahunpembuatan: e.target.value
        })
    }

    onChangeketerangan(e) {
        this.setState({
            keterangan: e.target.value
        })
    }

    onSubmit(e) {
    e.preventDefault();
    const obj = {
        namakarya: this.state.namakarya,
        pengguna: this.state.pengguna,
        tahunpembuatan: this.state.tahunpembuatan,
        keterangan: this.state.keterangan
    };
    axios.put('https://4pilarsinergi.co.id/api-portfolio/public/karya/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
        this.props.history.push('/karya');
        window.location.reload()
    }
 
  kembali = () => this.props.history.push("/karya");

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h5 style={{marginLeft: '17%'}}>UBAH DATA KARYA</h5>
            <hr style={{width: '70%', marginLeft: '17%'}}></hr>
            <form onSubmit={this.onSubmit}>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Nama Karya:  </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Nama Karya" 
                    required
                    value={this.state.namakarya}
                    onChange={this.onChangenamakarya}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Pengguna: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Pengguna" 
                    value={this.state.pengguna}
                    onChange={this.onChangepengguna}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Tahun Pembuatan: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Tahun Pembuatan" 
                    value={this.state.tahunpembuatan}
                    onChange={this.onChangetahunpembuatan}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Keterangan: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Keterangan" 
                    value={this.state.keterangan}
                    onChange={this.onChangeketerangan}
                    />
                </div>
                <br></br>
                <div className="col-md-6" style={{marginLeft: '17%'}}>
                    <input type="submit" 
                      value="Submit" 
                      className="btn btn-success"/>
                      &nbsp;&nbsp;
                    <input type="submit" 
                    value="Kembali" 
                    className="btn btn-warning" 
                    onClick={this.kembali}/>
                </div>
            </form>
        </div>
    )
  }
}