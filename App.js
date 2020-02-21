import {firebaseConfig} from './Components/config/Firebase';
import * as firebase from 'firebase';
import Routes from './Components/Routes/Routes';
import React, {Component} from 'react';
const init = firebase.initializeApp(firebaseConfig);
class App extends Component {
  componentDidMount() {
    init;
  }
  render() {
    return <Routes />;
  }
}

export default App;
