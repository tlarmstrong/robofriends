import React, { useState, useEffect } from 'react';

import Searchbox from '../../components/searchbox/searchbox.component';
import Scroll from '../../components/scroll/scroll.component';
import CardList from '../../components/card-list/card-list.component';

import './app.styles.css';

// this is a smart comoonent; it uses state
function App() {
  const [ robots, setRobots ] = useState([]);
  const [ searchString, setSearchString ] = useState('');
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setRobots(users)});
  }, []);

  const onSearchChange = (event) => {
    const searchString = event.target.value;
    setSearchString(searchString);
  }


  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchString.toLowerCase());
  })

  if(!robots.length) {
    return <span className="material-symbols-outlined progress">progress_activity</span>
  }

  return (
    <div className='tc'>
      <h1 className='title'>RoboFriends</h1>
      <Searchbox searchChange={ onSearchChange } />
      <Scroll>
        <CardList robots={ filteredRobots } />
      </Scroll>
    </div>
  )
}

export default App;
