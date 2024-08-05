import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import SearchBox from './components/SearchBox/SearchBox'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import data from './data.json'


function App() {

  const [contacts, setContacts] = useState(() => {
    const contactValue = localStorage.getItem('contacts');
    if (contactValue) {
      return JSON.parse(contactValue);
    }
    return data
  });

  useEffect(() => {
   localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filterContact, setFilterContact] = useState('');

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilterContact(value)};

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );

  const addContact = (contact) => {
    const newContact = {
      ...contact,
      id: nanoid(),
    }
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  }

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox 
        value={filterContact} 
        handleFilter={handleFilter}
      />
      <ContactList data={visibleContacts} 
      deleteContact={deleteContact} />
    </>
  )
}

export default App