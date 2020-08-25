import React, {
  Component
} from 'react';
import Cardlist from '../components/Cardlist';
//import Searchbox from './Searchbox';
//import {robots} from './robots';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [], //robots=robots in case we have file'robots.js'
      searchfield: '',
      date:new Date()
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({
          robots: users
        })
      });
  }


  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    })

  }

  render() {
    const {
      robots,
      searchfield
    } = this.state;
    const filteredrobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    return !robots.length ?
       <h1 > loading < /h1>:
       (
         < div className = 'tc' >
          <h1 className = 'f-subheadline lh-title' > ROBOFRIENDS < /h1>
          <div className = 'pa3 mb3' >
          <input className = ' tc pa3 ba b--blue bw2 bg-lightest-blue shadow-6'
          type = 'search'
          placeholder = 'Search Robots'
          onChange = {this.onSearchChange}
          />
          </div>
          <div className = 'h-800 bt bw2 pa3' >
           { filteredrobot.length>0?
              <Cardlist robots = {filteredrobot}/>:
              <h1 className = 'f1 gold' > NOT FOUND </h1>

          }
          <h2>it's {this.state.date.toLocaleTimeString()}</h2>

          </div>
         </div>
       );
   }
 }








export default App;
