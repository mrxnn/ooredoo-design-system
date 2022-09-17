import React from 'react';
import * as ReactDOM from 'react-dom';
import { Filled } from '../stories/Button.stories';

describe('Filled', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Filled />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
