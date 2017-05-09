import React from 'react';

import ExampleGrid from './ExampleGrid';
// Table data as a array of objects
const list = [
  { id: 1, name: 'Proces 1', description: 'jakiś opis', status: 'IDDLE', canBeRun: true, },
  { id: 2, name: 'Proces 2', description: 'jakiś opis', status: 'IDDLE', canBeRun: true, },
  { id: 3, name: 'Proces 3', description: 'jakiś opis', status: 'RUNNING', canBeRun: false, },
  { id: 4, name: 'Proces 4', description: 'jakiś opis', status: 'IDDLE', progress: 0.25, canBeRun: true, },
  // And so on...
];

const GridPage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '30px'
    }}>
      <ExampleGrid data={list} />
    </div>
  );
};

export default GridPage;