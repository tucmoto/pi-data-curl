// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [repetitions, setRepetitions] = useState([]);
  const [newRepetition, setNewRepetition] = useState({ date: '', repetitions: '' });

  useEffect(() => {
    axios.get('/repetitions')
      .then(response => {
        setRepetitions(response.data);
      })
      .catch(error => {
        console.error('Error fetching repetitions:', error);
      });
  }, []);

  const handleChange = e => {
    setNewRepetition({ ...newRepetition, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/repetitions', newRepetition)
      .then(response => {
        console.log(response.data);
        setRepetitions([...repetitions, newRepetition]);
        setNewRepetition({ date: '', repetitions: '' });
      })
      .catch(error => {
        console.error('Error adding repetition:', error);
      });
  };

  return (
    <div>
      <h1>Curl Repetitions Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" name="date" value={newRepetition.date} onChange={handleChange} />
        <label>Repetitions:</label>
        <input type="number" name="repetitions" value={newRepetition.repetitions} onChange={handleChange} />
        <button type="submit">Add Repetition</button>
      </form>
      <ul>
        {repetitions.map(repetition => (
          <li key={repetition.id}>
            Date: {repetition.date}, Repetitions: {repetition.repetitions}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
