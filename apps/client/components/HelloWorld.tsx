import * as React from 'react';

const HelloWorld = () => (
  <div>
    <h1>Hello</h1>
    <label htmlFor="name">
      <input type="text" id="name" name="name" />
      <button>Bloop</button>
    </label>
  </div>
);

export default HelloWorld;
