// Example of importing and using @tanstack/react-table components
import React from 'react';
import { useTable } from '@tanstack/react-table';

// Define your columns
const columns = [
  {
    Header: 'Column 1',
    accessor: 'column1',
  },
  {
    Header: 'Column 2',
    accessor: 'column2',
  },
];

const data = [
  { column1: 'Data 1', column2: 'Data A' },
  { column1: 'Data 2', column2: 'Data B' },
  // Add more data as needed
];

function MyTable() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default MyTable;
