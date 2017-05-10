import React from 'react';

import ExampleGrid from './ExampleGrid';

class GridPage extends React.Component {
  constructor(props) {
    super(props);

    // Table data as a array of objects
    this.state = {
      data : [
        { id: 1, name: 'Proces 1', description: 'jakiś opis', status: 'IDDLE', canBeRun: true, progress: 2, },
        { id: 2, name: 'Proces 2', description: 'jakiś opis', status: 'IDDLE', canBeRun: true, progress: 40, },
        { id: 3, name: 'Proces 3', description: 'jakiś opis', status: 'RUNNING', canBeRun: false, progress: 77, },
        { id: 4, name: 'Proces 4', description: 'jakiś opis', status: 'IDDLE', canBeRun: true, progress: 25, },
        // And so on...
      ]
    };
  }

  componentDidMount() {
    this.interval =setInterval(() => {
      this.setState((prevState) => {
        const newState = prevState.data.map((d, i) => ({
            ...d,
            progress: ((prevState.data[i].progress || 0) + (Math.random()*Math.random()*10)) % 100
          })
        );
        return {
          data: newState
        }
      })
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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