import { FC, ReactNode } from "react";

interface TableProps {
  headers: string[];
  data: string[][];
  classNameTd?: string;
  onClick?: (rowIndex: number) => void;
  selectedRowIndex?: number | null; 
  className?: string;
  classTable?: string;
}

const Table: FC<TableProps> = ({
  headers,
  data,
  classNameTd,
  onClick,
  selectedRowIndex,
  
  className,
  classTable,
}) => {
  interface DataCellProps {
    content: ReactNode;
    rowIndex: number;
  }

  const DataCell: FC<DataCellProps> = ({ content, rowIndex }) => (
    <td
      className={`px-6 py-4  whitespace-no-wrap border-b border-gray-200 cursor-pointer ${
        selectedRowIndex === rowIndex ? "bg-gray-300" : ""
      }`}
      onClick={() => onClick && onClick(rowIndex)} 
    >
      {content}
    </td>
  );

  return (
    <div className={`overflow-y-auto h-96 ${classTable}`}>
      <table className={`bg-white ${className}`}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={`header-${index}`}
                className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={classNameTd}>
              {row.map((cell, cellIndex) => (
                <DataCell key={cellIndex} content={cell} rowIndex={rowIndex} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
