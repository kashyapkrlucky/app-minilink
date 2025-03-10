/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'


const AppTable = ({ columns = [], data = [], sortable = false, filterable = false }) => {
    const [filteredData, setFilteredData] = useState(data);
    const [sortConfig, setSortConfig] = useState(null);
    const [filterText, setFilterText] = useState("");
  
    useEffect(() => {
      let sortedData = [...data];
      if (sortConfig !== null) {
        sortedData.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
          if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
          return 0;
        });
      }
      setFilteredData(
        sortedData.filter((item) =>
          Object.values(item).some((value) => value.toString().toLowerCase().includes(filterText.toLowerCase()))
        )
      );
    }, [data, sortConfig, filterText]);
  
    const handleSort = (key) => {
      if (!sortable) return;
      let direction = "asc";
      if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
        direction = "desc";
      }
      setSortConfig({ key, direction });
    };
  
    return (
      <div>
        {filterable && (
          <input
            type="text"
            placeholder="Filter..."
            className="border p-2 mb-2 w-full"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        )}
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="border p-2 text-left cursor-pointer"
                  onClick={() => handleSort(col.key)}
                >
                  {col.label} {sortable && sortConfig?.key === col.key ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index} className="border hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={col.key} className="border p-2">{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

export default AppTable