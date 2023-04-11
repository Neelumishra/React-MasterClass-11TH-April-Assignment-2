import React from 'react';
import './style.css';

export default function App() {
  const [firstName, setfirstName] = React.useState('');
  const [lastName, setlastName] = React.useState('');
  const [Age, setAge] = React.useState('');
  const [Address, setAddress] = React.useState('');
  const [history, setHistory] = React.useState([]);
  const [editingIndex, setEditingIndex] = React.useState(null);

  function handleChange() {
    let data = {
      first: firstName,
      last: lastName,
      Age: Age,
      Address: Address,
    };
    if (editingIndex !== null) {
      let updatedHistory = [...history];
      updatedHistory[editingIndex] = data;
      setHistory(updatedHistory);
      setEditingIndex(null);
    } else {
      setHistory([...history, data]);
    }
    setlastName('');
    setAddress('');
    setAge('');
    setfirstName('');
  }

  function handleRemove(index) {
    setHistory(history.filter((e, i) => index !== i));
  }

  function handleUpdate(index) {
    setEditingIndex(index);
    setfirstName(history[index].first);
    setlastName(history[index].last);
    setAge(history[index].Age);
    setAddress(history[index].Address);
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div>
          <input
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            placeholder="FirstName"
          />
          <br />
          <input
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            placeholder="lastName"
          />
          <br />
          <input
            value={Age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />
          <br />
          <input
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
        </div>
        <div>
          <h5>FirstName:{firstName}</h5>
          <h5>lastName:{lastName}</h5>
          <h5>Age:{Age}</h5>
          <h5>Address:{Address}</h5>
        </div>
      </div>
      <div>
        <button onClick={handleChange}>
          {editingIndex !== null ? 'Update' : 'Add'}
        </button>
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>lastName</th>
              <th>Age</th>
              <th>Address</th>
              <th>Remove</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {history.map((history, index) => (
              <tr key={index}>
                <td>{history.first}</td>
                <td>{history.last}</td>
                <td>{history.Age}</td>
                <td>{history.Address}</td>
                <td onClick={() => handleRemove(index)}>❌</td>
                <td onClick={() => handleUpdate(index)}>✏️</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
