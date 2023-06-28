import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from './Redux/selector';
import css from './App.module.css';

const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.mainContainer}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {filteredContacts.length > 0 ? (
        <ContactList contacts={filteredContacts} />
      ) : (
        <p className={css.filterNoContacts}>No contacts found</p>
      )}
    </div>
  );
};

export default App;
