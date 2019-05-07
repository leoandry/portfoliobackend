import React, { Component } from 'react';
import axios from 'axios';

export default class Editsosmed extends Component {
  constructor(props) {
    super(props);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangelinkedin = this.onChangelinkedin.bind(this);
    this.onChangefacebook = this.onChangefacebook.bind(this);
    this.onChangeinstagram = this.onChangeinstagram.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        email: '',
        linkedin: '',
        facebook: '',
        instagram: ''
        }
    }

    componentDidMount() {
      axios.get('https://4pilarsinergi.co.id/api-portfolio/public/sosmed/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                email: response.data.email, 
                linkedin: response.data.linkedin,
                facebook: response.data.facebook,
                instagram: response.data.instagram
            });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangeemail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangelinkedin(e) {
        this.setState({
            linkedin: e.target.value
        })  
    }
    onChangefacebook(e) {
        this.setState({
            facebook: e.target.value
        })
    }

    onChangeinstagram(e) {
        this.setState({
            instagram: e.target.value
        })
    }

    onSubmit(e) {
    e.preventDefault();
    const obj = {
        email: this.state.email,
        linkedin: this.state.linkedin,
        facebook: this.state.facebook,
        instagram: this.state.instagram
    };
    axios.put('https://4pilarsinergi.co.id/api-portfolio/public/sosmed/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
        this.props.history.push('/sosmed');
        window.location.reload()
    }
 
  kembali = () => this.props.history.push("/sosmed");

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h5 style={{marginLeft: '17%'}}>UBAH DATA SOSIAL MEDIA</h5>
            <hr style={{width: '70%', marginLeft: '17%'}}></hr>
            <form onSubmit={this.onSubmit}>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Email:  </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Email" 
                    required
                    value={this.state.email}
                    onChange={this.onChangeemail}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Linkedin: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Linkedin" 
                    value={this.state.linkedin}
                    onChange={this.onChangelinkedin}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Facebook: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Facebook" 
                    value={this.state.facebook}
                    onChange={this.onChangefacebook}
                    />
                </div>
                <div className="col-md-6" style={{marginLeft: '18%'}}>
                    <label style={{color: '#000000'}}>Instagram: </label>
                    <input type="text" 
                    className="form-control"
                    placeholder="Masukkan Instagram" 
                    value={this.state.instagram}
                    onChange={this.onChangeinstagram}
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