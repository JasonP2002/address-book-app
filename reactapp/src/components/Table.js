import React from 'react';
import JSONData from '../data/records.json';

function Table() {
    return (
        <table>
            <thead>
              <tr>
                <th>Forename</th>
                <th>Surname</th>
                <th>Telephone Number</th>
                <th>Email Address</th>
              </tr>
            </thead>
            <tbody>
              {JSONData.map((record, index) => {
                return <tr>
                  <td>{record.first_name}</td>
                  <td>{record.last_name}</td>
                  <td>{record.phone}</td>
                  <td>{record.email}</td>
                </tr>
              })}
            </tbody>
          </table>
    );
};
export default Table;