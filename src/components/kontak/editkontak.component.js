import React, { Component } from 'react';
import axios from 'axios';

export default class Editkontak extends Component {
  constructor(props) {
    super(props);
    this.onChangenamakontak = this.onChangenamakontak.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangenote = this.onChangenote.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      namakontak: '',
      email: '',
      note:''
    }
  }

  componentDidMount() {
      axios.get('https://4pilarsinergi.co.id/api-portfolio/public/kontak/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                namakontak: response.data.namakontak, 
                email: response.data.email,
                note: response.data.note });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangenamakontak(e) {
    this.setState({
      namakontak: e.target.value
    });
  }
  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })  
  }
  onChangenote(e) {
    this.setState({
      note: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      namakontak: this.state.namakontak,
      email: this.state.email,
      note: this.state.note
    };
    axios.put('https://4pilarsinergi.co.id/api-portfolio/public/kontak/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/kontak');
    window.location.reload()
  }
 
  kembali = () => this.props.history.push("/kontak");

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h5 style={{marginLeft: '17%'}}>UBAH DATA KONTAK</h5>
            <hr style={{width: '70%', marginLeft: '17%'}}></hr>
            <form onSubmit={this.onSubmit}>
                <div className="col-md-6" style={{marginLeft: '17%'}}>
                    <label>Nama Kontak:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.namakontak}
                      onChange={this.onChangenamakontak}
                      />
                </div>
                <div className="col-md-6" style={{marginLeft: '17%'}}>
                    <label>Email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeemail}
                      />
                </div>
                <div className="col-md-6" style={{marginLeft: '17%'}}>
                    <label>Note: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.note}
                      onChange={this.onChangenote}
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