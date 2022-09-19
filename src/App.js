import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

import data from './mock-data.json';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

function App() {
  const [contacts, setContacts] = useState(data);

  const [addFormData, setAddFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const [editContactId, setEditContactId] = useState(null);

  function handleChange(e) {
    e.preventDefault();

    const { name, value } = e.target;
    setAddFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleEditFormChange(e) {
    e.preventDefault();

    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleAddForSubmit(e) {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];

    setContacts(newContacts);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newcontacts = [...contacts].map((contact) => {
      return editContactId === contact.id ? editedContact : contact;
    });

    setContacts(newcontacts);
    setEditContactId(null);
  }

  const handleEditClick = (event, data) => {
    event.preventDefault();
    setEditContactId(data.id);

    const formValues = {
      fullName: data.fullName,
      address: data.address,
      phoneNumber: data.phoneNumber,
      email: data.email,
    };

    setEditFormData(formValues);
  };

  function handleDeleteClick(e, data) {
    setContacts((prevData) => {
      const newdata = prevData.filter((ele) => ele.id !== data.id);
      return newdata;
    });
  }

  console.log(addFormData, contacts);

  const allData = contacts.map((data) => (
    <>
      {editContactId === data.id ? (
        <EditableRow
          editFormData={editFormData}
          handleEditFormChange={handleEditFormChange}
          setEditContactId={setEditContactId}
        />
      ) : (
        <ReadOnlyRow
          data={data}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      )}
    </>
  ));

  return (
    <div className='app-container'>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{allData}</tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={(e) => handleAddForSubmit(e)}>
        <input
          type='text'
          name='fullName'
          placeholder='Enter the name...'
          value={addFormData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='address'
          placeholder='Enter the address...'
          value={addFormData.address}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='phoneNumber'
          placeholder='Enter the Phone number...'
          value={addFormData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Enter the email...'
          value={addFormData.email}
          onChange={handleChange}
          required
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default App;
