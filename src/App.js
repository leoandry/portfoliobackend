import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu';
import { Link } from 'react-router-dom';
import { 
  Layout,Header,Navigation,Drawer,Content,HeaderRow
} from 'react-mdl';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render () {
    return(
      <div className="demo-big-content">
          <Layout>
              <Header waterfall>
                  <HeaderRow title="Portfolio Panel">
                  </HeaderRow>
              </Header>
              <Drawer title="Portfolio Panel">
                  <Navigation>
                      <Link to="/pribadi"> Pribadi</Link> 
                      <Link to="/pendidikan"> Pendidikan</Link> 
                      <Link to="/sosmed"> Sosial Media</Link> 
                      <Link to="/pengalaman"> Pengalaman</Link> 
                      <Link to="/karya"> Karya</Link> 
                      <Link to="/kontak"> Kontak</Link> 
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Menu />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;