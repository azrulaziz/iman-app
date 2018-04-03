import React, { Component } from 'react';
import './App.css';
import Location from './components/Location';
import Display from './components/Display';
import Menu from './components/Menu';

const location = {
  area: ['Kuala Lumpur', 'Labuan', 'Putrajaya', 'Shah Alam', 'Pulau Pinang', 'Johor Bahru', 'Kota Bharu', 'Kuching']
}

const code = {
  "Kuala Lumpur": 'wlp-0',
  Labuan: 'wlp-1',
  Putrajaya: 'wlp-2',
  "Shah Alam": 'sgr-10',
  "Pulau Pinang": 'png-0',
  "Johor Bahru": 'jhr-2',
  "Kota Bharu": 'ktn-3',
  Kuching: 'swk-17',
}

const url = `https://mpt.i906.my/mpt.json?`;
const filter = `&filter=1`;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      location: location,
      code: code,
      resultTimes: '',
      searchTerm: 'wlp-0',
      currLocation: 'Kuala Lumpur',
      toggle: false,
    }

    this.handleCodeRetrieval = this.handleCodeRetrieval.bind(this);
    this.fetchTime = this.fetchTime.bind(this);
    this.setTime = this.setTime.bind(this);
    this.handleSideMenu = this.handleSideMenu.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleCodeRetrieval(e) {
    const value = e.target.innerText;
    this.fetchTime(code[value]);
    this.setState({currLocation: value})
  }

  componentDidMount() {
    const {searchTerm} = this.state;
    this.fetchTime(searchTerm);
  }

  fetchTime(searchTerm) {
    fetch(`${url}code=${searchTerm}${filter}`)
    .then(response => response.json())
    .then(result => this.setTime(result))
  }

  setTime(result) {
    this.setState({resultTimes: result.response.times})
  }

  handleSideMenu() {
    this.setState({toggle: !this.state.toggle})
  }

  handleMenu() {
    this.setState({toggle: false});
  }

  render() {
    const {location, resultTimes, currLocation, toggle} = this.state;
    return (
      <div className="app">
        <div className="app-container">
          <Menu handleSideMenu={this.handleSideMenu} toggle={toggle}/>
          <Location 
            location={location} 
            handleCodeRetrieval={this.handleCodeRetrieval}
            handleMenu={this.handleMenu}
            toggle={toggle}
          /> 
          <Display resultTimes={resultTimes} currLocation={currLocation}/>
        </div>
        <p className="app-footer">developed by azrulaziz</p>
      </div>
    );
  }
}

export default App;
