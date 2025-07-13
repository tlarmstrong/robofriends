import React, { Component } from 'react';

import Searchbox from '../../components/searchbox/searchbox.component';
import Scroll from '../../components/scroll/scroll.component';
import CardList from '../../components/card-list/card-list.component';

import './app.styles.css';

// this is a smart comoonent; it uses state
class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchString: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robots => this.setState({ robots: robots }));
  }

  onSearchChange =(event) => {
    const searchString = event.target.value;
    this.setState({ searchString: searchString });
  }

  render() {
    const { robots, searchString } = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchString.toLowerCase());
    })

    if(!robots.length) {
      return <span className="material-symbols-outlined progress">progress_activity</span>
    }

    return (
      <div className='tc'>
        <h1 className='title'>RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList className='cardlist' robots={filteredRobots} />
        </Scroll>
      </div>
    )
  }
}

export default App;
