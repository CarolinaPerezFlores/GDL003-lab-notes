import React from 'react';
import Note from '../Components/Note'
// import List from '../components/List';

class Notes extends React.Component {
  
  render() {
    return (
    <div>
      <div>
        <Note />
      </div>
      <div>
        <Note />
      </div>
      <div>
        <Note />
      </div>
      <div>
        <Note />
      </div>
      <div>
        <Note />
      </div>
        <p>heyy!</p>
    </div>
     
    );
  }
}

export default Notes;