import React from 'react';
import { Column, Table } from 'react-virtualized';
import { Link } from 'react-router-dom';
import 'react-virtualized/styles.css'; // only needs to be imported once

// Table data as a array of objects
const list = [
  { id: 1, name: 'Proces 1', description: 'jakiś opis', status: 'IDDLE', canBeRun: true, },
  { id: 2, name: 'Proces 2', description: 'jakiś opis', status: 'IDDLE', canBeRun: true, },
  { id: 3, name: 'Proces 3', description: 'jakiś opis', status: 'RUNNING', canBeRun: false, },
  { id: 4, name: 'Proces 4', description: 'jakiś opis', status: 'IDDLE', canBeRun: true, },
  // And so on...
];

function statusRenderer ({
  cellData,
  // columnData,
  // columnIndex,
  // dataKey,
  // isScrolling,
  // rowData,
  // rowIndex
}) {
  if (cellData === 'IDDLE') {
    return '---'
  } else {
    return 'XXX'
  }
}

function actionRenderer ({
  cellData, rowData,
}) {
  if (cellData === true) {
    return <Link to={`/SecondPage/${rowData.id}`}>run</Link>
  } else {
    return ''
  }
}

const FirstPage = () => {
  return (
    <Table
      width={600}
      height={300}
      headerHeight={20}
      rowHeight={30}
      rowCount={list.length}
      rowGetter={({ index }) => list[index]}
    >
      <Column
        label="Name"
        dataKey="name"
        width={300}
      />
      <Column
        label="Description"
        dataKey="description"
        width={500}
      />
      <Column
        label="status"
        dataKey="status"
        width={400}
        cellRenderer={statusRenderer}
      />
      <Column
        label="action"
        dataKey="canBeRun"
        width={400}
        cellRenderer={actionRenderer}
      />
    </Table>
  );
};

export default FirstPage;