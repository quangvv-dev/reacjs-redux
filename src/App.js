import React, { Component } from 'react';
import './App.css';
import FormList from './components/formlist';

class App extends Component {
  render() {
    return (
      <div className="custome" style={{marginLeft:'10%',marginRight:'10%'}}  >
             <FormList/>
      </div>
    );
  }
}

export default App;
