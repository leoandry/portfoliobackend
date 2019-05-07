import React, { Component } from 'react';
import axios from 'axios';

export default class Editpengalaman extends Component {
  constructor(props) {
    super(props);
    this.onChangenamaperusahaan = this.onChangenamaperusahaan.bind(this);
    this.onChangejabatan = this.onChangejabatan.bind(this);
    this.onChangelamabekerja = this.onChangelamabekerja.bind(this);
    this.onChangetahunmasuk = this.onChangetahunmasuk.bind(this);
    this.onChangetahunkeluar = this.onChangetahunkeluar.bind(this);
    this.onChangejobdesk = this.onChangejobdesk.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        namaperusahaan: '',
        jabatan: '',
        lamabekerja: '',
        tahunmasuk: '',
        tahunkeluar: '',
        jobdesk: ''
        }
    }

    componentDidMount() {
      axios.get('https://4pilarsinergi.co.id/api-portfolio/public/pengalaman/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                namaperusahaan: response.data.namaperusahaan, 
                jabatan: response.data.jabatan,
                lamabekerja: response.data.lamabekerja,
                tahunmasuk: response.data.tahunmasuk,
                tahunkeluar: response.data.tahunkeluar,
                jobdesk: response.data.jobdesk
            });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangenamaperusahaan(e) {
        this.setState({
            namaperusahaan: e.target.value
        });
    }
    onChangejabatan(e) {
        this.setState({
            jabatan: e.target.value
        })  
    }
    onChangelamabekerja(e) {
        this.setState({
            lamabekerja: e.target.value
        })
    }

    onChangetahunmasuk(e) {
        this.setState({
            tahunmasuk: e.target.value
        })
    }

    onChangetahunkeluar(e) {
        this.setState({
            tahunkeluar: e.target.value
        })
    }

    onChangejobdesk(e) {
        this.setState({
            jobdesk: e.target.value
        })
    }

    onSubmit(e) {
    e.preventDefault();
    const obj = {
        namaperusahaan: this.state.namaperusahaan,
        jabatan: this.state.jabatan,
        lamabekerja: this.state.lamabekerja,
        tahunmasuk: this.state.tahunmasuk,
        tahunkeluar: this.state.tahunkeluar,
        jobdesk: this.state.jobdesk
    };
    axios.put('https://4pilarsinergi.co.id/api-portfolio/public/pengalaman/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
        this.props.history.push('/pengalaman');
        window.location.reload()
    }
 
  kembali = () => this.props.history.push("/pengalaman");

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h5 style={{marginLeft: '17%'}}>UBAH DATA PENGALAMAN</h5>
            <hr style={{width: '70%', marginLeft: '17%'}}></hr>
            <form onSubmit={this.onSubmit}>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Nama Perusahaan:  </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Nama Perusahaan" 
                    required
                    value={this.state.namaperusahaan}
                    onChange={this.onChangenamaperusahaan}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Jabatan: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Jabatan" 
                    value={this.state.jabatan}
                    onChange={this.onChangejabatan}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Masa Kerja: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Masa Kerja" 
                    value={this.state.lamabekerja}
                    onChange={this.onChangelamabekerja}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Tahun Masuk: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Tahun Masuk" 
                    value={this.state.tahunmasuk}
                    onChange={this.onChangetahunmasuk}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Tahun Keluar: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Tahun Keluar" 
                    value={this.state.tahunkeluar}
                    onChange={this.onChangetahunkeluar}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Job Desk: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Job Desk" 
                    value={this.state.jobdesk}
                    onChange={this.onChangejobdesk}
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