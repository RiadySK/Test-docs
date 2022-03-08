import React, { ReactNode } from 'react';

interface TableProps {
  docs: {
    attribute: string,
    options: string[] | null,
    default: string | null,
    description: string,
  }[]
}

function TableInfo({
  docs,
}: TableProps) {
  const renderOptions = (opt: string[] | string): ReactNode => {
    const isArray = Array.isArray(opt);
    if (isArray) {
      return (
        <ul className="list-disc text-left text-grey-6 p-0 py-2 pl-6">
          {opt.map((item, idx) => <li key={`${item}-${idx}`}>{item}</li>)}
        </ul>
      );
    }

    return opt;
  };

  return (
    <table className="border-collapse w-full font-sans text-center text-grey-8">
      <thead>
        <tr className="bg-blue text-white">
          <th className="border border-grey-4 p-2 w-32">Attribute</th>
          <th className="border border-grey-4 p-2 w-32">Options</th>
          <th className="border border-grey-4 p-2 w-32">Default</th>
          <th className="border border-grey-4 p-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {
          docs.map((item, idx) => (
            <tr className={`text-md ${idx % 2 !== 0 && 'bg-grey-1'}`} key={`${item.attribute}-${idx}`}>
              <td className="border border-grey-4 p-1">{item.attribute}</td>
              <td className="border border-grey-4 p-1 text-xs">
                {item.options && renderOptions(item.options)}
              </td>
              <td className="border border-grey-4 p-1 text-xs">{item.default}</td>
              <td className="border border-grey-4 p-1 font-sans text-xs">{item.description}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default TableInfo;
