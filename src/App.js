import React from 'react';
import Select from 'react-select'

import CardMeetUp from './components/CardMeetUp/CardMeetUp';
import Button from './components/Button/Button';
import './App.css';

function App() {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const thanksForSubmitForm = () => {
    alert('Terima kasih sudah submit form');
  }

  return (
    <div className="App">
      {/* Call component */}
      <CardMeetUp />
      <Select options={options} />
      <Button textButton="Submit" onClick={thanksForSubmitForm} disabled/>
    </div>
  );
}

export default App;
