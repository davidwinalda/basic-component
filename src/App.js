import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from './layout/Navbar';
import PastMeetupCard from './components/PastMeetUp/PastMeetUp';
import LoadingState from './assets/loading.gif';
import './App.css';

const App = () => {
  // Set property App Component // Set state
  const [gif, setGif] = useState();

  const dataPastMeetUp = [
    {
      id: 1,
      date: '27 November 2017',
      desc: '#39 JakartaJS April Meetup with Kumparan',
      attendens: 120,
    },
    {
      id: 2,
      date: '28 November 2018',
      desc: '#38 JakartaJS April Meetup with Blibli',
      attendens: 120,
    },
    {
      id: 3,
      date: '29 November 2017',
      desc: '#37 JakartaJS April Meetup with Hacltiv8',
      attendens: 120,
    },
  ]
  // React V.16
  // After render when first time access & when data update
  useEffect(() => {
    welcomeGreeting();
    axios.get('https://api.giphy.com/v1/gifs/search?q=batman&api_key=R4zqJ5ZHschneHIM3WHmkEuBdif2TkOU&limit=50')
    .then((response) => {
      console.log(response.data.data);
      // Local variable
      const result = response.data.data;
      setGif(result);
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  const welcomeGreeting = () => {
    alert('Welcome to this website');
  }

  // render
  return (
    <Layout>
      <div className="wrapperPastMeetUp">
          {
            gif ? (
              gif.map((item) => (
                <ul key={item.id}>
                  <li><img src={item.images.original.url} alt="gif" /></li>
                  <li>{item.title}</li>
                </ul>
              ))
            ) :
            (
              <div className="loadingState"><img src={LoadingState} alt="gif" /></div>
            )
          }
      </div>
    </Layout>
  );
}

export default App;
