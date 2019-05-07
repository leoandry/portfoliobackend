import React, { Component } from 'react';
import axios from 'axios';

export default class Editpribadi extends Component {
  constructor(props) {
    super(props);
    this.onChangenamalengkap = this.onChangenamalengkap.bind(this);
    this.onChangejeniskelamin = this.onChangejeniskelamin.bind(this);
    this.onChangeagama = this.onChangeagama.bind(this);
    this.onChangestatus = this.onChangestatus.bind(this);
    this.onChangealamat = this.onChangealamat.bind(this);
    this.onChangetgllahir = this.onChangetgllahir.bind(this);
    this.onChangehp = this.onChangehp.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        namalengkap: '',
        jeniskelamin: '',
        agama: '',
        status: '',
        alamat: '',
        tgllahir: '',
        hp: ''
    }
  }

    componentDidMount() {
      axios.get('https://4pilarsinergi.co.id/api-portfolio/public/pribadi/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                namalengkap: response.data.namalengkap, 
                jeniskelamin: response.data.jeniskelamin,
                agama: response.data.agama,
                status: response.data.status,
                alamat: response.data.alamat,
                tgllahir: response.data.tgllahir,
                hp: response.data.hp
            });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangenamalengkap(e) {
        this.setState({
            namalengkap: e.target.value
        });
    }
    onChangejeniskelamin(e) {
        this.setState({
            jeniskelamin: e.target.value
        })  
    }
    onChangeagama(e) {
        this.setState({
            agama: e.target.value
        })
    }
    onChangestatus(e) {
        this.setState({
            status: e.target.value
        })
    }
    onChangealamat(e) {
        this.setState({
            alamat: e.target.value
        })
    }
    onChangetgllahir(e) {
        this.setState({
            tgllahir: e.target.value
        })
    }
    onChangehp(e) {
        this.setState({
            hp: e.target.value
        })
    }

    onSubmit(e) {
    e.preventDefault();
    const obj = {
        namalengkap: this.state.namalengkap,
        jeniskelamin: this.state.jeniskelamin,
        agama: this.state.agama,
        status: this.state.status,
        alamat: this.state.alamat,
        tgllahir: this.state.tgllahir,
        hp: this.state.hp
    };
    axios.put('https://4pilarsinergi.co.id/api-portfolio/public/pribadi/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
        this.props.history.push('/pribadi');
        window.location.reload()
    }
 
  kembali = () => this.props.history.push("/pribadi");

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h5 style={{marginLeft: '17%'}}>UBAH DATA PRIBADI</h5>
            <hr style={{width: '70%', marginLeft: '17%'}}></hr>
            <form onSubmit={this.onSubmit}>
            <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Nama Lengkap:  </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Nama Lengkap" 
                    required
                    value={this.state.namalengkap}
                    onChange={this.onChangenamalengkap}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Jenis Kelamin: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Jenis Kelamin" 
                    value={this.state.jeniskelamin}
                    onChange={this.onChangejeniskelamin}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Agama: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Agama" 
                    value={this.state.agama}
                    onChange={this.onChangeagama}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Status: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Status" 
                    value={this.state.status}
                    onChange={this.onChangestatus}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Alamat: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Alamat" 
                    value={this.state.alamat}
                    onChange={this.onChangealamat}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Tgl Lahir: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Tgl Lahir" 
                    value={this.state.tgllahir}
                    onChange={this.onChangetgllahir}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>HP: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Nomor HP" 
                    value={this.state.hp}
                    onChange={this.onChangehp}
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