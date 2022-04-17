
import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';

class App extends React.Component {

  //Constructor
  constructor(props) {
    super(props);
    this.state = {
      gkdata: data
    }
  }

  render() {
    return(
      <>
        <Header />
        <Main gkdata={this.state.gkdata}/>
        <Footer />
      </>
    )
  }
}

export default App;
