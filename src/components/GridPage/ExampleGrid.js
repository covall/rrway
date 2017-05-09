import React from 'react';

import { Column, Table } from 'react-virtualized';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import 'react-virtualized/styles.css'; // only needs to be imported once

const ExpampleGrid = ({data}) => {
  return (
    <Table
      width={600}
      height={300}
      headerHeight={20}
      rowHeight={30}
      rowCount={data.length}
      rowGetter={({ index }) => data[index]}
    >
      <Column
        label="Name"
        dataKey="name"
        width={1}
        flexGrow={1}
      />
      <Column
        label="Description"
        dataKey="description"
        width={1}
        flexGrow={1}
      />
      <Column
        label="status"
        dataKey="status"
        width={1}
        cellRenderer={({ cellData }) => {
          if (cellData === 'IDDLE') {
              return '---'
            } else {
              return 'XXX'
            }
        }}
        flexGrow={1}
      />
      <Column
        label="postęp"
        dataKey="progress"
        width={1}
        cellRenderer={({ cellData }) => {
          // if (cellData === undefined) {
          //     return null;
          //   } else {
          //     return cellData;
          //   }
          return <ProgressBar progress={cellData} />
        }}
        flexGrow={1}
      />
      <Column
        label="action"
        dataKey="canBeRun"
        width={1}
        cellRenderer={({ cellData, rowData }) => {
          if (cellData === true) {
            return <Link to={`/FormPage/${rowData.id}`}>run</Link>
          } else {
            return <span style={{ opacity: 0.2 }}>run</span>
          }
        }}
        flexGrow={1}
      />
    </Table>
  );
};

export default ExpampleGrid;