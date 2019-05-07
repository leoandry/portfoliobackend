import React, { Component } from 'react';
import axios from 'axios';

export default class Editpendidikan extends Component {
  constructor(props) {
    super(props);
    this.onChangenamasekolah = this.onChangenamasekolah.bind(this);
    this.onChangelevel = this.onChangelevel.bind(this);
    this.onChangejurusan = this.onChangejurusan.bind(this);
    this.onChangetahunlulus = this.onChangetahunlulus.bind(this);
    this.onChangekota = this.onChangekota.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        namasekolah: '',
        level: '',
        jurusan: '',
        tahunlulus: '',
        kota: ''
        }
    }

    componentDidMount() {
      axios.get('https://4pilarsinergi.co.id/api-portfolio/public/pendidikan/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                namasekolah: response.data.namasekolah, 
                level: response.data.level,
                jurusan: response.data.jurusan,
                tahunlulus: response.data.tahunlulus,
                kota: response.data.kota
            });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangenamasekolah(e) {
        this.setState({
            namasekolah: e.target.value
        });
    }

    onChangelevel(e) {
        this.setState({
            level: e.target.value
        })  
    }

    onChangejurusan(e) {
        this.setState({
            jurusan: e.target.value
        })
    }

    onChangetahunlulus(e) {
        this.setState({
            tahunlulus: e.target.value
        })
    }

    onChangekota(e) {
        this.setState({
            kota: e.target.value
        })
    }

    onSubmit(e) {
    e.preventDefault();
    const obj = {
        namasekolah: this.state.namasekolah,
        level: this.state.level,
        jurusan: this.state.jurusan,
        tahunlulus: this.state.tahunlulus,
        kota: this.state.kota
    };
    axios.put('https://4pilarsinergi.co.id/api-portfolio/public/pendidikan/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
        this.props.history.push('/pendidikan');
        window.location.reload()
    }
 
  kembali = () => this.props.history.push("/pendidikan");

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h5 style={{marginLeft: '17%'}}>UBAH DATA PENDIDIKAN</h5>
            <hr style={{width: '70%', marginLeft: '17%'}}></hr>
            <form onSubmit={this.onSubmit}>
            <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Nama Sekolah:  </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Nama Sekolah" 
                    required
                    value={this.state.namasekolah}
                    onChange={this.onChangenamasekolah}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Tingkat: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Tingkat" 
                    value={this.state.level}
                    onChange={this.onChangelevel}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Jurusan: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Jurusan" 
                    value={this.state.jurusan}
                    onChange={this.onChangejurusan}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Tahun Lulus: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Tahun Lulus" 
                    value={this.state.tahunlulus}
                    onChange={this.onChangetahunlulus}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Kota: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Kota" 
                    value={this.state.kota}
                    onChange={this.onChangekota}
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