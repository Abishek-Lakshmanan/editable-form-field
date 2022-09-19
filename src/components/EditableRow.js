import React from 'react';

const EditableRow = ({
  handleEditFormChange,
  editFormData,
  setEditContactId,
}) => {
  return (
    <tr>
      <td>
        <input
          type='text'
          name='fullName'
          placeholder='Enter the name...'
          value={editFormData.fullName}
          onChange={handleEditFormChange}
          required
        />
      </td>
      <td>
        <input
          type='text'
          name='address'
          placeholder='Enter the address...'
          value={editFormData.address}
          onChange={handleEditFormChange}
          required
        />
      </td>
      <td>
        <input
          type='text'
          name='phoneNumber'
          placeholder='Enter the Phone number...'
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
          required
        />
      </td>
      <td>
        <input
          type='email'
          name='email'
          placeholder='Enter the email...'
          value={editFormData.email}
          onChange={handleEditFormChange}
          required
        />
      </td>
      <td>
        <button type='submit'>Save</button>
        <button type='button' onClick={() => setEditContactId(null)}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
