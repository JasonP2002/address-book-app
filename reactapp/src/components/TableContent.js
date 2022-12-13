import React from 'react';
import Table from './Table.js';

function TableContent() {
    return (
        <div className="content table">
            <h2 className="header-table">Table</h2>
                <Table />
            <button className="edit-input">Edit</button>
            <button className="delete-input">Delete</button>
        </div>
    );
};
export default TableContent;