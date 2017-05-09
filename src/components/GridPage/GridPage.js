import React from 'react';

import ExampleGrid from './ExampleGrid';

class GridPage extends React.Component {
  constructor(props) {
    super(props);

    // Table data as a array of objects
    this.state = {
      data : [
        { id: 1, name: 'Proces 1', description: 'jakiś opis', status: 'IDDLE', canBeRun: true, },
        { id: 2, name: 'Proces 2', description: 'jakiś opis', status: 'IDDLE', canBeRun: true, },
        { id: 3, name: 'Proces 3', description: 'jakiś opis', status: 'RUNNING', canBeRun: false, },
        { id: 4, name: 'Proces 4', description: 'jakiś opis', status: 'IDDLE', progress: 25, canBeRun: true, },
        // And so on...
      ]
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => {
        const newState = prevState.data.map((d, i) => ({
            ...d,
            progress: ((prevState.data[i].progress || 0) + (Math.random() * 10)) % 100
          })
        );
        return {
          data: newState
        }
      })
    }, 1000)
  }
  

  render () {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '30px'
      }}>
        <ExampleGrid data={this.state.data} />
      </div>
    );
  }
};

export default GridPage;