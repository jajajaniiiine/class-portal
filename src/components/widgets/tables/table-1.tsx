import React from "react";
import PropTypes from "prop-types";

const Table1 = (props: any) => {
  const { columns, rows } = props;
  return (
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          {columns.map((column: any) => (
            <th key={column.id} scope="col" className="px-6 py-4">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row: any) => (
          <tr
            key={row.id}
            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
          >
            {columns.map((column: any) => (
              <td key={column.id} className="whitespace-nowrap px-6 py-4">
                {row[column.key] || column?.render}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table1.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
};

export default Table1;
