// import React from 'react';
import './OrdersTable.css'; // You can create a separate CSS file for styling

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Date</th>
            <th>Total Sale</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'grey-row' : 'white-row'}>
              <td>{row.orderId}</td>
              <td>{row.date}</td>
              <td>{row.totalSale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
