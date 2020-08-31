import React from 'react';

const HelloWorld = () => {
  const name = 'DAVID WINALDA';
  const copyright = 'INALUM 2020';
  const width = 500;

  const onClickImage = () => {
    alert('You clicked image');
  };

  let showImage = true;

  const listNumbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1 className="title">Hello World</h1>
      <p className="description">A JavaScript Library for Building User interface</p>
      <p>{name.toLowerCase()}</p>
      {
        showImage ? (
          <img
            src="https://images.unsplash.com/photo-1598454444233-9dc334394ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"
            width={width}
            alt="Car"
            onClick={onClickImage}
          />
        ) : (
          <div></div>
        )
      }
      {
        listNumbers.map((element) => (
          <ul>
            <li>{element}</li>
          </ul>
        ))
      }
      <p>{copyright}</p>
    </div>
  );
};

export default HelloWorld;