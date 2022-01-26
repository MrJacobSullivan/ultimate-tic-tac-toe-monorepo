import * as React from 'react';
import { Button } from 'ui';

const HelloWorld = () => (
  <div>
    <h1>Hello</h1>
    <label htmlFor="name">
      <input type="text" id="name" name="name" />
      <Button />
    </label>
  </div>
);

export default HelloWorld;
