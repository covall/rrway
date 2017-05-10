import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import ProgressBar from './ProgressBar';


it('renders correctly', () => {
  const tree = renderer.create(
    <ProgressBar progress={25} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});