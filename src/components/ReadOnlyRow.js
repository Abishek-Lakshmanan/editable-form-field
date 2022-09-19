import React from 'react';

const ReadOnlyRow = (props) => {
  const { data, handleEditClick, handleDeleteClick } = props;
  return (
    <tr key={data.id}>
      <td>{data.fullName}</td>
      <td>{data.address}</td>
      <td>{data.phoneNumber}</td>
      <td>{data.email}</td>
      <td>
        <button type='button' onClick={(e) => handleEditClick(e, data)}>
          Edit
        </button>
        <button type='button' onClick={(e) => handleDeleteClick(e, data)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
