import React, {useState, useEffect} from 'react';

function Table() {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    fetch("/api").then((res) => res.json())
                 .then((data) => setRecords(data));
  }, []);

    return (
        <table>
            <thead>
              <tr>
                <th>Email Address</th>
                <th>Forename</th>
                <th>Surname</th>
                <th>Telephone Number</th>
              </tr>
            </thead>
            <tbody>
              {!records ? "Could not get records :("
              : records.map((record, index) => {
                return <tr>
                  <td>{record.email}</td>
                  <td>{record.first_name}</td>
                  <td>{record.last_name}</td>
                  <td>{record.phone}</td>
                </tr>
              })}
            </tbody>
          </table>
    );
};
export default Table;